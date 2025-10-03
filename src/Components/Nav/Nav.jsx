import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../imports";
import { motion, AnimatePresence } from "framer-motion";
import './Nav.css'

const Nav = () => {
  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Why choose Us", link: "/why-choose-us" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggle = () => setOpen(!open);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Background layering just like Herosection */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-green-700/10"></div>

      {/* inner container */}
      <div className="relative container mx-auto px-9 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="lg:h-12 h-14" src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 cursor-pointer">
          {menuItems.map((menu) =>
            menu.link.includes("#") ? (
              <a
                key={menu.name}
                href={menu.link}
                className="hover:text-yellow-300 transition uppercase font-bold"
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={menu.name}
                to={menu.link}
                className="hover:text-yellow-600 transition uppercase font-bold"
              >
                {menu.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={toggle}>
          {open ? (
            <IoClose size={36} className="cursor-pointer" />
          ) : (
            <IoIosMenu size={36} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="relative lg:hidden  bg-green-100 flex flex-col gap-5 py-5 px-9"
          >
            {menuItems.map((menu) =>
              menu.link.includes("#") ? (
                <a
                  key={menu.name}
                  href={menu.link}
                  className="hover:text-yellow-300 transition uppercase"
                >
                  {menu.name}
                </a>
              ) : (
                <Link
                  key={menu.name}
                  to={menu.link}
                  className="hover:text-yellow-700 transition uppercase"
                >
                  {menu.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
