import BackContent from "./components/BackContent";
import BackContentWrapper from "./components/BackContentWrapper";
import BackSideContent from "./components/BackSideContent";
import FeaturedContent from "./components/FeaturedContent";
import NavBar from "./components/NavBar";
import NavBarText from "./components/NavBarText";
import NavBarContent from "./components/NavBarText";
import NavSearchBar from "./components/NavSearchBar";
import SiteContainer from "./components/SiteContainer";
import "./styles.css";

function App() {
  return (
    <>
      <SiteContainer>
        <NavBar>
          <NavBarContent></NavBarContent>
          <NavBarText navText={"Home"}></NavBarText>
          <NavBarText navText={"Featured"}></NavBarText>
          <NavBarText navText={"Tierlist"}></NavBarText>
          <NavBarText navText={"Graphs"}></NavBarText>
          <NavSearchBar></NavSearchBar>
          <NavBarText navText={"Newsletter"}></NavBarText>
          <NavBarContent></NavBarContent>
          <NavBarContent></NavBarContent>
        </NavBar>
        <BackContentWrapper>
          <BackSideContent></BackSideContent>
          <BackContent>
            <FeaturedContent></FeaturedContent>
          </BackContent>
          <BackSideContent></BackSideContent>
        </BackContentWrapper>
      </SiteContainer>
    </>
  );
}

export default App;
