// pages/api/destinations.js
import Destination from '@/models/Destinations';
import connectMongoDB from '@/lib/mongodb';

import { NextResponse } from "next/server";

export async function POST(request) {
  const {  title, description, amenities, category, imageUrl, price, guests} = await request.json();
  await connectMongoDB();
  await Destination.create({ title, description, amenities, category, imageUrl, price, guests });
  return NextResponse.json({ message: "Destination Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const destinations = await Destination.find();
  return NextResponse.json({ destinations });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Destination.findByIdAndDelete(id);
  return NextResponse.json({ message: "Destination deleted" }, { status: 200 });
};