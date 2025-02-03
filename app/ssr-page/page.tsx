
async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "no-store", // No caching, ensures data is always fresh
    }
  );
  return res.json();
}

export default async function SSRPage() {
  const posts = await getPosts();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">📌 SSR Fetched Posts</h1>
      <ul className="space-y-4 mt-4">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold">
              {post.id}. {post.title}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
