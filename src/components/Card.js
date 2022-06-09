import {
  BsFillTrashFill,
  BsFillXSquareFill,
  BsPencilSquare,
  BsCheckSquareFill
} from 'react-icons/bs'

import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <BsCheckSquareFill className={styles.icon} />
      <textarea className={styles.textarea} readOnly={true} wrap="hard"></textarea>
      <BsPencilSquare className={styles.icon} />
      <BsFillTrashFill className={styles.icon} />
    </div>
  )
}

export default Card
