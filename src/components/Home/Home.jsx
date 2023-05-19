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
    <section>
      {!isInChat ? (
        <>
          <label>
            <h1>Room</h1>
            <input onChange={(e) => setRoom(e.target.value)} type="text" />
          </label>
          <button onClick={() => handleIsInChat()}>ENTER</button>
        </>
      ) : (
        <Chat room={room} />
      )}
    </section>
  );
};
