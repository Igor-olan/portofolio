import React from "react";
// import Book1 from "../assets/books/book1.jpg";
import Vector from "../assets/website/blue-pattern.png";

const Hero = () => {
  // const [imageId] = React.useState(Book1);
  const [title] = React.useState("Igor Hasiholan");
  const [description] = React.useState(
    "I'm a passionate software developer with a strong background in web development and a keen interest in creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and delivering high-quality results. I thrive in collaborative environments and am always eager to learn and grow as a developer."
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
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 transition-all duration-300 ease-in-out animate-fade-in"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
            </div>
            {/* Image section
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 transition-all duration-300 ease-in-out animate-fade-in">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1">
                {ImageList.map((item) => (
                  <div key={item.id} className="transition-transform hover:scale-105 duration-200">
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    className="max-w-[100px] h-[100px] object-contain inline-block "
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
