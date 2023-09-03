import { useRouter } from "next/router";

const DetailPurchasePage = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h1>Detailed puchase </h1>
    </div>
  );
};

export default DetailPurchasePage;
