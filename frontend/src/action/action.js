import axios from "axios";
import { useDispatch } from "react-redux";
import { cartItems } from "../reducers/cartSlice";
import { baseUrl } from "./baseurl";


export const loadCart = async () => {
  const dispatch = useDispatch();
  try {
    const {data} = await axios.get("/api/v1/cart");
    dispatch(cartItems(data.cart.cartItems));
  } catch (error) {
    console.log(error);
  }
}

export const itemRemoveFromCart = async(productId)=>{
  try {
    const {data} = await axios.delete(`${baseUrl}/api/v1/cart/${productId}`);
  } catch (error) {
    console.log(error);
  }
}