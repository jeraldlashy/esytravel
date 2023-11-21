
export const getDestinations = async () => {
  try {
    const res = await fetch("https://esytravel-jeraldlashy.vercel.app/api/destinations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading destinations: ", error);
  }
};
