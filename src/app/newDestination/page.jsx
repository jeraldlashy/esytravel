"use client";
import Footer from "@/components/footer";
import Header from "@/components/generic-header";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateDestinationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amenities: "",
    category: "",
    imageUrl: "",
    price: "",
    guests: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      description,
      amenities,
      category,
      imageUrl,
      price,
      guests,
    } = formData;

    if (
      !title ||
      !description ||
      !amenities ||
      !category ||
      !imageUrl ||
      !price ||
      !guests
    ) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/destinations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a destination");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Header/>
      <div className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-md">
        <h1 className="text-xl font-bold mb-4">Add New Destination</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amenities"
              className="block text-sm font-medium text-gray-700"
            >
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700"
            >
              Guests
            </label>
            <input
              type="text"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Destination
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default CreateDestinationForm;
