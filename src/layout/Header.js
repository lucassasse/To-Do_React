import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TO-DO LIST</h1>
      <p>Organização para o dia-a-dia</p>
    </header>
  )
}

export default Header
