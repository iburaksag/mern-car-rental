import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const register = async (formData) =>
  await API.post("/user/register", formData);

export const login = async (formData) =>
  await API.post("/user/login", formData);
export const logout = async () => await API.get("/user/logout");

export const me = async () => await API.get("/user/me");

export const getCars = async (params) => await API.get("/car", { params });

export const getFleet = async () => await API.get("/car/fleet");

export const createTransaction = async (data) =>
  await API.post("/transaction", data);

export const createComment = async (data) => await API.post("/comment", data);

export const getComments = async (postName) =>
  await API.get(`/comment/${postName}`);

export const getUnapprovedTransactions = async () =>
  await API.get("/transaction/unapproved");

export const approveTransaction = async (transactionId) =>
  await API.put(`/transaction/${transactionId}/approve`);

export const rejectTransaction = async (transactionId) =>
  await API.put(`/transaction/${transactionId}/reject`);

export const getMyTransactions = async () => await API.get("/transaction");

export const createSession = async (data) =>
  await API.post("/payment/create-session", data);

export const getPaymentInformation = async (session_id, transactionId) =>
  await API.get(`/payment/payment-success/${session_id}/${transactionId}`);
