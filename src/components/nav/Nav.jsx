
import style from './Nav.module.css'

export function NavLink (param){

    const {title, isActive} = param
    
    let activeClass = '';
    if(isActive==="true"){
        activeClass = style.active;
    }

        return <a className={`${style.navLink} ${activeClass}`} href="/">{title}</a>;
}