import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function PageProducts() {
  const { data, setCart, viewSelected, setViewSelected, parseCurrency } =
    useContext(DataContext);

  return (
    <>
      <section id="Products" className="w-100 vh-100 pt-40 pb bg-black">
        <div className="wrapper d-flex align-center justify-center gap-25">
          {data.map((product, i) => (
            <motion.div
              onClick={() =>
                setViewSelected((viewSelected) => viewSelected.concat(product))
              }
              key={i}
              className="card cursor"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={product.image}
                alt={"image products"}
                width={300}
                height={300}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {viewSelected ? (
        <>
          {viewSelected.map((product, i) => (
            <article
              key={i}
              className="section fixed-top z-index-20 bg-black-opacity blur-5 d-flex align-center justify-center"
              onClick={() => setViewSelected([])}
            >
              <div className="wrapper d-flex align-center justify-center">
                <div className="card w-100 h-500px hidden d-flex align-center justify-between gap-50 relative">
                  <FaTimes className="font-20 absolute top-20 right-20 cursor" />
                  <img
                    className="w-400px h-400px"
                    src={product.image}
                    alt={"background selected products"}
                  />
                  <div className="d-flex align-end f-column gap-15">
                    <h3 className="font-35">{product.name}</h3>
                    <h4 className="font-w300 font-30">
                      {parseCurrency(product.price)}
                    </h4>
                    <p className="text-grey">{product.description}</p>
                    <button
                      onClick={() => setCart((cart) => cart.concat(product))}
                      className="btn-primary pt-10 pb-10 pl pr w-150px radius-10px cursor"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </>
      ) : null}
    </>
  );
}
