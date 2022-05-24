import React from "react";
import { BurgerWrapp, AboutUs } from "../../components";
import { fleetPage } from "../../assets/static";

const Fleet = () => {
  console.log(fleetPage.aboutUs)
  return (
    <BurgerWrapp>
      <AboutUs {...fleetPage.aboutUs} />
    </BurgerWrapp>
  )
};

export default Fleet;
