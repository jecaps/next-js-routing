import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href={"/team"}>This is our team</Link>
    </>
  );
}
