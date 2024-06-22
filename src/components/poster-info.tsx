import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PosterInfo() {
  return (
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
              className="border-0 shadow-none flex items-center font-normal hover:border-0 text-[#3b82f6] hover:text-blue-400"
            >
              @gcharang <MoveUpRight size={15} />
            </Link>
          </span>
        </p>
        <p> 3 months ago</p>
      </div>
    </div>
  );
}
