"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

import chefImg from "@/public/images/team/chef.png";
import signatureImg from "@/public/images/team/signature.png";

export const Team = () => {
  return (
    <section className="relative top-96 lg:top-[480px] min-h-[720px] z-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-32">
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-center lg:text-left lg:pt-16"
          >
            <p className="pretitle">our team</p>
            <h2 className="h2 capitalize">meet our chef</h2>
            <p className="mb-16">
              Our team is dedicated to delivering high-quality dishes, carefully
              prepared to perfection. We bring together a passion for culinary
              innovation and a love for traditional flavors.
            </p>
            <p>
              Every plate that leaves our kitchen is a reflection of our
              commitment to excellence. We focus on using fresh, local
              ingredients to create memorable dining experiences that inspire.
            </p>
            <div className="my-6">
              <p className="text-2xl capitalize font-semibold text-accent">
                olaf benjamin
              </p>
              <p className="text-base font-semibold capitalize text-grey/70">
                executive chef
              </p>
            </div>
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <Image
                src={signatureImg}
                alt="Facsimile signature of chef bistro"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <Image src={chefImg} alt="Photo chef of bistro" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
