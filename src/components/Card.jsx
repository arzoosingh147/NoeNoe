// src/components/Card.jsx

const Card = ({ title, description, icon }) => {
    return (
      <div className="bg-[#FAFAC6] shadow-md rounded-xl p-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default Card;
  