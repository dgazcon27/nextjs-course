import { useEffect, useState } from "react";
import { MeetupList } from "../components/meetups/MeetupList";

export const AllMeetups = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(()=>{
    fetch('https://calculator-app-88900-default-rtdb.firebaseio.com/meetups.json')
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);

      let dataFormatted = Object.entries(data).map(item => ({...item[1], id:item[0]}));
      setMeetups(dataFormatted);
    })
    .catch(err => console.log(err))
  },[])
  
  if (isLoading) return <div>Loading...</div>
  
  return (
    <div>
      <div>
        <ul>
            <MeetupList meetupList={meetups}/>
        </ul>
      </div>
    </div>
  );
};
