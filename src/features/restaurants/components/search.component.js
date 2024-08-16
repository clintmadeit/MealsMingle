import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  return (
    <SearchContainer>
      <StyledSearchbar
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
