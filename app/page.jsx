import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>About</title>
      </Head>

      <h1>Welcome to Next JS</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}
