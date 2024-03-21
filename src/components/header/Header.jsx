import style from './Header.module.css';
import img from '../../logo.webp'

function Header (){
    return (
        <header className='container'>
            <img className = {style.logo} src={img} alt="Aha..."></img>
        <nav class={style.mainNav} >
            <a className = {`${style.navLink} ${style.active}`} href="#">About</a>
            <a className = {style.navLink + '' + style.active} href="#">About</a>
            <a className = {style.navLink} href="#">Porfolio</a>
            <a className = {style.navLink} href="#">Job</a>
            <a className = {style.navLink} href="#">Contact</a>
        </nav>
        </header>
    )
}

export { Header }