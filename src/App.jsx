import LayOut from './layout/LayOut'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hod from './hod/Hod'
import CreateHod from './hod/CreateHod'
import UpdateHod from './hod/UpdateHod'
function App() {
  return (
    <>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<LayOut />}>
            <Route path='/hod' element={<Hod/>}/>
            <Route path='/hod/create-hod' element={<CreateHod/>}/>
            <Route path='/hod/update-hod' element={<UpdateHod/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
