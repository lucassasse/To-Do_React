import Input from '../components/Input'
import Card from '../components/Card'
import Button from '../components/Button'

import styles from './Container.module.css'

function Container() {
  function save(e) {
    e.preventDefault()
    console.log('save')
  }

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <Input required type="text" placeholder="Esceva seu lembrete" />
        <Button text="Salvar" onClick={save} />
      </form>
      <Card />
    </main>
  )
}

export default Container
