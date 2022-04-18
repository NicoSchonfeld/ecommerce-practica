import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { FaApple, FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../context/DataProvider";

export default function Header() {
  const {
    cart,
    setCart,
    totalPrice,
    setOpenCart,
    openCart,
    parseCurrency,
    emptyCart,
    setEmptyCart,
  } = useContext(DataContext);

  return (
    <>
      {emptyCart && (
        <article
          onClick={() => setEmptyCart(!emptyCart)}
          className="section bg-black-opacity blur-5 fixed-top z-index-40 d-flex justify-end "
        >
          <div className="mr w-50 w-md-70 h-500px bg-white mt-80 pl pr pt radius-10px d-flex align-center justify-center f-column gap-15">
            <Image
              src={"/3d-flame-290.png"}
              alt={"pc"}
              width={150}
              height={150}
            />
            <h2 className="text-center">
              You don't have products in your cart
            </h2>
          </div>
        </article>
      )}

      {openCart && (
        <article
          onClick={() => setOpenCart(!openCart)}
          className="section bg-black-opacity blur-5 fixed-top z-index-40 d-flex justify-end "
        >
          <div className="mr w-50 w-md-70 h-500px bg-white mt-80 pl pr pt radius-10px hidden overflowY relative">
            {cart.map((inCart, i) => (
              <div key={i} className="mb d-flex align-center gap-25">
                <img
                  src={inCart.image}
                  alt={"image inCart"}
                  width={100}
                  height={100}
                />
                <div className="d-flex align-start f-column">
                  <h4>{inCart.name}</h4>
                  <p>{parseCurrency(inCart.price)}</p>
                </div>
              </div>
            ))}
            <div className="bg-white w-100 h-100px h-md-auto d-flex align-center justify-between f-md-column gap-10 sticky-bottom pb-md">
              <h4>Total: {parseCurrency(totalPrice)}</h4>
              <button
                onClick={() => setCart([])}
                className="btn-orange pl pr pb-10 pt-10 w-150px radius-10px cursor"
              >
                Clear Cart
              </button>
              <button className="btn-primary pl pr pb-10 pt-10 w-150px radius-10px cursor">
                Complete
              </button>
            </div>
          </div>
        </article>
      )}
      <header className="navbar-70 blur-5 fixed-top z-index-40">
        <div className="wrapper d-flex align-center justify-between">
          <Link href={"/"}>
            <a className="text-white font-30 d-flex align-center justify-center">
              <FaApple />
            </a>
          </Link>

          <nav>
            <ul className="d-flex align-center gap-25">
              <li className="text-white">
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li className="text-white">
                <Link href={"#Products"}>
                  <a>Products</a>
                </Link>
              </li>
              <li>
                {cart.length ? (
                  <div className="cartBox">
                    <FaShoppingCart
                      className="text-white font-20 cursor"
                      onClick={() => setOpenCart(!openCart)}
                    />{" "}
                    <span className="spanCartBox">{cart.length}</span>
                  </div>
                ) : (
                  <>
                    <FaShoppingCart
                      className="text-white font-20 cursor"
                      onClick={() => setEmptyCart(!emptyCart)}
                    />
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
