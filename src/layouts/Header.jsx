import {Link} from 'react-router-dom'

function Header () {
    return (
        <nav className="green lighten-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">SPA react app</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}