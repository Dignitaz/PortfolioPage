import React, { useContext, useRef, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import emailjs from "@emailjs/browser";
import "../styles/Form.scss";

const Form = () => {
  const form = useRef();
  const { usedDictionary } = useContext(LanguageContext);
  const [authorInput, setAuthorInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  const hanldeChangeAuthor = (e) => {
    setAuthorInput(e.target.value);
  };
  const hanldeEmialChange = (e) => {
    setEmailInput(e.target.value);
  };
  const hanldeMsgChange = (e) => {
    setMsgInput(e.target.value);
  };

  // // const cleanForm = () => {
  // setAuthorInput({
  //   authorInput: "",
  // });
  // setEmailInput({
  //   emailInput: "",
  // });
  // setMsgInput({
  //   msgInput: "",
  // });
  // //   console.log("TWOJA STARA XDDDD");
  // // };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("KURWA");
    if (authorInput === "") {
      alert(`${usedDictionary.form_msg1}`);
    } else if (emailInput === "") {
      alert(`${usedDictionary.form_msg2}`);
    } else if (emailInput.indexOf("@") < 0 || emailInput.indexOf(".") < 0) {
      alert(`${usedDictionary.form_msg3}`);
    } else if (msgInput === "") {
      alert(`${usedDictionary.form_msg4}`);
    } else {
      emailjs
        .sendForm(
          "service_6bvyumm",
          "template_63jkb4b",
          form.current,
          "Ol_4M8wc4lS_QqhR7"
        )
        .then(() => {
          alert(`${usedDictionary.form_msg5}`);
        })
        .then(() => {
          clearForm();
        });
    }
  };
  const clearForm = () => {
    setAuthorInput("");
    setEmailInput("");
    setMsgInput("");
  };
  return (
    <div id="form" className="form">
      <div className="form__title">
        <h3> {usedDictionary.form_title}</h3>
      </div>
      <form className="form__form" ref={form} onSubmit={sendEmail}>
        <input
          className="form__form--input"
          type="text"
          name="user_name"
          value={authorInput}
          placeholder={usedDictionary.form_name}
          onChange={hanldeChangeAuthor}
        />
        <input
          className="form__form--input"
          type="text"
          name="user_email"
          value={emailInput}
          placeholder={usedDictionary.form_email}
          onChange={hanldeEmialChange}
        />
        <textarea
          className="form__form--textarea"
          name="message"
          value={msgInput}
          placeholder={usedDictionary.form_msg}
          onChange={hanldeMsgChange}
        />
        <input
          className="form__form--button"
          type="submit"
          value={usedDictionary.form_btn}
        />
      </form>
    </div>
  );
};

export default Form;
