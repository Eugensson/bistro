"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import modelWhiteImg from "@/public/images/model-white.png";

import { menuItems } from "@/lib/sample-data";
import { staggerContainer, fadeIn } from "@/lib/variants";

export const Menu = () => {
  return (
    <section className="min-h-[780px]">
      <div className="absolute -z-0 w-full max-w-[1800px] bg-menu h-[780px]" />
      <div className="relative z-10 top-72 lg:top-52">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize text-white max-w-[400px] text-center"
          >
            delicious flavour of autumn
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="text-white/70 capitalize mb-8"
          >
            view all menu for tasty meal today
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.6, 1.6)}>
            <Image
              src={modelWhiteImg}
              alt="Devider"
              className="w-full h-auto "
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className="relative top-80 lg:top-96"
      >
        <div className="container">
          <div className="z-30 lg:-mt-24 mb-8 md:mb-4 xl:mb-16 min-h-[590px]">
            <ul className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px]">
              {menuItems.map(({ image, title, price, description }, index) => (
                <li key={title}>
                  <article className="flex flex-row lg:flex-col h-full">
                    <div
                      className={twMerge(
                        "w-[45%] md:w-auto",
                        index === 1 || index === 3 ? "lg:order-1" : "order-none"
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${title} image`}
                        className="object-cover aspect-square object-center"
                      />
                    </div>
                    <div className="bg-[#fff3e4] flex flex-1 flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max lg:aspect-square">
                      <div className="text-center">
                        <p className="text-xl xl:text-2xl font-semibold text-dark">
                          {title}
                        </p>
                        <p className="my-1 lg:my-6 text-xl lg:text-4xl text-accent font-semibold">
                          {price}
                        </p>
                        <p className="text-sm lg:text-base">{description}</p>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="btn mx-auto capitalize">
            view complete menu
          </button>
        </div>
      </motion.div>
    </section>
  );
};
