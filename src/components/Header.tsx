import header from "../assets/header.jpg";

// type headerProps = {
//   pageName: string;
// };

function Header() {
  return (
    <div className="items-center mt-24">
      <div
        className="hero h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${header})` }}
      >

      </div>
    </div>
  );
}

export default Header;
