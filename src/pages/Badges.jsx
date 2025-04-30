// src/pages/Badge.jsx

const badges = [
  {
    id: 1,
    name: "Eco Starter",
    description: "Uploaded your first item to recycle.",
    icon: "♻️",
    earned: true,
  },
  {
    id: 2,
    name: "Green Hero",
    description: "Uploaded 10 items.",
    icon: "🌿",
    earned: false,
  },
  {
    id: 3,
    name: "Planet Saver",
    description: "Recycled every day for a week.",
    icon: "🌍",
    earned: false,
  },
  {
    id: 4,
    name: "Community Helper",
    description: "Donated to another user.",
    icon: "🤝",
    earned: true,
  },
];

const Badge = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Badges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`border rounded-lg p-5 transition-all duration-300 ${
              badge.earned
                ? "bg-green-100 border-green-400"
                : "bg-gray-100 border-gray-300 opacity-60"
            }`}
          >
            <div className="text-4xl mb-3 text-center">{badge.icon}</div>
            <h2 className="text-xl font-semibold text-center">{badge.name}</h2>
            <p className="text-sm text-gray-700 text-center">{badge.description}</p>
            {badge.earned && (
              <p className="mt-2 text-center text-green-600 font-medium">Earned</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badge;
