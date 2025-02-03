async function getStaticPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export default async function SSGPage() {
  const posts = await getStaticPosts();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">📌 SSG Fetched Posts</h1>
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
