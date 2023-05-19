/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const TextChat = ({ text }) => {
  return (
    <div className="text-white flex-col border-5 border-indigo-600">
      {text?.map((t) => (
        <div key={t.id} className="flex gap-5">
          <h3 className="font-bold text-indigo-700">{t.user}</h3>
          <p className="text-black">{t.text}</p>
        </div>
      ))}
    </div>
  );
};
