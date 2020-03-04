import { API_BASE } from './config';

export const getData = async url => {
  try {
    const request = await fetch(API_BASE + url);
    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
