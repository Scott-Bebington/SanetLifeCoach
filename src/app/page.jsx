"use client";
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar";
import MyStyle from "./pages/mystyle";
import LifeCoaching from "./pages/lifecoaching";
import CBT from "./pages/cbt";

const sections = [
  // { id: "home", color: "bg-sky-400", label: "Home" },
  // { id: "my-style", color: "bg-green-400", label: "My Style" },
  // { id: "life-coaching", color: "bg-blue-400", label: "Life Coaching" },
  // { id: "cbt", color: "bg-red-400", label: "CBT" },
  { id: "background", color: "bg-yellow-400", label: "Background" },
  { id: "contact", color: "bg-purple-400", label: "Contact" },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      {/* <Homepage /> */}
      {/* <MyStyle /> */}
      {/* <LifeCoaching /> */}
      <CBT />

      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className={`min-h-screen w-full flex items-center justify-center ${section.color}`}
        >
          {section.label}
        </div>
      ))}
    </main>
  );
}
