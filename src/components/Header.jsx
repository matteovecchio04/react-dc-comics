export default function Header() {
    return (<header>
        <section className="bg-light">
            <nav className="d-flex justify-content-between container align-items-center">

                <img src="../src/assets/img/dc-logo.png" alt="..." width={50} />

                <ul className="nav text-dark">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Characters</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Comics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">TV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Collectibles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fans</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                </ul>
            </nav>
        </section>
    </header>)
}