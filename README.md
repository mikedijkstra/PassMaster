# ⚽ PassMaster - Football Positioning Trainer

An interactive web app to help junior football (soccer) players learn smart positioning and passing decisions through realistic game scenarios.

## About This Project

PassMaster was created to teach young football players the fundamentals of positioning, decision-making, and game awareness. Instead of just learning through playing, kids can practice making the right decisions in a safe, visual environment.

### Built with AI

This entire app was built in collaboration with **Claude AI** (Anthropic's AI assistant) to demonstrate how modern AI tools can help create educational resources quickly and effectively.

**Why this approach works:**
- Fast iteration on educational content
- Easy to customize scenarios for different skill levels
- Clean, simple interface that kids can understand
- No complex setup or dependencies - just open and play

## Features

- 📊 **10 Interactive Scenarios** covering:
  - Building from the back
  - Breaking the press
  - Wing play
  - Counter attacks
  - Goal kicks
  - Defending under pressure
  - Clearing danger
  - Work rate and attitude
  - One-on-one situations

- 🎮 **Interactive Learning**:
  - Visual football pitch with player positions
  - Hover over options to highlight players
  - Immediate feedback on decisions
  - Detailed explanations for each choice

- 📱 **Optimized for All Devices**:
  - iPad/tablet optimized layout
  - Mobile responsive design
  - Touch-friendly interface
  - No zoom issues

## How to Use

1. Open `index.html` in any web browser
2. Read the scenario description and question
3. Hover over options to see which player you'd be passing to
4. Choose your answer
5. Learn from the feedback on all options
6. Complete all scenarios and see your score!

## For Coaches and Parents

Feel free to:
- Add your own scenarios by editing `scenarios.js`
- Customize player positions
- Adjust explanations to match your coaching philosophy
- Use this as a training tool before or after practice

### Adding New Scenarios

Scenarios are defined in `scenarios.js`. Each scenario includes:
- Player positions (x, y coordinates on an 800x600 pitch)
- Question and description
- Multiple choice options
- Detailed explanations for each choice
- Correct answer

Example structure:
```javascript
{
    id: 11,
    title: "Your Scenario Name",
    question: "What should you do?",
    description: "Context for the situation.",
    players: [
        { id: 1, name: "You (Position)", x: 200, y: 300, team: "own", hasBall: true },
        // ... more players
    ],
    options: [
        { id: 1, text: "Option 1", explanation: "✓ BEST CHOICE: Why this is correct..." },
        { id: 2, text: "Option 2", explanation: "✗ POOR CHOICE: Why this is wrong..." }
    ],
    correctAnswer: 1,
    explanation: "Overall explanation of the correct decision."
}
```

## Technology Stack

- Pure HTML, CSS, and JavaScript
- No frameworks or dependencies
- SVG for pitch visualization
- Responsive CSS Grid layout
- Optimized for modern browsers

## Credits

**Created by:** Mike Dijkstra
**Built with:** Claude AI (Anthropic)
**Purpose:** Educational tool for junior football players

## License

Free to use for educational purposes. Feel free to fork, modify, and share with your team!

## Feedback

If you use this with your team and have suggestions for improvements or new scenarios, contributions are welcome!

---

*Made with ⚽ and 🤖 to help young players learn the beautiful game*
