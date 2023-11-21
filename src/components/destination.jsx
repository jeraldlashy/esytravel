import React from "react";
import Link from "next/link";
import {GET} from '@/app/api/destinations/route'

const getDestinations = async () => {
  try {

    const res = await GET();

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading destinations: ", error);
  }
};

export default async function Destination() {
  const { destinations } = await getDestinations();

  if (typeof destinations == "undefined") {
    return (
      <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Popular Destinations
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Live in thy moment.
              </p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                There is nothing to show here
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Popular Destinations
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Live in thy moment.
              </p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {destinations.map((destination) => (
                  <article
                    key={destination._id}
                    className="relative isolate flex flex-col gap-8 lg:flex-row"
                  >
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img
                        src={destination.imageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <p className="text-gray-500">{destination.amenities}</p>
                        <a
                          href={"/book"}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {destination.category}
                        </a>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <Link href={"/book"}>
                            <span className="absolute inset-0" />
                            {destination.title}
                          </Link>
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600">
                          {destination.description}
                        </p>
                      </div>
                      <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                        <div className="relative flex items-center gap-x-4">
                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900 text-xl">
                              <a href={""}>
                                <span className="absolute inset-0" />${" "}
                                {destination.price}
                              </a>
                            </p>
                            <p className="text-gray-600 text-lg">
                              {destination.guests}
                              {" :Guests"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
