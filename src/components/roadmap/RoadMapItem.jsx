import { Carousel } from "antd";
import React from "react";

const RoadMapItem = ({ week, number }) => {
  const carouselRef = React.createRef();
  return (
    <div
      className={`roadmap-item ${
        number % 2 === 0 ? "roadmap-item--even" : "roadmap-item--odd"
      }`}
    >
      <div className="roadmap-item__marker"></div>
      <div className="roadmap-item__content flex flex-col gap-4">
        <h3 className="roadmap-item__stage">
          Semana {number + 1}: {week.title}
        </h3>
        <hr />
        {week.images.length > 0 ? (
            <Carousel autoplay  className="w-full" ref={carouselRef}>
              {week.images.map((i) => (
                <div
                  key={i}
                  onClick={() => {
                    carouselRef.current.next();
                  }}
                >
                  <div
                    className={`w-full h-[600px] bg-contain bg-no-repeat bg-center m-auto ${i}`}
                  ></div>
                </div>
              ))}
            </Carousel>
          ) : null}
        <span>{week.description}</span>
        <ul>
          {week.files.map((file, index) => (
            <li key={index}>
              <a
                href={`https://github.com/jaime-hndz/acportafolio/tree/main/src/resources/evidences/week${number+1}/${file}.pdf`}
                target="_blank"
                className="hover:text-orange-400 transition ease-in-out cursor-none"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default RoadMapItem;
