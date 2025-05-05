import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav
      className="absolute w-full
        top-0 left-0 right-0 z-10"
    >
      <div
        className="flex container lg:py-4 flex-wrap
            items-center justify-between mx-auto mt-4"
      >
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-normal"
        >
          <Image src="/logo.svg" alt="logo" width={220} height={100} />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul
            className="flex p-4 md:p-0 md:flex-row
                    md:space-x-8 mt-0 text-white justify-between items-center"
          >
            <li key="about">
              <Link href="/about" className="hover:text-slate-200">
                О компании
              </Link>
            </li>
            <li key="projects">
              <Link href="#projects">Решения</Link>
            </li>
            <li key="contact">
              <Link href="#contact">Контакты</Link>
            </li>
            <button className="[backdrop-filter:blur(20px)] rounded-3xl [background:linear-gradient(91.15deg,_rgba(255,_255,_255,_0.15),_rgba(153,_153,_153,_0.15))] border-white border-solid border-[1px] box-border px-4 py-2 font-semibold">
              Связаться
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
