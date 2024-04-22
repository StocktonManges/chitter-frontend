import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useAuth, useNav } from "./providers/context-hooks";
import GeneralHeader from "./components/GeneralHeader";
import LoginForm from "./components/LoginForm";
import UserHome from "./components/UserHome";
import UserHeader from "./components/UserHeader";
import "./css/styles.css";
import SignUpForm from "./components/SignUpForm";

function App() {
  const { navUrls } = useNav();
  const { activeUser } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path={navUrls.home}
          element={activeUser ? <UserHeader /> : <GeneralHeader />}
        >
          <Route index element={<Home />} />
          <Route path={navUrls.login} element={<LoginForm />} />
          <Route path={navUrls.signUp} element={<SignUpForm />} />
          <Route path={navUrls.userHome} element={<UserHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
