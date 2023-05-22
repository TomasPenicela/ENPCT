import '../home/style.css'
import {} from 'react-icons/fa'
import Home_Index from '../../components/home_index/home_index';
import About_Index from '../../components/about_index/about_index';
import Service_Index from '../../components/service_index/service_index';
import Parques_Index from '../../components/parques_index/parques_index';
import Administracao_Index from '../../components/administracao_index/administracao_index';
import Parceiros_index from '../../components/parceiros_index/parceiros_index';
import Noticias_Index from '../../components/noticias_index/noticias_index';
import ShowTestimonals from '../../components/testimonals/showTestimonals';


function Inicio() {
  return (
    <>
        <Home_Index />
        <About_Index />
        <Service_Index />
       <Noticias_Index /> 
        <Parques_Index />
        <Administracao_Index />
        <ShowTestimonals />
        <Parceiros_index />
         
    </>
  )
}

export default Inicio;