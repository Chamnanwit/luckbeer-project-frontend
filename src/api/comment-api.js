import axios from "../configs/axios";

export const addCommentBeer = (beerId, input) => {
  return axios.post(`/beer/${beerId}/comment`, input);
};

export const updateCommentByCommentId = (beerId, commentId) => {
  return axios.patch(`/beer/${beerId}/comment/${commentId}`);
};

export const deleteCommentByCommentIdByAdmin = (beerId, commentId) => {
  return axios.delete(`/beer/${beerId}/comment/${commentId}/admin`);
};

export const deleteCommentByCommentIdByUser = (beerId, commentId) => {
  return axios.delete(`/beer/${beerId}/comment/${commentId}/user`);
};

export const getCommentBeer = (beerId) => {
  return axios.get(`/beer/${beerId}/comment`);
}