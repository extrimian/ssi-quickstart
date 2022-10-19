import axios from 'axios';

const ssiIntegrationServiceApiUrl =
  process.env.REACT_APP_SSI_INTEGRATION_SERVICE_URL;
const ssiApiUrl = process.env.REACT_APP_SSI_API_URL;

export const getQR = (data) => {
  return axios.post(`${ssiIntegrationServiceApiUrl}/invitation/qr`, data);
};

export const getDeeplink = (data) => {
  return axios.post(`${ssiIntegrationServiceApiUrl}/invitation/deeplink`, data);
};

export const getUserId = async (data) => {
  const { data: id } = await axios.post(`${ssiApiUrl}/users`, data);
  return id;
};
