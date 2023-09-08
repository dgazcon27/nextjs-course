import { useEffect, useState } from "react";
import useSWR from "swr";

const SalesPage = (props) => {
//   const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState(props.meetups);

  const { data, error } = useSWR(
    "https://calculator-app-88900-default-rtdb.firebaseio.com/meetups.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      let dataFormatted = Object.entries(data).map((item) => ({
        ...item[1],
        id: item[0],
      }));
      setMeetups(dataFormatted);
    }
  }, [data]);

  //   useEffect(() => {
  //     fetch(
  //       "https://calculator-app-88900-default-rtdb.firebaseio.com/meetups.json"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setIsLoading(false);

  //         let dataFormatted = Object.entries(data).map((item) => ({
  //           ...item[1],
  //           id: item[0],
  //         }));
  //         setMeetups(dataFormatted);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  if (error) return <div>Failed to load</div>;

  if (!data && !meetups) return <div>Loading...</div>;

  //useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
  return (
    <div>
      <div>
        <ul>
          {meetups.map((meet) => (
            <li key={meet.id}>{meet.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://calculator-app-88900-default-rtdb.firebaseio.com/meetups.json")
    
  const data = await response.json()

  let dataFormatted = Object.entries(data).map((item) => ({
    ...item[1],
    id: item[0],
  }));

  return {props: {meetups: dataFormatted}}
}

export default SalesPage;
