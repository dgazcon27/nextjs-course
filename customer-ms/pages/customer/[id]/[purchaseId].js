import { useRouter } from "next/router";

const DetailCustomerPurchase = () => {
  const {
    query: { id, purchaseId },
  } = useRouter();

  return (
    <div>
      <h1>Customer: {id}</h1>
      <h2>Purchase number: {purchaseId}</h2>
    </div>
  );
};

export default DetailCustomerPurchase;
