import Link from "next/link";

export default function Contact() {
  return (
    <>
    <div className="contact">
      <Link href="/contact">
        <a href="/contact">contact</a>
      </Link>
    </div>
    <style jsx>
          {`

          .contact {
            position: absolute;
            right: 0;
            top: 0.5rem;
            padding-right: 1rem;
            z-index: 5;
          }
          .contact a {
            color: black;
          }
        
          `}
        </style>
    </>
  );
}

