import React from "react";
import pp from "../assets/profile/pp.jpeg";
import Vector from "../assets/website/blue-pattern.png";

const Hero = () => {
  const [imageId] = React.useState(pp);
  const [greet] = React.useState("Halo, saya");
  const [name] = React.useState("Igor Hasiholan");
  const [description] = React.useState(
    "Saya adalah siswa tingkat akhir yang memiliki minat dalam pengembangan web, khususnya di bidang backend. Saya berpengalaman menggunakan Node.js dengan Express.js"
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0 -mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos-once="true"
              className="-mt-20 ml-16 flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 transition-all duration-300 ease-in-out animate-fade-in "
            >
              <h3
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {greet}
              </h3>
              <h6
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {name}
              </h6>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm mt-5"
              >
                {description}
              </p>
            </div>
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 transition-all duration-300 ease-in-out animate-fade-in">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
