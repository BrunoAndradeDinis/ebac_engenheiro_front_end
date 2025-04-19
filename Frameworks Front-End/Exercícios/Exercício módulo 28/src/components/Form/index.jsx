import { useState } from "react";
import {form, form__container, form__container__title, form__container__item, form__container__button} from "../Form/Form.module.css";

export default function Form({imcResultado}) {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imcCalculado, setImcCalculado] = useState(0)
  const calcular = (e)=>{
    e.preventDefault()
    setImcCalculado(peso / (altura * 2))

    console.log(imcCalculado)
    imcResultado(imcCalculado)
  }
  return (
    <form className={form}>
      <div className={form__container}>
        <h1 className={form__container__title}>Calcular IMC</h1>
        <div className={form__container__item}>
          <label htmlFor="altura">Altura:</label>
          <input type="number" id="altura"  step="0.01" placeholder="1.75" max={2.2} min={.1} onChange={({target}) => setAltura(parseFloat(target.value))}/>
        </div>
        <div className={form__container__item}>
          <label htmlFor="peso">Peso:</label>
          <input type="number" id="peso"  step="0.01" placeholder="74.50" max={200.2} min={.1} onChange={({target}) => setPeso(parseFloat(target.value))}/>
        </div>
        <button className={form__container__button} onClick={calcular}>Calcular</button>

        <p>{imcCalculado === 0 ? "" : `Resuldado IMC: ${imcCalculado.toFixed(2)}`}</p>
      </div>
    </form>
  );
}
