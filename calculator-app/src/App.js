import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { AllMeetups } from "./pages/Allmeetups";
import { Favorites } from "./pages/Favorites";
import { NewMeetup } from "./pages/NewMeetup";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
