const ProgressBar = ({ value, max }) => {
    const percent = (value / max) * 100;
  
    return (
      <div className="w-full bg-white rounded-full h-6 overflow-hidden">
        <div
          className="h-full bg-[#1E3A2E] transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  