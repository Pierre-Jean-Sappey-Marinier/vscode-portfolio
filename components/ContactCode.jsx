import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "pierre-jean-sappey-marinier.com",
    href: "https://pierre-jean-sappey-marinier.com/",
  },
  {
    social: "email",
    link: "pierrejean.sm@gmail.com",
    href: "mailto:pierrejean.sm@gmail.com",
  },
  {
    social: "github",
    link: "Pierre-Jean-Sappey-Marinier",
    href: "https://github.com/Pierre-Jean-Sappey-Marinier",
  },
  {
    social: "linkedin",
    link: "Pierre-Jean-Sappey-Marinier",
    href: "https://www.linkedin.com/in/pierre-jean-sappey-marinier-4873a468/",
  },
];

const contactPeople = [
  {
    social: "Adeline Siegrist, développeuse fullstack Senior",
    link: "adeline.siegrist@gmail.com",
    href: "adeline.siegrist@gmail.com",
  },
];

const ContactCode = () => {
  return (
    <>
      <div className={styles.code}>
        <p className={styles.line}>
          <span className={styles.className}>.socials</span> &#123;
        </p>
        {contactItems.slice(0, 8).map((item, index) => (
          <p className={styles.line} key={index}>
            &nbsp;&nbsp;&nbsp;{item.social}:{" "}
            <a href={item.href} target="_blank" rel="noopener">
              {item.link}
            </a>
            ;
          </p>
        ))}
        {contactItems.slice(8, contactItems.length).map((item, index) => (
          <p className={styles.line} key={index}>
            &nbsp;&nbsp;{item.social}:{" "}
            <a href={item.href} target="_blank" rel="noopener">
              {item.link}
            </a>
            ;
          </p>
        ))}
        <p className={styles.line}>&#125;</p>
        <br></br>
        <div className={styles.code2}>
          <p className={styles.line}>
            <span className={styles.className}>.recommandations</span> &#123;
          </p>

          <div className={styles.p}>
            <p className={styles.line}>
              &nbsp;&nbsp; Adeline Siegrist, développeuse Senior :{" "}
            </p>
            <p className={styles.line}>
              <a href="mailto:adeline.siegrist@gmail.com">
                &nbsp;&nbsp; adeline.siegrist@gmail.com
              </a>
            </p>

            <p className={styles.line}>
              &nbsp;&nbsp;Virgile Marin, développeur Senior :{" "}
            </p>
            <p className={styles.line}>
              <a href="mailto:marin.virgile@gmail.com">
                &nbsp;&nbsp;marin.virgile@gmail.com
              </a>
            </p>
          </div>
          <p className={styles.line}>&#125;</p>
        </div>
      </div>
    </>
  );
};

export default ContactCode;
