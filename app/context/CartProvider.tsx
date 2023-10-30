import {
  removeSavedCourse,
  saveForLater,
  sendPurshaseListToDB,
} from "@/lib/sendCourses";
import { courseData } from "@/public/data/dummydata";
import { CartItemType, CourseType, SafeItemType } from "@/types";
import { ReactElement, useMemo, useReducer, createContext } from "react";
import toast from "react-hot-toast";

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
  REMOVEFROMSAVED: "REMOVEFROMSAVED",
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
    //* ADD TO CART
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("Action payload is missing in ADD action");
      }

      console.log("in context");
      console.log("payload:" + JSON.stringify(action.payload));

      const {
        id,
        title,
        image,
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
          image,
          totalHours,
          lectures,
          level,
          participants,
        };

        // console.log(newCartItem);

        state.cart = [...filteredCart, newCartItem];
        window.sessionStorage.setItem("cart", JSON.stringify(state.cart));

        return { ...state, cart: [...filteredCart, newCartItem] };
      }
      // console.log("before sending the return");
      return { ...state };
    }

    //* REMOVE FROM CART
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload)
        throw new Error("Action payload is missing REMOVE action");

      const id: string | undefined = action.payload.id;
      if (id === undefined) return state;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      const cart = [...filteredCart];
      state.cart = [...cart];
      sessionStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Remoed from cart");
      return { ...state, cart: [...filteredCart] };
    }

    //* REMOVE FROM SAVED
    case REDUCER_ACTION_TYPE.REMOVEFROMSAVED: {
      console.log("beforepayload checking");
      if (!action.payload)
        throw new Error("Action payload is missing REMOVE action");
      console.log("after payload checking");
      const id: string | undefined = action.payload.id;
      if (id === undefined) return state;

      removeSavedCourse(id)
        .then((data) => {
          if (data) {
            console.log("removed saved course: ", data);
          }
        })
        .catch((err) => console.error(err));
    }

    //*ADD ALL TO CART
    case REDUCER_ACTION_TYPE.ADDALL: {
      if (!action.payload2)
        throw new Error("action payload is missing ADDALL action ");

      const { courseList } = action.payload2;

      console.log("courseList", courseList);

      const firstSaveCart: string | null = sessionStorage.getItem("cart");

      if (typeof firstSaveCart !== "string") {
        return { ...state };
      }
      const firstSelectedCouse = JSON.parse(firstSaveCart);

      let cart = [...firstSelectedCouse, ...courseList];

      state.cart = [...cart];
      cart = state.cart.reduce((acc: CartItemType[], curr) => {
        if (!acc?.find((item: CartItemType) => item.id == curr.id)) {
          acc.push(curr);
        }
        return acc;
      }, []);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      return { ...state, cart: [...cart] };
    }

    //*** PROCESS TO SUBMIT/
    case REDUCER_ACTION_TYPE.SUBMIT: {
      if (!action.payload2)
        throw new Error("action payload is missing ADDALL action ");

      const { courseList } = action.payload2;

      console.log("courseList", courseList);

      const cart = [...courseList];

      sessionStorage.setItem("cart", JSON.stringify(cart));

      return { ...state, cart: [...cart] };
    }

    //* SAVE FOR LATER
    case REDUCER_ACTION_TYPE.SAVEFORLATER: {
      console.log("before the guard action");
      if (!action.payload)
        throw new Error("Action payload is missing SAVEFORLATER action");

      const id: string | undefined = action.payload.id;
      console.log("id ", id);
      console.log({ course: action.payload });
      if (id === undefined) return state;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      const existingItem: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      saveForLater(id)
        .then((data) => {
          if (data) console.log(data);
        })
        .catch((err) => console.error(err));

      //* send the course to the backend
      const cart = [...filteredCart];
      state.cart = [...cart];
      sessionStorage.setItem("cart", JSON.stringify(cart));

      return { ...state, cart: [...filteredCart] };
    }

    //*** PROCESS TO CHECKOUT/
    case REDUCER_ACTION_TYPE.CHECKOUT: {
      const courseCart: string | null = sessionStorage.getItem("cart");

      if (typeof courseCart !== "string") {
        return { ...state };
      }
      const cart = JSON.parse(courseCart);

      // const { courseList } = action.payload2;

      // console.log("courseList", courseList);

      // const cart = [...courseList];

      const purshasedCourses: Promise<any> = sendPurshaseListToDB(cart);

      purshasedCourses
        .then((courses) => {
          if (!courses.length) {
            localStorage.setItem("isPurshased", "false");
            toast("all these courses are already purshased");
          } else {
            localStorage.setItem("isPurshased", "true");
            toast.success("Courses purshased successfully");
          }
        })
        .catch((err) => console.error(err));
      sessionStorage.removeItem("cart");
      return { ...state, cart: [] };
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

  // console.log(state.cart);
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
