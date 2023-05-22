import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './containers/home'
import Noticias_Home from './containers/noticias'
import Parques from './containers/parques'
import Contacto from './containers/contacto'
import Sobre from './containers/sobre'
import Servicos from './containers/servicos'
import NavBar from './components/navBar'
import Footer from './components/footer'
import Galeria from './containers/galeria'
import Documentos from './containers/documentos'
import Login from './containers/login'
import PCT_Maluana from './containers/parque-maluana'
import PCT_Mocuba from './containers/parque-mocuba'
import PCT_Muereti from './containers/parque-muereti'
import PCT_Dombe from './containers/parque-dombe'
import Noticia from './components/noticia/noticia'








function App() {

  return (
    <div className="App">
      {/* <NavBarWeather />
       */}

      <NavBar />


      <Routes>

        <Route index path='/' element={<Inicio />} />
        <Route path='/parques' element={<Parques />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/login' element={<Login />} />
        <Route path='/parque-maluana' element={<PCT_Maluana />} />
        <Route path='/parque-mocuba' element={<PCT_Mocuba />} />
        <Route path='/parque-muereti' element={<PCT_Muereti />} />
        <Route path='/parque-dombe' element={<PCT_Dombe />} />
        <Route path='/noticias' element={<Noticias_Home />} />
        <Route path='/documentos' element={<Documentos />} />

        <Route path='/noticia' element={<Noticia />} />


      </Routes>
      <Footer />

    </div>
  )
}

export default App;
