import classes from "./Button.module.css";

export const ButtonSubmit = ({ children, onSubmitHandler }) => {
  return (
    <button className={classes.btn} onClick={onSubmitHandler}>
      {children}
    </button>
  );
};
