import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import IncoLogo from "../assets/INCO_MARK_Dark.svg"
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
          <div className="flex-grow w-1/3 border-r-2 border-black items-end ">
            <div className="h-full nav-logo flex items-end">
              <IncoLogo />
            </div>
          </div>
         
          <div className="flex-grow w-2/3">
            <div className="h-full flex grow flex-col">
              <div className="nav-links p-4">
                <ul>
                  <li>
                    <Link href="/projects">
                      <a
                        className={
                          router.pathname.startsWith("/projects") ? "active" : null
                        }
                      >
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/studio">
                      <a className={router.pathname === "/studio" ? "active" : null}>Studio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={router.pathname === "/" ? "active" : null}>INCO Lab</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-info flex p-4 mt-auto">
                <div className="grow w-1/2">
                  <div>
                    An interior, design and strategy agency. Sydney <Clock />
                  </div>
                </div>
                <div className="grow w-1/2 ">
                  <div className="text-right pr-4">
                    &copy; 2022 INCO Studio
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
       
       
        <style jsx>
          {`

          .nav-menu {
            display: none;
            position: aboslute;
            top: 0; 
            left: 0;
            width: 100vw;
            height: 100vh;

          }
          .nav-menu.active {
            display: block;
            position: aboslute;

          }

          
          .nav-links li {
            font-size: 5rem;
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

