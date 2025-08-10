export default function UserProfile({ user }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-32 h-32 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="mt-4 text-2xl font-bold text-center transition-colors duration-300 hover:text-blue-500">
        {user.name}
      </h2>
      <p className="text-center text-gray-600">{user.bio}</p>
    </div>
  );
}
