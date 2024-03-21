import style from './Btn.module.css'
import option from './BtnList'


export function Btn (option){

    const {title, look, size} = option

    let color = '';
    if(look === "white"){
        color = style.btnWhite;
    }
    if(look === "green"){
        color = style.btnGreen;
    }
    if(size === "small"){
        color = style.btnSmall;
    }

    return (
      <a className={`${style.btn} ${color}`} href="#">{title}</a>      
    )
}