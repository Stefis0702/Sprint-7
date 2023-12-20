import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import { useNavContext } from "../../api/ApiStartW";


const HeaderCom = (): JSX.Element => {

  const { isLoggedIn} = useNavContext();
  
  
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <div className="flex self-start items-center">
          <a href="#" className="w-7">
            <img src="./src/img/XLogo.png" alt="" />
          </a>
          <a href="#" className="w-7">
            <img src="./src/img/FLogo.png" alt="" />
          </a>
          <a href="#" className="w-9">
            <img src="./src/img/ILogo.png" alt="" />
          </a>
          <a href="#" className="w-6">
            <img src="./src/img/TTLogo.png" alt="" />
          </a>
        </div>

        <div className="logo">
          <a href="/" className="aw-independent ">
            <img
              id="local-nav-logo-desktop"
              src={Logo}
              alt="Star Wars Logo"
              className="mx-auto w-100"
            />
          </a>
        </div>
        <div className="flex self-start">
        {isLoggedIn ?(
          <>
          <Link to={"/"} >
            <a className="btn btn-ghost text-xl">Loginup</a>
          </Link>
          </>
        ):(
          <>
          <Link to={"/Login"} >
            <a className="btn btn-ghost text-xl">Login</a>
          </Link>
          <Link to={"/Signup"} >
            <a className="btn btn-ghost text-xl">Signup</a>
          </Link>
          </>
        )
        }
        
      </div>
      </div>

      <div className=" bg-black border border-white mt-4 flex justify-center items-center">
        <div className="flex border border-white">
          <Link to={"/"} className="font-bold btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex border border-white">
          <a className="btn btn-ghost text-xl">StartShips</a>
        </div>
      </div>
    </>
  );
};

export default HeaderCom;
