/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef(); // permet de récupérer les informations du formulaire directement.
  const [EmailSendSuccess, setemailSendSuccess] = useState(false);
  const [emailSendError, setEmailSendError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1f7cp9",
        "template_eh9ppcs",
        form.current,
        "zXfB81EWEqwQNM0A6"
      )
      .then(
        () => {
          setemailSendSuccess(true);
          setEmailSendError(false);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setemailSendSuccess(false);
          setEmailSendError(true);
        }
      );
  };

  return (
    <div className="form" id="contact">
      <div className="form__title">
        <h2>
          {" "}
          <span>&#47;&#47;</span> Formulaire de contact
        </h2>
      </div>
      <div className="form__inputs">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__group">
            <label htmlFor="user_name">Nom</label>
            <input type="text" name="user_name" id="user_name" required />
          </div>
          <div className="form__group">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" required />
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />
          </div>
          <div className="form__button">
            <button type="submit" className="form__button--value">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      {EmailSendSuccess && <p>Message bien envoyé</p>}
      {emailSendError && (
        <p>Echec lors de l'envoi du message. Veuillez réessayer</p>
      )}
    </div>
  );
};
export default Contact;
