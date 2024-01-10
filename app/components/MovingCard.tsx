"use client";

import { motion } from "framer-motion";
import Card from "./Card";

export default function MovingCard() {
  return (
    <section className="bg-white py-4">
      <div className="flex text-4xl font-bold p-4 items-center justify-center text-center">
        Community Favorites
      </div>
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <Card />
        </TranslateWrapper>
        <TranslateWrapper>
          <Card />
        </TranslateWrapper>
        <TranslateWrapper>
          <Card />
        </TranslateWrapper>
      </div>
    </section>
  );
}

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};
