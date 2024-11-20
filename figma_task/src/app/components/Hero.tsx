"use client";
import React from "react";
import { FaShoppingBag } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section className="relative flex justify-center items-start space-x-4" style={{ top: "75px", left: "165px" }}>
            { }
            <img
                src="/layer.png"
                alt="layer"
                className="absolute"
                style={{
                    width: "772px",
                    height: "287.38px",
                    left: "270px",
                    top: "-60px",
                    opacity: "1",
                    zIndex: "0",
                }}
            />


            <div className="flex flex-col space-y-4" style={{ zIndex: "1", position: "relative" }}>
                { }
                <div style={{ position: "relative", width: "272px", height: "300px" }}>
                    <img
                        src="/rectangle_1.png"
                        alt="rectangle_1"
                        className="object-cover rounded-lg"
                        style={{ width: "272px", height: "300px", borderRadius: "32px" }}
                    />
                    { }
                    <img
                        src="/send_ikon.png"
                        alt="send_icon"
                        style={{
                            position: "absolute",
                            width: "85px",
                            height: "105px",
                            bottom: "-70px",
                            left: "-30px",
                        }}
                    />
                </div>

                <img
                    src="/rectangle_2.png"
                    alt="rectangle_2"
                    className="object-cover rounded-lg"
                    style={{ width: "272px", height: "300px", borderRadius: "32px" }}
                />
            </div>

            <div style={{ position: "relative" }}>
                <img
                    src="/rectangle_3.png"
                    alt="rectangle_3"
                    className="object-cover rounded-lg relative"
                    style={{ width: "272px", height: "400px", borderRadius: "32px", top: "110px", zIndex: "1" }}
                />

                { }
                <div
                    style={{
                        position: "absolute",
                        bottom: "-60px",
                        right: "-70px",
                        backgroundColor: "white",
                        borderRadius: "50px",
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        zIndex: "2",
                    }}
                >
                    <img
                        src="/location.png"
                        alt="location-icon"
                        style={{
                            width: "24px",
                            height: "24px",
                            marginRight: "8px",
                        }}
                    />
                    <span className="text-xs font-semibold text-black">Top Places</span>
                </div>

                <img
                    src="/kisi-ikon.png"
                    alt="kisi-ikon"
                    style={{
                        position: "absolute",
                        width: "85px",
                        height: "105px",
                        top: "560px",
                        left: "70px",
                        zIndex: "2",
                    }}
                />
            </div>

            <div
                className="absolute bg-white rounded-lg flex justify-between items-center pl-4 gap-2"
                style={{
                    width: "205px",
                    height: "56px",
                    padding: "16px 32px",
                    borderRadius: "105px",
                    top: "1px",
                    left: "-110px",
                    zIndex: "2"
                }}
            >
                <p className="text-center text-[var(--mypink)] font-bold text-xs">Explore the world!</p>
                <FaShoppingBag className="text-[var(--mypink)]" size={20} />
            </div>

            <div style={{ position: 'absolute', left: '-110px', zIndex: "2" }}>
                <p className="text-black font-semibold text-6xl mt-16">
                    <br />
                    Travel <span className="text-[var(--mypink)]">top</span> <br />
                    <span className="text-[var(--mypink)]">destination</span> <br />
                    of the world
                </p>

                <p className="text-gray-500 text-base">
                    <br /><br />
                    We always make our customer happy by providing <br />
                    as many choices as possible
                </p>
                <br></br>
                <div className="flex gap-4 mt-4">
                    <a
                        href="#get-started"
                        className="bg-[var(--mypurple)] text-white font-bold text-center flex items-center justify-center text-sm"
                        style={{
                            width: "141px",
                            height: "49px",
                            padding: "16px 32px",
                            borderRadius: "100px",
                        }}
                    >
                        Get Started
                    </a>

                    <a
                        href="#watch-demo"
                        className="bg-white text-black font-bold text-center flex items-center justify-center border text-sm gap-2"
                        style={{
                            width: "185px",
                            height: "49px",
                            padding: "16px 32px",
                            borderRadius: "100px",
                        }}
                    >
                        <img
                            src="/watch.png"
                            alt="watching-icon"
                            style={{
                                width: "24px",
                                height: "24px",
                            }}
                        />
                        Watch Demo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
