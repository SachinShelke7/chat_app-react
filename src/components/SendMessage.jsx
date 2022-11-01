import React from "react";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = () => {
  return (
    <div className={style.form}>
      <input type="text" className={style.input} placeholder="Message" />
      <button type="submit" className={style.button}>
        Send
      </button>
    </div>
  );
};

export default SendMessage;
