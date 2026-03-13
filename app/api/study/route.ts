export async function GET() {
  return Response.json({
    message: "Study API working",
  });
}

export async function POST() {
  return Response.json({
    message: "Study marked successfully",
  });
}
