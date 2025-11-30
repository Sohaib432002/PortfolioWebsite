const ProjectCard = ({ name, desc, github, img, simple }) => {
  return (
    <div className={`bg-gray-900 text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 ${simple ? "p-2 rounded-md shadow-none text-sm flex-row gap-2 text-left" : ""}`}>
      <img
        src={img}
        alt={name}
        className={`${simple ? "w-10 h-10" : "w-20 h-20 mb-4"}`}
      />
      <div>
        <h3 className={`${simple ? "text-sm font-semibold" : "text-xl font-bold mb-2"}`}>{name}</h3>
        {!simple && <p className="text-gray-300">{desc}</p>}
      </div>
      {!simple && (
          <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 block w-full text-center bg-cyan-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors shadow-md"
  >
    GitHub
  </a>
      )}
    </div>
  );
};

export default ProjectCard;
