import Image from "next/image";

export default function DocNav() {
  return (
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
  );
}
