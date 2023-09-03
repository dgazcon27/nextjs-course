import { useRouter } from "next/router";

const DetailPortfolioPage = () => {
  const {id} = useRouter().query;
    console.log(id);

  return (
    <div>
      <h1>Detailed portfolio page search for params: {id}</h1>
    </div>
  );
};

export default DetailPortfolioPage;
