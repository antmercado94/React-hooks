import UseState from './Routes/jsx modules/UseState';
import UseEffect from './Routes/jsx modules/UseEffect';
import Home from './Home';
import { BrowserRouter, Route, Routes   } from 'react-router-dom'

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/useState' element={<UseState />}/>
      <Route path='/useEffect' element={<UseEffect />}/>

      
    </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
