import Link from "next/link";

const CustomerPage = () => {
  
  const clients = [{id: 1, name: "Pedro Perez"}, {id:2, name: "Andrea Hernandez"}]
  
    return (
    <div>
      <h1>This page show us the complete of customers</h1>
      <div>
        <ul>
            {clients.map(client => <li key={client.id}><Link href={`/customer/${client.id}`}>{client.name}</Link></li>)}
        </ul>
      </div>
    </div>
  );
};

export default CustomerPage;
