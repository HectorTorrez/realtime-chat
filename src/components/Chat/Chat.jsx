import { useEffect, useState } from "react";
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

// eslint-disable-next-line react/prop-types
export const Chat = ({ room }) => {
  const [inputText, setInputText] = useState("");

  const [text, setText] = useState([]);
  const messageRef = collection(db, "messages");

  console.log(text);

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
    setText("");
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
      console.log(messages);
      setText(messages);
    });

    return () => unsuscribe();
  }, []);

  return (
    <section className=" flex flex-col justify-end items-center  w-screen h-screen">
      <TextChat text={text} />
      <article className="h-fit flex gap-5 mb-10 w-full justify-center">
        <input
          type="text"
          className="w-4/5 text-black text-xl border-2 rounded border-indigo-600"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white font-bold text-xl py-2 px-5 rounded hover:bg-slate-900 hover:border "
        >
          SEND
        </button>
      </article>
    </section>
  );
};
