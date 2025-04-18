import { useState } from "react";
import {
  main,
  main__container,
  main__container__item,
  pesoAbaixo,
  pesoNormal,
  sobrepeso,
  obesidadeI,
  obesidadeII,
  obesidadeIII,
} from "./Main.module.css";
import { useEffect } from "react";

export default function Main({ imcResultado }) {
  const [qualImc, setQualImc] = useState("");

  const validaImc = (imc) => {
    switch (true) {
      case imc > 0 && imc < 1:
        return "IMC Não calculado"
      case imc > 1 && imc < 18.5:
        return "pesoAbaixo";
      case imc >= 18.5 && imc < 24.9:
        return "pesoNormal";
      case imc >= 25 && imc < 29.9:
        return "sobrepeso";
      case imc >= 30 && imc < 34.9:
        return "obesidadeI";
      case imc >= 35 && imc < 39.9:
        return "obesidadeII";
      case imc >= 40:
        return "obesidadeIII";
      default:
        return "IMC Não calculado";
    }
  };

  useEffect(() => {
    setQualImc(validaImc(imcResultado));
    console.log(qualImc)
  }, [imcResultado, qualImc]);
  return (
    <main className={main}>
      <h2>Seu IMC</h2>
      <div className={main__container}>
        <div
          className={`${main__container__item} ${
            qualImc === "pesoAbaixo" ? pesoAbaixo : ""
          }`}
        >
          <p>
            <strong>Abaixo do peso:</strong> IMC abaixo de 18,5.
          </p>
        </div>
        <div
          className={`${main__container__item} ${
            qualImc === "pesoNormal" ? pesoNormal: ""
          }`}
        >
          <p>
            <strong>Peso normal:</strong> IMC entre 18,5 e 24,9.
          </p>
        </div>
        <div
          className={`${main__container__item} ${
            qualImc === "sobrepeso" ? sobrepeso : ""
          }`}
        >
          <p>
            <strong>Sobrepeso:</strong> IMC entre 25 e 29,9.
          </p>
        </div>
        <div
          className={`${main__container__item} ${
            qualImc === "obesidadeI" ? obesidadeI : ""
          }`}
        >
          <p>
            <strong>Obesidade I:</strong> IMC entre 30 e 34,9.
          </p>
        </div>
        <div
          className={`${main__container__item} ${
            qualImc === "obesidadeII" ? obesidadeII : ""
          }`}
        >
          <p>
            <strong>Obesidade II:</strong> IMC entre 35 e 39,9.
          </p>
        </div>
        <div
          className={`${main__container__item} ${
            qualImc === "obesidadeIII" ? obesidadeIII : ""
          }`}
        >
          <p>
            <strong>Obesidade III:</strong> IMC acima de 40.
          </p>
        </div>
      </div>
    </main>
  );
}
