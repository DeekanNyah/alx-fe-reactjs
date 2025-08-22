import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading posts...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Refetch Posts
      </button>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white shadow rounded-lg border hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
