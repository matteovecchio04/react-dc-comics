import Header from "./components/Header.jsx"
import FirstIcon from "../assets/img/buy-comics-digital-comics.png"
import SecondIcon from "../assets/img/buy-comics-merchandise.png"
import ThirdIcon from "../assets/img/buy-comics-subscriptions.png"
import FourthIcon from "../assets/img/buy-comics-shop-locator.png"
import FifthIcon from "../assets/img/buy-dc-power-visa.svg"

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

          <div className="container py-5 text-light d-flex justify-content-around align-items-center">

            <div className="bg-primary">
              <div className="d-flex align-items-center">
                <img src={FirstIcon} alt="..." width={70} />
                <p className="px-2">DIGITAL COMICS</p>
              </div>
            </div>

            <div className="bg-primary">
              <div className="d-flex align-items-center">
                <img src={SecondIcon} alt="..." width={70} />
                <p className="px-2">DC MERCHANDISE</p>
              </div>
            </div>

            <div className="bg-primary">
              <div className="d-flex align-items-center">
                <img src={ThirdIcon} alt="..." width={70} />
                <p className="px-2">SUBSCRIPTION</p>
              </div>
            </div>

            <div className="bg-primary">
              <div className="d-flex align-items-center">
                <img src={FourthIcon} alt="..." width={50} />
                <p className="px-2">COMIC SHOP LOCATOR</p>
              </div>
            </div>

            <div className="bg-primary">
              <div className="d-flex align-items-center">
                <img src={FifthIcon} alt="..." width={70} />
                <p className="px-2">DC POWER VISA</p>
              </div>
            </div>

          </div>

        </section>
      </main >

    </>
  )
}
