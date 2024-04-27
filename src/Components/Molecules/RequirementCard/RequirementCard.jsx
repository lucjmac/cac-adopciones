// import { IoIosCheckbox, IoCheckboxOutline } from "react-icons/io";
import { FaCheckSquare, FaRegCheckSquare } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import "./RequirementCard.css";

const RequirementCard = ({ item }) => {
  const { title, detail, full, dark } = item;

  const className = full ? "is-full requirement-item" : "requirement-item";

  // <IoIosCheckbox /> <IoCheckboxOutline />
  return (
    <li className={className}>
      <div className="icon">
        {full ? <FaHouse /> : dark ? <FaCheckSquare /> : <FaRegCheckSquare />}
      </div>
      <div className="item-details">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </li>
  );
};

export default RequirementCard;
