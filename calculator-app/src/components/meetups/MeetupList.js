import { MeetupItem } from "./MeetupItem";
import classes from "./Meetup.module.css"

export const MeetupList = ({meetupList}) => {
    if (meetupList.length === 0) return

    return <ul className={classes.list}>
        {meetupList.map(item => <div key={item.id}><MeetupItem {...item}/></div>)}
    </ul>
}