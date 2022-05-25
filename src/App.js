import Navbar from 'components/Navbar'
import { projects } from 'data/fakeData'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RoutesWeb from 'routes'
import { setProjects } from 'store/slices/projectsSlice'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setProjects([...projects]))
  }, [])
  return (
    <>
      <Navbar />
      <RoutesWeb />
    </>
  )
}

export default App
