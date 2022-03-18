import HomeComponent from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import UserState from "./Context/User/UserState";

function App() {
  return (
    <UserState>
      <HomeComponent />
    </UserState>
  );
}

export default App;
