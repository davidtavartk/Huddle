const InfoItem = ({icon, number, label}) => {
    return (
        <div className="flex flex-col ">
            <img className="self-start" src={icon} alt="" />
            <span className="text-[#00252E] font-bold text-[96px]">{number}+</span>
            <p className="text-[#808E9A] text-2xl m-auto">{label}</p>
        </div>
    );
};

export default InfoItem;