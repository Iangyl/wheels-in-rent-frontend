import * as homeStatics from './homePage';
import * as fleetStatics from './fleetPage';
import * as contactUsStatics from './contactUsPage';
import * as errorStatics from './errorPages';
import * as offerStatics from './offerPage';
import * as carStatics from './carPage';

export const fleetPage = {...fleetStatics};
export const homePage = {...homeStatics};
export const offerPage = {...offerStatics};
export const errorPage = {...errorStatics};
export const contactUsPage = {...contactUsStatics};
export const carPage = {...carStatics};
export {default as cities} from './cities.json';
