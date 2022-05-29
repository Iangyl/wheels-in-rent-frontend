import images from '../images';

const {pictures} = images

export const aboutUs = {
  title: 'Fleet',
  text: `You may have heard the auto industry is experiencing a combination of high demand and global supply-chain constraints. This means our ability to build new vehicles with some features may not be available. We're doing everything we can to innovate our way through this and meet the demand for new vehicles. We will continue to provide updates as we have them or you can contact us for additional assistance.`,
  titleType: 'h1'
}

export const fleets = [
  {
    id: 1,
    title: 'Volkswagen',
    time: 'weekend',
    price: 120,
    image: pictures.sedan,
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
    image: pictures.crossover,
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
    image: pictures.hatchback,
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
    image: pictures.sedan,
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
    image: pictures.universal,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 7,
      transmissionType: 'automatic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
  {
    id: 6,
    title: 'Mazda',
    time: 'weekdays',
    price: 110,
    image: pictures.minivan,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    characteristics: {
      sitsQuantity: 7,
      transmissionType: 'automatic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
]
