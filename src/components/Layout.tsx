import Head from "next/head";
import Navigation from "./Navigation";
import Contact from "./contact"
import IncoMark from "./incoMark";
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  let url = useRouter()

  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
        { url.pathname == '/' ? '' : <Contact /> }
      </nav>
      <main>{children}</main>
        { url.pathname == '/' ? '' : <IncoMark /> }
      <style jsx>
        {`

          }
         
        `}
      </style>
    </div>
  );
}
