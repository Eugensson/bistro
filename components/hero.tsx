"use client";

import { motion } from "framer-motion";

import { Header } from "@/components/header";

import { fadeIn, staggerContainer } from "@/lib/variants";

export const Hero = () => {
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right bg-no-repeat">
      <Header />
      <div className="container min-h-[980px] flex justify-center items-center">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col items-center text-center"
        >
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-2xl lg:text-3xl text-white font-primary italic lg:font-medium mb-1"
          >
            Nothing brings together like
          </motion.p>
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 mb-5"
          >
            Bistro Cafe
          </motion.h1>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="max-w-[540px] mb-8 text-white"
          >
            Welcome to Bistro Cafe – a place where exquisite cuisine meets a
            warm atmosphere. Enjoy aromatic coffee, signature dishes, and
            pleasant music that creates a cozy ambiance. Experience the true
            taste of life in every detail!
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
            <button type="button" className="btn">
              Find out more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
