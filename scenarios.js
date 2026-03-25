// Define your scenarios here
// Each scenario has players positioned on the pitch and a question with multiple choice answers

const modules = [
  {
    id: "decision-making",
    title: "Decision Making",
    icon: "🧠",
    description: "Learn when to pass, clear, shoot, and what to do in game situations."
  },
  {
    id: "positioning",
    title: "Positioning",
    icon: "📐",
    description: "Learn where to be on the pitch — wide when attacking, narrow when defending.",
    lesson: {
      steps: [
        {
          headline: "When we have the ball: STRETCH!",
          body: "Spread out wide to make the pitch BIG. This gives your teammates more room to pass!",
          keyword: "STRETCH",
          keywordColor: "#28a745",
          players: [
            { id: 1, name: "GK", x: 50, y: 300, team: "own" },
            { id: 2, name: "LB", x: 220, y: 280, team: "own" },
            { id: 3, name: "RB", x: 220, y: 320, team: "own" },
            { id: 4, name: "CM", x: 320, y: 300, team: "own", hasBall: true },
            { id: 5, name: "LW", x: 350, y: 260, team: "own" },
            { id: 6, name: "RW", x: 350, y: 340, team: "own" },
            { id: 7, name: "ST", x: 500, y: 300, team: "own" },
          ],
          animateTo: [
            { id: 1, x: 50, y: 300 },
            { id: 2, x: 220, y: 80 },
            { id: 3, x: 220, y: 520 },
            { id: 4, x: 320, y: 300 },
            { id: 5, x: 400, y: 80 },
            { id: 6, x: 400, y: 520 },
            { id: 7, x: 500, y: 300 },
          ],
          annotation: "STRETCH!",
          annotationColor: "#28a745"
        },
        {
          headline: "When they have the ball: SQUEEZE!",
          body: "Get close together to make the pitch SMALL. This blocks their passes and helps your team defend!",
          keyword: "SQUEEZE",
          keywordColor: "#dc3545",
          players: [
            { id: 1, name: "GK", x: 50, y: 300, team: "own" },
            { id: 2, name: "LB", x: 180, y: 80, team: "own" },
            { id: 3, name: "RB", x: 180, y: 520, team: "own" },
            { id: 4, name: "CDM", x: 280, y: 300, team: "own" },
            { id: 5, name: "LW", x: 350, y: 80, team: "own" },
            { id: 6, name: "RW", x: 350, y: 520, team: "own" },
            { id: 7, name: "ST", x: 420, y: 300, team: "own" },
            { id: 8, name: "Opponent", x: 500, y: 300, team: "opponent", hasBall: true },
          ],
          animateTo: [
            { id: 1, x: 50, y: 300 },
            { id: 2, x: 180, y: 220 },
            { id: 3, x: 180, y: 380 },
            { id: 4, x: 260, y: 300 },
            { id: 5, x: 300, y: 240 },
            { id: 6, x: 300, y: 360 },
            { id: 7, x: 350, y: 300 },
            { id: 8, x: 500, y: 300 },
          ],
          annotation: "SQUEEZE!",
          annotationColor: "#dc3545"
        },
        {
          headline: "Our goal kick? Get WIDE!",
          body: "When your keeper kicks it, spread out so they can pass to you. There's no opponent near you on the wing — go there!",
          keyword: "WIDE",
          keywordColor: "#28a745",
          players: [
            { id: 1, name: "GK", x: 50, y: 300, team: "own", hasBall: true },
            { id: 2, name: "CB", x: 120, y: 260, team: "own" },
            { id: 3, name: "CB", x: 120, y: 340, team: "own" },
            { id: 4, name: "LB", x: 150, y: 250, team: "own" },
            { id: 5, name: "RB", x: 150, y: 350, team: "own" },
            { id: 6, name: "LW", x: 280, y: 260, team: "own" },
            { id: 7, name: "RW", x: 280, y: 340, team: "own" },
            { id: 8, name: "Opponent", x: 250, y: 280, team: "opponent" },
            { id: 9, name: "Opponent", x: 250, y: 320, team: "opponent" },
          ],
          animateTo: [
            { id: 1, x: 50, y: 300 },
            { id: 2, x: 120, y: 150 },
            { id: 3, x: 120, y: 450 },
            { id: 4, x: 150, y: 80 },
            { id: 5, x: 150, y: 520 },
            { id: 6, x: 300, y: 80 },
            { id: 7, x: 300, y: 520 },
            { id: 8, x: 250, y: 280 },
            { id: 9, x: 250, y: 320 },
          ],
          annotation: "STRETCH!",
          annotationColor: "#28a745"
        },
        {
          headline: "Their goal kick? SQUEEZE in!",
          body: "When their keeper kicks it, squeeze together to mark up and put pressure on their players. Get close to them so they can't control the ball easily!",
          keyword: "SQUEEZE",
          keywordColor: "#dc3545",
          players: [
            { id: 1, name: "Opponent GK", x: 750, y: 300, team: "opponent", hasBall: true },
            { id: 2, name: "Opponent CB", x: 650, y: 230, team: "opponent" },
            { id: 3, name: "Opponent CB", x: 650, y: 370, team: "opponent" },
            { id: 4, name: "Opponent CM", x: 550, y: 300, team: "opponent" },
            { id: 5, name: "GK", x: 50, y: 300, team: "own" },
            { id: 6, name: "CB", x: 380, y: 80, team: "own" },
            { id: 7, name: "CB", x: 380, y: 520, team: "own" },
            { id: 8, name: "CM", x: 450, y: 150, team: "own" },
            { id: 9, name: "LW", x: 550, y: 80, team: "own" },
            { id: 10, name: "RW", x: 550, y: 520, team: "own" },
            { id: 11, name: "ST", x: 600, y: 480, team: "own" },
          ],
          animateTo: [
            { id: 1, x: 750, y: 300 },
            { id: 2, x: 650, y: 230 },
            { id: 3, x: 650, y: 370 },
            { id: 4, x: 550, y: 300 },
            { id: 5, x: 50, y: 300 },
            { id: 6, x: 380, y: 220 },
            { id: 7, x: 380, y: 380 },
            { id: 8, x: 450, y: 300 },
            { id: 9, x: 620, y: 200 },
            { id: 10, x: 620, y: 400 },
            { id: 11, x: 600, y: 300 },
          ],
          annotation: "SQUEEZE!",
          annotationColor: "#dc3545"
        }
      ]
    }
  }
];

