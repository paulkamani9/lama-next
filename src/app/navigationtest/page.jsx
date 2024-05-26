"use client";
import Link from "next/link";

const NavigationTest = () => {
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Me
      </Link>{" "}
      <br />
      <button>Home</button>
    </div>
  );
};
export default NavigationTest;
