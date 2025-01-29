"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import aboutImg from "@/public/images/about/plate.png";

import { plateVariants, fadeIn, staggerContainer } from "@/lib/variants";

export const About = () => {
  return (
    <section className="min-h-[620px]">
      <div className="container min-h-[620px]">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <p className="pretitle">our story</p>
            <h2 className="h2 capitalize">who we are</h2>
            <p className="mb-8 max-w-[560px]">
              We are a team of enthusiasts striving to make the world a better
              place. By combining experience, innovation, and passion for our
              work, we create unique solutions for our clients. Our mission is
              to help people achieve their goals through high-quality products
              and services. For us, every project is an opportunity to make a
              meaningful impact, leaving a positive mark on society.
            </p>
            <button type="button" className="mx-auto lg:mx-0 btn capitalize">
              find out more
            </button>
          </motion.div>
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <Image
              src={aboutImg}
              alt="Plate with dish"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