const scenarios = [
  {
    id: 1,
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
    module: "decision-making",
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
  // ============================
  // POSITIONING MODULE (101-110)
  // ============================
  {
    id: 101,
    module: "positioning",
    title: "Goal kick — your team's ball (winger)",
    question: "Where should you be?",
    description: "Your goalkeeper is about to take a goal kick. You're a winger but you're standing in the middle of the pitch. There's no opponent near you on the wing.",
    players: [
      { id: 1, name: "GK", x: 50, y: 300, team: "own", hasBall: true },
      { id: 2, name: "CB", x: 120, y: 250, team: "own" },
      { id: 3, name: "CB", x: 120, y: 350, team: "own" },
      { id: 4, name: "You (LW)", x: 250, y: 280, team: "own" },
      { id: 5, name: "CDM", x: 250, y: 350, team: "own" },
      { id: 6, name: "Opponent", x: 300, y: 300, team: "opponent" },
      { id: 7, name: "Opponent", x: 280, y: 200, team: "opponent" },
    ],
    options: [
      {
        id: "wide",
        text: "Move wide to the touchline",
        explanation:
          "✓ BEST CHOICE: Moving wide gives your GK a safe wide target and stretches the pitch. Always get wide when your team has a goal kick!",
      },
      {
        id: "central",
        text: "Stay central near the striker",
        explanation:
          "✗ POOR CHOICE: The centre is already crowded with opponents — they'll be all over you! Stretch the pitch by getting wide to give your keeper a safe option.",
      },
      {
        id: "back",
        text: "Move towards the goalkeeper",
        explanation:
          "✗ POOR CHOICE: Moving closer to your own goal doesn't help. You're just getting closer to the keeper instead of creating a useful passing option.",
      },
    ],
    correctAnswer: "wide",
  },
  {
    id: 102,
    module: "positioning",
    title: "Goal kick — opponent's ball (midfielder)",
    question: "Where should you position yourself?",
    description: "The other team's goalkeeper is about to take a goal kick. Your team is spread out across the pitch. There are no opponents near you right now.",
    players: [
      { id: 1, name: "Opponent GK", x: 750, y: 300, team: "opponent", hasBall: true },
      { id: 2, name: "Opponent CB", x: 650, y: 250, team: "opponent" },
      { id: 3, name: "Opponent CB", x: 650, y: 350, team: "opponent" },
      { id: 4, name: "You (CM)", x: 450, y: 150, team: "own" },
      { id: 5, name: "CM", x: 400, y: 350, team: "own" },
      { id: 6, name: "Striker", x: 550, y: 300, team: "own" },
    ],
    options: [
      {
        id: "narrow",
        text: "Squeeze narrow with teammates to stay compact",
        explanation:
          "✓ BEST CHOICE: Getting close together blocks their passes through the middle. When they have a goal kick, squeeze together so you can pick up the ball when it bounces around!",
      },
      {
        id: "wide",
        text: "Spread wide to cover more ground",
        explanation:
          "✗ POOR CHOICE: Spreading wide leaves huge gaps in the centre for opponents to play through. Stay compact and narrow as a unit!",
      },
      {
        id: "stay",
        text: "Stay where you are",
        explanation:
          "? OKAY: Not terrible, but you're not helping your team stay compact. Tuck in towards the middle to be more useful.",
      },
    ],
    correctAnswer: "narrow",
  },
  {
    id: 103,
    module: "positioning",
    title: "Attacking shape — winger staying narrow",
    question: "Where should you be?",
    description: "Your team has the ball in midfield. You're the left winger but you're standing near the centre circle. There's no opponent near you on the left wing — it's wide open!",
    players: [
      { id: 1, name: "CM", x: 350, y: 300, team: "own", hasBall: true },
      { id: 2, name: "You (LW)", x: 300, y: 250, team: "own" },
      { id: 3, name: "Striker", x: 550, y: 300, team: "own" },
      { id: 4, name: "RW", x: 400, y: 500, team: "own" },
      { id: 5, name: "Opponent", x: 450, y: 250, team: "opponent" },
      { id: 6, name: "Opponent", x: 500, y: 350, team: "opponent" },
    ],
    options: [
      {
        id: "wide",
        text: "Move wide to the left touchline",
        explanation:
          "✓ BEST CHOICE: Getting wide stretches the defence and creates space in the middle for your teammates. Wingers should always be wide when attacking!",
      },
      {
        id: "central",
        text: "Stay central",
        explanation:
          "✗ POOR CHOICE: You're crowding your own teammates and making it easy for defenders. Get wide to stretch the pitch!",
      },
      {
        id: "defend",
        text: "Drop back to help defend",
        explanation:
          "✗ POOR CHOICE: Your team has the ball! Get into an attacking position and give your teammates options going forward.",
      },
    ],
    correctAnswer: "wide",
  },
  {
    id: 104,
    module: "positioning",
    title: "Defending shape — winger staying wide",
    question: "Where should you be?",
    description: "The other team has the ball in your half. You're the right winger but you're still standing wide on the touchline. There's no opponent near you out wide — the danger is in the middle!",
    players: [
      { id: 1, name: "Opponent", x: 250, y: 300, team: "opponent", hasBall: true },
      { id: 2, name: "Opponent", x: 300, y: 150, team: "opponent" },
      { id: 3, name: "CB", x: 150, y: 280, team: "own" },
      { id: 4, name: "CB", x: 150, y: 350, team: "own" },
      { id: 5, name: "CM", x: 250, y: 400, team: "own" },
      { id: 6, name: "You (RW)", x: 350, y: 520, team: "own" },
    ],
    options: [
      {
        id: "narrow",
        text: "Squeeze in towards the middle",
        explanation:
          "✓ BEST CHOICE: Squeeze in to help your team defend together! When they have the ball, get narrow and close the gaps. Don't stay wide — squeeze!",
      },
      {
        id: "wide",
        text: "Stay wide on the touchline",
        explanation:
          "✗ POOR CHOICE: You're leaving a massive gap for opponents to exploit. Get narrow and help your team defend!",
      },
      {
        id: "mark",
        text: "Move to mark the nearest opponent",
        explanation:
          "? OKAY: Good instinct, but getting compact as a team is more important. Squeeze in first, then worry about individual marking.",
      },
    ],
    correctAnswer: "narrow",
  },
  {
    id: 105,
    module: "positioning",
    title: "Goal kick — your team's ball (fullback)",
    question: "Where should you move?",
    description: "Your goalkeeper is about to take a goal kick. You're the left back but you're standing right next to the centre backs. There's no opponent near you on the left side.",
    players: [
      { id: 1, name: "GK", x: 50, y: 300, team: "own", hasBall: true },
      { id: 2, name: "CB", x: 130, y: 260, team: "own" },
      { id: 3, name: "CB", x: 130, y: 340, team: "own" },
      { id: 4, name: "You (LB)", x: 140, y: 200, team: "own" },
      { id: 5, name: "CDM", x: 250, y: 300, team: "own" },
      { id: 6, name: "Opponent", x: 220, y: 280, team: "opponent" },
      { id: 7, name: "Opponent", x: 280, y: 320, team: "opponent" },
    ],
    options: [
      {
        id: "wide",
        text: "Push wide to the left touchline",
        explanation:
          "✓ BEST CHOICE: Getting wide gives your GK a safe short option and stretches the pitch. Fullbacks should always push wide on goal kicks!",
      },
      {
        id: "central",
        text: "Stay near the centre backs",
        explanation:
          "✗ POOR CHOICE: You're blocking the centre backs' space and giving your keeper one fewer passing option. Push wide to stretch the pitch!",
      },
      {
        id: "forward",
        text: "Run forward to the halfway line",
        explanation:
          "✗ POOR CHOICE: Too far from the GK — the pass is too risky and long. Stay close but wide to offer a safe option.",
      },
    ],
    correctAnswer: "wide",
  },
  {
    id: 106,
    module: "positioning",
    title: "Defending — opponent building from back (striker)",
    question: "Where should you be?",
    description: "The other team's centre backs have the ball and are passing it between them. You're the striker but you're standing wide near the touchline. There's no opponent near you out there.",
    players: [
      { id: 1, name: "Opponent CB", x: 650, y: 250, team: "opponent", hasBall: true },
      { id: 2, name: "Opponent CB", x: 650, y: 350, team: "opponent" },
      { id: 3, name: "Opponent GK", x: 760, y: 300, team: "opponent" },
      { id: 4, name: "You (ST)", x: 550, y: 150, team: "own" },
      { id: 5, name: "CM", x: 400, y: 300, team: "own" },
      { id: 6, name: "Opponent CDM", x: 550, y: 300, team: "opponent" },
    ],
    options: [
      {
        id: "central",
        text: "Move centrally to cut off passes between the CBs",
        explanation:
          "✓ BEST CHOICE: Squeeze into the middle to make the pitch small for them! You can cut off passes between the centre backs and force them into mistakes.",
      },
      {
        id: "wide",
        text: "Stay out wide",
        explanation:
          "✗ POOR CHOICE: You're not putting any pressure on the ball from out wide. Get central to make life difficult for their defenders!",
      },
      {
        id: "chase",
        text: "Chase the ball carrier",
        explanation:
          "? OKAY: Shows good energy, but you might get isolated. Better to position centrally first and cut off their options.",
      },
    ],
    correctAnswer: "central",
  },
  {
    id: 107,
    module: "positioning",
    title: "Attacking transition — just won the ball",
    question: "What should you do?",
    description: "Your team just won the ball in midfield — quick, this is your chance! You're a winger stuck near the centre. The right wing is empty and no opponent is covering it.",
    players: [
      { id: 1, name: "CDM", x: 300, y: 300, team: "own", hasBall: true },
      { id: 2, name: "You (RW)", x: 320, y: 380, team: "own" },
      { id: 3, name: "Striker", x: 500, y: 300, team: "own" },
      { id: 4, name: "LW", x: 350, y: 150, team: "own" },
      { id: 5, name: "Opponent", x: 400, y: 350, team: "opponent" },
      { id: 6, name: "Opponent", x: 450, y: 250, team: "opponent" },
    ],
    options: [
      {
        id: "wide",
        text: "Sprint wide immediately",
        explanation:
          "✓ BEST CHOICE: When your team wins the ball, stretch the pitch FAST! Getting wide quickly catches the other team out of position.",
      },
      {
        id: "ball",
        text: "Run towards the ball",
        explanation:
          "✗ POOR CHOICE: You're crowding the player with the ball and taking away their options. Get wide to open up the pitch!",
      },
      {
        id: "stay",
        text: "Stay where you are",
        explanation:
          "✗ POOR CHOICE: You need to react fast when your team wins the ball! Standing still means missing the chance to stretch the pitch.",
      },
    ],
    correctAnswer: "wide",
  },
  {
    id: 108,
    module: "positioning",
    title: "Defensive transition — just lost the ball",
    question: "What should you do?",
    description: "Your team just lost the ball! An opponent is running forward with it. You're a midfielder stuck high up the pitch. Two more opponents are ahead of you heading towards your goal — your centre backs are outnumbered!",
    players: [
      { id: 1, name: "Opponent", x: 500, y: 300, team: "opponent", hasBall: true },
      { id: 2, name: "You (CM)", x: 550, y: 250, team: "own" },
      { id: 3, name: "CB", x: 180, y: 280, team: "own" },
      { id: 4, name: "CB", x: 180, y: 350, team: "own" },
      { id: 5, name: "Opponent", x: 400, y: 200, team: "opponent" },
      { id: 6, name: "Opponent", x: 350, y: 400, team: "opponent" },
    ],
    options: [
      {
        id: "back",
        text: "Sprint back and get narrow/compact",
        explanation:
          "✓ BEST CHOICE: Get behind the ball and protect your goal! Sprint back and squeeze in with your teammates to defend together.",
      },
      {
        id: "wide",
        text: "Stay wide to wait for the ball back",
        explanation:
          "✗ POOR CHOICE: Your team needs you defending NOW! Don't wait around hoping to get the ball back — sprint back and help!",
      },
      {
        id: "press",
        text: "Press the opponent with the ball by yourself",
        explanation:
          "✗ POOR CHOICE: Too easy to pass around one player. It's more important to get back with your teammates first.",
      },
    ],
    correctAnswer: "back",
  },
  {
    id: 109,
    module: "positioning",
    title: "Goal kick — opponent's ball (winger)",
    question: "Where should you be?",
    description: "The other team's goalkeeper is about to take a goal kick. You're a winger standing wide on the touchline. There's no opponent near you out wide, but your teammates are far away in the middle.",
    players: [
      { id: 1, name: "Opponent GK", x: 750, y: 300, team: "opponent", hasBall: true },
      { id: 2, name: "Opponent CB", x: 650, y: 250, team: "opponent" },
      { id: 3, name: "Opponent CB", x: 650, y: 350, team: "opponent" },
      { id: 4, name: "You (LW)", x: 500, y: 80, team: "own" },
      { id: 5, name: "Striker", x: 550, y: 300, team: "own" },
      { id: 6, name: "CM", x: 450, y: 350, team: "own" },
    ],
    options: [
      {
        id: "narrow",
        text: "Tuck in towards the centre",
        explanation:
          "✓ BEST CHOICE: Squeeze in with your teammates so you can pick up the ball when it bounces around! Don't stand out wide where you can't help — get narrow!",
      },
      {
        id: "wide",
        text: "Stay wide on the touchline",
        explanation:
          "✗ POOR CHOICE: You're miles from the action and can't help your team compete for the ball. Tuck in and stay compact!",
      },
      {
        id: "press",
        text: "Press high towards their goal",
        explanation:
          "? OKAY: Aggressive and might surprise them, but leaves space behind you. Better to stay compact and win the second ball.",
      },
    ],
    correctAnswer: "narrow",
  },
  {
    id: 110,
    module: "positioning",
    title: "Attacking buildup — fullback positioning",
    question: "Where should you be?",
    description: "Your centre back has the ball and is looking to pass. You're the right back but you're standing right next to them. There's no opponent near you on the right side — it's empty!",
    players: [
      { id: 1, name: "CB", x: 180, y: 280, team: "own", hasBall: true },
      { id: 2, name: "CB", x: 180, y: 350, team: "own" },
      { id: 3, name: "You (RB)", x: 200, y: 400, team: "own" },
      { id: 4, name: "CDM", x: 280, y: 300, team: "own" },
      { id: 5, name: "Opponent", x: 300, y: 350, team: "opponent" },
      { id: 6, name: "Opponent", x: 350, y: 250, team: "opponent" },
    ],
    options: [
      {
        id: "wide",
        text: "Push wide to the right touchline",
        explanation:
          "✓ BEST CHOICE: Getting wide gives your CB a safe wide passing option and stretches the pitch. Always offer width in buildup play!",
      },
      {
        id: "narrow",
        text: "Stay narrow near the CB",
        explanation:
          "✗ POOR CHOICE: You're not giving a useful passing angle. Push wide to give your teammate an option!",
      },
      {
        id: "forward",
        text: "Run forward into midfield",
        explanation:
          "✗ POOR CHOICE: Too far away, and it leaves no wide option for your CB. Get wide first, then push forward when the time is right.",
      },
    ],
    correctAnswer: "wide",
  },
  {
    id: 111,
    module: "positioning",
    title: "Spread out — don't bunch up!",
    question: "What should you do?",
    description: "Your teammate has the ball in midfield. You're a winger but you're standing right next to the striker. Look — one opponent centre back is watching both of you at the same time! That's too easy for them.",
    players: [
      { id: 1, name: "CM", x: 350, y: 300, team: "own", hasBall: true },
      { id: 2, name: "You (LW)", x: 480, y: 270, team: "own" },
      { id: 3, name: "Striker", x: 490, y: 290, team: "own" },
      { id: 4, name: "RW", x: 400, y: 480, team: "own" },
      { id: 5, name: "Opponent CB", x: 550, y: 280, team: "opponent" },
      { id: 6, name: "Opponent CB", x: 550, y: 350, team: "opponent" },
      { id: 7, name: "Opponent CM", x: 420, y: 300, team: "opponent" },
    ],
    options: [
      {
        id: "spread",
        text: "Move away from the striker to create space",
        explanation:
          "✓ BEST CHOICE: If two teammates stand close together, one defender can mark both of you! Stretch the pitch by spreading wide so they can't cover you both at the same time.",
      },
      {
        id: "stay",
        text: "Stay next to the striker so you can help each other",
        explanation:
          "✗ POOR CHOICE: Standing next to a teammate makes it easy for one defender to watch both of you. You actually help more by moving away to a different space!",
      },
      {
        id: "ball",
        text: "Run towards the ball to get involved",
        explanation:
          "✗ POOR CHOICE: Running to the ball makes the problem worse — now three players are bunched up! Move into space so your teammate has someone to pass to.",
      },
    ],
    correctAnswer: "spread",
  },
  {
    id: 112,
    module: "positioning",
    title: "Show for the ball — find a passing angle",
    question: "What should you do?",
    description: "Your centre back has the ball and wants to pass to you. But there's an opponent standing right between you and the ball — your CB can't see you!",
    players: [
      { id: 1, name: "CB", x: 180, y: 300, team: "own", hasBall: true },
      { id: 2, name: "You (CM)", x: 320, y: 310, team: "own" },
      { id: 3, name: "RW", x: 350, y: 480, team: "own" },
      { id: 4, name: "LW", x: 300, y: 100, team: "own" },
      { id: 5, name: "Opponent", x: 280, y: 300, team: "opponent" },
      { id: 6, name: "Opponent", x: 400, y: 250, team: "opponent" },
    ],
    options: [
      {
        id: "angle",
        text: "Move sideways so your CB can see you and pass to you",
        explanation:
          "✓ BEST CHOICE: If you're hiding behind a defender, your teammate can't pass to you! Move to one side so there's a clear line between you and the ball. This is called 'showing for the ball' — it's part of stretching to give your team more options!",
      },
      {
        id: "behind",
        text: "Stay where you are and call for the ball",
        explanation:
          "✗ POOR CHOICE: Even if you shout, your CB can't pass through an opponent! You need to move sideways so the pass can actually reach you.",
      },
      {
        id: "forward",
        text: "Run forward past the opponents",
        explanation:
          "? OKAY: Running forward might work if your CB can kick it long, but it's very risky. It's better to move sideways and offer a safe, simple pass first.",
      },
    ],
    correctAnswer: "angle",
  },
];
