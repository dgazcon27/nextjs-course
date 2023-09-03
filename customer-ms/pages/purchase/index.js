import { useRouter } from "next/router";

const PurchasePage = () => {

    const router = useRouter()

    const filterResultHandler = () => {
        router.push("/purchase/2022/10/5")
    }

    return ( <div>
        <h1>List of Purchases</h1>
        <div>
            <button onClick={filterResultHandler}>Filtrar resultados</button>
        </div>
    </div> );
}
 
export default PurchasePage;