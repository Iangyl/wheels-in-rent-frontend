import React from "react";
import {carPage} from '../../assets/static'
import { BurgerWrapp, AboutUs, CarInfoGrid } from "../../components";

const {car} = carPage;

const Car = () => {
  const title = `${car.brand} ${car.name}`
  return (
    <BurgerWrapp>
      <AboutUs title={title}/>
      <CarInfoGrid {...car} />
    </BurgerWrapp>
  )
}

export default Car
