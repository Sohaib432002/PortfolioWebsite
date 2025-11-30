const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-2">
      <div className="bg-gray-900 text-white w-full max-w-xs xs:max-w-sm sm:max-w-md p-4 xs:p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-700">

        <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-cyan-400 mb-3">
          {skill.title}
        </h2>

        <p className="text-gray-300 text-sm xs:text-base sm:text-lg leading-relaxed mb-4">
          {skill.description}
        </p>

        {skill.extraDetails && skill.extraDetails.length > 0 && (
          <ul className="list-disc list-inside text-gray-300 text-sm xs:text-base mb-4">
            {skill.extraDetails.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onClose}
          className="w-full bg-cyan-500 px-4 py-2 xs:px-5 xs:py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors text-sm xs:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SkillModal;
