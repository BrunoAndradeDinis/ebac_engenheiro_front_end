/* eslint-disable react-refresh/only-export-components */
import {header, avatar, name} from "./Perfil.module.css";

// export default function() {
export default ({nomeUsuario}) => {

  return (
    <header className={header}>
      {/* {JSON.stringify(props)} */}
      <img src={`https://github.com/${nomeUsuario}.png`} className={avatar}/>
      <h1 className={name}>{nomeUsuario}</h1>
    </header>
  );
};
