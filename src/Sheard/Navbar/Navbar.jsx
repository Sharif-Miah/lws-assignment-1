import lws from "../../assets/lws.svg";

const Navbar = () => {
  return (
    <section className="bg-[#127657] text-3xl py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-3">
          <div>
            <img src={lws} alt="lws" className="w-32" />
          </div>
          <div>
            <button className="px-6 py-1 font-medium text-white bg-black text-[16px] rounded-full">
              Get Admition
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
