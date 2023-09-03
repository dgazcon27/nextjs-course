import classes from "./NewMeetupForm.module.css";
import { Card } from "../ui/Card";
import { useState } from "react";

export const NewMeetupForm = (props) => {
  const [inputs, setInputs] = useState({});

  const submitHandler = (ev) => {
    ev.preventDefault();
    props.onAddMeetup(inputs)
  };

  const handlerInputs = (ev) => {
    const { value, name } = ev.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            onChange={handlerInputs}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input
            type="text"
            required
            id="image"
            name="image"
            onChange={handlerInputs}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            onChange={handlerInputs}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            required
            id="description"
            name="description"
            onChange={handlerInputs}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
