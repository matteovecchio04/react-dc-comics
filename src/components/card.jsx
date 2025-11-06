export default function Card({ title, thumb }) {
    return (
        <li className="comic-card">
            <img height={200} width={150} src={thumb} alt={title} />
            <p className="text-center">{title}</p>
        </li>
    )
}