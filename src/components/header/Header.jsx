import style from './Header.module.css';
import img from '../../logo.webp'
import { NavList } from '../nav/NavList';

function Header (){
    return (
        <header className='container'>
            <img className = {style.logo} src={img} alt="Aha..."></img>
            <NavList />
        </header>
    )
}

export { Header }