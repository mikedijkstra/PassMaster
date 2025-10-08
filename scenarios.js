// Define your scenarios here
// Each scenario has players positioned on the pitch and a question with multiple choice answers

const scenarios = [
  {
    id: 1,
    title: "Building from the back",
    question: "You're the centre-back with the ball. What should you do?",
    description: "The goalkeeper has passed to you. Look for the best option.",
    players: [
      { id: 1, name: "You (CB)", x: 100, y: 220, team: "own", hasBall: true },
      { id: 2, name: "LB", x: 200, y: 80, team: "own" },
      { id: 3, name: "RB", x: 150, y: 450, team: "own" },
      { id: 4, name: "CDM", x: 300, y: 300, team: "own" },
      { id: 5, name: "CM", x: 400, y: 200, team: "own" },
      {
        id: 6,
        name: "Opponent",
        x: 230,
        y: 300,
        team: "opponent",
        isMarking: 4,
      },
      { id: 7, name: "Opponent", x: 200, y: 200, team: "opponent" },
    ],
    options: [
      {
        id: 2,
        text: "Move left and pass up the line to Left Back",
        explanation:
          "✓ BEST CHOICE: Moving towards the sideline creates a safe passing angle to the LB who is in space. Playing up the line is safe and progressive.",
      },
      {
        id: "middle",
        text: "Try to dribble up the middle",
        explanation:
          "✗ POOR CHOICE: Running into the middle where opponents are positioned is risky. You could easily lose the ball in a dangerous area.",
      },
      {
        id: 3,
        text: "Run across and pass to Right Back",
        explanation:
          "✗ VERY DANGEROUS: Never run across your own goal! If you lose the ball while running across, the opponent has an easy chance to score.",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    title: "Breaking the press",
    question: "The opposition is pressing high. What's your best move?",
    description:
      "You're the defensive midfielder receiving the ball under pressure.",
    players: [
      { id: 1, name: "CB", x: 100, y: 300, team: "own" },
      { id: 2, name: "You (CDM)", x: 200, y: 300, team: "own", hasBall: true },
      { id: 3, name: "CM Right", x: 350, y: 400, team: "own" },
      { id: 4, name: "Winger", x: 500, y: 150, team: "own" },
      { id: 5, name: "Striker", x: 600, y: 300, team: "own" },
      {
        id: 6,
        name: "Opponent",
        x: 270,
        y: 280,
        team: "opponent",
        isPressing: true,
      },
      { id: 7, name: "Opponent", x: 400, y: 200, team: "opponent" },
      { id: 8, name: "Opponent", x: 450, y: 350, team: "opponent" },
    ],
    options: [
      {
        id: "dribble",
        text: "Try to dribble past the pressing opponent",
        explanation:
          "✗ VERY DANGEROUS: If you lose the ball here, the opponent is straight through on goal! Never try to beat players when pressed near your own goal.",
      },
      {
        id: 3,
        text: "Cut back and pass to CM on the right",
        explanation:
          "✓ BEST CHOICE: The CM is in space away from the press, allowing your team to progress the ball while avoiding pressure.",
      },
      {
        id: 1,
        text: "Pass back to Centre Back",
        explanation:
          "? OKAY: Safe but invites more pressure. Not ideal but better than losing the ball trying to dribble.",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    title: "Wing play",
    question: "What should you do?",
    description:
      "You've beaten the fullback and he's behind you. You have space ahead on the wing.",
    players: [
      {
        id: 1,
        name: "You (Winger)",
        x: 450,
        y: 100,
        team: "own",
        hasBall: true,
      },
      { id: 2, name: "Fullback", x: 350, y: 200, team: "own" },
      { id: 3, name: "Striker", x: 680, y: 270, team: "own" },
      { id: 4, name: "Attacking Mid", x: 500, y: 300, team: "own" },
      { id: 5, name: "Far Winger", x: 450, y: 500, team: "own" },
      {
        id: 6,
        name: "Opponent FB",
        x: 400,
        y: 150,
        team: "opponent",
        isApproaching: true,
      },
      { id: 7, name: "Opponent CB", x: 620, y: 280, team: "opponent" },
    ],
    options: [
      {
        id: 1,
        text: "Continue running down the wing",
        explanation:
          "✓ BEST CHOICE: You have space ahead and the defender is behind you. Use your momentum to get into a dangerous crossing position.",
      },
      {
        id: 3,
        text: "Pass to Striker",
        explanation:
          "✗ POOR CHOICE: The striker is marked tightly by the centre back. This pass will likely be intercepted.",
      },
      {
        id: 4,
        text: "Pass inside to Attacking Midfielder",
        explanation:
          "? OKAY: Safe option but slows the attack. You've beaten your man, so be more positive and exploit the space!",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    title: "Counter attack opportunity",
    question: "Where should you move?",
    description:
      "You're a striker and your team has just intercepted the ball in midfield.",
    players: [
      { id: 1, name: "CDM", x: 300, y: 300, team: "own", hasBall: true },
      { id: 2, name: "You (Striker)", x: 500, y: 350, team: "own" },
      { id: 3, name: "Winger", x: 400, y: 150, team: "own" },
      { id: 4, name: "Opponent CB", x: 650, y: 250, team: "opponent" },
      { id: 5, name: "Opponent CB", x: 650, y: 350, team: "opponent" },
    ],
    options: [
      {
        id: "move1",
        text: "Move wide to draw a defender away from the middle",
        explanation:
          "✓ BEST CHOICE: Moving wide forces a defender to follow you, creating space for your winger to run into. This stretches the defense and gives your team more attacking options!",
      },
      {
        id: "move2",
        text: "Stand still and wait for the pass",
        explanation:
          "✗ POOR CHOICE: On a counter attack, you need to move! Standing still means you're not creating space or getting into a better position. You're actually staying closer to defenders instead of finding space.",
      },
      {
        id: "move3",
        text: "Run towards the player with the ball",
        explanation:
          "✗ POOR CHOICE: Never run towards your own teammate with the ball. This takes away their passing option and clogs up space.",
      },
    ],
    correctAnswer: "move1",
  },
  {
    id: 5,
    title: "Goal kick",
    question: "You're taking a goal kick. Where should you pass?",
    description:
      "The opposition is crowding the middle of the pitch. Look for the open player.",
    players: [
      { id: 1, name: "You (GK)", x: 50, y: 300, team: "own", hasBall: true },
      { id: 2, name: "RB", x: 150, y: 450, team: "own" },
      { id: 3, name: "LB", x: 150, y: 150, team: "own" },
      { id: 4, name: "CB", x: 120, y: 300, team: "own" },
      { id: 5, name: "CDM", x: 250, y: 300, team: "own" },
      { id: 6, name: "Opponent", x: 200, y: 280, team: "opponent" },
      { id: 7, name: "Opponent", x: 220, y: 320, team: "opponent" },
      { id: 8, name: "Opponent", x: 280, y: 300, team: "opponent" },
      { id: 9, name: "Opponent", x: 180, y: 420, team: "opponent" },
    ],
    options: [
      {
        id: 3,
        text: "Pass to Left Back (LB)",
        explanation:
          "✓ BEST CHOICE: The Left Back is in space and unmarked. Playing wide avoids the crowded middle and keeps possession safe.",
      },
      {
        id: 4,
        text: "Pass to Centre Back (CB)",
        explanation:
          "? OKAY: Safe and close, but puts your teammate under immediate pressure from opponents nearby. Not the best option.",
      },
      {
        id: 5,
        text: "Pass to Defensive Midfielder (CDM)",
        explanation:
          "✗ POOR CHOICE: Never pass into a crowded area! The CDM is surrounded by opponents and will likely lose the ball.",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    title: "Defending under pressure",
    question:
      "You're a fullback with the ball near your goal. Where should you pass?",
    description:
      "An opponent is pressing you. You need to get the ball away safely.",
    players: [
      { id: 1, name: "You (RB)", x: 180, y: 150, team: "own", hasBall: true },
      { id: 2, name: "CB", x: 150, y: 280, team: "own" },
      { id: 3, name: "LB", x: 180, y: 450, team: "own" },
      { id: 4, name: "Winger", x: 350, y: 100, team: "own" },
      { id: 5, name: "Midfielder", x: 300, y: 250, team: "own" },
      {
        id: 6,
        name: "Opponent",
        x: 220,
        y: 180,
        team: "opponent",
        isPressing: true,
      },
      { id: 7, name: "Opponent", x: 280, y: 300, team: "opponent" },
    ],
    options: [
      {
        id: 4,
        text: "Pass down the line to Winger",
        explanation:
          "✓ BEST CHOICE: Playing down the line is safe. If the pass is intercepted, the opponent is far from your goal. Always play forwards when under pressure.",
      },
      {
        id: 5,
        text: "Pass inside to Midfielder",
        explanation:
          "? RISKY: This pass goes towards your own goal and near opponents. Not the safest option.",
      },
      {
        id: "dribble",
        text: "Take on the opponent",
        explanation:
          "✗ VERY DANGEROUS: Never try to dribble when pressed near your own goal! If you lose the ball, the opponent has a clear path to score.",
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 8,
    title: "Defending the wing",
    question: "What should you do?",
    description:
      "You're the fullback. An opponent is dribbling down the wing towards you with pace.",
    players: [
      {
        id: 1,
        name: "Opponent",
        x: 250,
        y: 160,
        team: "opponent",
        hasBall: true,
      },
      { id: 2, name: "You (RB)", x: 200, y: 180, team: "own" },
      { id: 3, name: "CB", x: 150, y: 280, team: "own" },
      { id: 4, name: "GK", x: 50, y: 300, team: "own" },
      { id: 5, name: "CDM", x: 280, y: 300, team: "own" },
      { id: 6, name: "Opponent", x: 400, y: 250, team: "opponent" },
    ],
    options: [
      {
        id: "clear",
        text: "Clear the ball over the sideline",
        explanation:
          "✓ BEST CHOICE: Put the ball out for a throw-in. This stops their attack safely and gives your team time to organize. Much better than risking being beaten.",
      },
      {
        id: "skill",
        text: "Try to trap the ball and skill them",
        explanation:
          "✗ VERY RISKY: The opponent has momentum and is running at pace. If you fail, they're through on goal. Don't be a hero in defence!",
      },
      {
        id: "backoff",
        text: "Back off and delay them",
        explanation:
          "? OKAY: Slowing them down is good, but they still have the ball. Putting it out is safer and stops the attack completely.",
      },
    ],
    correctAnswer: "clear",
  },
  {
    id: 9,
    title: "Lost possession",
    question: "What should you do?",
    description:
      "You've just lost the ball in midfield and the opponent is running towards your goal.",
    players: [
      { id: 1, name: "You (CM)", x: 380, y: 280, team: "own" },
      {
        id: 2,
        name: "Opponent",
        x: 280,
        y: 300,
        team: "opponent",
        hasBall: true,
      },
      { id: 3, name: "CB", x: 180, y: 280, team: "own" },
      { id: 4, name: "CB", x: 180, y: 320, team: "own" },
      { id: 5, name: "GK", x: 50, y: 300, team: "own" },
      { id: 6, name: "Opponent", x: 500, y: 250, team: "opponent" },
      { id: 7, name: "Opponent", x: 520, y: 350, team: "opponent" },
    ],
    options: [
      {
        id: "chase",
        text: "Sprint back and win the ball",
        explanation:
          "✓ BEST CHOICE: Always work hard to fix your mistake! Chase back immediately and try to win the ball or slow down the attack. Show your team you care!",
      },
      {
        id: "waitspace",
        text: "Move into space and wait for teammates to win the ball back",
        explanation:
          "✗ POOR CHOICE: Don't just wait! Your mistake created this danger, so YOU need to help fix it. Sprint back and help your team defend!",
      },
      {
        id: "jog",
        text: "Jog back slowly",
        explanation:
          "✗ NOT ENOUGH: Your mistake created the danger, so you must sprint back. Jogging won't help - give 100% effort to help your team!",
      },
    ],
    correctAnswer: "chase",
  },
  {
    id: 10,
    title: "One on one chance",
    question:
      "You've beaten the defender down the wing. No teammates are near. What should you do?",
    description:
      "You're the winger with the ball. You're close to the box but at a wide angle.",
    players: [
      {
        id: 1,
        name: "You (Winger)",
        x: 630,
        y: 175,
        team: "own",
        hasBall: true,
      },
      { id: 2, name: "GK", x: 760, y: 250, team: "opponent" },
      { id: 3, name: "Opponent CB", x: 620, y: 290, team: "opponent" },
      { id: 4, name: "Opponent CB", x: 700, y: 380, team: "opponent" },
      { id: 5, name: "Teammate", x: 400, y: 300, team: "own" },
    ],
    options: [
      {
        id: "cutinside",
        text: "Cut back and pass to a teammate",
        explanation:
          "✗ POOR CHOICE: Your teammate is too far away and defenders can easily intercept. You're in a great position to score yourself - don't give up the chance!",
      },
      {
        id: "keeprunning",
        text: "Keep running and cross the ball in",
        explanation:
          "✗ POOR CHOICE: You have no teammates in the box to cross to! Don't waste a good chance by crossing to no one. Turn towards goal and shoot yourself.",
      },
      {
        id: "shootwide",
        text: "Turn towards goal and shoot",
        explanation:
          "✓ BEST CHOICE: Turning towards goal gets you a better shooting angle. This gives you the best chance to score when you have space to shoot.",
      },
    ],
    correctAnswer: "shootwide",
  },
  {
    id: 11,
    title: "Switching the play",
    question: "What should you do?",
    description:
      "You've just cut back on the right wing. Lots of defenders are crowding your side of the field.",
    players: [
      {
        id: 1,
        name: "You (Winger)",
        x: 450,
        y: 450,
        team: "own",
        hasBall: true,
      },
      { id: 2, name: "RB", x: 300, y: 480, team: "own" },
      { id: 3, name: "CM", x: 400, y: 300, team: "own" },
      { id: 4, name: "LW", x: 500, y: 100, team: "own" },
      { id: 5, name: "Opponent", x: 480, y: 420, team: "opponent" },
      { id: 6, name: "Opponent", x: 500, y: 480, team: "opponent" },
      { id: 7, name: "Opponent", x: 420, y: 500, team: "opponent" },
      { id: 8, name: "Opponent", x: 380, y: 420, team: "opponent" },
    ],
    options: [
      {
        id: 3,
        text: "Pass back to CM and switch to the left",
        explanation:
          "✓ BEST CHOICE: When one side is crowded with defenders, switch the ball to the other side where there's more space. Smart players use the whole width of the pitch!",
      },
      {
        id: "dribble",
        text: "Try to dribble through the defenders",
        explanation:
          "✗ POOR CHOICE: You're surrounded by four defenders! Trying to dribble through them will almost certainly lose the ball. Be smart and play it back.",
      },
      {
        id: 2,
        text: "Pass backwards to Right Back",
        explanation:
          "? COULD WORK: Safe but keeps the ball on the same crowded side. Better to switch it all the way across to the left where there's more space.",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 12,
    title: "Free kick in your half",
    question: "Where should you kick the ball?",
    description:
      "You're taking a free kick near the halfway line in your own half.",
    players: [
      { id: 1, name: "You (RB)", x: 350, y: 20, team: "own", hasBall: true },
      { id: 2, name: "Winger", x: 450, y: 80, team: "own" },
      { id: 3, name: "CM", x: 300, y: 300, team: "own" },
      { id: 4, name: "LB", x: 300, y: 520, team: "own" },
      { id: 5, name: "Opponent", x: 430, y: 120, team: "opponent" },
      { id: 6, name: "Opponent", x: 330, y: 280, team: "opponent" },
    ],
    options: [
      {
        id: 2,
        text: "Pass down the line to Winger",
        explanation:
          "✓ BEST CHOICE: Passing down the line is safe. If they lose it, the ball goes out for a throw-in. Never pass across your own half where opponents can intercept!",
      },
      {
        id: 3,
        text: "Pass inside to Central Midfielder",
        explanation:
          "✗ POOR CHOICE: Never pass across your own half! If the opponent intercepts this, they're running straight at your goal. Always play safe in your own half.",
      },
      {
        id: 4,
        text: "Pass long to Left Back on the other side",
        explanation:
          "✗ VERY RISKY: This is basically passing across goal! Far too dangerous in your own half. Keep it simple and safe.",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 13,
    title: "Supporting the attack",
    question: "Where should you pass?",
    description:
      "You're a midfielder with the ball. Your winger is making a run down the touchline.",
    players: [
      { id: 1, name: "You (CM)", x: 400, y: 300, team: "own", hasBall: true },
      { id: 2, name: "Winger", x: 500, y: 180, team: "own" },
      { id: 3, name: "Striker", x: 550, y: 280, team: "own" },
      { id: 4, name: "LB", x: 250, y: 350, team: "own" },
      { id: 5, name: "Opponent", x: 520, y: 220, team: "opponent" },
      { id: 6, name: "Opponent", x: 600, y: 270, team: "opponent" },
    ],
    options: [
      {
        id: "space",
        text: "Pass into the space ahead of the Winger's run",
        explanation:
          "✓ BEST CHOICE: Passing into space lets your teammate run onto the ball at full speed. This is how you create dangerous attacks! Always pass where they're going, not where they are.",
      },
      {
        id: 2,
        text: "Pass directly to the Winger's feet",
        explanation:
          "? COULD WORK: This slows down the attack because they have to control it and then start running again. Passing into space is much more effective when they're making a run!",
      },
      {
        id: 4,
        text: "Pass back to Left Back",
        explanation:
          "✗ POOR CHOICE: Your winger is making a great run! Don't waste this opportunity by passing backwards. Be positive and play the ball forward into space.",
      },
    ],
    correctAnswer: "space",
  },
];
