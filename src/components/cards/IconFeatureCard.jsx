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
        duration-300
        desktop1:hover:scale-105
        ${className || ""}
      `}
    >
      {/* ÍCONE */}
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
          leading-[1.55]
          ${textClass}
        `}
      >
        {paragraph}
      </p>

      {/* BOTÃO */}
      <div className="mt-auto pt-[4px]">
        <Button label="Saiba mais" onClick={() => setVisible(true)} />

        {/* MODAL */}
        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          modal
          draggable={false}
          dismissableMask
          closeOnEscape
          style={{
            width: "760px",
            maxWidth: "92vw",
          }}
          breakpoints={{
            "1024px": "760px",
            "768px": "90vw",
            "480px": "94vw",
          }}
          closeIcon={<X size={22} strokeWidth={1.8} className="text-white" />}
          header={
            <div className="pr-[18px]">
              <span
                className="
                  font-mainFont
                  font-bold
                  text-[24px]
                  tablet1:text-[28px]
                  text-[#b58a42]
                "
              >
                {title}
              </span>
            </div>
          }
          className="
            font-secondFont
            overflow-hidden
            rounded-[14px]

            [&_.p-dialog-header]:bg-[#0d0d0d]
            [&_.p-dialog-header]:text-white
            [&_.p-dialog-header]:border-b
            [&_.p-dialog-header]:border-[#262626]
            [&_.p-dialog-header]:px-[22px]
            [&_.p-dialog-header]:tablet1:px-[34px]
            [&_.p-dialog-header]:pt-[26px]
            [&_.p-dialog-header]:pb-[20px]

            [&_.p-dialog-content]:bg-[#0d0d0d]
            [&_.p-dialog-content]:text-white
            [&_.p-dialog-content]:px-[22px]
            [&_.p-dialog-content]:tablet1:px-[34px]
            [&_.p-dialog-content]:py-[26px]
            [&_.p-dialog-content]:max-h-[72vh]
            [&_.p-dialog-content]:overflow-y-auto

            [&_.p-dialog-header-icons]:gap-[8px]

            [&_.p-dialog-header-close]:text-white
            [&_.p-dialog-header-close]:w-[40px]
            [&_.p-dialog-header-close]:h-[40px]
            [&_.p-dialog-header-close]:rounded-full
            [&_.p-dialog-header-close]:transition-colors
            [&_.p-dialog-header-close:hover]:bg-[#1f1f1f]

            [&_.p-dialog-content::-webkit-scrollbar]:w-[7px]
            [&_.p-dialog-content::-webkit-scrollbar-track]:bg-[#111]
            [&_.p-dialog-content::-webkit-scrollbar-thumb]:bg-[#8f6b32]
            [&_.p-dialog-content::-webkit-scrollbar-thumb]:rounded-full
          "
        >
          {description}
        </Dialog>
      </div>
    </div>
  );
}
