import { SiStatuspal } from "react-icons/si";
function Header() {
  return (
    <div className="container-wrapper typing flex justify-center items-center text-center pb-5  text-white gap-5">
      Website Response Status <SiStatuspal className="text-4xl" />
    </div>
  );
}

export default Header;
