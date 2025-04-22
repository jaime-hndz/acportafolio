import { BaseSection } from "../layout/BaseSection";
import MouseScroll from "../mouse-scroll/MouseScroll";

export const AboutSection = () => {
  return (
    <BaseSection id="about">
      <div
        className="text-white lg:w-[700px] flex flex-col lg:flex-row gap-10 transition-all duration-500  "
        id="animatedDiv"
      >
          <div className="lg:w-3/4 p-10 flex flex-col gap-10">
            <div className="text-5xl tracking-widest font-bold">
              Portafolio INS371
            </div>
            <div className="text-2xl pepe ">
              <p>
                Este portafolio contiene lo realizado en la materia de
                arquitectura del computador. Lo hice modificando algunas cosas
                de mi <a className="underline text-blue-200" href="https://jaime-hndz.github.io/jportfolio/">portafolio</a> web. Tambien tomé el timeline de <a className="underline text-blue-200" href="https://github.com/dev-lawrence/timeline">este</a> repositorio.
              </p>
            </div>
          </div>
          <div className="w-3/4 h-80  bg-contain bg-no-repeat m-auto bg-[url('/src/resources/profile2.png')]"></div>
      </div>
      <MouseScroll />
    </BaseSection>
  );
};
