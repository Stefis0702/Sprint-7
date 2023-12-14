import { Link } from "react-router-dom";
import Logo from "./img/Logo.png"


function Home() {
  return (
    <div className=" bg-image">
      <div className="logo p-4">
            <a href="/" className="aw-independent "><img id="local-nav-logo-desktop" src= {Logo} alt="Star Wars Logo" className="mx-auto w-100"/></a>     
      </div>
      <div className="p-4">
        <div className="diff aspect-[30/11]">
        <div className="diff-item-1">
          <img
            className="bg-black text-primary-content  font-black grid place-content-center"
            src="./src/img/star5.jpeg"
            alt=""
          />
        </div>
        <div className="diff-item-2">
          <img
            className="bg-black  font-black grid place-content-center"
            src="./src/img/star2.jpg"
            alt=""
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div className=" bg-black border border-white mt-4 flex justify-center items-center">
        
        <div className="flex border border-white">
          <Link to={"/App"} className="font-bold btn btn-ghost text-xl">
            Starships
          </Link>
        </div>
      </div>
      <main className="text-center p-4">
        <p className="text-lg mb-4">
          "¡Bienvenido a un universo de aventuras galácticas! Sumérgete en el
          mundo épico de Star Wars, donde la fuerza te guiará a través de
          emocionantes historias, personajes inolvidables y batallas
          intergalácticas. Explora planetas lejanos, únete a la lucha entre el
          bien y el mal, y descubre el poder que reside en cada uno de nosotros.
          Prepárate para vivir la magia de Star Wars, donde la aventura y la
          fantasía te esperan en cada rincón de la galaxia. ¡Que la fuerza te
          acompañe!"
        </p>
      </main>
      </div>
    <div />
    </div>
  );
}

export default Home;
