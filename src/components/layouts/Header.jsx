import { Link, Menu, Salad, X } from "lucide-react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import logo from "/logo.svg";
import { useState } from "react";

export const links = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about",
    text: "About",
  },
  {
    link: "/Donate",
    text: "Donate",
  },
  {
    link: "/Fundraise",
    text: "Fundraise",
  },
  {
    link: "/Contact",
    text: "Contact",
  },
];

export const Header = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center max-w-screen-2 mx-3 md:mx-9 py-4 md:static fixed bg-white z-20">
        <div className="h-12">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <ul className="md:flex hidden gap-10">
            {links.map((link) => (
              <a href={link.link}>
                <li className="text-gray-600 cursor-pointer hover:text-primary transition-colors">
                  {link.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="md:flex hidden md:flex-row">
          <a href="/Donate">
            <PrimaryButton>Donate Now</PrimaryButton>
          </a>
        </div>

        <div
          className="flex md:hidden cursor-pointer"
          onClick={() => setOpen(!Open)}
        >
          {Open ? <X /> : <Menu />}
        </div>
      </div>

      {Open && (
        <div className="md:hidden bg-tetiary border-t border-gray-200 shadow-lg h-screen z-10 w-full fixed top-16 left-0">
          <ul className="py-4 flex flex-col items-center justify-center static">
            {links.map((link) => (
              <a href={link.link}>
                <li
                  className="text-gray-600 transition-colors py-3 px-3 hover:text-primary static cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {link.text}
                </li>
              </a>
            ))}
            <li className="px-4 py-3">
              <a href="/Donate">
                <PrimaryButton>Donate Now</PrimaryButton>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
