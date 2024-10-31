import InfoItem from "./InfoItem";
import messageIcon from "../assets/messageIcon.svg";
import peopleIcon from "../assets/peopleIcon.svg";

const Info = () => {
  return (
    <div className="flex justify-between w-[60%] m-auto my-20">
      <InfoItem icon={peopleIcon} number="1.4k" label="Communities Formed" />
      <InfoItem icon={messageIcon} number="2.7m" label="Messages Sent" />
    </div>
  );
};

export default Info;
