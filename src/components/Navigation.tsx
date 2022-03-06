import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import IncoLogo from "../assets/INCO_MARK_Dark.svg"

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
            <div className="h-full  nav-info flex items-end">
              <IncoLogo />
            </div>
          </div>
         
          <div className="flex-grow w-2/3">
            <div className="nav-links">
              <ul>
                <li>
                  <Link href="/posts">
                    <a
                      className={
                        router.pathname.startsWith("/posts") ? "active" : null
                      }
                    >
                      Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className={router.pathname === "/" ? "active" : null}>Studio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className={router.pathname === "/" ? "active" : null}>INCO Lab</a>
                  </Link>
                </li>
              </ul>
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
          }

          .pink {
            background-color: pink
          }

          .blue {
            background-color: blue;
          }
          
          .red {
            background-color: red;
          }
           
          `}
        </style>
      </div>
    </>
  );
}


// .container {
//   width: 0;
//   background: blue;
// }
// ul {
//   opacity: 0;
//   width: 100%;
//   height: 100vh;
//   text-align: right;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   position: fixed;
//   top: 0;
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   z-index: 1;
//   transform: translateY(100%);
//   transition: opacity 200ms;
// }
// .active ul {
//   opacity: 1;
//   transform: translateY(0);
// }
// li {
//   margin-bottom: 1.75rem;
//   font-size: 2rem;
//   padding: 0 1.5rem 0 0;
// }
// li:last-child {
//   margin-bottom: 0;
// }
// .active {
//   color: #222;
//   width: 100%;
// }

// ul {
//   opacity: 1;
//   width: 7rem;
//   top: auto;
//   display: block;
//   transform: translateY(0);
// }
// li {
//   font-size: 1rem;
//   padding: 0;
// }