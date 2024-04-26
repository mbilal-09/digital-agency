import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="my-10">
      <Heading
        subHeading={"Projects"}
        heading={"Explore our Work"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus commodo velit, id efficitur purus condimentum nec. Phasellus velit."
        }
      />
      <div className="my-10 px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src="/Images/Featured-Project1.png"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    Hollywood exhibition
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src="/Images/Featured-Project2.png"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    Genius Loci
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src="/Images/Featured-Project1.png"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    Big Apple
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src="/Images/Featured-Project2.png"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">Sun City</h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src="/Images/Featured-Project1.png"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    Paris flavor
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>

          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src="/Images/Featured-Project2.png"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    Sky is the limit
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
