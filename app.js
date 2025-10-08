// PassMaster - Football Positioning Trainer
// Main application logic

let currentScenarioIndex = 0;
let score = 0;
let answered = false;
let shuffledScenarios = [];

// Shuffle array helper function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the app
function init() {
    currentScenarioIndex = 0;
    score = 0;
    answered = false;

    // Shuffle scenarios at start
    shuffledScenarios = shuffleArray(scenarios);

    updateScoreDisplay();

    // Restore pitch column and options heading visibility
    document.querySelector('.pitch-column').style.display = 'flex';
    document.querySelector('.options-heading').style.display = 'block';

    // Reset next button text
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = 'Next Scenario';

    loadScenario(shuffledScenarios[currentScenarioIndex]);
}

// Draw the football pitch
function drawPitch() {
    const svg = document.getElementById('pitch');
    svg.innerHTML = ''; // Clear existing content

    const width = 800;
    const height = 600;

    // Pitch background
    const pitch = createSVGElement('rect', {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: '#2d5016',
        stroke: '#fff',
        'stroke-width': 3
    });
    svg.appendChild(pitch);

    // Center line
    const centerLine = createSVGElement('line', {
        x1: width / 2,
        y1: 0,
        x2: width / 2,
        y2: height,
        stroke: '#fff',
        'stroke-width': 2
    });
    svg.appendChild(centerLine);

    // Center circle
    const centerCircle = createSVGElement('circle', {
        cx: width / 2,
        cy: height / 2,
        r: 60,
        fill: 'none',
        stroke: '#fff',
        'stroke-width': 2
    });
    svg.appendChild(centerCircle);

    // Penalty areas
    drawPenaltyArea(svg, 0, width, height, 'left');
    drawPenaltyArea(svg, 0, width, height, 'right');
}

function drawPenaltyArea(svg, x, width, height, side) {
    const boxWidth = 120;
    const boxHeight = 300;
    const xPos = side === 'left' ? 0 : width - boxWidth;
    const yPos = (height - boxHeight) / 2;

    const box = createSVGElement('rect', {
        x: xPos,
        y: yPos,
        width: boxWidth,
        height: boxHeight,
        fill: 'none',
        stroke: '#fff',
        'stroke-width': 2
    });
    svg.appendChild(box);

    // Six-yard box
    const smallBoxWidth = 40;
    const smallBoxHeight = 150;
    const smallXPos = side === 'left' ? 0 : width - smallBoxWidth;
    const smallYPos = (height - smallBoxHeight) / 2;

    const smallBox = createSVGElement('rect', {
        x: smallXPos,
        y: smallYPos,
        width: smallBoxWidth,
        height: smallBoxHeight,
        fill: 'none',
        stroke: '#fff',
        'stroke-width': 2
    });
    svg.appendChild(smallBox);
}

function createSVGElement(type, attributes) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', type);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

// Load a scenario
function loadScenario(scenario) {
    answered = false;

    // Update scenario counter
    document.getElementById('current').textContent = currentScenarioIndex + 1;
    document.getElementById('total').textContent = shuffledScenarios.length;

    // Reset options heading
    const optionsHeading = document.querySelector('.options-heading');
    if (optionsHeading) {
        optionsHeading.textContent = 'Choose your answer';
    }

    // Draw pitch and players
    drawPitch();
    drawPlayers(scenario.players);

    // Update question panel
    document.getElementById('question-title').textContent = scenario.title;
    document.getElementById('question-text').textContent = scenario.description + ' ' + scenario.question;

    // Clear and create options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // Shuffle options for this scenario
    const shuffledOptions = shuffleArray(scenario.options);

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.setAttribute('data-option-id', option.id);
        button.setAttribute('data-explanation', option.explanation);
        button.onclick = () => selectAnswer(option.id, scenario.correctAnswer, scenario.explanation, shuffledOptions);

        // Add hover effect to highlight player on pitch (only before answering)
        button.addEventListener('mouseenter', () => {
            if (!answered) {
                highlightPlayer(option.id, scenario.players);
            }
        });
        button.addEventListener('mouseleave', () => {
            if (!answered) {
                clearHighlight();
            }
        });

        optionsContainer.appendChild(button);
    });

    // Hide feedback and next button
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
}

