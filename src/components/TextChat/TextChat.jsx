/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const TextChat = ({ text, chatContainerRef }) => {
  return (
    <section
      ref={chatContainerRef}
      className="text-white flex flex-col border-5 border-indigo-600 mr-4 md:w-3/5 md:ml-5 h-5/6 overflow-y-scroll"
    >
      {/* <button
        onClick={() => {
          window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
        }}
      >
        Scroll
      </button> */}
      {text?.map((t) => (
        <article key={t.id} className="flex  gap-5 w-full ">
          <h3 className="font-bold text-lg text-indigo-400 md:text-2xl md:w-44">
            {t.user}
          </h3>
          <p className="text-white font-semibold md:text-lg md:w-10/12">
            {t.text}
          </p>
        </article>
      ))}
    </section>
  );
};
