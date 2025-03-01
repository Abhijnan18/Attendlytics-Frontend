import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav>

      <div
        className={cn(" hidden md:block fixed top-10 inset-x-0 max-w-sm mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Project</HoveredLink>
              <HoveredLink href="/interface-design">Developers</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">School</HoveredLink>
              <HoveredLink href="/individual">College</HoveredLink>
              <HoveredLink href="/team">University</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Log In">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/login/Admin">Admin</HoveredLink>
              <HoveredLink href="/login/HOD">HOD</HoveredLink>
              <HoveredLink href="/login/Teacher">Teacher</HoveredLink>
              <HoveredLink href="/login/Student">Student</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>



      {/* <div className="bg-gradient-to-br from-[#050505] to-[rgba(5,5,5,0.9)] fixed w-full top-0 left-0 z-50"></div> */}
      <div className="md:hidden max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-6">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl text-gray-100">
            <svg
              fill="#ffff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="1052 796 200 200"
              enableBackground="new 1052 796 200 200"
              xmlSpace="preserve"
              stroke="#ffff"
              className="h-10"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M1151.998,921.75c-4.129,0-8.17-0.771-12.01-2.292l-50.167-19.888c0,11.08,0,27.65,0,32.066 c0,15.562,27.836,28.174,62.178,28.174s62.181-12.612,62.181-28.174v-32.067l-50.172,19.889 C1160.168,920.979,1156.127,921.75,1151.998,921.75z"></path>
                  <path d="M1248.592,867.082l-87.989-34.878c-5.526-2.19-11.681-2.19-17.208,0l-87.988,34.878c-2.057,0.815-3.407,2.804-3.407,5.016 c0,2.213,1.351,4.201,3.407,5.017l12.317,4.882v34.925c-2.736,1.865-4.533,5.007-4.533,8.568c0,3.262,1.508,6.171,3.863,8.071 l-3.751,18.007c-0.503,2.416,0.108,4.931,1.666,6.845c1.557,1.915,3.894,3.026,6.361,3.026h4.449c2.468,0,4.804-1.111,6.361-3.026 c1.557-1.914,2.168-4.429,1.666-6.845l-3.752-18.007c2.356-1.9,3.864-4.81,3.864-8.071c0-3.562-1.797-6.703-4.533-8.568v-30.303 l63.729,25.264c5.708,2.263,12.063,2.263,17.771,0l87.709-34.768c2.057-0.815,3.407-2.804,3.407-5.017 C1252,869.886,1250.649,867.897,1248.592,867.082z"></path>
                </g>
              </g>
            </svg>
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
                      className="block pl-0 py-[1rem] px-3 text-[1.75rem] border-t-2 border-neutral-800 font-normal leading-6 md:font-light md:text-base text-white md:text-gray-400 md:hover:text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
