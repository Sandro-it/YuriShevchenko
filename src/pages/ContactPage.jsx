import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (name.length < 3 || name.length > 30) {
      errors.name = t("contact_form_error_name");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = t("contact_form_error_email");
    }
    if (message.length < 10 || message.length > 500) {
      errors.message = t("contact_form_error_message");
    }
    return errors;
  };

  const handleFocus = (field) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      emailjs
        .sendForm(
          "service_muaxdk6",
          "template_9sb97t2",
          e.target,
          "n0r__iuFChqjNYKvx"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert(t("contact_form_success"));
            setIsSubmitted(true);

            setName("");
            setEmail("");
            setMessage("");

            setIsSubmitted(false);
          },
          (error) => {
            console.log(error.text);
            alert(t("contact_form_error"));
          }
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("contact_title")} | Yuri Shevchenko</title>
        <meta name="description" content={t("contact_description")} />
      </Helmet>
      <div className="container">
        <div className={styles.contactPage}>
          <div className={styles.leftColumn}>
            <h1>{t("contact_rights_managers")}</h1>
            <p>{t("contact_info")}</p>
            <p>{t("contact_help")}</p>
            <p>
              {t("contact_email")}: <strong>shevchenko.legacy@gmail.com</strong>
            </p>
          </div>
          <div className={styles.rightColumn}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("contact_form_name_label")}</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleFocus("name")}
                  placeholder={t("contact_form_name_placeholder")}
                  className={errors.name ? styles.inputError : ""}
                />
                {errors.name && (
                  <p className={styles.errorText}>{errors.name}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t("contact_form_email_label")}</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus("email")}
                  placeholder={t("contact_form_email_placeholder")}
                  className={errors.email ? styles.inputError : ""}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">
                  {t("contact_form_message_label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => handleFocus("message")}
                  placeholder={t("contact_form_message_placeholder")}
                  className={errors.message ? styles.inputError : ""}
                  rows="5"
                />
                {errors.message && (
                  <p className={styles.errorText}>{errors.message}</p>
                )}
              </div>
              <button type="submit" disabled={isSubmitted}>
                {t("contact_form_submit_button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