// Draw players on the pitch
function drawPlayers(players) {
    const svg = document.getElementById('pitch');

    players.forEach(player => {
        // Create a group for each player
        const group = createSVGElement('g', {
            'data-player-id': player.id
        });

        // Special styling for the current player (you)
        const isCurrentPlayer = player.name.toLowerCase().includes('you');

        // Add glow effect for current player
        if (isCurrentPlayer) {
            const glowCircle = createSVGElement('circle', {
                cx: player.x,
                cy: player.y,
                r: 35,
                fill: 'none',
                stroke: '#ffd700',
                'stroke-width': 3,
                opacity: 0.6
            });

            // Add pulsing animation to glow
            const pulseAnim = createSVGElement('animate', {
                attributeName: 'r',
                values: '35;40;35',
                dur: '2s',
                repeatCount: 'indefinite'
            });
            glowCircle.appendChild(pulseAnim);

            const opacityAnim = createSVGElement('animate', {
                attributeName: 'opacity',
                values: '0.6;0.3;0.6',
                dur: '2s',
                repeatCount: 'indefinite'
            });
            glowCircle.appendChild(opacityAnim);

            group.appendChild(glowCircle);
        }

        // Draw player circle
        const color = player.team === 'own' ? '#1e90ff' : '#ff4444';
        const circle = createSVGElement('circle', {
            cx: player.x,
            cy: player.y,
            r: isCurrentPlayer ? 24 : 20,
            fill: color,
            stroke: isCurrentPlayer ? '#ffd700' : '#fff',
            'stroke-width': isCurrentPlayer ? 4 : 2,
            class: 'player'
        });
        group.appendChild(circle);

        // Draw ball if player has it
        if (player.hasBall) {
            // Different ball color for "You" vs teammate vs opponent
            const ballColor = isCurrentPlayer ? '#ffd700' : (player.team === 'own' ? '#32CD32' : '#ff4444');

            // Ball position depends on team direction (opponents run left, own team runs right)
            const ballXOffset = player.team === 'opponent' ? -25 : 25;

            const ball = createSVGElement('circle', {
                cx: player.x + ballXOffset,
                cy: player.y - 25,
                r: 8,
                fill: ballColor,
                stroke: '#000',
                'stroke-width': 2
            });
            group.appendChild(ball);
        }

        // Draw player label
        const text = createSVGElement('text', {
            x: player.x,
            y: player.y + 45,
            'text-anchor': 'middle',
            fill: isCurrentPlayer ? '#ffd700' : '#fff',
            'font-size': isCurrentPlayer ? '14' : '12',
            'font-weight': 'bold'
        });
        text.textContent = player.name;
        group.appendChild(text);

        // Visual indicators for pressing/marking
        if (player.isPressing) {
            const arrow = createSVGElement('polygon', {
                points: `${player.x-10},${player.y-30} ${player.x+10},${player.y-30} ${player.x},${player.y-15}`,
                fill: '#ffaa00',
                stroke: '#000',
                'stroke-width': 1
            });
            group.appendChild(arrow);
        }

        svg.appendChild(group);
    });
}

// Handle answer selection
function selectAnswer(selectedId, correctId, explanation, allOptions) {
    if (answered) return; // Prevent multiple answers
    answered = true;

    const isCorrect = selectedId === correctId;

    // Update score
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }

    // Hide the separate feedback section
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');

    // Expand all options to show explanations
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        const btnId = btn.getAttribute('data-option-id');

        // Find the matching option to get its explanation
        const matchingOption = allOptions.find(opt => opt.id == btnId);

        if (matchingOption) {
            // Create expanded content
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'option-explanation';

            // If this is the selected answer, add the result indicator
            if (btnId == selectedId) {
                // Add result badge to the button itself
                const resultBadge = document.createElement('span');
                resultBadge.className = 'result-badge';
                resultBadge.textContent = isCorrect ? '✓' : '✗';
                btn.appendChild(resultBadge);

                // Add explanation text
                explanationDiv.textContent = matchingOption.explanation;

                // Add overall explanation if answer was wrong
                if (!isCorrect) {
                    const overallExplanation = document.createElement('div');
                    overallExplanation.className = 'overall-explanation';
                    overallExplanation.textContent = explanation;
                    explanationDiv.appendChild(overallExplanation);
                }
            } else {
                explanationDiv.textContent = matchingOption.explanation;
            }

            // Add visual indicators based on the explanation quality markers
            if (matchingOption.explanation.startsWith('✓')) {
                btn.classList.add('correct-answer');
            } else if (matchingOption.explanation.startsWith('✗')) {
                btn.classList.add('incorrect-answer');
            } else if (matchingOption.explanation.startsWith('~')) {
                btn.classList.add('neutral-answer');
            }

            // Append explanation to button
            btn.appendChild(explanationDiv);
        }
    });

    // Show next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = nextScenario;
}

// Move to next scenario
function nextScenario() {
    currentScenarioIndex++;

    if (currentScenarioIndex < shuffledScenarios.length) {
        loadScenario(shuffledScenarios[currentScenarioIndex]);
    } else {
        showFinalScore();
    }
}

