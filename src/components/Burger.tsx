type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <div className={"burger-wrap " + (active ? "active" : "")} onClick={onClick}>
      <div className={"dot"} />
      <style jsx>
        {`
          .burger-wrap {
            position: fixed;
            width: 15px;
            height: 15px;
            cursor: pointer;
            top: 0.5rem;
            left: 1rem;
            z-index: 5;
          }

          .dot {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid black;
            background-color: black
          }
          .active .dot {
           
            background-color:transparent;
          }
          
          
        `}
      </style>
    </div>
  );
}
