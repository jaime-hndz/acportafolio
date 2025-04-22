import RoadMapItem from './RoadMapItem';
import { roadmapData } from './RoadmapData';
import './roadmap.css';
export const RoadMap = () => {
  return (
    <div className=" w-[80vw]">
      <section className="roadmap">
        <div className="roadmap__timeline">
          <div className="roadmap__line"></div>

          {roadmapData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              week={item}
              number={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

