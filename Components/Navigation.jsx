import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="bg-black text-slate-50">
        <header className="container">
          <div className="flex justify-between  h-16 items-center px-10">
            <div>
              <Link href='/'>
                <h1 className="font-bold text-2xl">
                  Surya <span className="text-orange-600">Pratap.</span>
                </h1>
              </Link>
            </div>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li className="ml-5">
                <button className="px-3 py-1.5 rounded-lg bg-orange-600">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navigation;
