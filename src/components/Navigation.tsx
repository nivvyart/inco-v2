import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import IncoLogo from "../assets/INCO_LOGO.svg"
import Clock from "./Clock"

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const colors = ['bg-oliveg', 'bg-terracotta', 'bg-timber'];
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"nav-menu " + (active ? "active " : "") + colors[(Math.floor(Math.random() * 3))]}>
        <div className="flex flex-wrap h-full">
          <div className="lg:flex-grow lg:w-1/3 lg:border-r-2 lg:border-black items-end hidden md:block">
            <div className="lg:h-full nav-logo flex items-end">
              <a className="w-full h-auto block" href="/">
                
                <IncoLogo className="items-end p-4 pb-2"/>
              </a>
            </div>
          </div>
         
          <div className="flex-grow lg:w-2/3">
            <div className="flex grow flex-col h-3/6 border-b-2 border-black lg:h-full lg:border-b-0">
              <div className="nav-links p-4 mt-10 lg:mt-0">
                <ul>
                  <li className="lg:text-9xl md:text-7xl text-6xl mb-1  tracking-wide  sm:tracking-normal">
                    <Link href="/projects">
                      <a className={router.pathname.startsWith("/projects") ? "active" : null }>Projects</a>
                    </Link>
                  </li>
                  <li className="lg:text-9xl md:text-7xl text-6xl mb-1 tracking-wide  sm:tracking-normal ">
                    <Link href="/studio">
                      <a className={router.pathname === "/studio" ? "active" : null}>Studio</a>
                    </Link>
                  </li>
                  <li className="lg:text-9xl md:text-7xl text-6xl mb-1  tracking-wide  sm:tracking-normal">
                    <Link href="/inco-lab">
                      <a className={router.pathname === "/inco-lab" ? "active" : null}>INCO Lab</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-info flex p-4 pb-2 mt-auto">
                <div className="lg:grow lg:w-1/2">
                  <div>
                    An interior, design and strategy agency. <span className="block md:inline">Sydney <Clock /></span>
                  </div>
                </div>
                <div className="lg:grow lg:w-1/2 hidden lg:block">
                  <div className="text-right">
                    &copy; 2022 INCO Studio
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden h-3/6 p-4">
              <div>&copy; 2022 INCO Studio</div>
              <IncoLogo className="absolute bottom-0 left-0 p-4"/>
            </div>

          </div>
        </div>
       
       
        <style jsx>
          {`

          .nav-menu {
            display: none;
            position: fixed;
            top: 0; 
            left: 0;
            width: 100vw;
            height: 100vh;

          }
          .nav-menu.active {
            display: block;
            z-index:4;

          }

          
          .nav-links li {
            line-height: 1;

          }
            
          .nav-links a {
            color: black;

          }

      

         
         

        
          `}
        </style>
      </div>
    </>
  );
}

