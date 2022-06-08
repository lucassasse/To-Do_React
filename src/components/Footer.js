import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/sasse.lucas/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-eduardo-sasse/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/lucassasse" target="_blank">
            <AiFillGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>To-Do List</span> &copy; 2022 - Lucas Eduardo Sasse
      </p>
    </footer>
  )
}

export default Footer
