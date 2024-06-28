import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";
export default function Navbar() {
  return (
    <>
      <header className="w-full py-5 px-5 sm:px-10">
        <nav className="flex justify-between items-center screen-max-width">
          <div>
            <img src={appleImg} alt="apple" width={18} height={18} />
          </div>
          <div className="flex max-sm:hidden">
            {navLists.map((link) => (
              <div
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                key={link}
              >
                {link}
              </div>
            ))}
          </div>
          <div className="flex gap-8">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div>
        </nav>
      </header>
    </>
  );
}
