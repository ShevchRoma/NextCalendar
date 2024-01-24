import { NextResponse } from "next/server";
import connect from '../../../lib/dbConnect'
import Post from '../../../../models/Post'

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find()

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (e) {
    throw new NextResponse('Error is fetching posts' + e, { status: 500 })
  }
}
