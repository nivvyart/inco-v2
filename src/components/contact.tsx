import Link from "next/link";

export default function Contact() {
  return (
    <>
    <div className="contact">
      <Link href="/posts">
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
          }
          .contact a {
            color: black;
          }
        
          `}
        </style>
    </>
  );
}

