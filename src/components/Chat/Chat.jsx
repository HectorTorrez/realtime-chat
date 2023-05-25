import { useEffect, useRef, useState } from "react";
import { TextChat } from "../TextChat/TextChat";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { Navbar } from "../Navbar/Navbar";

// eslint-disable-next-line react/prop-types
export const Chat = ({ room }) => {
  const [inputText, setInputText] = useState("");

  const [text, setText] = useState([]);
  const messageRef = collection(db, "messages");

  const chatContainerRef = useRef(null);
  useEffect(() => {
    scrollChatToBottom();
  }, []);
  useEffect(() => {
    window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
  }, []);

  const scrollChatToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const handleSubmit = async () => {
    try {
      if (inputText === "") return;
      await addDoc(messageRef, {
        text: inputText,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
      });
    } catch (error) {
      console.log(error);
    }
    scrollChatToBottom();

    const chatContainer = chatContainerRef.current;
    const lastMessage = chatContainer.lastElementChild;
    lastMessage.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessage, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setText(messages);
    });

    return () => unsuscribe();
  }, []);

  const handlerEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
      setInputText("");
    }
  };

  return (
    <>
      <Navbar name={auth.currentUser.displayName} />
      <section className="flex items-end h-screen  w-full justify-center overflow-auto ">
        <TextChat text={text} chatContainerRef={chatContainerRef} />
      </section>
      <section className=" flex flex-col justify-end items-end xl:items-start xl:w-3/5  h-fit w-full lg:w-3/5">
        <article className="h-fit flex  gap-5 xl:gap-12 mb-10 w-full justify-center mt-10">
          <input
            type="text"
            className="w-4/5 md:w-full text-black text-xl border-2 rounded border-indigo-600"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handlerEnter}
            maxLength={500}
            placeholder="Type your message here..."
          />
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white font-bold text-xl py-2 px-5 rounded hover:bg-slate-900 hover:border "
          >
            SEND
          </button>
        </article>
      </section>
    </>
  );
};
