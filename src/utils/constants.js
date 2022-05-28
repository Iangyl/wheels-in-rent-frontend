import images from '../assets/images';

const { icons } = images;

const iconsArray = [
  icons.facebook,
  icons.twitter,
  icons.instagram,
]

const formTypes = {
  signIn: 'sign_in',
  signUp: 'sign_up',
}

const authLottieOptions = {
  width: 650,
  height: 650,
}

const chartOptions = {
  chart: {
    type: "donut",
  },
  series: [10, 15, 17, 5, 18, 32, 8, 12, 32, 14, 11],
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ],
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    pie: {
      customScale: 1,
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },
          value: {
            show: true,
          },
        },
      },
    },
  },
};

const statuses = {
  accepted: 'accepted',
  finished: 'finished',
  denied: 'denied',
  pending: 'pending',
  crashed: 'crashed',
  error: 'error',
}

const constants = {
  iconsArray,
  formTypes,
  authLottieOptions,
  statuses,
  chartOptions,
}


export default constants;
