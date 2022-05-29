import images from '../images';

const {pictures} = images

export const aboutUs = {
  title: 'Offers',
  text: 'The best offers from our company!',
  titleType: 'h1'
}

export const offers = [
  {
    id: 1,
    title: 'Weekend offer. AUDI.',
    time: 'weekend',
    price: 120,
    image: pictures.offer1,
    text: 'The fastest audi only for you!',
    characteristics: {
      sitsQuantity: 5,
      transmissionType: 'mechanic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
  {
    id: 2,
    title: 'Luxury car',
    time: 'week',
    price: 150,
    image: pictures.offer2,
    text: 'Luxury cars at low prices.',
    characteristics: {
      sitsQuantity: 2,
      transmissionType: 'automatic',
      volumeAmount: 225,
      doorsQuantity: 3,
    }
  },
  {
    id: 3,
    title: 'Best cars offer',
    time: 'weekdays',
    price: 100,
    image: pictures.offer3,
    text: 'Any car of your choice.',
    characteristics: {
      sitsQuantity: 7,
      transmissionType: 'mechanic',
      volumeAmount: 225,
      doorsQuantity: 5,
    }
  },
]
