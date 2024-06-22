import Image from "next/image";

export default function BreadCrumbs() {
  return (
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
  );
}
