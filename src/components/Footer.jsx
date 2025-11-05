export default function Footer() {
    return (<footer>

        <section id="footer-bg">
            <img id="dc-over" src="../src/assets/img/dc-logo-bg.png" alt="" />
            <div id="jumbo-footer" className="container d-flex text-secondary pt-4">
                <ul className="list-unstyled">
                    <h5>DC COMICS</h5>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>

                    <br />

                    <h5>SHOP</h5>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>

                <ul className="list-unstyled">
                    <h5>DC</h5>
                    <li>Terms Of Use</li>
                    <li>Privacy policy New</li>
                    <li>Ad Choices</li>
                    <li>Adverising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>

                <ul className="list-unstyled">
                    <h5>SITES</h5>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>
        </section>

        <section className="footer-bg-col">
            <div className="container py-4 d-flex justify-content-between">
                <button className="btn btn-transparent border-primary text-light">SIGN UP NOW!</button>
                <div id="footer-nav">
                    <p className="text-primary">FOLLOW US</p>
                    <img src="../src/assets/img/footer-facebook.png" alt="..." width={40} />
                    <img src="../src/assets/img/footer-periscope.png" alt="..." width={40} />
                    <img src="../src/assets/img/footer-pinterest.png" alt="..." width={40} />
                    <img src="../src/assets/img/footer-twitter.png" alt="..." width={40} />
                    <img src="../src/assets/img/footer-youtube.png" alt="..." width={40} />
                </div>
            </div>
        </section>

    </footer>)
}