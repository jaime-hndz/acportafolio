export const BlankSection = ({ id }) => {
  const colors = {
    home: "bg-black/50",
    about: "bg-slate-900/70 ",
    projects: "bg-slate-900",
  };
  return (
    <div
      className={`${colors[id]} w-full h-[35vh] flex items-center justify-center relative`}
    ></div>
  );
};
