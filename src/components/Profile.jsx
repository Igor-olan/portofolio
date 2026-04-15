import React from "react";
import pp from "../assets/profile/pp.jpeg";
import Vector from "../assets/website/blue-pattern.png";

const Hero = () => {
  const [imageId] = React.useState(pp);
  const [greet] = React.useState("Halo, saya");
  const [name] = React.useState("Igor Hasiholan");
  const [description] = React.useState(
    "Junior Backend Developer yang lagi fokus ngembangin skill di dunia server-side. Suka bikin API dan ngatur database biar semuanya jalan lancar. Masih terus belajar dan suka eksplor hal baru."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center 20%", // sedikit turun biar lebih enak dilihat
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex items-start"
      style={bgImage}
    >
      {/* wrapper sejajar navbar */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 w-full">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

          {/* TEXT */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1"
          >
            <h3
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              {greet}
            </h3>

            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              {name}
            </h1>

            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm mt-4 max-w-md"
            >
              {description}
            </p>
          </div>

          {/* IMAGE */}
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="flex justify-center sm:justify-end items-center order-1 sm:order-2 sm:pr-10 w-full"
          >
            <div className="h-[300px] sm:h-[400px] flex justify-center sm:justify-end items-center w-full">
              <img
                src={imageId}
                alt="profile"
                className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] object-contain rounded-full relative sm:left-6"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;