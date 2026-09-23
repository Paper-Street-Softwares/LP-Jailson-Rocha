import Button from "../interactives/Button";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";

export default function IconFeatureCard(props) {
  const { icon, title, paragraph, description, className, colorMode } = props;

  const [visible, setVisible] = useState(false);

  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-black",
  };

  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div
      className={`
        w-full
        max-w-[290px]
        min-h-[340px]
        h-full
        mt-[36px]
        tablet1:mt-0
        flex
        flex-col
        items-center
        text-center
        transition-transform
        desktop1:hover:scale-105
        ${className || ""}
      `}
    >
      {/* CAIXA DO ÍCONE */}

      <div
        className="
          w-[64px]
          h-[64px]
          min-w-[64px]
          min-h-[64px]
          shrink-0
          mb-[24px]
          rounded-md
          flex
          justify-center
          items-center
          bg-black
          text-white
          [&_svg]:text-white
          [&_svg]:stroke-white
        "
      >
        {icon}
      </div>

      {/* TÍTULO */}

      <h3
        className={`
          w-full
          h-auto
          desktop1:min-h-[70px]
          flex
          items-center
          justify-center
          font-bold
          font-mainFont
          text-title3
          text-center
          mb-[16px]
          ${textClass}
        `}
      >
        {title}
      </h3>

      {/* DESCRIÇÃO RESUMIDA */}

      <p
        className={`
          text-center
          opacity-70
          font-secondFont
          w-[90%]
          pb-4
          ${textClass}
        `}
      >
        {paragraph}
      </p>

      {/* BOTÃO E MODAL */}

      <div className="mt-auto pt-[4px]">
        <Button label="Saiba mais" onClick={() => setVisible(true)} />

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
