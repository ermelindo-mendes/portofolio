import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> Acceuil </Link>
                        </li>
                        <li>
                            <Link to='/about'> À propos </Link>
                        </li>
                        <li>
                            <Link to='/projets'> Mes Projets </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer>Ermelindo Mendes Lopes 2023</footer>
        </>
    )
}

export default Layout
