import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/">Inicio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/news">Noticias</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/lyrics">Letras</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/shows">Shows</a>
                </li>
            </ul>
        </div>
    )
}