import images from '../images'
import { v4 as uuidv4 } from 'uuid';

const {pictures, icons} = images

const banner = {
  title: 'Let’s find your ideal car',
  subtitle: 'Better than us only helicopters!',
  image: pictures.banner,
  button: true,
}

const aboutUs = {
  title: 'About Us',
  text: `Looking for ways to spend your holiday? Why not go on a US car rental tour. The United States has some indefinable quality that makes it perfect for road trips. Cruising down the interstate with a USA car hire and the wind in your hair, your favorite tunes playing and miles of open road ahead has to be the ideal start to any adventure. The sheer diversity of landscapes and cultures within the continental United States alone makes for myriad tour opportunities, no matter what kind of journey you’re after.

  You can’t go wrong with a car rental USA. There’s more to it than giving you the freedom to explore this colorful country at your leisure - once you set out, the whole of the United States is your oyster. It doesn’t matter whether you’re planning a coastal journey through the seaside towns of New England, traversing the vast plains of the Midwest, or cruising California’s Big Sur, when you rent a car in the US you’re bound for an unforgettable adventure.`,
  titleType: 'h2'
}

const offers = {
  title: 'Offers',
  subtitle: 'The best suggestion of week for you!',
  offers: [
    {
      id: 1,
      title: 'Family Cars',
      time: 'weekend',
      price: 120,
      image: pictures.crossover,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
    {
      id: 2,
      title: 'Luxury & Prestige Cars',
      time: 'week',
      price: 150,
      image: pictures.crossover,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
    {
      id: 3,
      title: 'Top Sellers',
      time: 'weekdays',
      price: 100,
      image: pictures.crossover,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
  ]
}

const blog = {
  title: 'Latest Blog Posts',
  subtitle: 'Lorem ipsum dolor sit amet.',
  blogs: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      author: 'John Doe',
      time: '12/06/2020 10:30',
      seenCount: 120,
      image: pictures.car2,
      link: '/ipsum',
    },
    {
      id: 2,
      title: 'Tempora molestiae, iste, consequatur unde sint praesentium!',
      author: 'John Doe',
      time: '12/06/2020 10:30',
      seenCount: 105,
      image: pictures.car2,
      link: '/consequatur',
    },
    {
      id: 3,
      title: 'A voluptas ratione, error provident distinctio, eaque id officia?',
      author: 'John Doe',
      time: '12/06/2020 10:30',
      seenCount: 58,
      image: pictures.car2,
      link: '/ratione',
    },
  ]
}

const testimonials = {
  title: 'Testimonials',
  subtitle: 'from around the world',
  testimonials: [
    {
      id: uuidv4(),
      name: 'Jack',
      icon: icons.testimonialAvatar,
      date: '2022-05-21',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus culpa laudantium sit dolores quidem at nulla, iure atque laborum! Odit tempora, enim aliquid at modi illum ducimus explicabo soluta.',
      rate: 4.5,
    },
    {
      id: uuidv4(),
      name: 'Kate',
      icon: icons.testimonialAvatar,
      date: '2019-01-22',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus culpa laudantium sit dolores quidem at nulla, iure atque laborum! Odit tempora, enim aliquid at modi illum ducimus explicabo soluta.',
      rate: 5,
    },
    {
      id: uuidv4(),
      name: 'Brandon',
      icon: icons.testimonialAvatar,
      date: '2020-12-01',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus culpa laudantium sit dolores quidem at nulla, iure atque laborum! Odit tempora, enim aliquid at modi illum ducimus explicabo soluta.',
      rate: 3,
    },
    {
      id: uuidv4(),
      name: 'Marie',
      icon: icons.testimonialAvatar,
      date: '2020-12-01',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus culpa laudantium sit dolores quidem at nulla, iure atque laborum! Odit tempora, enim aliquid at modi illum ducimus explicabo soluta.',
      rate: 2,
    },
    {
      id: uuidv4(),
      name: 'James',
      icon: icons.testimonialAvatar,
      date: '2020-12-01',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus culpa laudantium sit dolores quidem at nulla, iure atque laborum! Odit tempora, enim aliquid at modi illum ducimus explicabo soluta.',
      rate: 1.5,
    },
  ]
}

export {
  banner,
  aboutUs,
  offers,
  blog,
  testimonials,
}
