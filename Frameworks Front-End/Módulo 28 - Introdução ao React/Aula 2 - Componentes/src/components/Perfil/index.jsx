/* eslint-disable react-refresh/only-export-components */
import "./perfil.css";

// export default function() {
export default () => {
  const usuario = {
    nome: "Bruno",
    avatar: "https://github.com/BrunoAndradeDinis.png",
  };
  return (
    <div className="perfil">
      <img src={usuario.avatar} className="perfil-avatar" />
      <h3 className="perfil-titulo">{usuario.nome}</h3>
    </div>
  );
};

/* Uma forma convencional de exportar
const Perfil = () => {
  const usuario = {
    nome: "Bruno",
    avatar: "https://github.com/BrunoAndradeDinis.png",
  };
  return (
    <div className='perfil'>
      <img src={usuario.avatar} className='perfil-avatar'/>
      <h3 className='perfil-titulo'>{usuario.nome}</h3>
    </div>
  );
};

export default Perfil;
*/
