/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const TextChat = ({ text, chatContainerRef }) => {
  return (
    <section
      ref={chatContainerRef}
      className="text-white flex flex-col-reverse border-5 border-indigo-600 w-full mr-4 lg:w-3/5 xl:ml-5 h-5/6 overflow-y-scroll"
    >
      {/* <button
        onClick={() => {
          window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
        }}
      >
        Scroll
      </button> */}
      {text?.map((t) => (
        <article
          key={t.id}
          className="flex  gap-5 w-full items-end ml-2 lg:m-0   "
        >
          <h3 className="font-bold text-md text-indigo-400 xl:text-2xl xl:w-44">
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
