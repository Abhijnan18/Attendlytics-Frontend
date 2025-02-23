import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-[#050505] to-[rgba(5,5,5,0.9)] fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-6">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl text-gray-100">
            <span className="font-bold">A</span>
            <span className="text-3xl italic text-gray-100 font-bold">L</span>
          </span>
        </a>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:underline"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={isMenuOpen ? "Close" : "Menu"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute text-white text-base"
                >
                  {isMenuOpen ? "Close" : "Menu"}
                </motion.p>
              </AnimatePresence>
            </div>
          </button>
        </div>

        <div
          id="navbar-language"
          className="relative items-center md:pl-[1.5rem] justify-between w-full md:flex md:w-auto md:order-1"
        >
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-[#050505] top-[4rem] md:hidden"
              >
                <ul className="flex flex-col font-medium p-6 mt-0">
                  <li>
                    <a
                      href="#"
                      className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="hidden md:flex md:flex-row md:space-x-8 md:mt-0">
            <li>
              <motion.a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-medium leading-6 md:font-normal md:tracking-tight md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                About
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white origin-left mt-1"
                />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-normal md:tracking-tight md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                Services
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white origin-left mt-1"
                />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-normal md:tracking-tight md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                Pricing
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white origin-left mt-1"
                />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="block pl-0 py-[1rem] px-3 text-[1.75rem] font-normal leading-6 md:font-normal md:tracking-tight md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                onClick={() => setIsMenuOpen(false)}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                Contact
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white origin-left mt-1"
                />
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
