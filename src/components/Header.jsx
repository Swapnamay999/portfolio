const Header = () => (
    <header className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-4xl font-bold">Swapnamay Halder</h1>
        <p className="text-sm">swapnamayhalder@yahoo.com | 8583003456</p>
      </div>
      <nav className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#education" className="hover:underline">Education</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );

export default Header