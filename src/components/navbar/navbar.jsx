export default function NavBar() {
    return (
        <nav className="flex justify-between mx-12 mt-3">
            <p className="inline">Home</p>
            <ul className="space-x-4">
                <li className="inline">Videos</li>
                <li className="inline">Book Me</li>
                <li className="inline">About</li>
                <li className="inline">Works</li>
            </ul>
        </nav>
    )
}