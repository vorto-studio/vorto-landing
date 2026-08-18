import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Thesis } from "./components/sections/Thesis";
import { Ecosystem } from "./components/sections/Ecosystem";
import { FastFoodDemo } from "./components/sections/FastFoodDemo";
import { IndustrialDemo } from "./components/sections/IndustrialDemo";
import { FinanceDemo } from "./components/sections/FinanceDemo";
import { LabsDemo } from "./components/sections/LabsDemo";
import { Method } from "./components/sections/Method";
import { Footer } from "./components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080B10] text-[#F0F6FC]">
      <Header />
      <Hero />
      <Thesis />
      <Ecosystem />
      <FastFoodDemo />
      <IndustrialDemo />
      <FinanceDemo />
      <LabsDemo />
      <Method />
      <Footer />
    </main>
  );
}
