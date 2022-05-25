import FormProject from 'pages/FormProject'
import Home from 'pages/Home'
import { Routes, Route } from 'react-router-dom'

export default function RoutesWeb () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project/add' element={<FormProject />} />
      <Route path='/project/edit/:id' element={<FormProject />} />
    </Routes>
  )
}
