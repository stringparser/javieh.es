const styles: Record<'main', React.CSSProperties> = {
  main: {
    marginTop: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}

export default function Inicio() {
  return (
    <main style={styles.main}>
      <h1>¡Hola muy buenas!</h1>
      <h2>Ha llegado uhté a la página web de Javier Carrillo Milla</h2>
      <p>Si este mensage le parece raro... ¡vamos bien!</p>
      <p>Curiosea un poco</p>
    </main>
  )
}
