

const Banner = () => {
  return (
    <div className="bg-gray-900 py-16 mb-10 px-4 md:px-10 overflow-hidden">
      {/* Container with a width limit like your original code */}
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl relative min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-b-8 border-[#3b2b1a]">
        
        {/* Main Content */}
        <div className="z-10">
          <h3 className="text-white text-xl md:text-2xl uppercase tracking-widest font-bold mb-2">
            Welcome To
          </h3>
          <h1 className="text-[#ffb347] text-6xl md:text-8xl font-['Gloria_Hallelujah',_cursive] drop-shadow-lg mb-4">
            BOOK BUDDY
          </h1>
          <p className="text-white text-lg md:text-2xl font-medium italic">
            Unlocking Worlds of Knowledge
          </p>
          
        
        </div>
      
        {/* Bookshelf Accents (Left & Right) */}
        <div className="absolute top-0 left-0 h-full w-16 bg-[#3d387a] flex flex-col gap-2 p-2 hidden sm:flex">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-full h-12 rounded ${i % 2 === 0 ? 'bg-red-400' : 'bg-blue-400'}`}></div>
            ))}
        </div>
        <div className="absolute top-0 right-0 h-full w-16 bg-[#3d387a] flex flex-col gap-2 p-2 hidden sm:flex">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-full h-12 rounded ${i % 2 === 0 ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Banner;