import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "../MainButton";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center"
      >
        <div className="container-hero">
          {/* hero section */}
          <div
            className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]"
          >
            <h1 className="font-bold text-[48px] uppercase mb-[4rem] min450:text-[40px]">
              Free trial session <br />
              <span className="font-thin"> with a trainer</span>
            </h1>

            <MainButton
              color={`text-black`}
              bg={`bg-[#FAFF00]`}
              text="our classes"
              goTo="/classes"
            />
          </div>
        </div>
        {/* socials */}
        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-[#FAFF00] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands rotate-90 hover:text-[#FAFF00] fa-facebook text-3xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FAFF00] fa-twitter text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FAFF00]  fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
