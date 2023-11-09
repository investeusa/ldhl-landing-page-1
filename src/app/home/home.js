"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from 'next/script'
import { redirect } from 'next/navigation'
import Button from "@/components/button";
import { roboto } from "@/fonts";
import ebook1 from "@/images/ebook1.png";
import ebook2 from "@/images/ebook2.png";
import ebook3 from "@/images/ebook3.png";
import bannerMeio1 from "@/images/meio1.png";
import bannerMeio2 from "@/images/meio2.png";
import bannerMeio3 from "@/images/meio3.png";
import bannerMeio4 from "@/images/meio4.png";
import garantia from "@/images/garantia-1.png";
import logoWhite from "@/images/logo.png";
import headline from "@/images/headline1.png";
import GoogleTagManager from "../../components/GoogleTagManager.js";

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  const [utmParams, setUtmParams] = useState('');
  const [userDelay, setUserDelay] = useState(1000 * 5); // 1240
  const [initialLoadTime, setInitialLoadTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const URL_TICTO = 'https://payment.ticto.app/O4D13D95A?event=InitiateCheckout'

  useEffect(() => {
    // Pega os parâmetros da URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const utmParameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      let utmString = '';

      utmParameters.forEach((param) => {
        const value = params.get(param);
        if (value) {
          utmString += `${param}=${value}&`;
        }
        //  else {
        //   redirect('/')
        // }
      });

      if (utmString) {
        utmString = `?${utmString.slice(0, -1)}`; // Remove o último "&"
        setUtmParams(utmString);
      }
    }
  }, []);

  useEffect(() => {
    const savedTime = localStorage.getItem('initialLoadTime');
    if (savedTime) {
      setInitialLoadTime(parseInt(savedTime));
    } else {
      const currentTime = Date.now();
      localStorage.setItem('initialLoadTime', currentTime);
      setInitialLoadTime(currentTime);
    }

    const savedTotalTime = localStorage.getItem('totalTime');
    if (savedTotalTime) {
      setTotalTime(parseInt(savedTotalTime));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - initialLoadTime;
      setTotalTime(elapsedTime);
      localStorage.setItem('totalTime', elapsedTime);

      if (elapsedTime > userDelay) {
        setIsButtonVisible(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [initialLoadTime, userDelay]);


  return (
    <div className="bg-primary items-start">
      <div>
        <GoogleTagManager />
      </div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Livre-se da Herpes Labial</title>
      <div className="bg-primary py-1 items-start"></div>
      <div className="mx-auto max-w-4xl bg-white rounded-xl overflow-hidden items-start justify-center items-center content-center">
        <section className="bg-primary pt-5 pb-10 mask1 bg-[url('/images/bg-1-plain.svg')] bg-no-repeat bg-bottom bg-contain">
          <h2
            className={
              roboto.className +
              " text-white text-center uppercase font-black text-4xl md:text-6xl tracking-tight"
            }
          >
            Livre-se da <br />
            <span className="text-5xl md:text-7xl text-yellow-400">
              Herpes Labial
            </span>
          </h2>
          <div className="text-white text-center md:text-xl mb-5">
            <Image alt="profil" src={headline} className="mx-auto object-cover rounded" />
          </div>
          <div className='justify-center items-center content-center '>
            <div className="divide-y divide-gray-300/50 md:max-w-md md:ml-56 flex ">
              <div id="vid_65405bc2e5220c00096bfc46" >
                <div id="thumb_65405bc2e5220c00096bfc46" role="status" className='flex justify-center items-center p-5'>
                  <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-100 fill-rose-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                </div>
                <div id="thumb_65405bc2e5220c00096bfc46"></div>
              </div>
              <Script type="text/javascript" id="scr_65405bc2e5220c00096bfc46">var s=document.createElement(`script`);s.src=`https://scripts.converteai.net/dc18b5f5-d9cd-4d50-b62e-13e5bdae39b4/players/65405bc2e5220c00096bfc46/player.js`,s.async=!0,document.head.appendChild(s);</Script>
            </div>
          </div>
          <div className="flex justify-center py-7">
            <Button
              type="primary"
              href={`${URL_TICTO}${utmParams}`}
              className="uppercase md:text-lg font-bold tracking-wider px-8 py-3 text-center"
            >
              clique aqui! Quero tratar o Herpes Labial!
            </Button>
          </div>
        </section>
        <section className=" items-start justify-center items-center content-center">
          <div className="text-justify mx-3">
            <div className="flex justify-center my-2"></div>
            <p className="mb-3 text-justify">
              Você já perdeu a conta de quantas vezes teve que lidar com o desconforto e constrangimento causado pelo Herpes Labial?
              Apresentamos a solução que vai finalmente te ajudar a diminuir drasticamente as crises dessa condição.
            </p>
            <p className="mb-3 text-justify">
              Você já se sentiu envergonhado(a) ao sair de casa com aquelas dolorosas feridas no lábio? O herpes labial pode ser extremamente incômodo e afetar sua autoestima.
              Além disso, as crises recorrentes são extremamente dolorosas e podem te impedir de aproveitar momentos importantes da sua vida. Mas a boa notícia é que você não precisa mais conviver com essa situação!
            </p>
            <p className="mb-3 text-justify">
              Apresentamos o "Livre-se da Herpes Labial", um programa completo que vai te guiar passo a passo para reduzir em até 91% a carga viral do herpes labial e diminuir os sintomas em menos de 24 horas.
              Com nossa técnica natural e simples, você vai finalmente ter controle sobre essa condição e poder desfrutar da vida sem preocupações.
            </p>
          </div>
        </section>
        {isButtonVisible && (
          <>
            <section>
              <Image src={bannerMeio1} alt="Herpes Labial" priority={true} />
            </section>
            <section className="p-5 md:p-6">
              <h2 className="text-xl text-center font-bold text-primary mb-5 md:mb-10">
                Confira alguns dos benefícios que você terá com nosso <br /> programa exclusivo para o Lipedema!
              </h2>
              <div className="bg-gray-100 w-full mx-auto pt-8 rounded-lg mt-3">
                <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
                  <Image alt="profil" src={ebook1} className="mx-auto object-cover rounded" />
                  <div className="w-full md:w-2/3">
                    <h2 className="text-xl text-left font-bold text-primary mb-3">
                      Guia Livre-se da Herper Labial
                    </h2>
                    <ul className="text-gray-600 dark:text-gray-800 w-full m-auto text-left text-base md:text-1xl">
                      {[
                        "Tudo o que você precisa saber sobre o Herpes Labial;",
                        "Conheça os sintomas, possíveis causas e o tratamento mais eficaz contra o herpes labial;",
                        "Entenda o por que o vírus do herpes é resistente à maioria dos remédios comuns;",
                        "Alívio rápido da dor: Nossas técnicas ajudam a reduzir significativamente a dor associada ao herpes labial, proporcionando alívio imediato.",
                        "Cicatrização acelerada: Aprenda como acelerar o processo de cicatrização e reduzir o tempo de duração do surto.",
                        "Prevenção de futuros surtos: Descubra as melhores estratégias para evitar recorrências e manter o vírus sob controle.",
                        "Livrar-se do herpes labial não é apenas sobre saúde, mas também sobre recuperar sua confiança e sentir-se bem consigo mesmo novamente.",
                      ].map((item, i) => (
                        <li key={i} className="mb-4 flex items-start">
                          <Image
                            className="mr-2 mt-1"
                            src="/icons/check.svg"
                            alt={`icon-${i}`}
                            width={20}
                            height={20}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <section className="p-2">
                <div className="flex justify-center">
                  <Button
                    type="primary"
                    href={`${URL_TICTO}${utmParams}`}
                    className="uppercase md:text-lg my-6 font-bold tracking-wider px-8 py-3 text-center"
                  >
                    clique aqui! Quero meu programa agora!
                  </Button>
                </div>
              </section>
              <div className="bg-gray-100 w-full mx-auto pt-8 rounded-lg mt-3">
                <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
                  <Image alt="profil" src={ebook2} className="mx-auto object-cover rounded" />
                  <div className="w-full md:w-2/3">
                    <h2 className="text-xl text-left font-bold text-primary mb-3">
                      Desparasitação Natural
                    </h2>
                    <ul className="text-gray-600 dark:text-gray-800 w-full m-auto text-left text-base md:text-1xl">
                      {[
                        "Melhoria da Saúde Digestiva;",
                        "Aumento da Absorção de Nutrientes;",
                        "Fortalecimento do Sistema Imunológico;",
                        "Redução da Inflamação;",
                        "Prevenção de Complicações Graves.",
                      ].map((item, i) => (
                        <li key={i} className="mb-4 flex items-start">
                          <Image
                            className="mr-2 mt-1"
                            src="/icons/check.svg"
                            alt={`icon-${i}`}
                            width={20}
                            height={20}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 w-full mx-auto pt-8 rounded-lg mt-3 pb-5">
                <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
                  <Image alt="profil" src={ebook3} className="mx-auto object-cover rounded" />
                  <div className="w-full md:w-2/3">
                    <h2 className="text-xl text-left font-bold text-primary mb-3">
                      Nutrição e Imunidade na Herpes Labial
                    </h2>
                    <ul className="text-gray-600 dark:text-gray-800 w-full m-auto text-left text-base">
                      {[
                        "Aumente sua imunidade com esse guia de nutrição criado especialmete para o Herpes Labial;",
                        "Conheça os alimentos que potencializam a imunidade do nosso organismo;",
                        "Conheça os alimentos devem ser evitados e que ajudam o vírus a se manifestar;",
                        "Receitas de vitaminas especiais para a imunidade e Herpes Labial;",
                      ].map((item, i) => (
                        <li key={i} className="mb-4 flex items-start">
                          <Image
                            className="mr-2 mt-1"
                            src="/icons/check.svg"
                            alt={`icon-${i}`}
                            width={20}
                            height={20}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="">
                <h2 className="text-2xl text-center font-bold text-primary mb-5">
                  Aqui está tudo o que você receberá...
                </h2>
                <div className="max-w-2xl mx-auto flex justify-center">
                  <Image src={bannerMeio2} alt="Books showcase lipedema" />
                </div>
                <p className="text-7xl mt-6 text-center font-bold text-primary">
                  +
                </p>
              </div>
              <div className="bg-gray-50 px-3 py-10">
                <h3 className="text-4xl text-green-500 mb-12 font-bold text-center">
                  2 Bônus Exclusivos
                </h3>
                <p className="uppercase mb-10 text-center">
                  GARANTINDO HOJE SEU ACESSO AO{" "}
                  <span className="font-bold">
                    Livre-se da Hepes Labial (
                    <span className="line-through">VALOR R$ 147</span>)
                  </span>
                  ,
                </p>
                <p className="uppercase mb-10 text-center">
                  VOCÊ RECEBERÁ 2 BÔNUS EXCLUSIVOS:
                </p>
                <p className="uppercase mb-10 text-center">
                  <span className="font-bold">
                    DESPARASITAÇÃO NATURAL + Nutrição e Imunidade
                  </span>
                  <br />
                  TOTALMENTE gratuito!
                </p>
                <div className="max-w-2xl mx-auto">
                  <Image src={bannerMeio3} alt="Capa bonus" priority={true} />
                </div>
                <p className="uppercase text-center">
                  Bônus exclusivo.
                  <span className="font-bold line-through">
                    (Valor R$ 100)
                  </span>
                  <br />
                </p>
                <div className="flex justify-center mt-10">
                  <Button
                    type="primary"
                    href={`${URL_TICTO}${utmParams}`}
                    className="uppercase md:text-lg my-6 font-bold tracking-wider px-8 py-3 text-center"
                  >
                    clique aqui! Quero meu programa agora
                  </Button>
                </div>
              </div>
            </section>
            <section className="py-12 px-3 bg-[#f2f2f2] md:columns-2">
              <div className="flex justify-center">
                <Image
                  className="max-w-[13rem]"
                  src={garantia}
                  alt="Garantia lipedema"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-7">
                  Garantia
                </h3>
                <p className="tracking-wide leading-7">
                  Garantimos a sua total satisfação com nosso produto. E se por
                  algum motivo você não ficar satisfeita com a sua compra,
                  poderá solicitar o reembolso dentro do prazo legal de 7 dias.
                </p>
              </div>
            </section>
            <section className="py-16">
              <p className="text-gray-400 font-bold line-through uppercase text-center">
                VALOR TOTAL DE R$ 247
              </p>
              <p className="text-3xl uppercase text-center font-bold text-green-600">
                POR R$ 97 à vista <br />(apenas hoje)
              </p>
              <h3 className="text-4xl text-center font-bold text-primary mt-2">
                Tenha acesso ao
                <br /> Programa Completo
                <br /> Livre-se da Hepes Labial
              </h3>
              <Image
                className="mb-16"
                src={bannerMeio4}
                alt="Programa Completo Viva Bem Com Lipedema"
                priority={true}
              />
              <div className="flex justify-center">
                <Button
                  type="primary"
                  href={`${URL_TICTO}${utmParams}`}
                  className="uppercase md:text-lg font-bold tracking-wider px-8 py-3 text-center"
                >
                  Clique aqui para adquirir seu programa
                </Button>
              </div>
            </section>
            <section className="mb-5 md:px-16">
              <h2 className="text-4xl font-bold text-primary">
                Perguntas frequentes
              </h2>

              <div className="mb-10">
                {[
                  {
                    question: "Em quanto tempo eu irei receber meu acesso?",
                    answer:
                      "Acesso imediato ao conteúdo e por um ano. O conteúdo foi dividido em módulos e aulas para facilitar o controle dos estudos e experiência do usuário.",
                  },
                  {
                    question: "O programa completo é seguro?",
                    answer:
                      "Sim. Nossos materiais foram desenvolvidos com base em estudos e pesquisas de renomados especialistas internacionais em Herpes Labial, combinando os conhecimentos da teoria através evidências científicas comprovadas.",
                  },
                  {
                    question: "Quais serão as formas de pagamento?",
                    answer: "Cartão de crédito, débito ou PIX.",
                  },
                  {
                    question: "A plataforma de pagamentos é segura?",
                    answer:
                      "Sim, utilizamos a Ticto, uma das mais renomadas e completas plataformas de pagamentos do mercado.",
                  },
                  {
                    question:
                      "O que acontece se eu me arrepender da compra do programa?",
                    answer:
                      "Garantimos a sua total satisfação com nosso produto. E se por algum motivo você não ficar satisfeita com a compra, poderá solicitar o reembolso dentro do prazo de 7 dias.",
                  },
                ].map((item, i) => (
                  <details key={i} className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-lg text-primary transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-labelledby="title-ac01 desc-ac01"
                      >
                        <title id="title-ac01">Open icon</title>
                        <desc id="desc-ac01">
                          icon that represents the state of the summary
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">{item.answer}</p>
                  </details>
                ))}
              </div>
              <div className="flex justify-center">
                <Button
                  type="primary"
                  href={`${URL_TICTO}${utmParams}`}
                  className="uppercase md:text-lg font-bold tracking-wider px-8 py-3 text-center"
                >
                  Quero tratar o Herpes Labial hoje
                </Button>
              </div>
            </section>
            <section className="p-4 pb-10 bg-primary grid md:grid-cols-2 text-white">
              <div>
                <h3 className="mb-6">
                  PIRATARIA É <span className="font-bold">CRIME</span>
                </h3>
                <p className="text-xs mb-2">
                  A venda do Programa Livre-se da Hepes Labial só pode ser realizada através
                  deste site. Qualquer outro site onde você encontre este
                  programa é uma FALSIFICAÇÃO e vai contra as leis. Evite
                  falsificações e recuse conteúdos ilegais ou pirateados. Não
                  nos responsabilizamos por compras realizadas em outros sites.
                </p>
                <p className="text-xs">
                  Aviso Legal: “Nenhuma informação contida neste produto deve
                  ser interpretada como uma afirmação da obtenção de resultados.
                  É recomendado que o usuário consulte um profissional de saúde
                  qualificado antes de iniciar qualquer programa de
                  emagrecimento ou adotar mudanças significativas em sua dieta
                  ou estilo de vida. ”
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="max-w-[5rem] my-8 md:mt-0"
                  src={logoWhite}
                  alt="Logo autenticidade"
                />
                <p className="text-xs text-center mb-8">
                  Livre-se da Hepes Labial – Copyright 2023 Todos os direitos
                  reservados.
                </p>
                <p className="text-xs text-center">
                  <Link href="/termos-de-uso">Termos de Uso</Link> |{" "}
                  <Link href="/politica-de-privacidade">
                    Políticas de Privacidade
                  </Link>
                </p>
              </div>
            </section>
          </>
        )}
      </div>

      {/* <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-center">
            <strong>
              Este site não é afiliado ao Facebook ou a qualquer entidade do
              Facebook.
            </strong>{" "}
            Depois que você sair do Facebook, a responsabilidade não é deles e
            sim do nosso site. Fazemos todos os esforços para indicar claramente
            e mostrar todas as provas do produto e usamos resultados reais.
          </p>
        </div>
      </section> */}
    </div>
  );
}
