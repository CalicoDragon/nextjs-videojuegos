"use client";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <nav className="top-0 fixed h-18 w-full flex items-center justify-center bg-black">
      <h1 className="text-white font-semibold text-2xl cursor-pointer mr-8">
        <a onClick={goHome}>Home</a>
      </h1>
    </nav>
  );
}
