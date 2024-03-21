import style from './Hero.module.css';
import img from '../../Untitled.jpg'
import { BtnList } from '../buttons/BtnList';

function Hero (){
    return (
        <main className="container">
        <div className={style.mainLeft}>
        <h1 className={style.mainTitle}>
            <span>404</span><br></br>Lost in space
        </h1>
        <p className={style.description}> sit amet, consectetur adipisicing elit. Obcaecati eius cumque, recusandae voluptatibus sit eligendi placeat vel veritatis! Ullam, aperiam?</p>
           <BtnList/>
        </div>
        <div className="style.mainRight">
            <img src={img} alt="Aha..."></img>
        </div>
    </main>
    )
}

export { Hero }