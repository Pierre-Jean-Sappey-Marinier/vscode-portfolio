import { useRouter } from "next/router";
import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: contact.jsx:8 ~ ContactPage ~ router:", router);
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`/api/contact2`, {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    });
    console.log("🚀 ~ file: contact.jsx:16 ~ submitForm ~ res:", res);
    if (res.ok) {
      alert("Votre message à bien été envoyé !");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("There was an error. Please try again in a while.");
    }
  };
  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   console.log(process.env.NEXT_PUBLIC_API_URL);
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
  //     method: "POST",
  //     body: JSON.stringify({ name, email, subject, message }),
  //   });
  //   if (res.ok) {
  //     alert("Votre message à bien été envoyé !");
  //     setName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   } else {
  //     alert("There was an error. Please try again in a while.");
  //   }
  // };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Contactez-moi par les réseaux</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Ou envoyez-moi un message !</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Sujet</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyez</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
