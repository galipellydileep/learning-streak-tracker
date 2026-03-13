# Daily Learning Streak Tracker

## Project Description
The Daily Learning Streak Tracker is a web application that helps users track their daily learning progress. Users can mark when they studied and maintain a continuous learning streak.

The application displays:
- Current learning streak
- Total number of study days
- Last study date
- Study history

The project is built using Next.js, TypeScript, and Tailwind CSS and deployed on Vercel.

---

## Setup Instructions

1. Clone the repository
git clone https://github.com/galipellydileep/learning-streak-tracker

2. Navigate to the project folder
cd learning-streak-tracker

3. Install dependencies
npm install

4. Run the development server
npm run dev

5. Open in browser
http://localhost:3000

---

## How Streak Logic Works

When the user clicks **"I Studied Today"**:

- The application records today's date.
- If the previous study date was **yesterday**, the streak increases.
- If the user missed days, the streak resets.
- The total study days count increases.
- The last studied date is updated.

The data is handled through **Next.js API routes** and stored in memory for this project.
