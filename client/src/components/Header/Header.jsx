import { Link } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
];

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 px-40 shadow-md">
            <div className="text-2xl font-bold">Prika</div>
            <nav>
                <ul className="flex list-none m-0 p-0">
                    {navItems.map(item => (
                        <li key={item.name} className="mx-2">
                            <Link to={item.path} className="no-underline text-black">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
