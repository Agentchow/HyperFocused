import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`group relative font-medium text-c-black px-4 py-3 md:px-6 md:py-3 rounded-md text-lg md:text-2xl flex items-center gap-4 mx-auto overflow-hidden ${className} cursor-pointer bg-c-orange`}
    >
      <span className="absolute inset-0 bg-c-black translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0" />

      <div className="relative overflow-hidden">
        <span className="block ease-out leading-none transition-transform duration-400 group-hover:-translate-y-full">
          {children}
        </span>

        <span className="block absolute inset-0 leading-none translate-y-full text-c-orange ease-out transition-transform duration-400 group-hover:translate-y-0">
          {children}
        </span>
      </div>

      <div className="relative overflow-hidden w-8 md:w-10 h-8 md:h-10">
        <SvgIcon className="size-8 md:size-10 block text-c-black ease-out transition-transform duration-400 group-hover:translate-x-full" />

        <SvgIcon className="absolute inset-0 size-8 md:size-10 -translate-x-full text-c-orange ease-out transition-transform duration-400 group-hover:translate-x-0" />
      </div>
    </button>
  );
}

const SvgIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="29"
    fill="none"
    viewBox="0 0 48 29"
  >
    <path
      fill="currentColor"
      d="M15.166 14.583a.206.206 0 0 0 0-.3L.35.06A.2.2 0 0 0 .211 0a.2.2 0 0 0-.085.018.2.2 0 0 0-.126.19v28.45a.2.2 0 0 0 .126.19.2.2 0 0 0 .225-.041z"
    ></path>
    <path
      fill="currentColor"
      d="M23.37 14.634a.18.18 0 0 0 .004-.247L10.457.454a.19.19 0 0 0-.22-.055.2.2 0 0 0-.133.192v7.818l5.569 5.347a.95.95 0 0 1 .289.678.93.93 0 0 1-.289.677l-5.57 5.346v7.969c0 .128.094.177.134.192a.19.19 0 0 0 .22-.055z"
    ></path>
    <path
      fill="currentColor"
      d="M31.573 14.69c.054-.063.054-.15.007-.204L20.567.85a.19.19 0 0 0-.22-.07.194.194 0 0 0-.14.193v8.922l3.698 3.989a.9.9 0 0 1 .187.958l-.016.03a1 1 0 0 1-.063.124 1 1 0 0 1-.11.14l-3.696 3.987v9.072c0 .134.098.18.14.193a.19.19 0 0 0 .22-.07zM40.796 1.64c-.063-.126-.178-.114-.225-.103s-.158.053-.158.2v25.995c0 .146.11.188.158.199.047.01.162.023.225-.104l7.18-13.012c.03-.052.03-.11.006-.153z"
    ></path>
    <path
      fill="currentColor"
      d="M39.682 14.43 30.68 1.245c-.068-.113-.177-.098-.22-.086a.19.19 0 0 0-.15.196v10.395l1.33 1.645.5.62a.885.885 0 0 1-.004 1.143l-1.826 2.26v10.545c0 .14.105.184.15.196.043.012.152.027.22-.085l9.002-13.187.094-.137c.041-.057.041-.125.007-.17z"
    ></path>
  </svg>
);
