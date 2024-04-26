import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    heading: `Customer Service`,
    desc: `Lorem ipsum dolor sit amet, adipiscing elit. Lorem ipsum dolor sit amet, adipiscing elit. Lorem ipsum dolor sit amet, adipiscing elit.`,
  },
  {
    id: 2,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    heading: `Customer Service`,
    desc: `Lorem ipsum dolor sit amet, adipiscing elit. Lorem ipsum dolor sit amet, adipiscing elit. Lorem ipsum dolor sit amet, adipiscing elit.`,
  },
  {
    id: 3,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    heading: `Customer Service`,
    desc: `Lorem ipsum dolor sit amet, adipiscing elit. Lorem ipsum dolor sit amet, adipiscing elit. Lorem ipsum dolor sit amet, adipiscing elit.`,
  },
];

const FeatureCards = () => {
  return (
    <div className="w-full my-10">
      <Heading
        subHeading={"Features"}
        heading={"Works out off the"}
        gradientContent={"Box"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus commodo velit, id efficitur purus condimentum nec. Phasellus velit."
        }
      />
      <div className="grid md:grid-cols-3 mt-10 gap-4 px-4">
        {cardData?.map((data, index) => (
          <div
            key={data.id}
            className="col-span-1 p-8 hover:shadow-2xl rounded-lg transition-all duration-500 cursor-pointer text-center"
          >
            <div className="bg-primary w-fit p-4 rounded-full mb-4 text-white mx-auto">
              {data.Icon}
            </div>
            <div>
              <p className="text-xl font-bold mb-1">{data.heading}</p>
              <p className="text-sm text-gray">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
