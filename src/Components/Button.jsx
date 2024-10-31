// eslint-disable-next-line react/prop-types
const Button = ({ children, className, filled }) => {
  return (
    <button
      className={  `md:w-[400px] border-custom-pink rounded-[24px] border text-custom-pink px-[30px] py-[8px] hover:shadow-custom-pink  ${filled ? 'bg-custom-pink text-white hover:bg-[#FF8ED7]' :"" } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
