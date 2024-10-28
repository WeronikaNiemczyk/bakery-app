import axios from "axios";

const API_URL = "https://your-backend-api.com"; 

export const fetchSections = async () => {
  const response = await axios.get(`${API_URL}/sections`);
  return response.data;
};

export const fetchPeople = async (sectionId) => {
  const response = await axios.get(`${API_URL}/people?sectionId=${sectionId}`);
  return response.data;
};

export const fetchProducts = async (sectionId) => {
  const response = await axios.get(
    `${API_URL}/products?sectionId=${sectionId}`
  );
  return response.data;
};

export const sendDocument = async (documentData) => {
  const response = await axios.post(`${API_URL}/documents`, documentData);
  return response.data;
};
