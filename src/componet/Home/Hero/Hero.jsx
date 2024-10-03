import heroGrapich from "../../../assets/hero-graphics.svg";

const Hero = () => {
  return (
    <section className="bg-[#127657] pt-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-1">
          <div className="ml-36 mt-20 ">
            <h2 className="text-[52px] leading-tight text-white font-bold  ">
              The Future of <br /> Learning starts <br /> with students at{" "}
              <br /> the center
            </h2>
            <button className="bg-[#038c61] py-2 px-6 text-white text-lg rounded-full mt-6 font-medium">
              Learn More
            </button>
          </div>
          <div className="mr-10">
            <img
              src={heroGrapich}
              alt="hero grapich"
              className="w-[450px] animate-bounceDown"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
