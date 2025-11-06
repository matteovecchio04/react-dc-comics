import "./App.css"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import comics from "./assets/dc-comics-2/comics.js"

export default function App() {
  return (
    <>
      <Header />

      <Main comics={comics} />

      <Footer />
    </>
  )
}