import { SiStatuspal } from "react-icons/si";

function Header() {
  return (
    <div className="container-wrapper typing flex flex-col justify-center items-center text-center gap-5">
      <div className="flex items-center gap-2 pt-10">
        <h1 className="text-2xl sm:text-3xl">Website Response Status</h1>
        <SiStatuspal className="text-4xl" />
      </div>
    </div>
  );
}

export default Header;
