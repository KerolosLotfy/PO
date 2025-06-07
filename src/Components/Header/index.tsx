import "./styles.css";
import OrangeLogo from "../../Assets/Orange-Logo.png";


export const Logo = () => {
  return (
    <div className="logo">
      <img src={OrangeLogo} alt="Logo" className="h-8 w-8" />
      <span className="ml-2 text-xl font-semibold">My App</span>
    </div>
  );
}

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Logo/>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}