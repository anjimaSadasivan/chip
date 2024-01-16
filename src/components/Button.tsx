import { IoMdClose } from "react-icons/io";

const Button = (props: any) => {
  const { onClose, children } = props;
  return (
    <button style={{ width: "auto", height: 20, wordWrap: "normal" }}>
      {props?.children}
      <IoMdClose onClick={onClose} />
    </button>
  );
};

export default Button;
