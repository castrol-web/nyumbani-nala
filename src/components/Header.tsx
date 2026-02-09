import header from "../assets/header.jpg";

type headerProps = {
  pageName: string;
};

function Header({ pageName }: headerProps) {
  return (
    <div className="items-center mt-24">
      <div
        className="hero h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="lg:max-w-4xl items-center sm:max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{pageName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
