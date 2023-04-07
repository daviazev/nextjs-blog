import Link from "next/link";

export default function Joke({ joke }) {
  return (
    <>
      <section>
        {joke}
      </section>
      <Link href='/'>← Back to Home</Link>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  const json = await res.json();
  const joke = json.value;

  return {
    props: {
      joke,
    },
  };
}
