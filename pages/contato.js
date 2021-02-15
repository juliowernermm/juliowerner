import Head from "next/head";
import Nav from "../components/nav";
import Animation from "../components/animation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contato | Júlio Werner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Animation>
        <Nav>Contato</Nav>
      </Animation>
    </>
  );
}
