import './App.css'
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
          {/*<Route path='/' element={<ListEmployeeComponent />}></Route>*/}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
        </Routes>
        <FooterCompoment />
      </BrowserRouter>
    </>
  )
}

export default App