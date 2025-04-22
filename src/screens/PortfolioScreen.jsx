import { Menu2 } from "../components/layout/Menu2";
import { AboutSection } from "../components/sections/AboutSection";
import { TimelineSection } from "../components/sections/TimelineSection";

export const PortfolioScreen = () => {
  return (
    <>
      <div className="flex ">
        {/* <Menu /> */}
        <div className=" w-screen w-full">


          <AboutSection />
          <TimelineSection />
        </div>
        <Menu2 />
      </div>
    </>
  );
};
