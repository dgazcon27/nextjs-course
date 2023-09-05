import classes from "./Button.module.css";

import Link from "next/link";

export const Button = ({link, children}) => {
  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};
