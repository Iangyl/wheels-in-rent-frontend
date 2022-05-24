import {v4 as uuidV4} from 'uuid';
import images from '../images';

const {pictures} = images

export const aboutUs = {
  title: 'Fleet',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, alias.',
  titleType: 'h1'
}

export const fleets = [
  {
    id: uuidV4(),
    title: 'Daewoo',
    time: 'weekend',
    price: 120,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
  },
  {
    id: uuidV4(),
    title: 'Lexus',
    time: 'week',
    price: 150,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
  },
  {
    id: uuidV4(),
    title: 'BMW',
    time: 'weekdays',
    price: 100,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
  },
]
