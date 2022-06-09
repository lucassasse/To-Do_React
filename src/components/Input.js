import styles from './Input.module.css'

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  )
}

export default Input
