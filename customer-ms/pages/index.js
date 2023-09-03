import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Customer app </h1>
      </div>
      <li>
        <Link href="/customer">Customers</Link>
      </li>
      <li>
        <Link href="/purchase">Puchases</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </div>
  );
};

export default HomePage;
