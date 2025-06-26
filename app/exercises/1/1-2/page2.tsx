"use client";

import ImageSun from "@/public/assets/imgs/imageSun.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const Page2 = () => {
  const { scrollY } = useScroll();

  // Transformaciones más suaves para el efecto parallax
  const imageParallax = useTransform(scrollY, [0, 500], [0, 100]);
  const textParallax = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="min-h-[150vh] bg-gradient-to-b from-amber-100 to-amber-300">
      {/* Contenedor principal con perspectiva para mejorar el efecto 3D */}
      <div className="perspective-1000 sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center justify-center">
          {/* Card container */}
          <div className="relative w-[600px] rounded-xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
            {/* Imagen con parallax más lento */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ y: imageParallax }}
            >
              <Image
                src={ImageSun}
                alt="El Sol"
                className="h-64 w-64 rounded-full object-cover shadow-lg"
                priority
              />
            </motion.div>

            {/* Contenido de texto con parallax más rápido */}
            <motion.div
              className="mt-32 text-center"
              style={{ y: textParallax }}
            >
              <h1 className="mb-6 text-4xl font-bold text-amber-800">
                El Sol: Nuestra Estrella
              </h1>
              <p className="text-lg leading-relaxed text-amber-900">
                En el corazón de nuestro sistema solar, el Sol brilla con una
                intensidad incomparable. Con temperaturas que alcanzan los 15
                millones de grados Celsius en su núcleo, esta masa ardiente de
                gas nos proporciona la energía que hace posible la vida en la
                Tierra.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
