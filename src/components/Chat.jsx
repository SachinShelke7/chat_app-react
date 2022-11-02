import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] relative overflow-y-scroll scrollbar-hide`,
};

const Chat = () => {
  const [messages, setMessages] = useState();
  const element = document.getElementById("scroll");
  useLayoutEffect(() => {
    messages ? element.scrollIntoView({ behavior: "smooth" }) : undefined;
  }, [messages]);

  useEffect(() => {
    const test = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(test, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages?.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
        <span className="pb-10" id="scroll"></span>
      </main>
      {/* send msg component */}
      <SendMessage element={element} />
    </>
  );
};

export default Chat;
