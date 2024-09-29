import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  revalidatePath(`/blog`);
  return NextResponse.json({ message: "Revalidation request sent" });

}