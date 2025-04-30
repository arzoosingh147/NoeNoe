const BadgeCard = ({ badge }) => {
    return (
      <div className="bg-[#FAFAC6] p-4 rounded-xl shadow text-center">
        <div className="text-4xl mb-2">{badge.icon}</div>
        <h4 className="text-lg font-bold">{badge.title}</h4>
        <p className="text-gray-600 text-sm">{badge.description}</p>
      </div>
    );
  };
  
  export default BadgeCard;
  