import BadgeCard from "../components/BadgeCard";
import ProgressBar from "../components/ProgressBar";
import profileImage from "../assets/profile.png";

const Dashboard = () => {
  // Mock user data 
  const user = {
    name: "Arzoo Singh",
    email: "arzoosingh147@gmail.com",
    avatar: "",
    points: 70,
    badges: [
      { title: "Eco Starter", description: "Uploaded 1st item", icon: "♻️" },
      { title: "Green Streak", description: "7-day streak", icon: "🌿" },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* User Info */}
      <div className="bg-[#FAFAC6] rounded-xl shadow p-6 flex items-center gap-4 mb-8">
        <img
          src={profileImage}
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-[#1E3A2E]"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Recycling Progress</h3>
        <ProgressBar value={user.points} max={100} />
      </div>

      {/* Badges Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Badges Earned</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {user.badges.map((badge, idx) => (
            <BadgeCard key={idx} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
