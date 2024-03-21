import style from './Footer.module.css';
import { FaFontAwesome, FaTwitter } from 'react-icons/fa'


function Footer (){
    return (
        <footer className="container">
            <div className={style.social}>
              <a className={style.socialLink}  href="#" alt="baba">fb</a>
              <a className={style.socialLink} href="#" alt="baba">tw</a>
              <a className={style.socialLink} href="#" alt="baba">ln</a>
              <a className={style.socialLink}  href="#" alt="baba">yt</a>
           </div>
        <p class={style.CopyrightText}> &copy; 2024 - All copy; rights reserved </p>
        
    </footer>
    )
}

export { Footer }