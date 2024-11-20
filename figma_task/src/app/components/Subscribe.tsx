import React from "react";

const Subscribe: React.FC = () => {
    return (
        <div className="relative bg-white flex items-center justify-center min-h-screen">
            <div className="bg-[#fffbf1] rounded-xl p-8 md:p-16 flex flex-col items-center justify-center space-y-6 w-[80%] max-w-4xl relative">

                <img
                    src="/subscribe_orange.png"
                    alt="Subscribe Orange"
                    className="absolute top-[-48px] left-[-36px] w-[150px] h-[140px] z-10"
                />

                <div className="text-center">
                    <p className="text-[var(--mypink)] uppercase font-semibold text-base tracking-wide">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Prepare yourself & let’s explore the<br />beauty of the world
                    </p>
                </div>

                <form className="flex items-center space-x-4 mt-6">
                    <div className="relative w-full md:w-[550px]">
                        <img
                            src="/mail_ikon.png"
                            alt="Email Icon"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full py-4 px-12 text-gray-800 bg-white text-sm rounded-full font-semibold placeholder-gray-500 focus:outline-none focus:ring-0"
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-4 px-6 bg-[var(--mypurple)] text-white text-sm font-semibold rounded-xl"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <img
                src="/subscribe_objects.png"
                alt="Subscribe Objects"
                className="absolute right-0 bottom-0 w-[80px] h-[240px]"
            />
        </div>
    );
};

export default Subscribe;
