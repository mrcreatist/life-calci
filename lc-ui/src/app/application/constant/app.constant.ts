/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { RouteModel } from '../../core/model';

export const APP = {
  home: <RouteModel>{ title: 'Home', url: '/app/home', icon: 'mail' },
  about: <RouteModel>{ title: 'About', url: '/app/about', icon: 'archive' },
  welcome: <RouteModel>{
    title: 'Welcome',
    url: '/app/welcome',
    icon: 'paper-plane',
  },
};
