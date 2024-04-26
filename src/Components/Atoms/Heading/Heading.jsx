import "./Heading.css";

const Heading = ({ as, children }) => {
  const Tag = as;
  return <Tag className="title">{children}</Tag>;
};

export default Heading;
