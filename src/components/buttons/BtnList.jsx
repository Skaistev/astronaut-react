import style from './Btn.module.css'


export function BtnList (){
    return (
        <div className={style.btnList}>
            <a className={style.btn} href="#">Go home</a>
            <a className={style.btn} href="#">Back</a>
            </div>
    )
}