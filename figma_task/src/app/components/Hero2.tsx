"use client";
import React from "react";

const Hero2: React.FC = () => {
    return (
        <div className="mb-64">
            { }
            <img
                src="/orange_objects.png"
                alt="orange-objects"
                style={{
                    position: "absolute",
                    width: "65px",
                    height: "169.95px",
                    top: "700px",
                    left: "30px",
                    opacity: "1",
                    zIndex: "3",
                }}
            />

            <div
                className="absolute flex gap-11"
                style={{
                    top: "820px",
                    left: "135px",
                    zIndex: "3",
                }}
            >
                <img
                    src="/Group.png"
                    alt="group-1"
                    style={{
                        width: "211.83px",
                        height: "32px",
                        objectFit: "cover",
                    }}
                />
                <img
                    src="/Group_2.png"
                    alt="group-2"
                    style={{
                        width: "113.06px",
                        height: "32px",
                        objectFit: "cover",
                    }}
                />
                <img
                    src="/Group_3.png"
                    alt="group-3"
                    style={{
                        width: "188.6px",
                        height: "32px",
                        objectFit: "cover",
                    }}
                />
                <img
                    src="/Group_4.png"
                    alt="group-4"
                    style={{
                        width: "102.53px",
                        height: "32px",
                        objectFit: "cover",
                    }}
                />
                <img
                    src="/Group_5.png"
                    alt="group-5"
                    style={{
                        width: "173.57px",
                        height: "32px",
                        objectFit: "cover",
                    }}
                />
            </div>
        </div >
    );
};

export default Hero2;
