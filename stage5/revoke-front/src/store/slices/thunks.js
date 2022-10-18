import axios from "axios";
import { setStatus, setVCs } from "./vcSlice";
import { setResponse } from "./sendFormSlice";
import { setLog } from "./logSlice";
import { setCredential } from "./displayVcSlice";
import { updateStatus } from "./statusSlice";
const API_URL = process.env.REACT_APP_API_URL;

export const getVCs = () => {
  return async (dispatch, getState) => {
    let { data } = await axios.get(`${API_URL}/credentials`);
    data = data.map((d) => {
      return { ...d };
    });

    dispatch(
      setVCs({
        data: data,
      })
    );
  };
};

export const postVC = (data) => {
  return async (dispatch, getState) => {
    const requestLog = {
      recipient: `${data.givenName} ${data.familyName}`,
      event: "Add Credential - Request",
      //time: new Date().toDateString(),
      data: data,
    };

    dispatch(
      setLog({
        data: requestLog,
      })
    );

    const response = await axios.post(`${API_URL}/credentials`, data);

    const responseLog = {
      recipient: `${data.givenName} ${data.familyName}`,
      event: "Add Credential - Response",
      //time: new Date().toDateString(),
      data: response.data,
    };

    dispatch(
      setLog({
        data: responseLog,
      })
    );

    dispatch(getVCs());
  };
};

export const changeVCStatus = (id, status, reason) => {
  return async (dispatch, getState) => {
    const body = {
      currentStatus: status,
      statusReason: reason,
    };

    await axios.post(`${API_URL}/credentials/revoke/${id}`, body);

    dispatch(getVCs());
  };
};

export const sendVC = (did, id) => {
  return async (dispatch, getState) => {
    const body = {
      did: did,
      id: id,
    };
    const result = await axios.post(`${API_URL}/credentials/send`, body);

    dispatch(setResponse({ response: JSON.stringify(result) }));
  };
};

export const getStatus = (id) => {
  return async (dispatch, getState) => {
    let status;
    try {
      const { data } = await axios.post(`${API_URL}/credentials/verify/${id}`);

      console.log("data", data);
      status = data ? "Revoked" : "Valid";
    } catch (ex) {
      status = "error";
    }

    dispatch(
      setStatus({
        id,
        status,
      })
    );
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    console.log("id", id);
    const vc = await axios.get(`${API_URL}/credentials/byid/${id}`);
    console.log("getvc", vc);
    dispatch(setCredential({ credential: vc.data }));
  };
};
