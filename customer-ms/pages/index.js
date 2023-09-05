import { DUMMY_DATA } from "@/data/dummy-data";
import Link from "next/link";
import fs from 'fs/promises'
import path from "path";

const HomePage = ({products}) => {
  console.log("component 1");

  return (
    <div>
      <div>
        <h1>Customer app </h1>
      </div>
      <ul>
        {products.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const pathfile = path.join(process.cwd(), "data", "dummy-data.json")
  const jsonData = await fs.readFile(pathfile)
  const data = JSON.parse(jsonData)

  return {props: {
    products: data
  }}
}

export default HomePage;
