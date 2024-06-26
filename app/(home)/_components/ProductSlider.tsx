"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import DealCart from "@/app/Components/ui/DealCart";

import ShopCart from "@/app/Components/ui/ShopCart";

type productsType = {
  id: number;
  title: String;
  img: String;
  price?: number;
  currentprice?: number;
};

type ProductSliderProps = {
  products: productsType[];
  cartStatus: string;
};

export default function ProductSlider({
  products,
  cartStatus,
}: ProductSliderProps) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
          1700: {
            slidesPerView: 6,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              {cartStatus === "DealCart" ? (
                <DealCart product={product} />
              ) : (
                <ShopCart product={product} />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
