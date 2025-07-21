import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

const Cadatro = () => {
  return (
    <>
      {/* barra lateral */}
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadatro
