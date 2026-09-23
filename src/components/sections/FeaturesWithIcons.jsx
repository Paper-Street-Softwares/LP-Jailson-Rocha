import { useTranslation } from "react-i18next";
import { House } from "lucide-react";

import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

// Conteúdo do modal previdenciário.
// Formatação seguindo o padrão dos demais modais.
function PrevidenciarioDescription() {
  const areas = [
    {
      titulo: "Aposentadorias",
      texto:
        "Análise das regras aplicáveis, regras de transição, aposentadoria especial e preparação de requerimentos administrativos.",
    },
    {
      titulo: "Planejamento Previdenciário",
      texto:
        "Análise do histórico contributivo, projeção de benefícios e definição de estratégias para uma tomada de decisão mais segura.",
    },
    {
      titulo: "Benefícios por Incapacidade",
      texto:
        "Orientação para requerimentos, preparação documental, perícias e, quando necessário, atuação judicial.",
    },
    {
      titulo: "BPC/LOAS",
      texto:
        "Análise dos requisitos, documentação, situação socioeconômica e acompanhamento do requerimento administrativo ou judicial.",
    },
    {
      titulo: "Pensão por Morte",
      texto:
        "Análise da qualidade de segurado, dependência, união estável e demais requisitos necessários à obtenção do benefício.",
    },
  ];

  return (
    <div className="font-secondFont">
      {areas.map((area) => (
        <p key={area.titulo} className="mb-[24px] last:mb-0">
          - {area.titulo}
          <br />
          {area.texto}
        </p>
      ))}
    </div>
  );
}

export default function FeaturesWithIcons({ colorMode }) {
  const { t } = useTranslation();

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "squares",
    default: "squares",
  };

  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;

  const textClass = textClasses[colorMode] || textClasses.default;

  // Quatro cards originais
  const originalCards = [1, 2, 3, 4].map((number) => ({
    id: number,
    icon: content.texts.features[`card${number}`].icon,
    title: t(`features.card${number}.title`),
    subtitle: t(`features.card${number}.subtitle`),
    description: (
      <span
        dangerouslySetInnerHTML={{
          __html: t(`features.card${number}.description`),
        }}
      />
    ),
  }));

  // Previdenciário na primeira posição
  const cards = [
    {
      id: "previdenciario",

      icon: <House size={26} strokeWidth={1.7} color="white" />,

      title: "Direito Previdenciário",

      subtitle:
        "Orientação em aposentadorias, benefícios e planejamento previdenciário.",

      description: <PrevidenciarioDescription />,
    },

    ...originalCards,
  ];

  return (
    <SectionArea id="service" className={bgClass} paddingbot={true}>
      <SectionHeader
        className={`
          text-center
          mb-[26px]
          tablet1:mb-[40px]
          desktop1:mb-[72px]
          ${textClass}
        `}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
      />

      <SectionWrapper>
        <div
          className="
            w-full
            max-w-[1150px]
            mx-auto
            grid
            grid-cols-1
            tablet1:grid-cols-2
            desktop1:grid-cols-6
            gap-x-[35px]
            gap-y-[65px]
            desktop1:gap-x-[45px]
            desktop1:gap-y-[70px]
            items-stretch
            justify-items-center
          "
        >
          {cards.map((card, index) => {
            // Centralização da segunda linha
            let positionClass = "";

            if (index === 3) {
              positionClass = "desktop1:col-start-2";
            }

            if (index === 4) {
              positionClass = `
                tablet1:col-span-2
                desktop1:col-span-2
                desktop1:col-start-4
              `;
            }

            return (
              <div
                key={card.id}
                className={`
                  w-full
                  max-w-[300px]
                  h-full
                  mx-auto
                  flex
                  justify-center
                  desktop1:col-span-2
                  ${positionClass}
                `}
              >
                <MotionDivDownToUp className="flex justify-center w-full h-full ">
                  <IconFeatureCard
                    icon={card.icon}
                    title={card.title}
                    paragraph={card.subtitle}
                    description={card.description}
                    colorMode={colorMode}
                    className={textClass}
                  />
                </MotionDivDownToUp>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
