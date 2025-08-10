import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username) {
      setError("Please enter a username");
      return;
    }
    setError("");
    setLoading(true);

    try {
      let query = `${username}`;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>${minRepos}`;

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );

      const usersWithDetails = await Promise.all(
        response.data.items.map(async (user) => {
          const userDetails = await axios.get(user.url);
          return {
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            location: userDetails.data.location || "Not specified",
          };
        })
      );

      setResults(usersWithDetails);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div>
        {results.map((user) => (
          <div key={user.login} className="border p-2 my-2">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <h2 className="font-bold">{user.login}</h2>
            <p>Location: {user.location}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
