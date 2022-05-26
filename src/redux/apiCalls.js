import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess} from "./userRedux";
import { deleteProductStart, deleteProductSuccess, deleteProductFailure} from "./cartRedux"

// LOGIN USER
export const loginUser = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:5000/api/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(error){
        dispatch(loginFailure());
    }
}

//LOGOUT USER
export const logoutUser = (dispatch)=>{
  dispatch(logoutStart());
  try{
      dispatch(logoutSuccess());
  }catch(error){
      dispatch(logoutFailure());
  }
}


//REMOVE PRODUCT FROM CART
export const deleteProduct = async (idPrice, dispatch) => {
    dispatch(deleteProductStart());
    try {
      // const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(idPrice));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };
  