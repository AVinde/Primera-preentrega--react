import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    const imglogo = "../src/assets/logo-tecnoshop.png"
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className= 'imgLogo' src={imglogo} alt="logo tecnoshop" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Procesadores
                        </li>
                        <li className="nav-item">
                            Placas de video 
                        </li>
                        <li className='nav-item'>
                            Gabinetes
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>

    )
}

export default NavBar
