import './App.css'
import Employeecomponent from './components/Employeecomponent'
import FooterCompoment from './components/footerCompoment'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          <Route path='/add' element={ <Employeecomponent />}></Route>
        </Routes>
        <FooterCompoment />
      </BrowserRouter>
    </>
  )
}

export default App