import Input from '../components/Input'
import Card from '../components/Card'
import Button from '../components/Button'

import styles from './Container.module.css'

function Container() {
  return (
    <main className={styles.main}>
      <div className={styles.divInput}>
        <Input type="text" placeholder="Esceva seu lembrete" />
        <Button text="Salvar" />
      </div>
      <Card />
    </main>
  )
}

export default Container
