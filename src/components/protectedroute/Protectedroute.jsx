
import { Outlet, Navigate } from 'react-router-dom'

const Protectedroute =() => {

    const user = JSON.parse(localStorage.getItem('idevProfile'))

    return user ? <Outlet /> : <Navigate to ='/signin' />
    
}
export default Protectedroute