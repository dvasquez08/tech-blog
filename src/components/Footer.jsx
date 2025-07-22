function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} Tech Things HQ. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Built by{" "}
          <a href="https://davtek.io" target="_blank">
            Davtek
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
