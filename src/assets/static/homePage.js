import { pics } from '../images'

const banner = {
  title: 'Lorem ipsum dolor sit amet.',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, excepturi.',
  image: pics.car1,
  button: true,
}

const aboutUs = {
  title: 'About Us',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias ipsa veritatis nihil iusto maiores natus dolor, a reiciendis corporis obcaecati ex. Totam assumenda impedit aut eum, illum distinctio saepe explicabo. Consequuntur molestiae similique id quos, quasi quas perferendis laboriosam, fugit natus odit totam! Id dolores saepe, sint debitis rerum dolorem tempora aliquid, pariatur enim nisi. Quia ab iusto assumenda.',
}

const offers = {
  title: 'Offers',
  text: 'Lorem ipsum dolor sit amet.',
  offers: [
    {
      id: 1,
      title: 'Family Cars',
      time: 'weekend',
      price: 120,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
    {
      id: 2,
      title: 'Luxury & Prestige Cars',
      time: 'week',
      price: 150,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
    {
      id: 3,
      title: 'Top Sellers',
      time: 'weekdays',
      price: 100,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.',
    },
  ]
}

export {
  banner,
  aboutUs,
  offers,
}
