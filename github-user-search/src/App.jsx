import { useState } from "react";
import Search from "./components/Search";
import { fetchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchUsers(searchParams);
      setUsers(results);
    } catch (err) {
      setError("Looks like we can't find the user(s).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow hover:shadow-md transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="text-lg font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
