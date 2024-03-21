import style from './Footer.module.css';
import {FaTwitter} from 'react-icons/fa'


function Footer (){
    return (
        <footer class="container">
            <div class={style.social}>
              <a class={style.socialLink + FaTwitter}  href="#" alt="baba"></a>
              <a class={style.socialLink} href="#" alt="baba"></a>
              <a class={style.socialLink} href="#" alt="baba"></a>
              <a class={style.socialLink}  href="#" alt="baba"></a>
           </div>
        <p class={style.CopyrightText}> &copy; 2024 - All copy; rights reserved </p>
        
    </footer>
    )
}

export { Footer }