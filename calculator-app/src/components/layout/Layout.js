import classes from "./Layout.module.css";
import { MainNavigation } from "../layout/MainNavigation";

export const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation/>
      <main className={classes.main}>{children}</main>
    </div>
  );
};
