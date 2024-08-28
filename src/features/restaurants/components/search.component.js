import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Search = ({ isfavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <StyledSearchbar
        icon={isfavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={() => {
          onFavouritesToggle();
        }}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
