import { BaseSection } from "../layout/BaseSection";
import { RoadMap } from "../roadmap/RoadMap";

export const TimelineSection = () => {
  return (
    <div>
      <BaseSection id="timeline">
        <RoadMap />
        <div className="text-center text-white text-2xl font-bold m-20">
          <span>Conclusión:</span>
          <p>aprendí mucho 👍</p>
          </div>

      </BaseSection>
    </div>
  );
};
