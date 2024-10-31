import footerBackground from "../assets/footerBackground.svg";
import logoWhite from ".././assets/logoWhite.svg";
import phone from ".././assets/phone.svg";
import mail from ".././assets/mail.svg";
import facebook from ".././assets/facebook.svg";
import instagram from ".././assets/instagram.svg";
import twitter from ".././assets/twitter.svg";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Check your email please");
    } else {
      console.log("Email submitted:", email);
    }
  };

  return (
    <div
      className="mt-28 bg-no-repeat bg-cover bg-center h-[720px] relative"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="flex justify-between  items-center w-[80%] m-auto pt-64">
        <div className="flex flex-col w-2/5 gap-8">
          <img className="w-[300px] fill-white" src={logoWhite} alt="" />
          <p className="text-white w-3/4 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="flex gap-5 flex-col self-start relative">
            <span className="flex items-center gap-4 text-white">
              <img src={phone} alt="" />
              Phone: +1-543-123-4567
            </span>
            <span className="flex items-center gap-4 text-white">
              <img src={mail} alt="" />
              example@huddle.com
            </span>
          </div>
        </div>

        <div className="w-1/2 gap-10 flex flex-col">
          <h2 className="font-bold text-white text-2xl">Newsletter</h2>
          <p className="text-sm text-white">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <form
            className="flex gap-5 relative"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              className="rounded-md pl-4 pr-20 relative"
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            {error && (
              <p className="text-red-500 absolute top-full mt-1 text-sm">
                {error}
              </p>
            )}
            <button className="bg-custom-pink rounded-md py-3 px-8 text-white font-semibold hover:bg-[#FF8ED7]">
              Subscribe
            </button>
          </form>
        </div>
        <div className="absolute bottom-20 flex justify-between gap-5">
          <img
            className="hover:filter hover:brightness-75 cursor-pointer"
            src={facebook}
            alt="Facebook"
          />
          <img
            className="hover:filter hover:brightness-75 cursor-pointer"
            src={instagram}
            alt="Instagram"
          />
          <img
            className="hover:filter hover:brightness-75 cursor-pointer"
            src={twitter}
            alt="Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
