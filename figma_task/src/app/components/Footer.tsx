"use client";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="flex items-start gap-4 mt-0 bg-white">
            <div className="flex flex-col ml-36 justify-start items-start p-4 w-1/3 bg-white">
                <div className="flex items-center gap-2">
                    <img
                        src="/logo_travlog.png"
                        alt="Travlog"
                        className="w-6 h-6"
                    />
                    <p className="text-black text-base font-semibold">Travlog</p>
                </div>

                <p className="text-gray-500 text-sm">
                    <br></br>Contrary to popular belief, <br />
                    Lorem Ipsum is not simply<br />
                    random text. It has roots<br />
                    in a piece of classical Latin<br />
                    literature from 45 BC.
                </p>
                <br />
                <div className="flex items-center gap-4">
                    <a href="https://facebook.com">
                        <img
                            src="/facebook.png"
                            alt="Facebook Logo"
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="https://twitter.com">
                        <img
                            src="/twitter.png"
                            alt="Twitter Logo"
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="https://instagram.com">
                        <img
                            src="/instagram.png"
                            alt="Instagram Logo"
                            className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>

            <div className="flex flex-1 p-4 mr-36 bg-white">
                <div className="grid grid-cols-3 gap-8 w-full">
                    <div>
                        <p className="text-black text-base font-semibold">Company</p>
                        <p className="text-gray-500 text-sm">
                            <br></br>About <br></br><br></br> Career <br></br><br></br> Mobile
                        </p>
                    </div>
                    <div>
                        <p className="text-black text-base font-semibold">Contact</p>
                        <p className="text-gray-500 text-sm">
                            <br></br>Why Travlog?<br></br><br></br> Partner with us<br></br><br></br> FAQ’s<br></br><br></br> Blog
                        </p>
                    </div>
                    <div>
                        <p className="text-black text-base font-semibold">Meet Us</p>
                        <p className="text-gray-500 text-sm">
                            <br></br>+00 92 1234 56789 <br></br><br></br> info@travlog.com <br></br><br></br>
                            205. R Street, New York <br></br>BD23200
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
