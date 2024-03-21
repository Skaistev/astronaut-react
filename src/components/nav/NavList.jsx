 import { NavLink } from './Nav'
import style from './Nav.module.css'
import { Btn } from '../buttons/Btn'
 

export function NavList(){
    return (
    <nav class={style.mainNav} >
        <NavLink title='About' isActive = 'true'/>
        <NavLink title='Job'/>
        <NavLink title='Portfolio'/>
        <NavLink title='Contacts'/>
        <Btn title = 'Register' look ='white' size='small'/>
    </nav>
    )
}