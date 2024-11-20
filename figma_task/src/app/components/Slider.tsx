"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

const Slider: React.FC = () => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            prevRef.current.style.display = 'block';
            nextRef.current.style.display = 'block';
        }
    }, []);

    return (
        <div className="relative" style={{ marginTop: "50px", padding: "0 60px" }}>
            <div
                className="pt-8 z-10 text-left flex justify-between items-center"
                style={{
                    marginBottom: "20px",
                    marginLeft: "55px",
                }}
            >
                <div>
                    <p className="text-[var(--mypink)] font-bold text-l">
                        TOP DESTINATION
                    </p>
                    <p className="text-black font-semibold text-3xl">
                        Explore top destination
                    </p>
                </div>

                <img
                    src="/yellow_objects.png"
                    alt="Yellow Objects"
                    style={{
                        width: "70px",
                        height: "67px",
                        opacity: "1",
                        marginRight: "-30px",
                        marginBottom: "-220px",
                        display: "block",
                    }}
                />

            </div>

            <div className="mt-16" style={{ marginLeft: "55px" }}>
                <Swiper

                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="w-[280px] shadow-sm">
                            <div
                                className="w-[280px] h-[280px] bg-cover bg-center rounded-t-[32px]"
                                style={{
                                    backgroundImage: "url('/rectangle_6.png')",
                                }}
                            ></div>
                            <div
                                className="w-[280px] h-[200px] bg-white rounded-b-[32px] shadow-sm"
                                style={{
                                    padding: "32px 0 0",
                                    gap: "32px",
                                }}
                            >
                                <div className="flex flex-col px-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-base">Paradise Beach,<br></br>Bantayan Island</p>
                                        <p className="text-[var(--mypink)] font-bold">$550.16</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">Rome,Italy</p>
                                    <div className="flex items-center mt-2">

                                        <p className="text-orange-500 font-semibold text-base">4.8</p>
                                        <FaStar className="text-orange-500 ml-2" /> { }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="w-[280px] shadow-sm">
                            <div
                                className="w-[280px] h-[280px] bg-cover bg-center rounded-t-[32px]"
                                style={{
                                    backgroundImage: "url('/rectangle_6.2.png')",
                                }}
                            ></div>
                            <div
                                className="w-[280px] h-[200px] bg-white rounded-b-[32px] shadow-sm"
                                style={{
                                    padding: "32px 0 0",
                                    gap: "32px",
                                }}
                            >
                                <div className="flex flex-col px-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-base">Ocean with full of<br></br>Colors</p>
                                        <p className="text-[var(--mypink)] font-bold">$20.99</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">Maldives</p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-orange-500 font-semibold text-base">4.5</p>
                                        <FaStar className="text-orange-500 ml-2" /> { }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[280px] shadow-sm">
                            <div
                                className="w-[280px] h-[280px] bg-cover bg-center rounded-t-[32px]"
                                style={{
                                    backgroundImage: "url('/rectangle_6.3.png')",
                                }}
                            ></div>
                            <div
                                className="w-[280px] h-[200px] bg-white rounded-b-[32px] shadow-sm"
                                style={{
                                    padding: "32px 0 0",
                                    gap: "32px",
                                }}
                            >
                                <div className="flex flex-col px-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-base">Mountain View,<br></br>Above the cloud</p>
                                        <p className="text-[var(--mypink)] font-bold">$150.99</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">United Arab Emeries</p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-orange-500 font-semibold text-base">5.0</p>
                                        <FaStar className="text-orange-500 ml-2" /> { }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="w-[280px] shadow-sm">
                            <div
                                className="w-[280px] h-[280px] bg-cover bg-center rounded-t-[32px]"
                                style={{
                                    backgroundImage: "url('/rectangle_6.png')",
                                }}
                            ></div>
                            <div
                                className="w-[280px] h-[200px] bg-white rounded-b-[32px] shadow-sm"
                                style={{
                                    padding: "32px 0 0",
                                    gap: "32px",
                                }}
                            >
                                <div className="flex flex-col px-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-base">Paradise Beach,<br></br>Bantayan Island</p>
                                        <p className="text-[var(--mypink)] font-bold">$550.16</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">Rome,Italy</p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-orange-500 font-semibold text-base">4.8</p>
                                        <FaStar className="text-orange-500 ml-2" /> { }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[280px] shadow-sm">
                            <div
                                className="w-[280px] h-[280px] bg-cover bg-center rounded-t-[32px]"
                                style={{
                                    backgroundImage: "url('/rectangle_6.2.png')",
                                }}
                            ></div>
                            <div
                                className="w-[280px] h-[200px] bg-white rounded-b-[32px] shadow-sm"
                                style={{
                                    padding: "32px 0 0",
                                    gap: "32px",
                                }}
                            >
                                <div className="flex flex-col px-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-base">Ocean with full of<br></br>Colors</p>
                                        <p className="text-[var(--mypink)] font-bold">$20.99</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">Maldives</p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-orange-500 font-semibold text-base">4.5</p>
                                        <FaStar className="text-orange-500 ml-2" /> { }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="w-[280px] shadow-sm">
                            <div
                                className="w-[280px] h-[280px] bg-cover bg-center rounded-t-[32px]"
                                style={{
                                    backgroundImage: "url('/rectangle_6.3.png')",
                                }}
                            ></div>
                            <div
                                className="w-[280px] h-[200px] bg-white rounded-b-[32px] shadow-sm"
                                style={{
                                    padding: "32px 0 0",
                                    gap: "32px",
                                }}
                            >
                                <div className="flex flex-col px-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-base">Mountain View,<br></br>Above the cloud</p>
                                        <p className="text-[var(--mypink)] font-bold">$150.99</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">United Arab Emeries</p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-orange-500 font-semibold text-base">5.0</p>
                                        <FaStar className="text-orange-500 ml-2" /> { }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>
        </div>
    );
};

export default Slider;