import Link from "next/link";

export default function Contact() {
  return (
    <>
    <div className="contact">
      <Link href="/contact">
        <a className="" href="/contact">Contact</a>
      </Link>
    </div>
    <style jsx>
          {`

          .contact {
            position: absolute;
            right: 0;
            top: 1rem;
            padding-right: 1rem;
            z-index: 5;
          }
          .contact a {
            color: #282727
          }
        
          `}
        </style>
    </>
  );
}

