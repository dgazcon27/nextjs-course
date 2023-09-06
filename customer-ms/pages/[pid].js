import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{loadedProduct.title}</p>
      <p>{loadedProduct.body}</p>
    </div>
  );
};

const getData = async () => {
  const pathfile = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(pathfile);
  const data = JSON.parse(jsonData);
  return data;
};

export async function getStaticProps(context) {
  const {
    params: { pid },
  } = context;
  const data = await getData();
  const product = data.find((product) => product.id === parseInt(pid));

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

/**
 * getStaticPaths - Esta funcion se encarga de indicar cuales parametros van a ser cargados en el prerendering.
 * fallback - indica si las pagina que no se indican en el paths array seran precargadas
 */
export async function getStaticPaths() {
  const data = await getData();

  const ids = data.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { pid: id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export default ProductDetailPage;
