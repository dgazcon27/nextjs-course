import classes from "./Button.module.css";

export const ButtonSubmit = ({ children }) => {
  return (
    <button className={classes.btn}>
      {children}
    </button>
  );
};
