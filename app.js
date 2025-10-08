// PassMaster - Football Positioning Trainer
// Main application logic

let currentScenarioIndex = 0;
let score = 0;
let answered = false;
let shuffledScenarios = [];
let selectedOption = null;

// Shuffle array helper function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Save game state to localStorage
function saveGameState() {
    const gameState = {
        currentScenarioIndex,
        score,
        shuffledScenarioIds: shuffledScenarios.map(s => s.id),
        timestamp: Date.now()
    };
    localStorage.setItem('passMasterGameState', JSON.stringify(gameState));
}

// Load game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem('passMasterGameState');
    if (!savedState) return null;

    try {
        const gameState = JSON.parse(savedState);
        // Restore shuffled scenarios from saved IDs
        if (gameState.shuffledScenarioIds) {
            gameState.shuffledScenarios = gameState.shuffledScenarioIds.map(id =>
                scenarios.find(s => s.id === id)
            ).filter(s => s !== undefined);
        }
        return gameState;
    } catch (e) {
        console.error('Failed to load game state:', e);
        return null;
    }
}

// Clear game state from localStorage
function clearGameState() {
    localStorage.removeItem('passMasterGameState');
}

// Initialize the app
function init(resumeState = null) {
    if (resumeState) {
        // Resume from saved state
        currentScenarioIndex = resumeState.currentScenarioIndex;
        score = resumeState.score;
        shuffledScenarios = resumeState.shuffledScenarios;
    } else {
        // Start fresh
        currentScenarioIndex = 0;
        score = 0;
        shuffledScenarios = shuffleArray(scenarios);
        clearGameState();
    }

    answered = false;

    updateScoreDisplay();

    // Restore pitch column and options heading visibility
    document.querySelector('.pitch-column').style.display = 'flex';
    document.querySelector('.options-heading').style.display = 'block';

    // Reset next button text
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = 'Next';

    loadScenario(shuffledScenarios[currentScenarioIndex]);

    // Save initial state
    if (!resumeState) {
        saveGameState();
    }
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

    // Draw goals
    const goalWidth = 8;
    const goalHeight = 120;
    const goalX = side === 'left' ? 0 : width - goalWidth;
    const goalY = (height - goalHeight) / 2;

    const goal = createSVGElement('rect', {
        x: goalX,
        y: goalY,
        width: goalWidth,
        height: goalHeight,
        fill: '#fff',
        opacity: 0.9
    });
    svg.appendChild(goal);

    // Goal labels
    const labelX = side === 'left' ? 60 : width - 60;
    const labelY = 30;
    const labelText = side === 'left' ? '← DEFENDING' : 'ATTACKING →';

    const label = createSVGElement('text', {
        x: labelX,
        y: labelY,
        'text-anchor': 'middle',
        fill: '#fff',
        'font-size': '14',
        'font-weight': 'bold',
        opacity: 0.7
    });
    label.textContent = labelText;
    svg.appendChild(label);
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
    selectedOption = null;

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
        button.setAttribute('data-option-id', option.id);
        button.setAttribute('data-explanation', option.explanation);
        button.style.opacity = '0';
        button.style.animation = `slideInRight 0.5s ease-out ${0.4 + index * 0.1}s forwards`;

        // Create content wrapper
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'option-btn-content';

        // Create text span
        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = option.text;
        contentWrapper.appendChild(textSpan);

        button.appendChild(contentWrapper);

        // Only make the button clickable if not answered
        button.onclick = (e) => {
            // Don't trigger if clicking a child button
            if (e.target.classList.contains('why-btn')) {
                return;
            }
            selectOptionOnly(option.id);
        };

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

    // Set up submit button
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.classList.remove('hidden');
    submitBtn.disabled = true;
    submitBtn.onclick = () => submitAnswer(scenario.correctAnswer, shuffledOptions);

    // Hide feedback and next button
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
}

