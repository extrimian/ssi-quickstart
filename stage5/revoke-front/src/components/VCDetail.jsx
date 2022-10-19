import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../store/slices";
export const VCDetail = ({ id }) => {
  console.log("id", id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);
  const { credential } = useSelector((state) => state.displayVc);
  console.log("credential", credential)
  return (
    <div>
      <div>
        <pre>
          <small>{JSON.stringify(credential, null, 2)}</small>
        </pre>
      </div>
    </div>
  );
};

export default VCDetail;
