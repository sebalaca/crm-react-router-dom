import { NavLink } from 'react-router-dom'
import { Outlet, Link, useLocation } from 'react-router-dom'


const Layout = () => {

    //Detecta la ubicacion donde estamos navegando
    const location = useLocation()
    // console.log(location)

    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM -Clientes</h2>

                <nav className='mt-10'>
                <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300 `} to='/'>Clientes</Link>
                <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300 `} to='/clientes/nuevo'>Nuevo Cliente</Link>

                {/* MISMO EJEMPLO CON NAVLINK COMPONENETE - NO USA EL HOOK useLocation como Link - NO OLVIDAR COLOCAR END!!!
                <NavLink 
                    to='/'
                    className={({isActive}) => isActive ? 'text-blue-300 text-2xl block hover:text-blue-300' : 'text-white text-2xl block hover:text-blue-300'}
                    end
                >Cliente</NavLink>
                <NavLink 
                    to='/clientes/nuevo'
                    className={({isActive}) => isActive ? 'text-blue-300 text-2xl block hover:text-blue-300' : 'text-white text-2xl block hover:text-blue-300'}
                    end
                >Nuevo Cliente</NavLink> */}

                </nav>
            </aside>

            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout