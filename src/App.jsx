import './App.css'
import NavBar from './components/NavBar'
import RegForm from './components/RegForm'

function App() {
  return (
    <>
      <NavBar />
      <main className="app-shell">
        <section className="app-card">
          <div className="app-card__header">
            <p className="app-card__eyebrow">Registration Portal</p>
            <h1>Create your account</h1>
            <p className="app-card__text">
              Welcome! Fill in your details and review the sample submissions below.
            </p>
          </div>
          <RegForm />
        </section>
      </main>
    </>
  )
}

export default App
