/* React Router */
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* Context */
import { IdContaProvider } from "./contexts/IdContaContext";

/* Componentes de páginas */
import { VisaoGeral } from './pages/VisaoGeral'
import { VisaoDetalheConta } from './pages/VisaoDetalheConta'
import { VisaoExtratoConta } from './pages/VisaoExtratoConta'

function App() {

  // Define as rotas.
  return (
    <IdContaProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VisaoGeral />}></Route>
          <Route path='/conta' element={<VisaoDetalheConta />}></Route>
          <Route path='/conta/extrato' element={<VisaoExtratoConta />}></Route>
        </Routes>
      </BrowserRouter>
    </IdContaProvider>
  )
}

export default App
