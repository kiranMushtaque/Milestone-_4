// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleLoginRedirect = () => {
    router.push("/login"); // Redirect to login page if the user is not logged in
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          📌 Welcome to the Home Page!
        </h1>
        <p className="text-lg mb-6">
          This is the home page where you can view the most recent posts. You
          can also log in to access your dashboard.
        </p>

        {/* Render posts fetched from the API */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Posts</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="border-b pb-4">
                <h3 className="text-lg font-semibold text-blue-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-1">{post.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleLoginRedirect}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Login to Access Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
