// URL "https://ecommerce-practica.vercel.app/api/products"
//URL DEV "http://localhost:3000/api/products"

import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [viewSelected, setViewSelected] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);

  useEffect(() => {
    const getDataApi = async () => {
      const res = await fetch(
        "https://ecommerce-practica.vercel.app/api/products"
      );

      const data = await res.json();

      setData(data);
    };

    getDataApi();
  }, []);

  const totalPrice = cart.reduce((a, b) => a + b.price, 0);

  const parseCurrency = (value) => {
    return value.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        viewSelected,
        setViewSelected,
        totalPrice,
        parseCurrency,
        setOpenCart,
        openCart,
        setEmptyCart,
        emptyCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
