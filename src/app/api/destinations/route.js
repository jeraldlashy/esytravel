import { Destination } from "@/models/Model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, imageUrl, categories, amenities, price, guests } = await request.json();
  await connectMongoDB();
  await Destination.create({ title, imageUrl, categories, amenities, price, guests });
  return NextResponse.json({ message: "Destination Created" }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongoDB();
    const destinations = await Destination.find();
    return NextResponse.json({ destinations });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching destinations" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await connectMongoDB();
    await Destination.findByIdAndDelete(id);
    return NextResponse.json({ message: "Destination deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting destination" }, { status: 500 });
  }
}
