/* eslint-disable react-refresh/only-export-components */
import "./perfil.css";

// export default function() {
export default ({nome, endereco}) => {

  return (
    <div className="perfil">
      {/* {JSON.stringify(props)} */}
      <img src={endereco} className="perfil-avatar" />
      <h3 className="perfil-titulo">{nome}</h3>
    </div>
  );
};
