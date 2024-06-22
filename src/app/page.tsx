import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Github,
  HomeIcon,
  Info,
  MoveUpRight,
  Twitter,
} from "lucide-react";
import RemoteMdxPage from "@/my-mdx-page-remote/page";

export default function Home() {
  return (
    <div>
      <header className="flex sticky top-0 bg-background z-10 items-center justify-between px-5 md:px-[350px] py-4 border-b-2 border-b-[#60a5fa]">
        <div className="flex items-center gap-8">
          <Image
            className="invert"
            src="/icons/logo.svg"
            alt="logo"
            width={130}
            height={130}
          />
          <nav className="hidden md:block">
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
      </header>
      <main className="px-5 w-full md:px-[350px] mx-auto space-y-10 py-10">
        <div className="bg-[#1e293b] text-white text-sm flex items-center gap-3 w-max p-[5px] px-3 border-b">
          <Image
            src="/icons/home.svg"
            alt="home"
            width={20}
            height={20}
            className="invert"
          />
          <div className="chevron" />
          <p className="border-[3px] border-transparent hover:border-white cursor-pointer">
            Komodo Defi Framework
          </p>
          <div className="chevron" />
          <p className="border-[3px] border-transparent hover:border-white cursor-pointer">
            API
          </p>
          <div className="chevron" />
          <p className="border-[3px] border-transparent hover:border-w  hite cursor-pointer">
            Legacy
          </p>
          <div className="chevron" />
          <b className="border-[3px] border-transparent hover:border-white cursor-pointer">
            Activation Methods
          </b>
        </div>
        <div className="flex mditems-center gap-5 flex-col md:flex-row justify-between">
          <div className="flex items-center gap-3 md:justify-between">
            <Image
              src="https://komodoplatform.com/en/docs/images/docs/authors/optimized/gcharang-opt-96.WEBP"
              alt="user_photo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col md:flex-row">
              <p className="flex text-lg items-center gap-2">
                Last Edit:{" "}
                <span className="flex items-center text-blue-500 underline">
                  @gcharang <MoveUpRight size={15} />
                </span>
              </p>
              <p>3 months ago</p>
            </div>
          </div>
          <button className="w-max">See contributors</button>
        </div>
        <RemoteMdxPage />
        <div className="flex items-center gap-5 flex-col md:flex-row justify-between">
          <button className="flex-col text-white w-full items-center pb-0 md:items-start">
            <p className="flex">
              <Image
                src="/icons/chevrons-left.svg"
                alt="chevrons-left"
                width={20}
                height={20}
                className="invert"
              />
              Previous
            </p>
            <h4 className="text-[#60a5fa]">Komodo DeFi Framework Metrics</h4>
          </button>
          <button className="flex-col text-white w-full items-center pb-0 md:items-end">
            <p className="flex">
              Next
              <Image
                src="/icons/chevrons-right.svg"
                alt="chevrons-right"
                width={20}
                height={20}
                className="invert"
              />
            </p>
            <h4 className="text-[#60a5fa]">coins_needed_for_kick_start</h4>
          </button>
        </div>
        <footer className="flex items-center justify-between border-t border-t-white/10 py-8 text-zinc-400 text-sm">
          <p>© 2016 - 2024 by Komodo Platform.</p>
          <div className="flex items-center gap-3">
            <Github fill="#cbd5e1" className="opacity-60" size={17} />
            <Twitter fill="#cbd5e1" className="opacity-60" size={17} />
          </div>
        </footer>
      </main>
    </div>
  );
}
