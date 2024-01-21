import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchTradeItems = () => API.get("/tradeitems");
export const createTradeItem = (newTradeItem) =>
  API.post("/tradeitems", newTradeItem);
export const fetchTradeItem = (id) => API.get(`/tradeitems/${id}`);

export const fetchItems = () => API.get("/items");
export const createItem = (newItem) => API.post("/items", newItem);

//user routes
export const signUp = (formData) => API.post("/user/signup", formData);
export const signIn = (formData) => API.post("/user/signin", formData);
export const addUserOrder = (id, user_id) =>
  API.patch(`/user/addOrder?id=${id}&user_id=${user_id}`);
export const getUsers = (id, user_id) =>
  API.get(`/user/usersinfo?id=${id}&user_id=${user_id}`);

export const fetchQuestions = () => API.get("/questions");
export const createQuestion = (questionData) =>
  API.post("/questions", questionData);

//orders api calls
export const fetchOrders = (user_id) => API.get(`/orders?user_id=${user_id}`);
export const addOneToCart = (id, user_id) =>
  API.patch(`/orders/addproduct?user_id=${user_id}&id=${id}`);
export const removeOneFromCart = (id, user_id) =>
  API.patch(`/orders/removeproduct?user_id=${user_id}&id=${id}`);
export const getTotalCosts = (user_id) =>
  API.get(`/orders/pricing?user_id=${user_id}`);
export const deleteFromCart = (id, user_id) =>
  API.delete(`/orders/delete?user_id=${user_id}&id=${id}`);
