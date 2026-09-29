import { useTranslation } from "react-i18next";

import {
  House,
  Building2,
  BriefcaseBusiness,
  Scale,
  CarFront,
} from "lucide-react";

import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

/* =========================================================
   COMPONENTES INTERNOS DOS MODAIS
========================================================= */

function ModalParagraph({ children, destaque = false }) {
  return (
    <p
      className={`
        text-[15px]
        tablet1:text-[16px]
        leading-[1.8]
        text-left
        mb-[18px]
        last:mb-0
        ${destaque ? "text-white font-medium" : "text-white/75 font-normal"}
      `}
    >
      {children}
    </p>
  );
}

function ModalSection({ title, children }) {
  return (
    <section className="mt-[34px] first:mt-0">
      <div className="flex items-center gap-[12px] mb-[18px]">
        <div
          className="
            w-[4px]
            h-[26px]
            shrink-0
            rounded-full
            bg-[#b58a42]
          "
        />

        <h4
          className="
            font-mainFont
            font-bold
            text-[19px]
            tablet1:text-[21px]
            text-white
            leading-tight
          "
        >
          {title}
        </h4>
      </div>

      {children}
    </section>
  );
}

function ModalList({ items }) {
  return (
    <ul
      className="
        grid
        grid-cols-1
        tablet1:grid-cols-2
        gap-x-[20px]
        gap-y-[10px]
        mt-[15px]
      "
    >
      {items.map((item) => (
        <li
          key={item}
          className="
            flex
            items-start
            gap-[10px]
            text-left
            text-[14px]
            tablet1:text-[15px]
            leading-[1.55]
            text-white/80
          "
        >
          <span
            className="
              mt-[8px]
              w-[5px]
              h-[5px]
              min-w-[5px]
              rounded-full
              bg-[#b58a42]
            "
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ModalHighlight({ children }) {
  return (
    <div
      className="
        my-[25px]
        border
        border-[#30291e]
        bg-[#15130f]
        rounded-[10px]
        px-[20px]
        py-[18px]
        tablet1:px-[24px]
        tablet1:py-[20px]
      "
    >
      <p
        className="
          text-left
          text-[15px]
          tablet1:text-[16px]
          leading-[1.75]
          text-[#d4b16f]
          font-medium
        "
      >
        {children}
      </p>
    </div>
  );
}

function ModalDivider() {
  return <div className="w-full h-px bg-white/10 my-[30px]" />;
}

/* =========================================================
   DIREITO PREVIDENCIÁRIO
========================================================= */

function PrevidenciarioDescription() {
  return (
    <div className="font-secondFont">
      <ModalParagraph destaque>
        O Direito Previdenciário envolve regras complexas, mudanças legislativas
        e diferentes critérios para concessão e revisão de benefícios.
      </ModalParagraph>

      <ModalParagraph>
        Na Rocha | Advocacia, realizamos uma análise individualizada da situação
        de cada cliente, buscando identificar direitos, oportunidades e os
        caminhos jurídicos mais adequados para cada caso.
      </ModalParagraph>

      <ModalParagraph>
        Nossa atuação compreende tanto a orientação e o planejamento
        previdenciário quanto a atuação administrativa e judicial, sempre com
        atenção ao histórico contributivo e à documentação de cada segurado.
      </ModalParagraph>

      <ModalSection title="Principais áreas de atuação">
        <ModalList
          items={[
            "Aposentadoria por idade;",
            "Aposentadoria por tempo de contribuição e regras de transição;",
            "Aposentadoria especial;",
            "Benefício por incapacidade temporária;",
            "Aposentadoria por incapacidade permanente;",
            "Auxílio-acidente;",
            "Pensão por morte;",
            "Salário-maternidade;",
            "Benefício de Prestação Continuada (BPC/LOAS);",
            "Revisão de benefícios previdenciários;",
            "Análise de períodos contributivos;",
            "Reconhecimento de tempo especial e rural;",
            "Planejamento previdenciário;",
            "Recursos e requerimentos administrativos;",
            "Ações judiciais para concessão ou revisão de benefícios.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Planejamento Previdenciário">
        <ModalHighlight>
          Nem sempre o melhor momento para procurar um advogado é depois de um
          benefício ser negado.
        </ModalHighlight>

        <ModalParagraph>
          O planejamento previdenciário permite analisar o histórico de
          contribuições, períodos de trabalho, atividades especiais, regras
          aplicáveis e possíveis cenários de aposentadoria, proporcionando ao
          segurado maior segurança antes de tomar decisões que podem produzir
          efeitos por muitos anos.
        </ModalParagraph>
      </ModalSection>

      <ModalSection title="Atuação administrativa e judicial">
        <ModalParagraph>
          Quando necessário, a Rocha | Advocacia atua perante o INSS e também na
          esfera judicial, especialmente em situações de indeferimento, revisão
          ou necessidade de reconhecimento de direitos previdenciários.
        </ModalParagraph>

        <ModalHighlight>
          Cada história profissional é diferente. Por isso, cada planejamento
          previdenciário também deve ser individualizado.
        </ModalHighlight>
      </ModalSection>
    </div>
  );
}

/* =========================================================
   DIREITO EMPRESARIAL
========================================================= */

function EmpresarialDescription() {
  return (
    <div className="font-secondFont">
      <ModalParagraph destaque>
        A atividade empresarial exige decisões jurídicas que considerem não
        apenas o problema imediato, mas também seus impactos financeiros,
        patrimoniais e tributários.
      </ModalParagraph>

      <ModalParagraph>
        Na Rocha | Advocacia, atuamos de forma estratégica na estruturação e
        proteção de empresas e patrimônios, buscando soluções jurídicas que
        contribuam para a redução de riscos, recuperação de créditos,
        organização patrimonial e regularidade tributária.
      </ModalParagraph>

      <ModalSection title="Recuperação de Créditos">
        <ModalHighlight>
          Créditos não recebidos representam impacto direto no fluxo de caixa e
          na saúde financeira da empresa.
        </ModalHighlight>

        <ModalParagraph>
          Atuamos na recuperação judicial e extrajudicial de créditos,
          utilizando medidas adequadas à natureza de cada obrigação, incluindo
          cobrança, execução, investigação patrimonial e localização de ativos
          passíveis de constrição.
        </ModalParagraph>

        <ModalParagraph>
          A atuação pode envolver a análise do patrimônio do devedor,
          identificação de bens e direitos, pesquisas patrimoniais e adoção de
          medidas judiciais destinadas a aumentar a efetividade da recuperação
          do crédito.
        </ModalParagraph>
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Gestão e Recuperação de Créditos Tributários">
        <ModalParagraph>
          A correta análise da situação tributária da empresa pode revelar
          valores passíveis de recuperação, compensação ou regularização.
        </ModalParagraph>

        <ModalParagraph>
          Atuamos na análise jurídica de créditos tributários, passivos fiscais
          e oportunidades de regularização, avaliando a situação específica da
          empresa e as alternativas juridicamente disponíveis para redução de
          riscos e melhoria da organização financeira.
        </ModalParagraph>
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Holding Patrimonial e Organização Patrimonial">
        <ModalParagraph>
          A estruturação de uma Holding Patrimonial pode ser utilizada, quando
          juridicamente e economicamente adequada, como instrumento de
          organização de bens, planejamento sucessório e estruturação do
          patrimônio familiar e empresarial.
        </ModalParagraph>

        <ModalParagraph>
          Nossa atuação envolve a análise da estrutura patrimonial existente,
          dos objetivos dos envolvidos e dos aspectos societários, civis,
          sucessórios e tributários relacionados à constituição e utilização da
          holding.
        </ModalParagraph>

        <ModalHighlight>
          O objetivo não é simplesmente constituir uma empresa, mas avaliar se a
          estrutura societária efetivamente atende às necessidades patrimoniais
          e empresariais do cliente.
        </ModalHighlight>
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Atuação Estratégica">
        <ModalParagraph>
          Cada empresa possui uma realidade própria. Por isso, antes de indicar
          uma solução, analisamos documentos, contratos, patrimônio, obrigações
          e riscos envolvidos.
        </ModalParagraph>

        <ModalParagraph>
          A Rocha | Advocacia atua com uma visão integrada do Direito
          Empresarial, buscando soluções jurídicas que permitam ao empresário
          proteger seu patrimônio, recuperar ativos, organizar sua estrutura e
          tomar decisões com maior segurança jurídica.
        </ModalParagraph>
      </ModalSection>
    </div>
  );
}

/* =========================================================
   DIREITO TRABALHISTA
========================================================= */

function TrabalhistaDescription() {
  return (
    <div className="font-secondFont">
      <ModalParagraph destaque>
        O Direito do Trabalho exige conhecimento técnico, análise criteriosa dos
        fatos e atuação estratégica em cada etapa do conflito.
      </ModalParagraph>

      <ModalParagraph>
        Na Rocha | Advocacia, atuamos na defesa de trabalhadores e na assessoria
        jurídica de empresas, buscando soluções juridicamente seguras e
        adequadas às particularidades de cada caso.
      </ModalParagraph>

      <ModalParagraph>
        Nossa atuação abrange tanto a prevenção de conflitos trabalhistas quanto
        a representação em processos judiciais, com análise individualizada de
        documentos, contratos, relações de trabalho e riscos envolvidos.
      </ModalParagraph>

      <ModalSection title="Para trabalhadores">
        <ModalParagraph>
          Atuamos na defesa de direitos relacionados à relação de emprego,
          incluindo:
        </ModalParagraph>

        <ModalList
          items={[
            "Reconhecimento de vínculo empregatício;",
            "Verbas rescisórias e diferenças salariais;",
            "Horas extras e intervalos;",
            "Adicional de insalubridade e periculosidade;",
            "Rescisão indireta;",
            "Reversão de justa causa;",
            "FGTS;",
            "Férias, 13º salário e demais verbas trabalhistas;",
            "Acidentes e doenças relacionadas ao trabalho;",
            "Indenizações decorrentes da relação de trabalho.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Para empresas">
        <ModalParagraph>
          Prestamos orientação jurídica preventiva e atuação contenciosa, com
          foco na redução de riscos e prevenção de passivos trabalhistas,
          incluindo:
        </ModalParagraph>

        <ModalList
          items={[
            "Consultoria e orientação trabalhista;",
            "Análise de contratos e documentos;",
            "Adequação de procedimentos internos;",
            "Análise de riscos trabalhistas;",
            "Defesa em reclamações trabalhistas;",
            "Acompanhamento de processos judiciais;",
            "Orientação sobre rescisões e relações de trabalho;",
            "Estratégias para prevenção e redução do passivo trabalhista.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Atuação estratégica">
        <ModalHighlight>
          Mais do que atuar em processos, buscamos compreender a origem do
          problema e construir uma estratégia jurídica adequada para cada
          situação.
        </ModalHighlight>
      </ModalSection>
    </div>
  );
}

/* =========================================================
   DIREITO CIVIL
========================================================= */

function CivilDescription() {
  return (
    <div className="font-secondFont">
      <ModalParagraph destaque>
        As questões relacionadas à família e ao patrimônio exigem mais do que
        conhecimento jurídico. Exigem sensibilidade, planejamento e uma análise
        cuidadosa das circunstâncias de cada caso.
      </ModalParagraph>

      <ModalParagraph>
        Na Rocha | Advocacia, atuamos na área de Direito Civil, com ênfase em
        Direito de Família e Sucessões, buscando soluções juridicamente seguras
        para preservar direitos, organizar patrimônios e conduzir situações
        familiares com responsabilidade e estratégia.
      </ModalParagraph>

      <ModalSection title="Direito de Família">
        <ModalParagraph>
          Atuamos na orientação e representação em questões relacionadas às
          relações familiares e seus efeitos jurídicos, incluindo:
        </ModalParagraph>

        <ModalList
          items={[
            "Divórcio judicial e extrajudicial;",
            "Dissolução de união estável;",
            "Reconhecimento e dissolução de união estável;",
            "Partilha de bens;",
            "Pensão alimentícia;",
            "Revisão, redução e exoneração de alimentos;",
            "Guarda e convivência familiar;",
            "Investigação e reconhecimento de paternidade;",
            "Regulamentação de questões patrimoniais entre cônjuges e companheiros;",
            "Inventário e questões patrimoniais decorrentes das relações familiares.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Direito das Sucessões">
        <ModalParagraph>
          A sucessão patrimonial exige atenção especial aos direitos dos
          herdeiros, à existência de bens, dívidas, contratos e às
          particularidades de cada núcleo familiar.
        </ModalParagraph>

        <ModalParagraph>Atuamos em:</ModalParagraph>

        <ModalList
          items={[
            "Inventário judicial e extrajudicial;",
            "Partilha e sobrepartilha;",
            "Arrolamento;",
            "Reconhecimento de direitos sucessórios;",
            "Apuração e regularização de patrimônio;",
            "Questões envolvendo herdeiros e meeiros;",
            "Planejamento sucessório;",
            "Testamentos e disposições patrimoniais;",
            "Conflitos relacionados à sucessão;",
            "Regularização de bens deixados pelo falecido.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Planejamento Familiar e Patrimonial">
        <ModalHighlight>
          Em determinadas situações, a prevenção pode evitar conflitos futuros.
        </ModalHighlight>

        <ModalParagraph>
          A Rocha | Advocacia também atua na análise jurídica da organização
          patrimonial familiar, avaliando instrumentos e estruturas adequadas
          para a proteção e transmissão do patrimônio, sempre considerando a
          legislação aplicável e as particularidades de cada família.
        </ModalParagraph>
      </ModalSection>
    </div>
  );
}

/* =========================================================
   DIREITO DE TRÂNSITO
========================================================= */

function TransitoDescription() {
  return (
    <div className="font-secondFont">
      <ModalParagraph destaque>
        Acidentes de trânsito podem gerar consequências que vão muito além dos
        danos materiais ao veículo.
      </ModalParagraph>

      <ModalParagraph>
        Lesões físicas, incapacidade, perda de renda, danos morais e discussões
        sobre responsabilidade podem transformar um acidente em uma questão
        jurídica complexa.
      </ModalParagraph>

      <ModalParagraph>
        Na Rocha | Advocacia, atuamos em questões relacionadas ao Direito de
        Trânsito, com ênfase na análise e condução de casos envolvendo acidentes
        de trânsito e responsabilidade civil, buscando identificar os direitos
        envolvidos e as medidas jurídicas adequadas para cada situação.
      </ModalParagraph>

      <ModalSection title="Acidentes de Trânsito">
        <ModalParagraph>
          Atuamos na análise jurídica de acidentes envolvendo veículos,
          especialmente em situações que demandem apuração de responsabilidade e
          reparação dos prejuízos.
        </ModalParagraph>

        <ModalParagraph>Entre as situações atendidas estão:</ModalParagraph>

        <ModalList
          items={[
            "Acidentes com danos materiais;",
            "Acidentes com vítimas lesionadas;",
            "Indenização por danos materiais e morais;",
            "Danos estéticos decorrentes de acidentes;",
            "Incapacidade temporária ou permanente;",
            "Perda ou redução da capacidade de trabalho;",
            "Pensão decorrente de acidente;",
            "Responsabilidade civil por acidentes de trânsito;",
            "Acidentes envolvendo veículos de empresas;",
            "Colisões e demais eventos relacionados à circulação de veículos;",
            "Análise de provas, documentos e circunstâncias do acidente.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Responsabilidade Civil no Trânsito">
        <ModalParagraph>
          A definição da responsabilidade após um acidente exige a análise das
          circunstâncias concretas do caso.
        </ModalParagraph>

        <ModalParagraph>
          Documentos, registros, fotografias, vídeos, testemunhas, laudos,
          boletins de ocorrência e demais elementos de prova podem ser
          determinantes para a adequada compreensão dos fatos.
        </ModalParagraph>

        <ModalParagraph>
          Nossa atuação busca identificar os responsáveis, dimensionar os
          prejuízos e avaliar juridicamente as medidas necessárias para a
          reparação dos danos.
        </ModalParagraph>
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Atuação Preventiva e Administrativa">
        <ModalParagraph>
          O Direito de Trânsito também envolve questões administrativas que
          podem afetar diretamente o direito de dirigir e o patrimônio do
          proprietário ou condutor.
        </ModalParagraph>

        <ModalParagraph>
          Atuamos, conforme o caso, em questões relacionadas a:
        </ModalParagraph>

        <ModalList
          items={[
            "Defesa e recursos administrativos;",
            "Suspensão e cassação do direito de dirigir;",
            "Infrações de trânsito;",
            "Processos administrativos;",
            "Pontuação na CNH;",
            "Regularização de situações relacionadas a veículos e condutores.",
          ]}
        />
      </ModalSection>

      <ModalDivider />

      <ModalSection title="Estratégia Jurídica">
        <ModalParagraph>
          Cada acidente possui circunstâncias próprias. Por isso, uma análise
          jurídica adequada deve considerar não apenas o dano ocorrido, mas
          também a dinâmica do acidente, as provas disponíveis, a
          responsabilidade dos envolvidos e a extensão dos prejuízos.
        </ModalParagraph>

        <ModalHighlight>
          Na Rocha | Advocacia, buscamos oferecer uma atuação técnica e
          estratégica para que o cliente compreenda seus direitos e tenha
          segurança na condução da questão jurídica.
        </ModalHighlight>
      </ModalSection>
    </div>
  );
}

/* =========================================================
   FEATURE SECTION
========================================================= */

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

  /*
    Todos os textos dos cards agora estão hardcoded aqui.
    Não dependem mais de content.texts.features/card1...card4.
  */
  const cards = [
    {
      id: "previdenciario",

      icon: <House size={26} strokeWidth={1.7} />,

      title: "Direito Previdenciário",

      subtitle:
        "Orientação em aposentadorias, benefícios e planejamento previdenciário.",

      description: <PrevidenciarioDescription />,
    },

    {
      id: "empresarial",

      icon: <Building2 size={26} strokeWidth={1.7} />,

      title: "Direito Empresarial",

      subtitle:
        "Estratégias jurídicas para empresas, patrimônio e recuperação de créditos.",

      description: <EmpresarialDescription />,
    },

    {
      id: "trabalhista",

      icon: <BriefcaseBusiness size={26} strokeWidth={1.7} />,

      title: "Direito Trabalhista",

      subtitle:
        "Atuação para trabalhadores e empresas em questões e conflitos trabalhistas.",

      description: <TrabalhistaDescription />,
    },

    {
      id: "civil",

      icon: <Scale size={26} strokeWidth={1.7} />,

      title: "Direito Civil",

      subtitle:
        "Atuação em Direito de Família, Sucessões e organização patrimonial.",

      description: <CivilDescription />,
    },

    {
      id: "transito",

      icon: <CarFront size={26} strokeWidth={1.7} />,

      title: "Direito de Trânsito",

      subtitle:
        "Atuação em acidentes, indenizações, responsabilidade civil e questões administrativas.",

      description: <TransitoDescription />,
    },
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
            /*
              Primeira linha:
              Previdenciário | Empresarial | Trabalhista

              Segunda linha centralizada:
              Civil | Trânsito
            */

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
