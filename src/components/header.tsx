import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#05101922] backdrop-blur-xl flex sticky z-10 top-0 h-[80px] w-screen border-b-2 border-b-[#60a5fa]">
      <div className="px-5 w-full flex h-full mx-auto lg:max-w-5xl items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Image
            className="invert"
            src="/icons/logo.svg"
            alt="logo"
            width={130}
            height={130}
          />
          <nav className="hidden lg:block">
            <ul className="flex gap-5">
              {["Business", "Developer", "Community", "Explore"].map(
                (item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-white flex items-center gap-1 text-sm font-bold text-[16px]"
                    >
                      {item}
                      <ChevronDown size={20} />
                    </li>
                  );
                },
              )}
            </ul>
          </nav>
        </div>
        <button className="px-3 py-2 mt-1 font-bold text-white w-max rounded bg-[#003a4b] border-0">
          Komodo wallet
        </button>
      </div>
    </header>
  );
}
