const ProjectCard = ({ name, desc, github, img }) => {
  return (
    <div className="relative w-[300px] cursor-pointer group">

      {/* TOP CARD */}
      <div className="
          w-full h-[200px] rounded-xl
          bg-[#222222] border border-[#004c66]
          flex flex-col items-center justify-center
          transform translate-y-1/2
          transition-all duration-500
          group-hover:translate-y-0
          group-hover:bg-gradient-to-br
          group-hover:from-[#004c66]
          group-hover:to-[#0d324d]
          z-[2]
        ">
        <img
          src={img}
          alt={name}
          className="w-[80px] h-[80px] rounded-full object-cover opacity-80 group-hover:opacity-60 transition"
        />

        <h1 className="text-white text-lg mt-3">{name}</h1>
        <h3 className="text-white/70 text-sm mt-1">Project</h3>
      </div>

      {/* BOTTOM CARD */}
      <div className="
          w-full h-[200px] rounded-xl
          bg-white/40 backdrop-blur
          border border-[#004c66]
          shadow-xl
          flex flex-col justify-center
          px-4
          transform -translate-y-1/2
          transition-all duration-500
          group-hover:translate-y-0
        ">
        <p className="text-black/80 text-sm leading-relaxed">
          {desc}
        </p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 px-5 py-2 text-white text-sm rounded-full
            bg-gradient-to-br from-[#004c66] to-[#0d324d]
            hover:opacity-90 transition text-center
          "
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
