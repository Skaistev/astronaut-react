import style from './Footer.module.css';
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'




function Footer (){
    return (
        <footer className="container">
            <div className={style.social}>
              <a className={style.socialLink}  href="#" alt="baba">< FaTwitterSquare  size="2rem"/></a>
              <a className={style.socialLink} href="#" alt="baba">< FaFacebookSquare/></a>
              <a className={style.socialLink} href="#" alt="baba">< FaLinkedin /></a>
              <a className={style.socialLink}  href="#" alt="baba"><FaYoutube/></a>
           </div>
        <p class={style.CopyrightText}> &copy; 2024 - All copy; rights reserved </p>
        
    </footer>
    )
}

export { Footer }