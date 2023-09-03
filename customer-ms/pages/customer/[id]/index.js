import { useRouter } from "next/router";

const DetailCustomerPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>This page return the detail of customer number: {id}</h1>
    </div>
  );
};

export default DetailCustomerPage;
