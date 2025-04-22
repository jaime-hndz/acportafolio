import { useTranslation } from "react-i18next";

export const Menu = () => {
  const {t} = useTranslation()
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuOption = ({text, id}) => (
    <div className="rotate-90 py-12 tracking-wide pepe select-none transition ease-in-out  hover:text-sky-400 hover:translate-x-2 lg:block hidden" onClick={() => scrollToSection(id)}>
      {text}
    </div>
  );

  return (
    <div className=" h-screen fixed gap-7 pt-1 md:pt-5 z-50  text-white flex flex-col items-center lg:-mx-4  text-2xl h-screen">
      <div>
        <div className="logo" onClick={() => scrollToSection("home")} />
      </div>
      <MenuOption text={t('aboutTitle')} id="about" />
      <MenuOption text={t('projectsTitle')} id="projects" />
      <MenuOption text={t('contactTitle')} id="contact" />
    </div>
  );
};
