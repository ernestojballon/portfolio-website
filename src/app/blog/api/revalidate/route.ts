import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check for secret to confirm this is a valid request
    if (body.secret !== "fb7b839eb1b45b7cb0d44c8dc284b5c1b3154bf1") {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // Revalidate the blog page
    revalidatePath(`/blog`);

    // If you want to revalidate a specific post, you can use the post_id
    // Uncomment the following line if you want to revalidate a specific post
    // revalidatePath(`/blog/${body.post_id}`);

    return NextResponse.json({ message: "Revalidation successful" }, { status: 200 });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}