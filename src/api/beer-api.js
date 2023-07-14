import axios from "../configs/axios";

export const getAllBeer = () => {
  return axios.get("/beer/");
};

export const searchBeer = (input) => {
  return axios.get("/beer/search", { params: { type: input } });
  // return axios.get("/beer/search?type="+input);
};

export const getBeerById = (beerId) => {
  return axios.get(`/beer/${beerId}`);
};

// export const getTypeById = (beerId) => {
//   return axios.get(`/type/${beerId}`);
// }

// export const getCommentById = (beerId) => {
//   return axios.get(`/comment/${beerId}`)
// }

export const addBeer = (input) => {
  return axios.post("/beer/", input);
};

export const likeBeerById = (beerId) => {
  return axios.post(`/beer/${beerId}/like`);
};

export const addImageBeer = (beerId, image1, image2, image3, image4) => {
  return axios.post(`/beer/image/${beerId}`, image1, image2, image3, image4);
};

export const deleteBeerById = (beerId) => {
  return axios.delete(`/beer/${beerId}`);
};
