import images from '../images';

const {pictures} = images

export const aboutUs = {
  title: 'Fleet',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, alias.',
  titleType: 'h1'
}

export const fleets = [
  {
    id: 1,
    title: 'Daewoo',
    time: 'weekend',
    price: 120,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 5,
      transmissionType: 'mechanic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
  {
    id: 2,
    title: 'Lexus',
    time: 'week',
    price: 150,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 2,
      transmissionType: 'automatic',
      volumeAmount: 225,
      doorsQuantity: 3,
    }
  },
  {
    id: 3,
    title: 'BMW',
    time: 'weekdays',
    price: 100,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 7,
      transmissionType: 'mechanic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
  {
    id: 4,
    title: 'Volvo',
    time: 'weekdays',
    price: 180,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 7,
      transmissionType: 'mechanic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
  {
    id: 5,
    title: 'Ford',
    time: 'weekdays',
    price: 110,
    image: pictures.car4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 7,
      transmissionType: 'automatic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
]
