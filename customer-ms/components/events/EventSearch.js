import classes from "./EventSearch.module.css";

import { getMonths } from "@/dummy-data";
import { ButtonSubmit } from "../ui/ButtonSubmit";
import { useState } from "react";

export const EventSearch = (props) => {
  const [form, setForm] = useState({ month: 1, year: 2021 });
  console.log(form);
  const months = getMonths();

  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    console.log("Realizando busqueda");
    props.onSearch(form);
  };

  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: parseInt(value) });
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"></label>
          <select id="year" name="year" onChange={onChangeInput}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"></label>
          <select id="month" name="month" onChange={onChangeInput}>
            {months.map((month) => (
              <option key={month.id} value={month.id}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ButtonSubmit>Search events</ButtonSubmit>
    </form>
  );
};
