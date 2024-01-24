import { NextResponse } from "next/server";
import connect from '../../../lib/dbConnect'
import Post from '../../../../models/Post'


export async function POST(request) {
  try {
    const { start, duration, title } = await request.json()
    const newEvent = {
      start,
      duration,
      title
    };
    await connect();

    await Post.create(newEvent)

    return NextResponse.json(
      {
        message: "Event created successfully",
        data: newEvent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a Event",
        error,
      },
      {
        status: 500,
      }
    );
  }
}