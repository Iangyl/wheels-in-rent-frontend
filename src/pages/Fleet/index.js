import React from "react";
import { BurgerWrapp, AboutUs, ItemsGrid } from "../../components";
import { fleetPage } from "../../assets/static";

const Fleet = () => {
  return (
    <BurgerWrapp>
      <AboutUs {...fleetPage.aboutUs} />
      <ItemsGrid items={fleetPage.fleets} />
    </BurgerWrapp>
  )
};

export default Fleet;
