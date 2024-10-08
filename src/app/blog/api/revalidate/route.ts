import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import appConfig from '@/app/app.config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { postSlug, secret } = body;
    // Check for secret to confirm this is a valid request
    if (secret !== appConfig.revalidationWordpressContentSecret) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
    // Revalidate the specific post
    if (!postSlug) {
      NextResponse.json(
        { message: 'Need postSlug to update ' },
        { status: 400 }
      );
    }
    // If no specific post_id, revalidate all posts
    revalidatePath(`/blog`);
    revalidatePath(`/blog/${postSlug}`);

    return NextResponse.json(
      { message: 'Revalidation successful' },
      { status: 200 }
    );
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
}
