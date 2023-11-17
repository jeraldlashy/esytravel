const posts = [
  {
    id: 1,
    title: "Melborne",
    href: "#",
    description:
      "Home Dream in a Villa",
    imageUrl: "/melborne.jpeg",
    price: "$2000",
    datetime: "",
    category: { title: "Villa", href: "#" },
  },
  {
    id: 1,
    title: "Brisbane",
    href: "#",
    description:
      "Toss the punch, hotel with a bunch",
    imageUrl: "/brisbane.avif",
    price: "$300",
    datetime: "2020-03-16",
    category: { title: "Hotel", href: "#" },
  },
  {
    id: 1,
    title: "Sydney",
    href: "#",
    description:
      "If you can afford, then why not",
    imageUrl: "/sydney.jpeg",
    price: "$200",
    datetime: "2020-03-16",
    category: { title: "Restaurant", href: "#" },
  },
];

export default function Destinations() {
  return (
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Destinations</h2>
      <p className="mt-4 text-xl leading-8 text-gray-600">
        Explore the world with our curated destinations.
      </p>
    </div>
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="flex flex-col items-start justify-between">
          <div className="relative w-full">
            <img
              src={post.imageUrl}
              alt=""
              className="w-full h-auto rounded-2xl bg-gray-100 object-cover sm:h-96 lg:h-80"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-xl text-gray-500">
                {post.price}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-xl text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-7 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 text-lg leading-8 text-justify text-gray-600">
                {post.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</div>


  );
}
