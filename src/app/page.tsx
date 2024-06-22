import Image from "next/image";
import { ChevronDown, MoveUpRight } from "lucide-react";
import RemoteMdxPage from "@/content/page";
import ScrollToTop from "@/components/scroll-to-top-btn";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ScrollToTop />
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
      <main className="px-5 md:max-w-5xl mx-auto">
        <div className="px-5 w-full space-y-3 py-8">
          <div className="bg-[#1e293bcc] mb-10 text-white text-sm flex flex-wrap items-center gap-3 md:w-max px-3 p-0 border-b border-b-[#64748b]">
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
            <p className="border-[3px] border-transparent hover:border-white cursor-pointer">
              Legacy
            </p>
            <div className="chevron" />
            <b className="border-[3px] border-transparent hover:border-white cursor-pointer">
              Activation Methods
            </b>
          </div>
          <div className="flex md:items-center gap-5 flex-col md:flex-row justify-between">
            <div className="flex items-center gap-3 md:justify-between">
              <Image
                src="https://komodoplatform.com/en/docs/images/docs/authors/optimized/gcharang-opt-96.WEBP"
                alt="user_photo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col text-[#a1a1aa] md:flex-row">
                <p className="flex text-lg items-center gap-2">
                  Last Edit:{" "}
                  <span className="flex items-center underline">
                    <Link
                      href="#"
                      className="border-0 flex items-center font-normal hover:border-0 text-[#3b82f6] hover:text-blue-400"
                    >
                      @gcharang <MoveUpRight size={15} />
                    </Link>
                  </span>
                </p>
                <p> 3 months ago</p>
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
              <h4 className="text-[#60a5fa] py-0 my-0 mb-3">
                Komodo DeFi Framework Metrics
              </h4>
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
              <h4 className="text-[#60a5fa] py-0 my-0 mb-3">
                coins_needed_for_kick_start
              </h4>
            </button>
          </div>
          <br />
          <br />
          <footer className="flex md:flex-row flex-col gap-5 items-center justify-between border-t border-t-white/10 py-8 text-zinc-400 text-sm">
            <p>© 2016 - 2024 by Komodo Platform.</p>
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 transition fill-zinc-700 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
              >
                <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"></path>
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="w-5 h-5 transition fill-zinc-700 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
              </svg>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-5 h-5 transition fill-zinc-700 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
              >
                <path d="M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"></path>
              </svg>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
