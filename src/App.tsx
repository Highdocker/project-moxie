import NavBar from "./components/NavBar";
import NavBarContent from "./components/NavBarContent";
import SiteContainer from "./components/SiteContainer";
import "./styles.css";

function App() {
  return (
    <>
      <SiteContainer>
        <NavBar>
          <NavBarContent></NavBarContent>
          <NavBarContent></NavBarContent>
          <NavBarContent></NavBarContent>
        </NavBar>
      </SiteContainer>
    </>
  );
}

export default App;
