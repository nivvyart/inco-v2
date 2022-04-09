import CircleLogo from "../assets/inco-mark.svg"
import { useRouter } from "next/router";



export default function IncoMark() {
  let url = useRouter()
  let fill = url.pathname == `/contact` ? '#fff'  : ''

  console.log(fill)

  return (
    <div className="inco-circle m-4">
     <CircleLogo fill={fill}/>
     <style jsx>{`
     @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    
      
    
    .inco-circle {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 140px;
      height: 140px;  
      animation: rotation 12s infinite linear;
    }

        
    .inco-circle:hover {
      animation: rotation 2s infinite linear;
    }

    @media only screen 
      and (max-width : 800px) {
      .inco-circle {
        left: -66px;
        width: 100px;
        height: 100px;
        bottom: -6px;
      }
     }
     
     `}
     </style>
    </div>
  )
}