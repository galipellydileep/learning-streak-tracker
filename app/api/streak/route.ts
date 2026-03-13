export async function GET() {
  return Response.json({
    currentStreak: 3,
    totalDays: 10,
    lastStudy: "14 March 2026",
  });
}
