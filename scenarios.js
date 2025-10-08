// Define your scenarios here
// Each scenario has players positioned on the pitch and a question with multiple choice answers

const scenarios = [
    {
        id: 1,
        title: "Building from the back",
        question: "You're the centre-back with the ball. Where should you pass?",
        description: "The goalkeeper has passed to you. Look for the best option.",
        players: [
            { id: 1, name: "You (CB)", x: 100, y: 300, team: "own", hasBall: true },
            { id: 2, name: "LB", x: 150, y: 150, team: "own" },
            { id: 3, name: "RB", x: 150, y: 450, team: "own" },
            { id: 4, name: "CDM", x: 300, y: 300, team: "own" },
            { id: 5, name: "CM", x: 400, y: 200, team: "own" },
            { id: 6, name: "Opponent", x: 250, y: 300, team: "opponent", isMarking: 4 },
            { id: 7, name: "Opponent", x: 350, y: 250, team: "opponent" }
        ],
        options: [
            { id: 2, text: "Pass to Left Back (LB)", explanation: "✓ BEST CHOICE: The Left Back is in space and unmarked, giving them time to receive and play forward." },
            { id: 4, text: "Pass to Central Defensive Midfielder (CDM)", explanation: "✗ RISKY: The CDM is being closely marked by an opponent, making this pass dangerous and likely to be intercepted." },
            { id: 5, text: "Pass to Centre Midfielder (CM)", explanation: "~ OKAY: The CM is available but there's an opponent nearby. Not as safe as the LB option." }
        ],
        correctAnswer: 2,
        explanation: "The Left Back is in space and unmarked. The CDM is being closely marked by an opponent, making it a risky pass."
    },
    {
        id: 2,
        title: "Breaking the press",
        question: "The opposition is pressing high. What's your best move?",
        description: "You're the defensive midfielder receiving the ball under pressure.",
        players: [
            { id: 1, name: "CB", x: 100, y: 300, team: "own" },
            { id: 2, name: "You (CDM)", x: 200, y: 300, team: "own", hasBall: true },
            { id: 3, name: "CM Right", x: 350, y: 400, team: "own" },
            { id: 4, name: "Winger", x: 500, y: 150, team: "own" },
            { id: 5, name: "Striker", x: 600, y: 300, team: "own" },
            { id: 6, name: "Opponent", x: 250, y: 280, team: "opponent", isPressing: true },
            { id: 7, name: "Opponent", x: 400, y: 200, team: "opponent" },
            { id: 8, name: "Opponent", x: 450, y: 350, team: "opponent" }
        ],
        options: [
            { id: "dribble", text: "Try to dribble past the pressing opponent", explanation: "✗ VERY DANGEROUS: If you lose the ball here, the opponent is straight through on goal! Never try to beat players when pressed near your own goal." },
            { id: 3, text: "Pass to CM on the right", explanation: "✓ BEST CHOICE: The CM is in space away from the press, allowing your team to progress the ball while avoiding pressure." },
            { id: 1, text: "Pass back to Centre Back", explanation: "~ OKAY: Safe but invites more pressure. Not ideal but better than losing the ball trying to dribble." }
        ],
        correctAnswer: 3,
        explanation: "The CM on the right is in space away from the press. This allows your team to progress the ball while avoiding the pressure."
    },
    {
        id: 3,
        title: "Wing play",
        question: "What should you do?",
        description: "You've beaten the fullback and he's behind you. You have space ahead on the wing.",
        players: [
            { id: 1, name: "You (Winger)", x: 450, y: 100, team: "own", hasBall: true },
            { id: 2, name: "Fullback", x: 350, y: 200, team: "own" },
            { id: 3, name: "Striker", x: 680, y: 270, team: "own" },
            { id: 4, name: "Attacking Mid", x: 500, y: 300, team: "own" },
            { id: 5, name: "Far Winger", x: 450, y: 500, team: "own" },
            { id: 6, name: "Opponent FB", x: 400, y: 150, team: "opponent", isApproaching: true },
            { id: 7, name: "Opponent CB", x: 620, y: 280, team: "opponent" }
        ],
        options: [
            { id: 1, text: "Continue running down the wing", explanation: "✓ BEST CHOICE: You have space ahead and the defender is behind you. Use your momentum to get into a dangerous crossing position." },
            { id: 3, text: "Pass to Striker", explanation: "✗ POOR CHOICE: The striker is marked tightly by the centre back. This pass will likely be intercepted." },
            { id: 4, text: "Pass inside to Attacking Midfielder", explanation: "~ OKAY: Safe option but slows the attack. You've beaten your man, so be more positive and exploit the space!" }
        ],
        correctAnswer: 1,
        explanation: "You have space to run into and can attack the defender. The striker is marked, and passing inside would slow the attack."
    },
    {
        id: 4,
        title: "Counter attack opportunity",
        question: "Where should you move?",
        description: "You're a striker and your team has just intercepted the ball in midfield.",
        players: [
            { id: 1, name: "CDM", x: 300, y: 300, team: "own", hasBall: true },
            { id: 2, name: "You (Striker)", x: 500, y: 350, team: "own" },
            { id: 3, name: "Winger", x: 400, y: 150, team: "own" },
            { id: 4, name: "Opponent CB", x: 650, y: 250, team: "opponent" },
            { id: 5, name: "Opponent CB", x: 650, y: 350, team: "opponent" }
        ],
        options: [
            { id: "move1", text: "Run straight towards goal", explanation: "~ OKAY: Shows attacking intent but allows defenders to track you easily. Not as clever as splitting the defence." },
            { id: "move2", text: "Move into the space between the two centre backs", explanation: "✓ BEST CHOICE: Creates uncertainty about who marks you and opens passing lanes. Perfect striker movement for a counter attack." },
            { id: "move3", text: "Run towards the player with the ball", explanation: "✗ POOR CHOICE: Never run towards your own teammate with the ball. This takes away their passing option and clogs up space." }
        ],
        correctAnswer: "move2",
        explanation: "Running between the centre backs creates uncertainty about who should mark you and opens passing lanes. This is perfect for a counter attack."
    },
    {
        id: 5,
        title: "Goal kick",
        question: "You're taking a goal kick. Where should you pass?",
        description: "The opposition is crowding the middle of the pitch. Look for the open player.",
        players: [
            { id: 1, name: "You (GK)", x: 50, y: 300, team: "own", hasBall: true },
            { id: 2, name: "RB", x: 150, y: 450, team: "own" },
            { id: 3, name: "LB", x: 150, y: 150, team: "own" },
            { id: 4, name: "CB", x: 120, y: 300, team: "own" },
            { id: 5, name: "CDM", x: 250, y: 300, team: "own" },
            { id: 6, name: "Opponent", x: 200, y: 280, team: "opponent" },
            { id: 7, name: "Opponent", x: 220, y: 320, team: "opponent" },
            { id: 8, name: "Opponent", x: 280, y: 300, team: "opponent" },
            { id: 9, name: "Opponent", x: 300, y: 270, team: "opponent" }
        ],
        options: [
            { id: 3, text: "Pass to Left Back (LB)", explanation: "✓ BEST CHOICE: The Left Back is in space and unmarked. Playing wide avoids the crowded middle and keeps possession safe." },
            { id: 4, text: "Pass to Centre Back (CB)", explanation: "~ OKAY: Safe and close, but puts your teammate under immediate pressure from opponents nearby. Not the best option." },
            { id: 5, text: "Pass to Defensive Midfielder (CDM)", explanation: "✗ POOR CHOICE: Never pass into a crowded area! The CDM is surrounded by opponents and will likely lose the ball." }
        ],
        correctAnswer: 3,
        explanation: "Always look to play wide when the middle is crowded. The Left Back has space and time to receive safely. Avoid passing into congested areas where opponents can win the ball easily."
    },
    {
        id: 6,
        title: "Defending under pressure",
        question: "You're a fullback with the ball near your goal. Where should you pass?",
        description: "An opponent is pressing you. You need to get the ball away safely.",
        players: [
            { id: 1, name: "You (RB)", x: 180, y: 150, team: "own", hasBall: true },
            { id: 2, name: "CB", x: 150, y: 280, team: "own" },
            { id: 3, name: "LB", x: 180, y: 450, team: "own" },
            { id: 4, name: "Winger", x: 350, y: 100, team: "own" },
            { id: 5, name: "Midfielder", x: 300, y: 250, team: "own" },
            { id: 6, name: "Opponent", x: 220, y: 180, team: "opponent", isPressing: true },
            { id: 7, name: "Opponent", x: 280, y: 300, team: "opponent" }
        ],
        options: [
            { id: 4, text: "Pass down the line to Winger", explanation: "✓ BEST CHOICE: Playing down the line is safe. If the pass is intercepted, the opponent is far from your goal. Always play forwards when under pressure." },
            { id: 3, text: "Pass across goal to Left Back", explanation: "✗ VERY DANGEROUS: Never pass across your own goal! If intercepted, the opponent has an easy chance to score." },
            { id: 5, text: "Pass inside to Midfielder", explanation: "~ RISKY: This pass goes towards your own goal and near opponents. Not as dangerous as across goal, but not the safest option." }
        ],
        correctAnswer: 4,
        explanation: "When under pressure near your goal, always pass down the line (up the touchline) rather than across the goal. If the pass is cut out, the ball is far from your goal and safe."
    },
    {
        id: 7,
        title: "Winning the ball back",
        question: "What should you do?",
        description: "You're a centre back who has just intercepted a pass in your box. Attackers are nearby.",
        players: [
            { id: 1, name: "You (CB)", x: 120, y: 280, team: "own", hasBall: true },
            { id: 2, name: "GK", x: 50, y: 300, team: "own" },
            { id: 3, name: "LB", x: 180, y: 200, team: "own" },
            { id: 4, name: "CDM", x: 250, y: 300, team: "own" },
            { id: 5, name: "Opponent", x: 150, y: 250, team: "opponent" },
            { id: 6, name: "Opponent", x: 160, y: 320, team: "opponent" },
            { id: 7, name: "Opponent", x: 200, y: 280, team: "opponent", isPressing: true }
        ],
        options: [
            { id: "clear", text: "Clear the ball upfield", explanation: "✓ BEST CHOICE: When in doubt, get it out! Clearing the ball removes the danger immediately. You can win it back later in a safer area." },
            { id: "dribble", text: "Dribble past the nearest opponent", explanation: "✗ VERY RISKY: Never try to dribble in your own box! If you lose the ball, the opponent has a clear chance to score." },
            { id: 4, text: "Pass to Defensive Midfielder", explanation: "~ RISKY: The CDM is marked and this keeps the ball in a dangerous area. Better to clear when under pressure near your goal." }
        ],
        correctAnswer: "clear",
        explanation: "When you win the ball in a dangerous area with opponents nearby, the safest decision is to clear it. Get the ball away from danger first - you can build an attack later when you're in a safer position."
    },
    {
        id: 8,
        title: "Defending the wing",
        question: "What should you do?",
        description: "You're the fullback. An opponent is dribbling down the wing towards you with pace.",
        players: [
            { id: 1, name: "Opponent", x: 250, y: 160, team: "opponent", hasBall: true },
            { id: 2, name: "You (RB)", x: 200, y: 180, team: "own" },
            { id: 3, name: "CB", x: 150, y: 280, team: "own" },
            { id: 4, name: "GK", x: 50, y: 300, team: "own" },
            { id: 5, name: "CDM", x: 280, y: 300, team: "own" },
            { id: 6, name: "Opponent", x: 400, y: 250, team: "opponent" }
        ],
        options: [
            { id: "clear", text: "Clear the ball over the sideline", explanation: "✓ BEST CHOICE: Put the ball out for a throw-in. This stops their attack safely and gives your team time to organize. Much better than risking being beaten." },
            { id: "skill", text: "Try to trap the ball and skill them", explanation: "✗ VERY RISKY: The opponent has momentum and is running at pace. If you fail, they're through on goal. Don't be a hero in defence!" },
            { id: "backoff", text: "Back off and delay them", explanation: "~ OKAY: Slowing them down is good, but they still have the ball. Putting it out is safer and stops the attack completely." }
        ],
        correctAnswer: "clear",
        explanation: "When an opponent is running at you with the ball, the smart defensive play is to clear it over the sideline. This stops their attack and gives your team a chance to reset. Don't try risky skills in your own half!"
    },
    {
        id: 9,
        title: "Lost possession",
        question: "What should you do?",
        description: "You've just lost the ball in midfield and the opponent is running towards your goal.",
        players: [
            { id: 1, name: "You (CM)", x: 380, y: 280, team: "own" },
            { id: 2, name: "Opponent", x: 280, y: 300, team: "opponent", hasBall: true },
            { id: 3, name: "CB", x: 180, y: 280, team: "own" },
            { id: 4, name: "CB", x: 180, y: 320, team: "own" },
            { id: 5, name: "GK", x: 50, y: 300, team: "own" },
            { id: 6, name: "Opponent", x: 500, y: 250, team: "opponent" },
            { id: 7, name: "Opponent", x: 520, y: 350, team: "opponent" }
        ],
        options: [
            { id: "chase", text: "Sprint back and win the ball", explanation: "✓ BEST CHOICE: Always work hard to fix your mistake! Chase back immediately and try to win the ball or slow down the attack. Show your team you care!" },
            { id: "waitspace", text: "Move into space and wait for teammates to win the ball back", explanation: "✗ POOR CHOICE: Don't just wait! Your mistake created this danger, so YOU need to help fix it. Sprint back and help your team defend!" },
            { id: "jog", text: "Jog back slowly", explanation: "✗ NOT ENOUGH: Your mistake created the danger, so you must sprint back. Jogging won't help - give 100% effort to help your team!" }
        ],
        correctAnswer: "chase",
        explanation: "If you lose the ball, immediately sprint back to help defend! Everyone makes mistakes, but champions work hard to fix them. Chase the opponent, pressure them, and help your teammates stop the attack."
    },
    {
        id: 10,
        title: "One on one chance",
        question: "You've beaten the defender down the wing. No teammates are near. What should you do?",
        description: "You're the winger with the ball. You're close to the box but at a wide angle.",
        players: [
            { id: 1, name: "You (Winger)", x: 600, y: 175, team: "own", hasBall: true },
            { id: 2, name: "GK", x: 750, y: 300, team: "opponent" },
            { id: 3, name: "Opponent CB", x: 650, y: 280, team: "opponent" },
            { id: 4, name: "Opponent CB", x: 680, y: 320, team: "opponent" },
            { id: 5, name: "Teammate", x: 400, y: 300, team: "own" }
        ],
        options: [
            { id: "cutinside", text: "Cut inside and shoot at goal", explanation: "✓ BEST CHOICE: Cutting inside gets you to a better shooting angle in front of goal. This gives you the best chance to score when you're on your own." },
            { id: "keeprunning", text: "Keep running to the byline", explanation: "✗ POOR CHOICE: Running to the byline takes you too wide. The angle becomes impossible to score from and you have no one to cross to." },
            { id: "shootwide", text: "Shoot from the wide angle now", explanation: "✗ POOR CHOICE: Shooting from this angle is very difficult. The goalkeeper will easily save it. Cut inside first to get a better angle!" }
        ],
        correctAnswer: "cutinside",
        explanation: "When you're one-on-one with no support, cut inside towards goal to improve your shooting angle. Don't run to the corner or shoot from an impossible angle - get in front of goal for the best chance to score!"
    }
];
