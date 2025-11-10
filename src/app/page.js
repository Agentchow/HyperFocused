import Metrics from "@/components/Metrics";
import Core from "../components/Core";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Divisons from "@/components/Divisons";
import { range } from "../../helpers/utils";
import Footer from "@/components/Footer";
export const dynamic = "force-static";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Core />
      <Metrics />
      <Divisons />

      <div
        className={`2xl:text-[64px] text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-white/60 bg-c-black  flex items-center justify-center flex-col`}
      >
        <h1 className="mt-32">Current Partners</h1>
        <div className="flex mt-6 mb-20 md:my-12 md:mb-32 gap-4 mx-auto z-10  items-center ">
          {range(2).map((i) => (
            <img
              key={i}
              src={`/${i + 1}.svg`}
              alt="svg"
              className="h-full max-w-20 md:max-w-30"
            />
          ))}
        </div>
      </div>
      <div className="bg-black">
        <About />
      </div>

      <Footer />
    </div>
  );
}
