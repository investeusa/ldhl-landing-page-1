"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from 'next/script'
import { redirect } from 'next/navigation'
import Button from "@/components/button";
import logo from "@/images/upsell/logo.png";
import bonus from "@/images/upsell/bonus.png";
import garantia from "@/images/upsell/garantia.png";
import headline from "@/images/upsell/headline.png";
import escova from "@/images/upsell/escova.jpg";
import meioSite from "@/images/upsell/meio-site.png";
import meioSite2 from "@/images/upsell/meio-site-2.png";
import meioSite3 from "@/images/upsell/meio-site-3.png";
import Pixel from '../../components/FacebookPixel'

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  const [utmParams, setUtmParams] = useState('');
  const [userDelay, setUserDelay] = useState(1000 * 5); // 1240
  const [initialLoadTime, setInitialLoadTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const URL_TICTO = 'https://payment.ticto.app/O1DA80FF3?event=InitiateCheckout'

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
    <div className="bg-secundary items-start">
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JDG5KY8HMP" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10996660370" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JDG5KY8HMP');
          gtag('config', 'AW-10996660370');
        `}
        </Script>
      </div>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JDG5KY8HMP"></Script>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Parabéns Programa Lipedema 21 Dias</title>
      <div className="bg-secundary py-1 items-start"></div>
      <div className="mx-auto max-w-4xl bg-white rounded-xl overflow-hidden items-start justify-center items-center content-center">
        <section className="bg-secundary pb-10 mask1 bg-[url('/images/bg-1-plain.svg')] bg-no-repeat bg-bottom bg-contain">
          <Image alt="profil" src={headline} className="mx-auto object-cover rounded" />
          <div className='justify-center items-center content-center '>
            <div className="divide-y divide-gray-300/50 md:max-w-md md:ml-52 flex">
              <div id="vid_650a42cdc149ff00091bec6b" >
                <div id="thumb_650a42cdc149ff00091bec6b" role="status" className='flex justify-center items-center p-5'>
                  <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-100 fill-rose-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                </div>
                <div id="thumb_650a42cdc149ff00091bec6b"></div>
              </div>
              <Script type="text/javascript" id="scr_650a42cdc149ff00091bec6b">var s=document.createElement(`script`);s.src=`https://scripts.converteai.net/dc18b5f5-d9cd-4d50-b62e-13e5bdae39b4/players/650a42cdc149ff00091bec6b/player.js`,s.async=!0,document.head.appendChild(s);</Script>
            </div>
          </div>
          <div className="flex justify-center py-7">
            <Button
              type="primary"
              href={`${URL_TICTO}${utmParams}`}
              className="uppercase md:text-lg font-bold tracking-wider px-8 py-3 text-center"
            >
              clique aqui! Quero meu protocolo agora!
            </Button>
          </div>
          <Image alt="profil" src={logo} className="mx-auto object-cover rounded w-2/4" />
        </section>
        <>
          <section>
            <Image alt="profil" src={meioSite} className="mx-auto object-cover rounded" />
            <Image alt="profil" src={meioSite2} className="mx-auto object-cover rounded" />
            <Image alt="profil" src={meioSite3} className="mx-auto object-cover rounded" />
          </section>
          <section className="">
            <div className="bg-gray-100 w-full mx-auto pt-8 rounded-lg">
              <div className="flex flex-col items-center justify-center md:items-start md:flex-row mx-3">
                <div className="w-full md:w-3/4">
                  <ul className="text-gray-600 dark:text-gray-800 w-full m-auto text-left text-base md:text-2xl">
                    {[
                      "Combate a retenção de líquidos;",
                      "Estimula a circulação sanguínea;",
                      "Promove o fluxo linfático e a eliminação de toxinas;",
                      "Elimina a celulite;",
                      "Estimula o sistema imunológico;",
                      "Promove um relaxamento profundo;",
                      "Melhora a textura e dá vida à pele;",
                      "Estimula a produção de colágeno.",
                    ].map((item, i) => (
                      <li key={i} className="mb-4 flex items-start">
                        <Image
                          className="mr-2 mt-1 text-[#B54C47]"
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
            <div className="p-10">
              <h2 className="text-2xl text-center font-bold text-primary mb-5">
                Garantindo o Protocolo Escovação a Seco 10 dias, <span className="text-black"> somente hoje </span> nesta página, você ganhará...
              </h2>
              <h3 className="text-4xl text-green-500 mb-12 font-bold text-center">
                Uma Escova de Cerdas Naturais <br />
                de Bônus
              </h3>
              <div className="max-w-2xl mx-auto flex justify-center">
                <Image src={escova} alt="Escova Seca" />
              </div>
              <p className="text-3xl mt-6 text-center font-bold text-black">
                <span><span className="line-through">R$ 77,90</span></span>
              </p>
            </div>
          </section>
          <section className="py-5 px-3 bg-[#FFEEF2] md:columns-2">
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
                poderá solicitar o reembolso dentro do prazo de 30 dias.
              </p>
            </div>
          </section>
          <section className="py-16">
            <p className="text-gray-400 font-bold line-through uppercase text-center">
              VALOR TOTAL DE R$ 297
            </p>
            <p className="text-3xl uppercase text-center font-bold text-green-600">
              POR R$ 197,00
              <br />
              (apenas hoje)
            </p>
            <h3 className="text-4xl text-center font-bold text-primary mt-2">
              <br /> Protocolo Escovação a
              <br /> Seco 10 Dias + bônus
            </h3>
            <Image
              className="mb-16"
              src={bonus}
              alt="Protocolo Escovação a Seco 10 dias"
              priority={true}
            />
            <div className="flex justify-center">
              <Button
                type="primary"
                href={`${URL_TICTO}${utmParams}`}
                className="uppercase md:text-lg font-bold tracking-wider px-8 py-3 text-center"
              >
                Clique aqui! Quero meu protocolo agora!
              </Button>
            </div>
          </section>
          <section className="p-3 md:p-16">
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
                  question: "O protocolo é seguro?",
                  answer:
                    "Sim. Nossos materiais foram desenvolvidos com base em estudos e pesquisas de renomados especialistas internacionais e nacionais, combinando os conhecimentos da teoria e da prática de autoridades no assunto, embasado em evidências científicas.",
                },
                {
                  question: "Quais serão as formas de pagamento?",
                  answer: "Cartão de crédito, débito ou PIX.",
                },
                {
                  question: "Qual o prazo de entrega da escova?",
                  answer: "De 18 a 25 dias, podendo variar dependendo da liberação na Receita Federal",
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
                    "Garantimos a sua total satisfação com nosso produto. E se por algum motivo você não ficar satisfeita com a compra, poderá solicitar o reembolso dentro do prazo de 30 dias.",
                },
                {
                  question: "*Se eu cancelar a compra e receber a escova?",
                  answer:
                    "Como se trata de produto físico, reembolsaremos o valor integral subtraindo o valor de R$ 77,90 pois a mesma sairá de nosso estoque e não podemos arcar com os custos.",
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
                Quero meu protocolo
              </Button>
            </div>
          </section>
          <section className="p-4 pb-10 bg-[#B54C47] grid md:grid-cols-2 text-white">
            <div>
              <h3 className="mb-6">
                PIRATARIA É <span className="font-bold">CRIME</span>
              </h3>
              <p className="text-xs mb-2">
                A venda do Protocolo Escovação a Seco 10 dias só pode ser realizada através
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
                src={logo}
                alt="Logo autenticidade"
              />
              <p className="text-xs text-center mb-8">
                Protocolo Escovação a Seco 10 dias – Copyright 2023 Todos os direitos
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
      </div>

    </div>
  );
}
