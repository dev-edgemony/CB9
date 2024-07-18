import UserPage from "./components/UserPage/UserPage";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { globalContext } from "./components/Layout/Layout";
import { useContext } from "react";

function App() {
  const { user, searchedPhoto } = useContext(globalContext);

  return (
    <>
      <UserPage data={user} />
      <CardWrapper list={searchedPhoto} />
    </>
  );
}

export default App;
