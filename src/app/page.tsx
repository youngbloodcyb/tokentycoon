"use client";

import dynamic from "next/dynamic";
import { Scene } from "./scene";

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </main>
  );
}
