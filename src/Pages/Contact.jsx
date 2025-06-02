import React from "react";
import CustomHero from "../Components/CustomHero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <CustomHero link={"contact"} text={"Contact"} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
