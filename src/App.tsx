import BackContent from "./components/featuredcontent/BackContent";
import BackContentWrapper from "./components/featuredcontent/BackContentWrapper";
import BackSideContent from "./components/featuredcontent/BackSideContent";
import FeaturedContent from "./components/featuredcontent/FeaturedContent";
import GeneralContentLargeWrapper from "./components/maincontent/GeneralContentLargeWrapper";
import GeneralContentLarge from "./components/maincontent/GeneralContentLarge";
import MainContent from "./components/maincontent/MainContent";
import MainContentWrapper from "./components/maincontent/MainContentWrapper";
import MainSideContent from "./components/maincontent/MainSideContent";
import NavBar from "./components/navbar/NavBar";
import NavBarText from "./components/navbar/NavBarText";
import NavBarContent from "./components/navbar/NavBarText";
import NavSearchBar from "./components/navbar/NavSearchBar";
import SiteContainer from "./components/SiteContainer";

import "./styles.css";
import NavBarMenu from "./components/navbar/NavBarMenu";
import NavBarAccount from "./components/navbar/NavBarAccount";
import NavBarInteractable from "./components/navbar/NavBarInteractable";
import NavBarDropdownmenu from "./components/navbar/NavBarDropdownmenu";
import NavBarDropdownItem from "./components/navbar/NavBarDropdownItem";
import NavBarWrapper from "./components/navbar/NavBarWrapper";

function App() {
  return (
    <>
      <SiteContainer>
        <NavBarWrapper>
          <NavBar>
            <NavBarInteractable>
              <NavBarMenu>
                <NavBarDropdownmenu>
                  <NavBarDropdownItem></NavBarDropdownItem>
                  <NavBarDropdownItem></NavBarDropdownItem>
                  <NavBarDropdownItem></NavBarDropdownItem>
                  <NavBarDropdownItem></NavBarDropdownItem>
                </NavBarDropdownmenu>
              </NavBarMenu>
            </NavBarInteractable>
            <NavBarText navText={"Home"}></NavBarText>
            <NavBarText navText={"Featured"}></NavBarText>
            <NavBarText navText={"Tierlist"}></NavBarText>
            <NavSearchBar></NavSearchBar>
            <NavBarText navText={"Graphs"}></NavBarText>
            <NavBarText navText={"Newsletter"}></NavBarText>
            <NavBarText navText={"Account"}></NavBarText>
            <NavBarInteractable>
              <NavBarAccount></NavBarAccount>
            </NavBarInteractable>
          </NavBar>
        </NavBarWrapper>
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
