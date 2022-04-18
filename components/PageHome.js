import Header from "./Header";
import PageProducts from "./PageProducts";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PageHome() {
  return (
    <>
      <Header />
      <main className="section bg-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="wrapper d-flex align-center justify-between z-index-20"
        >
          <div className="d-flex f-column align-end">
            <h2 className="text-white font-60 font-w700 family-2">
              Love <span className="text-gradient">the power</span>
            </h2>
            <h1 className="text-white font-80 font-w700 family-2 line-h-50">
              Apple
            </h1>
            <Link href={"#Products"}>
              <a>
                <button className="btn-primary pt-10 pb-10 pl pr w-150px radius-5px mt-40 d-flex align-center justify-center cursor">
                  View Products
                </button>
              </a>
            </Link>
          </div>
          <img
            src={"https://i.imgur.com/ZjLwAH9.png"}
            alt={"background apple watch"}
            width={500}
            height={500}
          />
        </motion.div>

        <div className="box"></div>
      </main>
      <PageProducts />
    </>
  );
}
