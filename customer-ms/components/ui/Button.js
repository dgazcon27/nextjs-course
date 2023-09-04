import classes from "./Button.module.css";

import Link from "next/link";

export const Button = (props) => {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
};
