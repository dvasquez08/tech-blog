import Bg1 from "../assets/bg1.jpg";
import Logo from "../assets/logo.png";

function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[60vh] md:h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      <div className="bg-black/50 size-full">
        <div className="container mx-auto text-center flex flex-col items-center justify-center">
          <img src={Logo} className="h-14" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-light mb-6 text-green-500">
            Tech Things HQ
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-12">
            Everything you need to know about AI and technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