// Show final score
function showFinalScore() {
    const percentage = Math.round((score / shuffledScenarios.length) * 100);

    // Hide header and score panel
    document.getElementById('game-header').style.display = 'none';
    document.getElementById('score-panel').style.display = 'none';

    // Hide the pitch column
    document.querySelector('.pitch-column').style.display = 'none';

    // Style the options panel like the start screen
    const optionsPanel = document.querySelector('.options-panel');
    optionsPanel.style.display = 'flex';
    optionsPanel.style.alignItems = 'center';
    optionsPanel.style.justifyContent = 'center';
    optionsPanel.style.padding = '20px';

    // Hide options heading
    document.querySelector('.options-heading').style.display = 'none';

    // Add completion message to options panel
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    optionsContainer.style.textAlign = 'center';
    optionsContainer.style.maxWidth = '500px';

    // Create logo and title (matching start screen)
    const logo = document.createElement('div');
    logo.className = 'start-icon';
    logo.textContent = '⚽';
    logo.style.marginBottom = '20px';
    optionsContainer.appendChild(logo);

    const title = document.createElement('h2');
    title.style.fontSize = '2em';
    title.style.color = '#333';
    title.style.marginBottom = '30px';
    title.textContent = 'PassMaster';
    optionsContainer.appendChild(title);

    // Create score card
    const scoreCard = document.createElement('div');
    scoreCard.className = 'score-card';
    scoreCard.innerHTML = `
        <div class="final-score">
            <div class="score-number">${score} / ${shuffledScenarios.length}</div>
            <div class="score-percentage">${percentage}%</div>
        </div>
        <div class="score-message ${percentage >= 70 ? 'success' : 'needs-work'}">
            <h3>${percentage >= 70 ? 'Great job!' : 'Keep practicing!'}</h3>
            <p>${
                percentage >= 90 ? 'Excellent football IQ!' :
                percentage >= 70 ? 'Good understanding of positioning!' :
                percentage >= 50 ? 'You\'re getting there!' :
                'Review the scenarios and try again!'
            }</p>
        </div>
    `;
    optionsContainer.appendChild(scoreCard);

    // Hide regular feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');

    // Update next button to be restart button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = 'Start Again';
    nextBtn.onclick = () => {
        // Reset options panel styling
        optionsPanel.style.display = 'flex';
        optionsPanel.style.alignItems = '';
        optionsPanel.style.justifyContent = '';
        optionsPanel.style.padding = '20px';
        optionsContainer.style.textAlign = '';
        optionsContainer.style.maxWidth = '';

        // Hide game content
        document.getElementById('game-content').style.display = 'none';

        // Show start screen
        document.getElementById('start-screen').style.display = 'flex';
    };
    nextBtn.classList.remove('hidden');
}

// Update score display
function updateScoreDisplay() {
    document.getElementById('score').textContent = score;
}

// Highlight player when hovering over option
function highlightPlayer(playerId, players) {
    const player = players.find(p => p.id === playerId);
    if (!player) return;

    const playerGroup = document.querySelector(`g[data-player-id="${playerId}"]`);
    if (!playerGroup) return;

    // Add highlight circle around the player
    const circle = playerGroup.querySelector('.player');
    if (circle) {
        const highlightCircle = createSVGElement('circle', {
            cx: circle.getAttribute('cx'),
            cy: circle.getAttribute('cy'),
            r: 30,
            fill: 'none',
            stroke: '#ffff00',
            'stroke-width': 4,
            class: 'highlight-ring'
        });

        // Add pulsing animation
        const animate = createSVGElement('animate', {
            attributeName: 'r',
            values: '30;35;30',
            dur: '1s',
            repeatCount: 'indefinite'
        });
        highlightCircle.appendChild(animate);

        const animateOpacity = createSVGElement('animate', {
            attributeName: 'stroke-opacity',
            values: '1;0.5;1',
            dur: '1s',
            repeatCount: 'indefinite'
        });
        highlightCircle.appendChild(animateOpacity);

        playerGroup.insertBefore(highlightCircle, playerGroup.firstChild);
    }
}

// Clear highlight from players
function clearHighlight() {
    const highlights = document.querySelectorAll('.highlight-ring');
    highlights.forEach(highlight => highlight.remove());
}

// Start the app when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Set up Play button
    document.getElementById('play-btn').addEventListener('click', startGame);
});

function startGame() {
    // Hide start screen
    document.getElementById('start-screen').style.display = 'none';

    // Show header and score panel
    document.getElementById('game-header').style.display = 'flex';
    document.getElementById('score-panel').style.display = 'flex';

    // Show game content
    document.getElementById('game-content').style.display = 'grid';

    // Initialize the game
    init();
}
