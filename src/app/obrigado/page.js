"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from 'next/script'
import Button from "@/app/components/button";

export default function Home() {
  const [utmParams, setUtmParams] = useState('');
  const [userDelay, setUserDelay] = useState(1000 * 170);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const URL_TICTO = 'https://payment.ticto.app/O581CB6FB'

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
      });

      if (utmString) {
        utmString = `?${utmString.slice(0, -1)}`; // Remove o último "&"
        setUtmParams(utmString);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, userDelay);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="bg-primary items-start">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Obrigado Desligue o Herpes Labial</title>
      <div className="bg-primary py-1 items-start"></div>
      <div className="mx-auto max-w-4xl bg-white rounded-xl overflow-hidden items-start justify-center items-center content-center">
        <section>
          <div className="p-5">
            <h2 className="text-2xl text-center font-bold text-primary mb-5">
              A equipe Desligue o Herpes Labial agradece a confiança, verifique sua caixa de e-mail e SPAM para informações sobre download e acesso ao nosso portal.
            </h2>
          </div>
        </section>
        <section className="p-4 pb-10 bg-primary grid md:grid-cols-2 text-white">
          <div>
            <h3 className="mb-6">
              PIRATARIA É <span className="font-bold">CRIME</span>
            </h3>
            <p className="text-xs mb-2">
              A venda dos Programas e Desligue o Herpes Labial só pode ser realizada através
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
            {/* <Image
              className="max-w-[5rem] my-8 md:mt-0"
              src={logoWhite}
              alt="Logo autenticidade"
            /> */}
            <p className="text-xs text-center mb-8">
              Desligue o Herpes Labial – Copyright 2023 Todos os direitos
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
