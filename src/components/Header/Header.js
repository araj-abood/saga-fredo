import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Header = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY < 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    if (window.scrollY < 100) {
      setShow(true);
    }
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <motion.header
      className="fixed bg-red-500/40 w-full py-5 px-4 top-0 left-0 z-10"
      animate={show ? "open" : "closed"}
      transition={{ delay: 0.1 }}
      variants={variants}
    >
      <div className="flex justify-center ">
        <div className="">
          <img
            src="https://segafredojo.com/cdn/shop/files/Logo-S-AI-white-s-white_200x.png?v=1683461848"
            alt=""
            className="w-14"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
