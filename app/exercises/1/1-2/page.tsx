"use client";

import ImageSun from "@/public/assets/imgs/imageSun.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const Page = () => {
  const { scrollYProgress } = useScroll();

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <main className="flex h-[calc(100dvh*2)]">
      <section className="sticky top-0 h-dvh w-full">
        <div className="mx-auto mt-[calc(50dvh/2)] flex h-min w-96 flex-col items-center gap-2 rounded-2xl border border-black bg-amber-400 p-4 transition-transform hover:scale-110 hover:cursor-pointer">
          <h1 className="text-2xl font-bold">El Sol: Nuestra Estrella</h1>
          <motion.div style={{ y: imageY }}>
            <Image
              className="aspect-square w-3xs"
              alt="sun image"
              src={ImageSun}
            />
          </motion.div>
          <motion.p style={{ y: textY }} className="text-center">
            En el corazón de nuestro sistema solar, el Sol brilla con una
            intensidad incomparable. Con temperaturas que alcanzan los 15
            millones de grados Celsius en su núcleo, esta masa ardiente de gas
            nos proporciona la energía que hace posible la vida en la Tierra.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default Page;
