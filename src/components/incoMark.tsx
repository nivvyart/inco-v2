import CircleLogo from "../assets/inco-mark.svg"


export default function IncoMark() {
  return (
    <div className="inco-circle m-4">
     <CircleLogo />
     <style jsx>{`
      .inco-circle {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 140px;
        height: 140px;
      }
     `}</style>
    </div>
  )
}