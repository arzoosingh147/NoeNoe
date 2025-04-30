import { motion } from "framer-motion";
import Features from './Features';
import Testimonials from './Testimonials';
import Card from '../components/Card';
import heroImage from '../assets/hero.png';
import backgroundImage from '../assets/background.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover mt- bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
         <div className="absolute top-0 left-0 w-full h-full "></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#E1FEA4] px-6 md:px-12">
  <motion.h1 
    className="text-5xl font-extrabold leading-tight mb-4"
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }}>
    Recycle & Earn: Impact the Environment
  </motion.h1>

          <motion.p 
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }}>
            Join the movement of eco-champions and make a difference today by recycling & earning rewards!
          </motion.p>

          <motion.a 
            href="/upload"
            className="bg-[#FAFAC6] hover:bg-[#FAFAC6] text-[#1E3A2E] rounded-xl border-2 border-[#1E3A2E] py-3 px-6  text-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.5 }}>
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Card Highlights Section */}
      <section className="py-16 px-6 md:px-12 bg-[#1E3A2E]">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Image on the left */}
    <div className="w-full lg:w-1/2">
      <img
        src={heroImage}
        alt="Recycling Visual"
        className="w-auto h-auto "
      />
    </div>

    {/* Cards on the right */}
    <div className="w-full lg:w-1/2 grid md:grid-cols-1 gap-8">
      <Card 
        title="Eco-Friendly Impact" 
        description="Your efforts help reduce pollution and promote sustainable living." 
        icon="" 
      />
      <Card 
        title="Track Progress" 
        description="Visualize your recycling journey with badges and streaks." 
        icon="" 
      />
      <Card 
        title="Earn Rewards" 
        description="Collect points and unlock achievements as you recycle." 
        icon="" 
      />
    </div>
  </div>
</section>


      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
