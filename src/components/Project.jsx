const Project = () => {

    const projek = [
        {
            id: 1,
            name: "Projek Elist",
        }
    ]

    return (
        <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="container pb-8 sm:pb-0 -mt-16">
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
                    Projek
                  </h3>
                </div>
            </div>
        </div>
        
    )
}

export default Project;