const Testimonials = () => {
    return (
      <section className="py-16 bg-[#1E3A2E]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#E1FEA4] mb-6">What Our Users Say</h2>
          <p className="text-lg text-[#E1FEA4] mb-12">Don’t just take our word for it. Here’s what our users have to say about their experience.</p>
          
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#FAFAC6] p-8 rounded-lg shadow-lg max-w-lg mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-4">"NoeNoe has made recycling so much easier. I love the tracking and rewards system. It motivates me to recycle more!"</p>
              <p className="text-lg text-gray-500 font-semibold">John Doe</p>
              <p className="text-sm text-gray-400">Frequent Recycler</p>
            </div>
  
            {/* Testimonial 2 */}
            <div className="bg-[#FAFAC6] p-8 rounded-lg shadow-lg max-w-lg mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-4">"I love how engaging this platform is. The community is awesome and I feel great about contributing to a better planet."</p>
              <p className="text-lg text-gray-500 font-semibold">Sarah Smith</p>
              <p className="text-sm text-gray-400">Community Member</p>
            </div>
  
            {/* Testimonial 3 */}
            <div className="bg-[#FAFAC6] p-8 rounded-lg shadow-lg max-w-lg mx-auto mb-8">
              <p className="text-xl text-gray-700 mb-4">"NoeNoe makes recycling fun! It’s easy to track my progress and earn rewards for doing something good for the environment."</p>
              <p className="text-lg text-gray-500 font-semibold">Michael Johnson</p>
              <p className="text-sm text-gray-400">Eco Enthusiast</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  