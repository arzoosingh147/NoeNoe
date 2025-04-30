import { FaRecycle, FaMedal, FaUserCheck } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16 bg-[#1E3A2E]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#E1FEA4] mb-6">Our Features</h2>
        <p className="text-lg text-[#E1FEA4] mb-12">Explore the amazing features we offer to help you recycle and earn rewards!</p>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-[#FAFAC6] p-8 rounded-xl shadow-lg text-center">
            <FaRecycle className="text-5xl text-[#1E3A2E] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Easy Recycling</h3>
            <p className="text-gray-600">Quickly upload items to recycle and donate with a few clicks. Making recycling hassle-free!</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-[#FAFAC6] p-8 rounded-xl shadow-lg text-center">
            <FaMedal className="text-5xl text-[#1E3A2E] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Earn Rewards</h3>
            <p className="text-gray-600">Track your recycling progress and earn badges and rewards as you contribute to a greener world.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-[#FAFAC6] p-8 rounded-xl shadow-lg text-center">
            <FaUserCheck className="text-5xl text-[#1E3A2E] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Engagement</h3>
            <p className="text-gray-600">Join a community of eco-conscious users, share tips, and help each other recycle more effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
