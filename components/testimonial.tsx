"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TestimonialCarousel } from "@/components/testimonial-carousel";

import modelWhiteImg from "@/public/images/model-white.png";

import { fadeIn } from "@/lib/variants";
import { testimonialList } from "@/lib/sample-data";

export const Testimonial = () => {
  return (
    <section className="bg-testimonial bg-cover bg-no-repeat relative z-10 top-[340px] lg:top-[390px] h-[800px] pt-16 md:pt-32">
      <div className="container">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col items-center capitalize text-center"
        >
          <h2 className="h2 text-white">what client&apos;s say</h2>
          <p className="text-white/70 mb-8">1500+ statisfied clients</p>
          <div className="mb-12">
            <Image src={modelWhiteImg} alt="Divider" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel items={testimonialList} />
        </motion.div>
      </div>
    </section>
  );
};
