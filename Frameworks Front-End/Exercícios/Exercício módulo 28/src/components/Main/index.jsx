import {
  main,
  main__title,
  main__container,
  main__container__item,
} from "./Main.module.css";

export default function Main() {

  
  return (
    <main className={main}>
      <h2 className={main__title}>Seu IMC</h2>
      <div className={main__container}>
        <div className={main__container__item}>
          <p>
            <strong>Abaixo do peso:</strong> IMC abaixo de 18,5.
          </p>
        </div>
        <div className={main__container__item}>
          <p>
            <strong>Peso normal:</strong> IMC entre 18,5 e 24,9.
          </p>
        </div>
        <div className={main__container__item}>
          <p>
            <strong>Sobrepeso:</strong> IMC entre 25 e 29,9.
          </p>
        </div>
        <div className={main__container__item}>
          <p>
            <strong>Obesidade I:</strong> IMC entre 30 e 34,9.
          </p>
        </div>
        <div className={main__container__item}>
          <p>
            <strong>Obesidade II:</strong> IMC entre 35 e 39,9.
          </p>
        </div>
        <div className={main__container__item}>
          <p>
            <strong>Obesidade III:</strong> IMC acima de 40.
          </p>
        </div>
      </div>
    </main>
  );
}
