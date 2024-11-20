"use client";
import Apı_comment from "./components/Apı_comment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Keyfeatures from "./components/Keyfeatures";
import Slider from "./components/Slider";
import Subscribe from "./components/Subscribe";

export default function Page() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, rgba(255,218,206,255), rgba(255,255,255,255), rgba(254,248,232,255))",
      }}
      className="min-h-screen"
    >
      <Header />
      <Hero />
      <Hero2 />
      <Slider />
      <Keyfeatures />
      <Apı_comment />
      <Subscribe />
      <Footer />
    </div>
  );
}

