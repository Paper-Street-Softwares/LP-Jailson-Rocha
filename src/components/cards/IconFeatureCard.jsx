import Button from "../interactives/Button";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";

export default function IconFeatureCard(props) {
  const {
    icon,
    title,
    paragraph,
    description,
    className,
    children,
    colorMode,
  } = props;

  const [visible, setVisible] = useState(false);
  // const [modalContent, setModalContent] = useState("");
  // const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setVisible(true);
  };

  const bgClassesIcon = {
    dark: "bg-buttonColor",
    light: "bg-minititle",
    default: "bg-buttonColor",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-black",
  };

  const bgClass = bgClassesIcon[colorMode] || bgClassesIcon.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`w-full tablet1:min-h-[300px] p-0 tablet1:w-[290px] mt-[36px] tablet1:mt-0 desktop1:w-[240px] desktop1:h-[300px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0  ${className}`}
    >
      <div
        className={`h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center text-labelButtons ${bgClass}`}
      >
        {icon}
      </div>
      <h1
        className={`h-auto font-bold font-mainFont text-title3 text-center mb-[16px] ${textClass}`}
      >
        {title}
      </h1>
      <p
        className={`text-center opacity-70 font-secondFont w-[90%] pb-4 ${textClass}`}
      >
        {paragraph}
      </p>
      <div>
        <Button label="Saiba mais" onClick={onClick} />

        <Dialog
          className="font-secondFont"
          closeIcon={<X size={20} />}
          header={<span className="text-secondary">{title}</span>}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{
            "4000px": "641px",
            "1024px": "641px",
            "641px": "85vw",
          }}
        >
          {description}
        </Dialog>
      </div>
    </div>
  );
}
