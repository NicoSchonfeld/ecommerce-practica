import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function PageProducts() {
  const { data, setCart, viewSelected, setViewSelected, parseCurrency } =
    useContext(DataContext);

  return (
    <>
      <section
        id="Products"
        className="section section-md-auto pt-40 pb bg-black"
      >
        <div className="wrapper d-flex f-md-column align-center justify-center gap-25">
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
                <div className="card w-100 h-500px h-md-auto hidden d-flex align-center justify-between justify-md-center f-md-column gap-50 relative">
                  <FaTimes className="font-20 absolute top-20 right-20 cursor" />
                  <img
                    className="w-400px h-400px w-md-100px h-md-100px"
                    src={product.image}
                    alt={"background selected products"}
                  />
                  <div className="d-flex align-end align-md-center f-column gap-15 gap-md-5">
                    <h3 className="font-35 font-md-20 text-md-center">
                      {product.name}
                    </h3>
                    <h4 className="font-w300 font-30 font-md-20 text-md-center">
                      {parseCurrency(product.price)}
                    </h4>
                    <p className="text-grey text-md-center">
                      {product.description}
                    </p>
                    <button
                      onClick={() => setCart((cart) => cart.concat(product))}
                      className="btn-primary pt-10 pb-10 pl pr w-150px radius-10px cursor mt-md"
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
