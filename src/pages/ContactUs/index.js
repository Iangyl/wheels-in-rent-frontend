import React from "react";
import { BurgerWrapp, AboutUs, ContactUs } from "../../components";
import { contactUsPage } from "../../assets/static";

const ContactUsPage = () => {
  return (
    <BurgerWrapp>
      <AboutUs {...contactUsPage.aboutUs} />
      <ContactUs />
    </BurgerWrapp>
  )
};

export default ContactUsPage;
