"use client"
import { HomePage } from "@/core/pages";
import { Menu, useMenu } from "@/core/redux";

export default function Home() {
  const { type } = useMenu(s => s as Menu);
  return (
    <main className={type === "Vuelos" ? "flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cover bg-background-1" : "flex min-h-screen flex-col items-center justify-start bg-white"}>
      <HomePage />
    </main>
  )
}
