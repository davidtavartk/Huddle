

const ContentEach = ({ title, text, image, isReverse = false }) => {
  return (
    <div
      className={`flex w-[80%] m-auto items-center gap-5 my-40 ${
        isReverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className={`ml-auto ${isReverse ? "w-[40%]" : "w-[60%]"}`}>
        <h2 className="text-[#00252E] text-[40px] font-bold">{title}</h2>
        <p className="text-[#00252E] w-[80%] mt-5">{text}</p>
      </div>
      <div className="w-[40%]">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ContentEach;
