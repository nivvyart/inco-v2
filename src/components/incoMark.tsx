import CircleLogo from "../assets/inco-mark.svg"


export default function IncoMark() {
  return (
    <div className="inco-circle m-4">
     <CircleLogo />
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
     `}</style>
    </div>
  )
}