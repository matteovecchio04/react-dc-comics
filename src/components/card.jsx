export default function Card({ title, thumb }) {
    return (
        <li className="comic-card">
            <img height={200} width={150} src={book.thumb} alt={book.title} />
            <p className="text-center">{book.title}</p>
        </li>
    )
}