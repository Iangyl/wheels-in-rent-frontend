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
}


export default constants;
