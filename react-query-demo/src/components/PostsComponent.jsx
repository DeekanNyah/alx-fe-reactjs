// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000,             // ✅ keep data fresh for 5s
    cacheTime: 1000 * 60 * 5,    // ✅ cache data for 5 minutes
    refetchOnWindowFocus: false, // ✅ don't auto refetch on window focus
    keepPreviousData: true,      // ✅ keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {/* ✅ Manual refetch button */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
