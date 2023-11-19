"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


// const posts = [
//   {
//     id: 1,
//     title: "Deluxe Queen Room With Street View",
//     href: "#",
//     description: "Accessible Bedroom / 1 Bathroom / Wifi / Kitchen.",
//     imageUrl:
//       "/image-s1.png",
//     price: "$200",
//     guests: "5",
//     category: { title: "Villa", href: "#" },
//   },
//   {
//     id: 1,
//     title: "Deluxe Queen Room With Street View",
//     href: "#",
//     description: "Accessible Bedroom / 1 Bathroom / Wifi / Kitchen.",
//     imageUrl:
//     "/image-s2.png",
//     price: "$200",
//     guests: "5",
//     category: { title: "Villa", href: "#" },
//   },
//   {
//     id: 1,
//     title: "Deluxe Queen Room With Street View",
//     href: "#",
//     description: "Accessible Bedroom / 1 Bathroom / Wifi / Kitchen.",
//     imageUrl:
//     "/image-s3.png",
//     price: "$200",
//     guests: "5",
//     category: { title: "Villa", href: "#" },
//   },
//   {
//     id: 1,
//     title: "Deluxe Queen Room With Street View",
//     href: "#",
//     description: "Accessible Bedroom / 1 Bathroom / Wifi / Kitchen.",
//     imageUrl:
//     "/image-s4.png",
//     price: "$200",
//     guests: "5",
//     category: { title: "Villa", href: "#" },
//   },

//   // More posts...
// ];

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


const categories = ["Apartment", "House", "Hostel", "Villa"];
const amenities = ["Accessible", "Air Conditioning", "Gym", "Pool", "Wifi"];


export default function Destination() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);


  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => {
        if (data.posts) {
          setPosts(data.posts);
        }
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const filterPosts = () => {
    return posts.filter((post) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(post.category.title);
      const amenityMatch =
        selectedAmenities.length === 0 ||
        selectedAmenities.some((amenity) => post.description.includes(amenity));
      return categoryMatch && amenityMatch;
    });
  };

  const handleCategorySelect = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  const handleAmenitySelect = (amenity) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((amen) => amen !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(updatedAmenities);
  };
  return (
    <div className="bg-white py-24 sm:py-32 flex">
      {/* Filter section */}
      <div className="w-1/4 ml-4 p-4">
        <h3 className="font-semibold mb-2">Select Filters</h3>
        <div className="space-y-2">
          <h4>Property Type</h4>
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategorySelect(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <h4>Amenities</h4>
          {amenities.map(amenity => (
            <div key={amenity} className="flex items-center">
              <input
                type="checkbox"
                id={amenity}
                value={amenity}
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenitySelect(amenity)}
                className="mr-2"
              />
              <label htmlFor={amenity}>{amenity}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Display filtered posts */}
      <div className="w-3/4 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Live the adventure
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {filterPosts().map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xl">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.price}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-large text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
            {/* If no posts match the filters */}
            {filterPosts().length === 0 && (
              <p>No posts match the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );


}
