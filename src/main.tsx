import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const hooks = [
  'Dziś jest ten dzień — włączamy moc!',
  'Światła, rytm, noc — jeszcze jeden krok!',
  'Raz, dwa, trzy — ten refren zostaje w głowie!',
  'Weekend gra — nie zatrzyma nas już nic!'
]

function App() {
  const [topic, setTopic] = React.useState('weekend, energia, noc')
  const [result, setResult] = React.useState(hooks[0])

  const generate = () => {
    const seed = topic.trim() || 'muzyka, energia, noc'
    const hook = hooks[Math.floor(Math.random() * hooks.length)]
    setResult(`${hook}\n\nMotyw: ${seed}\n\nPiotr Bran Studio`)
  }

  return (
    <main className="shell">
      <aside className="brand">PIOTR BRAN STUDIO</aside>
      <section className="card">
        <p className="eyebrow">PBS • MOBILE STUDIO</p>
        <h1>Viral Lyrics Generator</h1>
        <p className="lead">Szybkie szkice hooków i prostych słów do dalszej produkcji muzycznej.</p>
        <label htmlFor="topic">Słowa kluczowe</label>
        <textarea id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} rows={4} />
        <button onClick={generate}>GENERUJ HOOK</button>
        <div className="output" aria-live="polite"><pre>{result}</pre></div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
)
