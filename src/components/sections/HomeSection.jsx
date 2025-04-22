import { BaseSection } from "../layout/BaseSection";
import { DecoderText } from "../decoder-text/decoder-text";
import MouseScroll from "../mouse-scroll/MouseScroll";
import { TypingEffect } from "../TypingEffect";

export const HomeSection = () => {
  return (
    <BaseSection id="home">
      <div className="text-neutral-200  py-3 px-10 relative z-20 pepe md:translate-x-10 ">
        <div className="tracking-widest md:text-xl deco text-balance  ">
          <DecoderText text="JAIME HERNÁNDEZ | ID:1099041 " delay={1000} />
        </div>
        <TypingEffect />
      </div>
        <MouseScroll />
    </BaseSection>
  );
};
