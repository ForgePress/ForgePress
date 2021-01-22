import { connect } from "frontity";
import React from "react";
import MainHeader from "./header";
import Navigation from "./navigation";
import SocialNav from "./social-menu";
import { SearchButton, SearchModal, SearchForm } from "../search";

const Header = ({ state, actions , libraries }) => (
  <MainHeader>
    <Navigation menu={state.theme.menu} state={state} libraries={libraries}  />
    {state.theme.showSocialLinks && (
      <SocialNav menu={state.theme.socialLinks} />
    )}
    <SearchButton onClick={actions.theme.openSearchModal} />
    <SearchModal
      isOpen={state.theme.isSearchModalOpen}
      onClose={actions.theme.closeSearchModal}
    >
      <SearchForm />
    </SearchModal>
  </MainHeader>
);

export default connect(Header);
