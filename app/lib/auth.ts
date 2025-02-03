// lib/auth.ts

// Utility function to check if a user is authenticated based on localStorage
export const isAuthenticated = (): boolean => {
  // Check if a user is stored in localStorage (or use cookies, JWT, etc.)
  const user = localStorage.getItem("user");
  return user !== null;
};

// Utility function to log the user in (e.g., save user to localStorage)
export const login = (user: { username: string; password: string }) => {
  // Store user information (you might want to store a token or session ID instead)
  localStorage.setItem("user", JSON.stringify(user));
};

// Utility function to log the user out (clear session data)
export const logout = () => {
  localStorage.removeItem("user");
};

// Example of a server-side function that might be used for authentication with a backend API
export const authenticateUser = async (username: string, password: string) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (res.status === 200) {
    // On successful login, store user data (or token) in localStorage
    localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  } else {
    throw new Error(data.message || "Authentication failed");
  }
};
