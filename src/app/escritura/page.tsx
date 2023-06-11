import { Divider } from '@/components/Divider'

const styles: Record<'main', React.CSSProperties> = {
  main: {
    marginTop: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}

export default function Escritura() {
  return (
    <main style={styles.main}>
      <h1>Escritura</h1>
      <Divider />

      <p>
        Algo de poesía en <a href="https://www.instagram.com/seniorgrillo/">instagram</a>
      </p>
    </main>
  )
}