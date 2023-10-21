import { courseData } from "@/public/data/dummydata";
import { CartItemType, CourseType, SafeItemType } from "@/types";
import { ReactElement, useMemo, useReducer, createContext } from "react";

type CartStateType = {
  cart: CartItemType[];
};

const initCartState: CartStateType = {
  cart: [],
};

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  ADDALL: "ADDALL",
  REMOVE: "REMOVE",
  SUBMIT: "SUBMIT",
  CHECKOUT: "CHECKOUT",
  SAVEFORLATER: "SAVEFORLATER",
  SAVETOWHISHLIST: "SAVETOWHISHLIST",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
  payload2: SafeItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {

      if (!action.payload) {
        throw new Error("Action payload is missing in ADD action");
      }

      console.log('in context')
      // console.log("payload:"+ JSON.stringify(action.payload))

      const {
        id,
        title,
        price,
        author,
        totalHours,
        lectures,
        level,
        participants,
      } = action.payload;

      const filteredCart = state.cart.filter((item) => item.id !== id);

      const existingItem = state.cart.find((item) => item.id === id);

      // console.log(state.cart, JSON.stringify(existingItem));
      // if the course is not already in the cart, we add it to the cart
      if (!existingItem) {
        const newCartItem = {
          id,
          title,
          price,
          author,
          totalHours,
          lectures,
          level,
          participants,
        };
        
        state.cart = [...filteredCart, newCartItem];
        window.localStorage.setItem("cart", JSON.stringify(state.cart));

        return { ...state, cart: [...filteredCart, newCartItem] };
      }
      console.log("before sending the return");
      return { ...state };
    }
    case REDUCER_ACTION_TYPE.REMOVE ||
      REDUCER_ACTION_TYPE.SAVEFORLATER ||
      REDUCER_ACTION_TYPE.SAVETOWHISHLIST: {
      if (!action.payload)
        throw new Error("Action payload is missing REMOVE action");

      const { id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      const cart = [...filteredCart];
      localStorage.setItem("cart", JSON.stringify(cart));

      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.ADDALL: {
      if (!action.payload)
        throw new Error("action payload is missing ADDALL action ");

      const { courseList } = action.payload2;

      const course: string | null = localStorage.getItem("itemCourse");

      if (typeof course !== "string") {
        return { ...state };
      }
      const firstSelectedCouse = JSON.parse(course);

      const cart = [...state.cart, ...courseList, firstSelectedCouse];

      localStorage.setItem("cart", JSON.stringify(cart));

      return { ...state, cart: [...cart] };
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      //*** process checkout*/
      localStorage.removeItem("cart");

      return { ...state, cart: [] };
    }
    case REDUCER_ACTION_TYPE.SAVEFORLATER ||
      REDUCER_ACTION_TYPE.SAVETOWHISHLIST: {
      //* saveCourseForlater(id: string)
      if (!action.payload)
        throw new Error("Action payload is missing SaveForlater action");

      const { id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return { ...state, cart: [...filteredCart] };
    }

    case REDUCER_ACTION_TYPE.CHECKOUT: {
      const courseCart: string | null = localStorage.getItem("cart");

      if (typeof courseCart !== "string") {
        return { ...state };
      }
      const cart = JSON.parse(courseCart);

      return { ...state, cart: [...cart] };
    }

    default:
      throw new Error("Unknown action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTION = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + Number(cartItem.price);
    }, 0)
  );

  const cart = [...state.cart];

  return { dispatch, REDUCER_ACTION, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTION: REDUCER_ACTION_TYPE,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
