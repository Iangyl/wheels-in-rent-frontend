import React from "react";
import { BurgerWrapp, AboutUs, ItemsGrid } from "../../components";
import { offerPage } from "../../assets/static";

const OffersPage = () => {
  return (
    <BurgerWrapp>
      <AboutUs {...offerPage.aboutUs} />
      <ItemsGrid items={offerPage.offers} />
    </BurgerWrapp>
  )
};

export default OffersPage;
