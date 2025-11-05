import comics from "../assets/dc-comics-2/comics.js"

export default function Main() {
    return (<main>
        <section>
            <section className="bg-dark">
                <div className="container py-4">
                    <div className="text-light">
                        <ul className="list-unstyled d-flex">
                            {
                                comics.map(book => (
                                    <li><img className="" height={100} width={100} src={book.thumb} alt="..." />{book.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-primary">

                <div className="container py-5 text-light d-flex justify-content-around align-items-center">

                    <div className="bg-primary">
                        <div className="d-flex align-items-center">
                            <img src="../assets/img/buy-comics-digital-comics.png" alt="..." width={70} />
                            <p className="px-2">DIGITAL COMICS</p>
                        </div>
                    </div>

                    <div className="bg-primary">
                        <div className="d-flex align-items-center">
                            <img src="../assets/img/buy-comics-merchandise.png" alt="..." width={70} />
                            <p className="px-2">DC MERCHANDISE</p>
                        </div>
                    </div>

                    <div className="bg-primary">
                        <div className="d-flex align-items-center">
                            <img src="../assets/img/buy-comics-subscriptions.png" alt="..." width={70} />
                            <p className="px-2">SUBSCRIPTION</p>
                        </div>
                    </div>

                    <div className="bg-primary">
                        <div className="d-flex align-items-center">
                            <img src="../assets/img/buy-comics-shop-locator.png" alt="..." width={50} />
                            <p className="px-2">COMIC SHOP LOCATOR</p>
                        </div>
                    </div>

                    <div className="bg-primary">
                        <div className="d-flex align-items-center">
                            <img src="../assets/img/buy-dc-power-visa.svg" alt="..." width={70} />
                            <p className="px-2">DC POWER VISA</p>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    </main>)
}