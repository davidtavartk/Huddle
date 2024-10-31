import logo from ".././assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-[89%] m-auto flex justify-between mt-20">
      <img src={logo} alt="" />
      <Button filled={false}>Try It Free</Button>
    </div>
  );
};

export default Navbar;
