import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-zinc-900 text-white outline-none border-none`,
  button: `w-[20%] bg-zinc-800 text-white hover:bg-green-700 transform transition-all duration-[500ms]`,
};

const SendMessage = () => {
  const [input, setInput] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.length >= 1) {
      setInput("");
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
    } else {
      alert("empty msg");
    }
  };

  return (
    <form className={style.form} onSubmit={handleSendMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className={style.input}
        placeholder="Message"
      />
      <button type="submit" className={style.button}>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
