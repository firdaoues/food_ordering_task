import {
  FETCH_VENDOR_BY_ID,
  CHANGE_VENDOR_BY_ID,
  ON_SCROLL_EVENT
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getVendorByid = (id) => async (dispatch) => {
  try {
    const vendor = await api.getVendorDataById(id);
    // console.log(vendorData)
    dispatch({ type: FETCH_VENDOR_BY_ID, payload: {vendor} });
  } catch (error) {
    dispatch({ type: FETCH_VENDOR_BY_ID, payload: {error} });
  }
};

export const changeVendorMenu = (productIds, vendorId) => (dispatch) => {
  dispatch({ type: CHANGE_VENDOR_BY_ID, payload: { productIds, vendorId } });
};

export const onScrollOrder =(isScrollValid)=>(dispatch)=>{
    dispatch({ type: ON_SCROLL_EVENT, payload:  isScrollValid  });
}