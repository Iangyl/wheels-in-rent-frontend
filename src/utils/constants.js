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

const constants = {
  iconsArray,
  formTypes,
  authLottieOptions,
}


export default constants;
