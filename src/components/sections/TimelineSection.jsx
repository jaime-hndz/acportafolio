import { BaseSection } from "../layout/BaseSection";
import { RoadMap } from "../roadmap/RoadMap";

export const TimelineSection = () => {
  return (
    <div>
      <BaseSection id="timeline">
        <RoadMap />
      </BaseSection>
    </div>
  );
};
