import Header from "./components/Header.jsx"
import FirstIcon from "../assets/img/buy-comics-digital-comics.png"

export default function App() {

  return (
    <>
      <Header />

      <main>
        <section className="bg-dark">
          <div className="container py-4">
            <h2 className="text-light">Content goes here</h2>
          </div>
        </section>

        <section className="bg-primary">
          <div className="container py-5 text-light d-flex align-items-center">
            <img src={FirstIcon} alt="..." width={70} />
            <p className="px-2">Digital Comics</p>
          </div>
        </section>


      </main>

    </>
  )
}
