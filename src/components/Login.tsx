import { type FormEvent, useState, type ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useNavContext } from "../api/ApiStartW";
import Logo from "../img/Logo.png";

function Login(): JSX.Element {
    const {setIsLoggedIn,setIsUserLoggedIn} = useNavContext()
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '', 
        password: '' 
    })
    
    async function handleSubmit(e: FormEvent<HTMLFormElement>):Promise<void> {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            })
      
            if (response.ok) {
              const data = await response.json()
              console.log(data.user)
              setIsLoggedIn(true)
              setIsUserLoggedIn(true)
              
              navigate('/app')
            } else {
              console.error('Login failed')
            }
          } catch (error) {
            console.error(error)
          }
        }
      
        function handleChange (e: ChangeEvent<HTMLInputElement>): void {
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }

        return (
            <div className=" bg-image">
                <div className="logo p-4">
                    <a href="/" className="aw-independent "><img id="local-nav-logo-desktop" src= {Logo} alt="Star Wars Logo" className="mx-auto w-100"/></a>     
              </div>
              <div className=" bg-black border border-white mt-4 flex justify-center items-center">
                
                <div className="flex border border-white">
                  <Link to={"/"} className="font-bold btn btn-ghost text-xl text-white">
                    Home
                  </Link>
                </div>
              </div>
              <div className="font-sans ">
              <div className="relative min-h-screen flex flex-col sm:justify-center items-center ">
                <div className="relative sm:max-w-sm w-full">
                  <div className="card bg-red-600  shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
                  <div className="bg-blue-500 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
                  <div className="relative w-full rounded-3xl px-6 py-4 bg-neutral-900 shadow-md">
                    <label htmlFor="" className="block mt-3 text-xl text-blue-500 text-center font-semibold">
                    Login
                    </label>
                    <form method="#" action="#" className="mt-10"onSubmit={handleSubmit}>
                    
                      <div className="mt-7">
                      <input
                  type='text'
                  placeholder='Email'
                  value={formData.email}
                  name='email'
                  onChange={handleChange}
            
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                        />
                      </div>
        
                      <div className="mt-7">
                        <input
                        type='password'
                        placeholder='Password'
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                        />
                      </div>
                
        
                      <div className="mt-7">
                        <button className="bg-blue-500 text-white text-black w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                          Login
                        </button>
                      </div>
        
                    
                      <div className="mt-7">
                        <div className="flex justify-center items-center">
                          <label className="mr-2">¿Aun no tienes una cuenta?</label>
                          <Link to={"/Signup"} className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"><button className='login-btn' type='submit'>Registrarse</button></Link>
                         
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          );
        }

export default Login