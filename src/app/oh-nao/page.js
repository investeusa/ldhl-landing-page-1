"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from 'next/script'
import { redirect } from 'next/navigation'
import Button from "@/components/button";
import headline from "@/images/downsell.webp";
import logoWhite from "@/images/logo-white-150x150.png";
import Pixel from '../../components/FacebookPixel'

export default function Home() {
  const [utmParams, setUtmParams] = useState('');
  // const [userDelay, setUserDelay] = useState(1000 * 170);
  // const [isButtonVisible, setIsButtonVisible] = useState(false);
  const URL_TICTO = 'https://payment.ticto.app/O1DA80FF3?event=InitiateCheckout'

  useEffect(() => {
    // Pega os parâmetros da URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const utmParameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      let utmString = '';

      utmParameters.forEach((param) => {
        const value = params.get(param);
        console.log(value)
        if (value) {
          utmString += `${param}=${value}&`;
        }
        // else {
        //   redirect('/')
        // }
      });
      if (utmString) {
        utmString = `?${utmString.slice(0, -1)}`; // Remove o último "&"
        setUtmParams(utmString);
      }
    }
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsButtonVisible(true);
  //   }, userDelay);
  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <div className="bg-primary items-start">

      {/* <div>
        <Pixel name='FACEBOOK_PIXEL_1' />
      </div> */}
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JDG5KY8HMP" />
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10996660370" /> */}
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
      <title>Oh não!</title>
      <div className="bg-primary py-1 items-start"></div>
      <div className="mx-auto max-w-4xl bg-white rounded-xl overflow-hidden items-start justify-center items-center content-center">
        <section className="p-5 md:p-6">
          <section className="p-2">
            <Image
              className="max-w mb-2"
              alt=""
              src={headline}
            />
            <div className="flex justify-center">
              <Button
                type="primary"
                href={`${URL_TICTO}${utmParams}`}
                className="ticto-upsell-button uppercase md:text-lg my-6 font-bold tracking-wider px-8 py-3 text-center"
              >
                clique aqui! Quero meu protocolo agora
              </Button>
            </div>
          </section>
        </section>
        <section className="p-4 pb-10 bg-[#5F1333] grid md:grid-cols-2 text-white">
          <div>
            <h3 className="mb-6">
              PIRATARIA É <span className="font-bold">CRIME</span>
            </h3>
            <p className="text-xs mb-2">
              A venda dos Programas e Guias Viva Bem Com Lipedema só pode ser realizada através
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
              Viva Bem Com Lipedema – Copyright 2023 Todos os direitos
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

      </div>
    </div>
  );
}
