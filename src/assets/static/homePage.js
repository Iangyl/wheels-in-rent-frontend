import images from '../images'
import { v4 as uuidv4 } from 'uuid';

const {pictures, icons} = images

const banner = {
  title: 'Lorem ipsum dolor sit amet.',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, excepturi.',
  image: pictures.car1,
  button: true,
}

const aboutUs = {
  title: 'About Us',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias ipsa veritatis nihil iusto maiores natus dolor, a reiciendis corporis obcaecati ex. Totam assumenda impedit aut eum, illum distinctio saepe explicabo. Consequuntur molestiae similique id quos, quasi quas perferendis laboriosam, fugit natus odit totam! Id dolores saepe, sint debitis rerum dolorem tempora aliquid, pariatur enim nisi. Quia ab iusto assumenda.',
}

const offers = {
  title: 'Offers',
  subtitle: 'Lorem ipsum dolor sit amet.',
  offers: [
    {
      id: 1,
      title: 'Family Cars',
      time: 'weekend',
      price: 120,
      image: pictures.car4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
    {
      id: 2,
      title: 'Luxury & Prestige Cars',
      time: 'week',
      price: 150,
      image: pictures.car4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
    {
      id: 3,
      title: 'Top Sellers',
      time: 'weekdays',
      price: 100,
      image: pictures.car4,
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
