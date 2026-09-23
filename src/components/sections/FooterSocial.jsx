import SectionArea from "../sectionElements/SectionArea.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import LogoFooter from "../sectionElements/footer/LogoFooter.jsx";
import LinksNavegationFooter from "../sectionElements/footer/LinksNavegationFooter.jsx";
import FooterSocialIcons from "../sectionElements/footer/FooterSocialIcons.jsx";

function FooterIcon({ type }) {
  const paths = {
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.34 1.91.66 2.81a2 2 0 0 1-.45 2.11L9.03 10.9a16 16 0 0 0 4.07 4.07l1.26-1.26a2 2 0 0 1 2.11-.45c.9.32 1.85.54 2.81.66A2 2 0 0 1 22 16.92Z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      {paths[type]}
    </svg>
  );
}

export default function FooterSocial({ colorMode, mode }) {
  const telefone = "(84) 99424-1252";
  const email = "contato@rochajuridico.com.br";

  const endereco =
    "Rua João Pessoa, 267, Sala 720, " +
    "Edifício Cidade do Natal, Cidade Alta, Natal/RN";

  const razaoSocial =
    "Jailson Robson da Rocha Sociedade Individual de Advocacia";

  const cnpj = "68.080.816/0001-06";

  const whatsappUrl =
    "https://wa.me/5584994241252?text=" +
    encodeURIComponent(
      "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
    );

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(endereco);

  const mapsEmbed =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(endereco) +
    "&output=embed";

  let footerBackground = "";
  let textColor = "";

  switch (colorMode) {
    case "dark":
      footerBackground = "bg-bgSectionOpacityDark";
      textColor = "text-white";
      break;

    case "light":
      footerBackground = "bg-bgFixedLight";
      textColor = "text-black";
      break;

    default:
      footerBackground = "bg-bgSectionDark";
      textColor = "text-white";
      break;
  }

  const isLight = colorMode === "light";

  const secondaryText = isLight ? "text-black/70" : "text-white/80";

  const borderColor = isLight ? "border-black/10" : "border-white/10";

  const gold = "#A18145";

  // Estilo único para os dois títulos.
  const headingClass =
    "m-0 font-bold text-[30px] desktop1:text-[36px] leading-[1.25]";

  const headingStyle = {
    fontFamily: '"Merriweather", Georgia, serif',
  };

  return (
    <footer
      className={`
        w-full
        font-secondFont
        text-left
        text-paragraph4
        ${footerBackground}
        ${textColor}
      `}
    >
      {/* Garante que as redes fiquem lado a lado,
          independentemente do layout interno do componente. */}
      <style>
        {`
          .footer-social-inline,
          .footer-social-inline > div,
          .footer-social-inline > div > div {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            flex-wrap: wrap;
            gap: 12px !important;
          }
        `}
      </style>

      <SectionArea paddingtop={true} paddingbot={false} className="pb-[23px]">
        <SectionWrapper className="gap-[42px]">
          {/* TRÊS COLUNAS PRINCIPAIS */}

          <div
            className="
              w-full
              max-w-[1215px]
              mx-auto
              flex flex-col
              gap-y-[55px]
              desktop1:flex-row
              desktop1:items-start
              desktop1:justify-between
              desktop1:gap-x-[45px]
            "
          >
            {/* COLUNA 1 - CONTATOS */}

            <div
              className="
                flex flex-col
                gap-y-[23px]
                w-full
                desktop1:w-[320px]
                desktop1:shrink-0
              "
            >
              <div className="mb-[15px]">
                <LogoFooter />
              </div>

              {/* Telefone */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start
                  gap-[12px]
                  transition-opacity
                  hover:opacity-70
                "
              >
                <FooterIcon type="phone" />

                <div className="flex flex-col gap-[3px]">
                  <span>{telefone}</span>

                  <span className={`text-[12px] ${secondaryText}`}>
                    Atendimento via WhatsApp
                  </span>
                </div>
              </a>

              {/* E-mail */}

              <a
                href={`mailto:${email}`}
                className="
                  flex items-start
                  gap-[12px]
                  transition-opacity
                  hover:opacity-70
                  break-all
                "
              >
                <FooterIcon type="mail" />

                <span>{email}</span>
              </a>

              {/* Endereço */}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start
                  gap-[12px]
                  transition-opacity
                  hover:opacity-70
                "
              >
                <FooterIcon type="pin" />

                <div className="flex flex-col gap-[4px]">
                  <span>Rua João Pessoa, 267</span>

                  <span>Sala 720 - Edifício Cidade do Natal</span>

                  <span>Cidade Alta - Natal/RN</span>
                </div>
              </a>

              {/* Expediente */}

              <div className="flex items-start gap-[12px]">
                <FooterIcon type="clock" />

                <div className="flex flex-col gap-[4px]">
                  <span>Segunda a sexta-feira:</span>
                  <span>8h às 18h</span>
                </div>
              </div>

              {/* REDES SOCIAIS */}

              <div className="pt-[10px]">
                <div className="footer-social-inline">
                  <FooterSocialIcons instagram={true} facebook={true} />
                </div>
              </div>
            </div>

            {/* COLUNA 2 - GOOGLE MAPS */}

            <div
              className="
                flex flex-col
                gap-y-[20px]
                w-full
                desktop1:flex-1
                desktop1:min-w-0
              "
            >
              <h2 className={headingClass} style={headingStyle}>
                Onde estamos
              </h2>

              <p className={`m-0 ${secondaryText}`}>
                Nosso escritório está localizado no bairro Cidade Alta, em
                Natal/RN.
              </p>

              {/* Mapa */}

              <div
                className={`
                  w-full
                  h-[240px]
                  overflow-hidden
                  rounded-[6px]
                  border
                  ${borderColor}
                `}
              >
                <iframe
                  src={mapsEmbed}
                  title="Localização do escritório Rocha Advocacia"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Botão do mapa */}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-[10px]
                  w-fit
                  min-h-[45px]
                  px-[22px]
                  py-[10px]
                  rounded-[6px]
                  text-white
                  font-medium
                  transition-all
                  duration-300
                  hover:brightness-110
                "
                style={{ backgroundColor: gold }}
              >
                <FooterIcon type="pin" />
                Como chegar
                <FooterIcon type="arrow" />
              </a>
            </div>

            {/* COLUNA 3 - NAVEGAÇÃO */}

            <div
              className="
                flex flex-col
                gap-y-[20px]
                w-full
                desktop1:w-[225px]
                desktop1:shrink-0
              "
            >
              <h2 className={headingClass} style={headingStyle}>
                NAVEGAÇÃO
              </h2>

              <LinksNavegationFooter mode={mode} />
            </div>
          </div>

          {/* RODAPÉ INFERIOR */}

          <div
            className={`
              w-full
              max-w-[1215px]
              mx-auto
              mt-[70px]
              pt-[25px]
              border-t
              ${borderColor}
            `}
          >
            {/* Informações jurídicas */}

            <div
              className="
                flex flex-col
                items-center
                gap-[8px]
                text-center
              "
            >
              <p className="font-medium leading-relaxed">{razaoSocial}</p>

              <p className={secondaryText}>CNPJ: {cnpj}</p>
            </div>

            {/* Copyright */}

            <div
              className={`
                mt-[28px]
                flex flex-col
                items-center
                gap-[6px]
                text-center
                text-[13px]
                ${secondaryText}
              `}
            >
              <p>
                © {new Date().getFullYear()} - Rocha Advocacia. Todos os
                direitos reservados.
              </p>

              <a
                href="https://paperstreet.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity  hover:opacity-70"
              >
                Gostaria de ter um site como este? Clique aqui.
              </a>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </footer>
  );
}
