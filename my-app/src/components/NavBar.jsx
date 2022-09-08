import './NavBar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='header'>
        <nav>
            <ul className='nav-items'>
              <Link to='/'>
                <li>Gamexs</li>
              </Link>

              <Link to='/categoria/silla'>
                <li>Sillas</li>
              </Link>

              <Link to='/categoria/tecnologia'>
                <li>Relojes</li>
              </Link>

              <Link to='/categoria/MigaDePan'>
                <li>Otros</li>
              </Link>

            </ul>
        </nav>
    </header>
  )
}

