import BackContent from "./components/BackContent";
import BackContentWrapper from "./components/BackContentWrapper";
import BackSideContent from "./components/BackSideContent";
import FeaturedContent from "./components/FeaturedContent";
import GeneralContentLargeWrapper from "./components/GeneralContentLargeWrapper";
import GeneralContentLarge from "./components/GeneralContentLarge";
import MainContent from "./components/MainContent";
import MainContentWrapper from "./components/MainContentWrapper";
import MainSideContent from "./components/MainSideContent";
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
        <MainContentWrapper>
          <MainSideContent></MainSideContent>
          <MainContent>
            <GeneralContentLargeWrapper>
              <GeneralContentLarge></GeneralContentLarge>
            </GeneralContentLargeWrapper>
            <GeneralContentLargeWrapper>
              <GeneralContentLarge></GeneralContentLarge>
            </GeneralContentLargeWrapper>
            <GeneralContentLargeWrapper>
              <GeneralContentLarge></GeneralContentLarge>
            </GeneralContentLargeWrapper>
            <GeneralContentLargeWrapper>
              <GeneralContentLarge></GeneralContentLarge>
            </GeneralContentLargeWrapper>
          </MainContent>
          <MainSideContent></MainSideContent>
        </MainContentWrapper>
      </SiteContainer>
    </>
  );
}

export default App;
