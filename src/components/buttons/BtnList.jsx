import style from './Btn.module.css'
import { Btn } from './Btn'


export function BtnList (){
    return (
        <div className={style.btnList}>
            <Btn title="Go Home"/>
            <Btn title="Back" look ='green'/>
            </div>
    )
}