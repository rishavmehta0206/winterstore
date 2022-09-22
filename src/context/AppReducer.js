import React, { useReducer } from "react";
import { AppContext } from "./AppContext";

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case "PRODUCTS": {
      return { ...state, products: payload };
    }
    case "FAVOURITE": {
      return { ...state, favourites: [payload, ...state.favourites] };
    }
    case "NOTFAV": {
      return {
        ...state,
        favourites: state.favourites.filter((favourite) => {
          return favourite.id !== payload;
        }),
      };
    }
    case "CART": {
      return {
        ...state,
        cart: [payload, ...state.cart],
      };
    }
    case "FAV_TO_CART": {
      if (
        state.cart.find((item) => {
          return item.id === payload.id;
        })
      ) {
        return {
          ...state,
          favourites: state.favourites.filter((favourite) => {
            return favourite.id !== payload.id;
          }),
        };
      }
      return {
        ...state,
        cart: [payload, ...state.cart],
        favourites: state.favourites.filter((favourite) => {
          return favourite.id !== payload.id;
        }),
      };
    }
    case "DELETE": {
      if (payload.loc === "Fav") {
        return {
          ...state,
          favourites: state.favourites.filter((favourite) => {
            return favourite.id !== payload.productId;
          }),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => {
            return item.id !== payload.productId;
          }),
        };
      }
    }
    default: {
      return { state };
    }
  }
};

const AppReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    products: [],
    favourites: [],
    cart: [],
  });
  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        favourites: state.favourites,
        products: state.products,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppReducer;
