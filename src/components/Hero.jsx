import Bg1 from "../assets/bg1.jpg";
import Logo from "../assets/logo-1.png";

function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[60vh] md:h-[80vh] flex items-center justify-center bg-black"
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      <div className="bg-black/70 size-full">
        <div className="container mx-auto text-center flex flex-col items-center justify-center">
          <img src={Logo} className="h-36" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium mb-6 text-gray-300">
            Tech Things HQ
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Your daily byte of the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
