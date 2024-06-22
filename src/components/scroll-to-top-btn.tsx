"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.5, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            type: "just",
          }}
          onClick={handleScrollToTop}
          className="bg-white/10 ease-in-out fixed hover:opacity-100 right-5 z-10 w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-sky-500 cursor-pointer text-sky-500 font-bold bottom-[15px] opacity-0"
        >
          <ChevronUp size={20} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
