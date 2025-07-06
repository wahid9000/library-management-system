import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-indigo-950">
      <div className="w-[70%] mx-auto mb-12">
        <img src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