// Draw players on the pitch
function drawPlayers(players) {
    const svg = document.getElementById('pitch');

    players.forEach((player, index) => {
        // Create a group for each player
        const group = createSVGElement('g', {
            'data-player-id': player.id,
            'style': `opacity: 0; animation: fadeIn 0.5s ease-out ${0.1 + index * 0.08}s forwards;`
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

// Select an option (but don't submit yet)
function selectOptionOnly(optionId) {
    if (answered) return;

    selectedOption = optionId;

    // Remove previous selection styling
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selection styling to clicked button
    const selectedBtn = document.querySelector(`[data-option-id="${optionId}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }

    // Enable submit button
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = false;
}

// Submit the selected answer
function submitAnswer(correctId, allOptions) {
    if (answered || !selectedOption) return;

    selectAnswer(selectedOption, correctId, allOptions);
}

// Handle answer selection (after lock in)
function selectAnswer(selectedId, correctId, allOptions) {
    if (answered) return; // Prevent multiple answers
    answered = true;

    // Hide submit button
    document.getElementById('submit-btn').classList.add('hidden');

    // Remove focus from all buttons (prevents hover state on mobile)
    document.querySelectorAll('.option-btn').forEach(btn => btn.blur());

    const isCorrect = selectedId === correctId;

    // Update score
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }

    // Advance to next scenario index (so refresh doesn't show same question)
    currentScenarioIndex++;

    // Save state after answering
    saveGameState();

    // Hide the separate feedback section
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');

    // Process all options
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        const btnId = btn.getAttribute('data-option-id');

        // Add answered class to disable any hover/focus effects
        btn.classList.add('answered');

        // Find the matching option to get its explanation
        const matchingOption = allOptions.find(opt => opt.id == btnId);

        if (matchingOption) {
            // Add visual indicators based on the explanation quality markers
            if (matchingOption.explanation.startsWith('✓')) {
                btn.classList.add('correct-answer');
            } else if (matchingOption.explanation.startsWith('✗')) {
                btn.classList.add('incorrect-answer');
            } else if (matchingOption.explanation.startsWith('~') || matchingOption.explanation.startsWith('?')) {
                btn.classList.add('neutral-answer');
            }

            // Only expand the selected answer
            if (btnId == selectedId) {
                expandOption(btn, matchingOption, isCorrect);
            } else {
                // Add "Why?" button for other options
                addWhyButton(btn, matchingOption);
            }
        }
    });

    // Show next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = nextScenario;
}

// Expand an option to show its explanation
function expandOption(btn, matchingOption, isCorrect = null) {
    // Add result badge to top right if this is the selected answer
    if (isCorrect !== null) {
        const resultBadge = document.createElement('span');
        resultBadge.className = 'result-badge';
        resultBadge.textContent = isCorrect ? '✓ Correct' : '✗ Incorrect';
        resultBadge.classList.add(isCorrect ? 'correct' : 'incorrect');

        const contentWrapper = btn.querySelector('.option-btn-content');
        if (contentWrapper) {
            contentWrapper.appendChild(resultBadge);
        }
    }

    // Extract verdict and explanation (supports both ~ and ? for risky options)
    const verdictMatch = matchingOption.explanation.match(/^([✓✗~?])\s*([A-Z\s]+):\s*(.+)$/);
    let verdictBadge = null;
    let explanationText = matchingOption.explanation;

    if (verdictMatch) {
        const symbol = verdictMatch[1];
        const verdict = verdictMatch[2].trim();
        explanationText = verdictMatch[3];

        // Map verdicts to friendlier terms (with symbols)
        let displayText = `${symbol} ${verdict}`;

        if (verdict === 'POOR CHOICE') {
            displayText = `${symbol} NOT RECOMMENDED`;
        } else if (verdict === 'OKAY') {
            displayText = `${symbol} COULD WORK`;
        } else if (verdict === 'RISKY') {
            displayText = `${symbol} RISKY OPTION`;
        }

        // Create verdict badge
        verdictBadge = document.createElement('span');
        verdictBadge.className = 'verdict-badge';
        verdictBadge.textContent = displayText;

        // Add appropriate class based on symbol
        if (symbol === '✓') {
            verdictBadge.classList.add('best');
        } else if (symbol === '✗') {
            verdictBadge.classList.add('poor');
        } else if (symbol === '~' || symbol === '?') {
            verdictBadge.classList.add('risky');
        }
    }

    // Create expanded content for explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'option-explanation';

    // Add explanation text
    const textNode = document.createTextNode(explanationText);
    explanationDiv.appendChild(textNode);

    // Add verdict badge to bottom if exists
    if (verdictBadge) {
        explanationDiv.appendChild(document.createElement('br'));
        explanationDiv.appendChild(verdictBadge);
    }

    // Append explanation to button
    btn.appendChild(explanationDiv);
}

// Add "Why?" button to unexpanded options
function addWhyButton(btn, matchingOption) {
    const whyDiv = document.createElement('div');
    whyDiv.className = 'why-btn';
    whyDiv.textContent = 'Why?';

    // Add to the content wrapper
    const contentWrapper = btn.querySelector('.option-btn-content');
    if (contentWrapper) {
        contentWrapper.appendChild(whyDiv);
    }

    // Make the entire button clickable to expand
    btn.style.cursor = 'pointer';
    btn.onclick = () => {
        whyDiv.remove();
        expandOption(btn, matchingOption);
    };
}

// Move to next scenario
function nextScenario() {
    // Index already incremented in selectAnswer, just load next scenario
    if (currentScenarioIndex < shuffledScenarios.length) {
        loadScenario(shuffledScenarios[currentScenarioIndex]);
        saveGameState();
    } else {
        showFinalScore();
        clearGameState();
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

    // Change main-content to centered layout
    const gameContent = document.getElementById('game-content');
    gameContent.style.display = 'flex';
    gameContent.style.alignItems = 'center';
    gameContent.style.justifyContent = 'center';

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
    logo.style.opacity = '0';
    logo.style.animation = 'scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    optionsContainer.appendChild(logo);

    const title = document.createElement('h2');
    title.style.fontSize = '2em';
    title.style.color = '#333';
    title.style.marginBottom = '30px';
    title.textContent = percentage === 100 ? "Football Genius!" :
                        percentage >= 90 ? "Football Master!" :
                        percentage >= 80 ? "Adept Footballer!" :
                        "Promising Player!";
    title.style.opacity = '0';
    title.style.animation = 'fadeInUp 0.6s ease-out 0.3s forwards';
    optionsContainer.appendChild(title);

    // Create score card
    const scoreCard = document.createElement('div');
    scoreCard.className = 'score-card';
    scoreCard.style.opacity = '0';
    scoreCard.style.animation = 'fadeInUp 0.6s ease-out 0.5s forwards';
    scoreCard.innerHTML = `
        <div class="final-score">
            <div class="score-number">${score} / ${shuffledScenarios.length}</div>
            <div class="score-percentage">You scored ${percentage}%</div>
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
    nextBtn.textContent = 'Play Again';
    nextBtn.onclick = () => {
        // Reset game content layout
        gameContent.style.display = 'none';
        gameContent.style.alignItems = '';
        gameContent.style.justifyContent = '';

        // Reset options panel styling
        optionsPanel.style.display = 'flex';
        optionsPanel.style.alignItems = '';
        optionsPanel.style.justifyContent = '';
        optionsPanel.style.padding = '20px';
        optionsContainer.style.textAlign = '';
        optionsContainer.style.maxWidth = '';

        // Show start screen
        document.getElementById('start-screen').style.display = 'flex';
    };
    nextBtn.classList.remove('hidden');
}

// Update score display
function updateScoreDisplay() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;

    // Add pulse animation when score changes
    scoreElement.style.animation = 'none';
    setTimeout(() => {
        scoreElement.style.animation = 'pulse 0.4s ease-out';
    }, 10);
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
    // Always set up Play button
    document.getElementById('play-btn').addEventListener('click', startGame);

    // Check for saved game state on page load
    const savedState = loadGameState();

    if (savedState && savedState.currentScenarioIndex < savedState.shuffledScenarios.length) {
        // Auto-resume the game
        startGameUI();
        init(savedState);
        setupRestartButton();
    }
});

// Set up restart button
function setupRestartButton() {
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.onclick = () => {
        // Clear game state
        clearGameState();

        // Hide game content
        document.getElementById('game-content').style.display = 'none';
        document.getElementById('game-header').style.display = 'none';
        document.getElementById('score-panel').style.display = 'none';

        // Show start screen
        document.getElementById('start-screen').style.display = 'flex';
    };
}

function startGame() {
    // Start fresh game (saved state already checked on page load)
    startGameUI();
    init();
    setupRestartButton();
}

function startGameUI() {
    // Hide start screen
    document.getElementById('start-screen').style.display = 'none';

    // Show header and score panel
    const header = document.getElementById('game-header');
    const scorePanel = document.getElementById('score-panel');
    header.style.display = 'flex';
    scorePanel.style.display = 'flex';

    // Show game content with animation
    const gameContent = document.getElementById('game-content');
    gameContent.style.display = 'grid';
    gameContent.style.opacity = '0';
    gameContent.style.animation = 'fadeIn 0.6s ease-out forwards';
}
