"use client";
import React from 'react';

const Keyfeatures = () => {
    return (
        <div
            className="relative flex flex-wrap justify-center items-center bg-white"
            style={{
                marginTop: "40px",
                padding: "0 30px",
            }}
        >
            <div
                className="relative z-10"
                style={{
                    maxWidth: "40%",
                    minWidth: "300px",
                    marginRight: "20px",
                }}
            >
                <div className="pt-8 text-left" style={{ marginBottom: "50px" }}>
                    <p className="text-[var(--mypink)] font-bold text-l">
                        KEY FEATURES
                    </p>
                    <p className="text-black font-semibold text-3xl">
                        We offer best services
                    </p>
                    <p className="text-gray-500 text-xs mt-4 leading-5">
                        Contrary to popular belief, Lorem Ipsum is not simply random<br></br> text.
                        It has roots in a piece of classical Latin literature <br></br> from 45 BC.
                    </p>
                </div>

                <div className="mt-6">
                    {[
                        {
                            icon: "/turuncu_konum.png",
                            title: "We offer best services",
                            description: "Lorem Ipsum is not simply random text",
                        },
                        {
                            icon: "/sarı_takvim.png",
                            title: "Schedule your trip",
                            description: "It has roots in a piece of classical",
                        },
                        {
                            icon: "/pembe_ikon.png",
                            title: "Get discounted coupons",
                            description: "Lorem Ipsum is not simply random text",
                        },
                    ].map((item, index) => (
                        <div className="flex items-center mb-6" key={index}>
                            <img
                                src={item.icon}
                                alt={item.title}
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "32px 0px 0px 0px",
                                    marginRight: "20px",
                                }}
                            />
                            <div>
                                <p className="text-black font-semibold text-sm">
                                    {item.title}
                                </p>
                                <p className="text-gray-500 text-xs mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    maxWidth: "60%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "300px",
                        height: "448px",
                        marginBottom: "10px",
                        transform: "translate(40px, 20px)",
                        zIndex: 1,
                    }}
                >
                    <img
                        src="/rectangle_9.png"
                        alt="Rectangle 9"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            marginLeft: "120px",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "20%",
                            left: "40px",
                            backgroundColor: "white",
                            borderRadius: "50px",
                            padding: "10px 14px",
                            display: "flex",
                            alignItems: "center",
                            transform: "translate(240px, -24px)",
                        }}
                    >
                        <img
                            src="/turuncumap.png"
                            alt="map-icon"
                            style={{
                                width: "24px",
                                height: "24px",
                                marginRight: "8px",
                            }}
                        />
                        <span className="text-sm font-semibold text-black">
                            Paradise on Earth
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        position: "relative",
                        width: "237px",
                        height: "333px",
                        borderRadius: "48px",
                        overflow: "hidden",
                        transform: "translate(-20px, 128px)",
                        zIndex: "1",
                    }}
                >
                    <img
                        src="/rectangle_10.png"
                        alt="Rectangle 10"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: "-20px",
                        right: "10%",
                        width: "300px",
                        height: "180px",
                        transform: "translate(148px, -320px)",
                        zIndex: "0",

                    }}
                >
                    <img
                        src="/key_turuncusari.png"
                        alt="Key Turuncusari"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Keyfeatures;
