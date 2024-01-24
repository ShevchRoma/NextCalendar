import { NextResponse } from "next/server";
import connect from '../../../lib/dbConnect'
import Post from "../../../../models/Post";


export async function DELETE(request) {
    try {

        const id = request.nextUrl.searchParams.get("id");

        await connect();

        await Post.findByIdAndDelete(id);

        return NextResponse.json(
            {
                message: "Event deleted Successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to Delete a Event",
                error,
            },
            {
                status: 500,
            }
        );
    }
}