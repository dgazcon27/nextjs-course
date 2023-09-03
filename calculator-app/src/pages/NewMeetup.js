import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export const NewMeetup = () => {
  
  const history = useHistory()

  const onAddMeetup = (payload) => {
    console.log("Enviando peticion");
    fetch(
      "https://calculator-app-88900-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log("Meetup insertada");
      console.log(response)
      history.replace('/')
    })
    .catch(err => {
      console.log("Error insertando meetup");
      console.log(err)
    })
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </div>
  );
};
