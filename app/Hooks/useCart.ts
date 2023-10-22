import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};
// this is just for the sake of simplification
export default useCart;
