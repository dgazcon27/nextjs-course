import fs from "fs/promises";
import Link from "next/link";
import path from "path";

const HomePage = ({ products }) => {
  console.log("component 1");

  return (
    <div>
      <div>
        <h1>Customer app </h1>
      </div>
      <ul>
        {products.map((item) => (
          <li key={item.id}><Link href={`/${item.id}`}>{item.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const pathfile = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(pathfile);
  const data = JSON.parse(jsonData);

  // Existen 2 valores que se pueden retornar para modificar el comportamiento de la respuesta 
  // return ({notFound: true}) Esto hace que desde el servidor una pagina se redirija a otra
  // return ({redirect: "path"}) // esto redigira la pagina desde el servidor a una nueva ruta

  return {
    props: {
      products: data,
    },
    // revalidate: Indica el tiempo en el que se ejecutara de 
    // nuevo el proceso para cargar la nueva data y prerenderizar
    revalidate: 10,

  };
}

export default HomePage;
