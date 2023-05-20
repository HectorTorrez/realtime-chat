import { useState } from "react";
import { Chat } from "../Chat/Chat";
// import { useAuthProvider } from "../hook/useAuthProvider";

export const Home = () => {
  const [room, setRoom] = useState("");
  const [isInChat, setIsInChat] = useState(null);
  // const { user } = useAuthProvider();

  // if (user && isInChat) {
  //   return <Chat />;
  // }

  const handleIsInChat = () => {
    if (room === "") return;
    setIsInChat(true);
  };

  return (
    <section className="bg-slate-900 h-screen text-white flex  flex-col items-center justify-center">
      {!isInChat ? (
        <>
          <label className="w-full flex flex-col items-center gap-10">
            <h3 className="font-bold text-6xl ">Enter a room</h3>
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="text"
              className="text-black text-xl rounded text-center "
            />
          </label>
          <button
            className="bg-indigo-600 text-white font-bold text-xl py-2 px-5 rounded hover:bg-slate-900 hover:border mt-5"
            onClick={() => handleIsInChat()}
          >
            ENTER
          </button>
        </>
      ) : (
        <Chat room={room} />
      )}
    </section>
  );
};
