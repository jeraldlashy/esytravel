import { Destination } from "@/models/Model";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newImageUrl: imageUrl, newCategories: categories, newAmenities: amenities, newPrice: price, newGuests: guests } = await request.json();
  try {
    await connectMongoDB();
    await Destination.findByIdAndUpdate(id, { title, imageUrl, categories, amenities, price, guests });
    return NextResponse.json({ message: "Destination updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating destination" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    const destination = await Destination.findOne({ _id: id });
    return NextResponse.json({ destination }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching destination" }, { status: 500 });
  }
}
