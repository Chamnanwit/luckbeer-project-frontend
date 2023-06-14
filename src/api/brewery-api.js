import axios from "../configs/axios";

export const getAllBrewery = () => {
  return axios.get("/brewery/");
};

export const searchBrewery = (input) => {
  return axios.get("/brewery/search", input);
};

export const getBreweryById = (breweryId) => {
  return axios.get(`/brewery/${breweryId}`);
};

export const addBrewery = (input) => {
  return axios.post("/brewery/", input);
};

export const addImageBrewery = (image, logo) => {
  return axios.post("/brewery/image", image, logo);
};
