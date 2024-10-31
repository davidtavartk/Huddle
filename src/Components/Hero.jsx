import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-56 w-[80%] m-auto">
      <h1 className="text-[#00252E] text-5xl font-bold">
        Build The Community Your Fans Will Love
      </h1>
      <p className="text-[#00252E] mt-7 w-[33%] m-auto text-center ">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.{" "}
      </p>
      <Button
        filled={true}
        className="drop-shadow-custom mt-9 px-[99px] py-7 text-xl font-bold rounded-[44px]"
      >
        {" "}
        Get Started For Free
      </Button>
    </div>
  );
};

export default Hero;
