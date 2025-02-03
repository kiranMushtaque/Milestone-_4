
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login"); // Redirect to login after logout
  }

  if (!user) return <p>Redirecting...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
