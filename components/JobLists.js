import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from 'react-native';
import SearchField from './SearchField';
import styled from 'styled-components';

export default class JobLists extends React.Component {
  state = {
    searchBarActive: false
  };

  openJobListField = () => {
    this.setState({ searchBarActive: false });
  };

  render() {
    return (
      <JobListsWrapper>
        <SearchField
          onFocusSearchField={() => this.setState({ searchBarActive: true })}
          openJobListField={this.openJobListField}
        />
        <JobList
          searchBarActive={this.state.searchBarActive}
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </JobListsWrapper>
    );
  }
}

const JobListsWrapper = styled.View`
  flex: 1;
`;

const JobList = styled.FlatList`
  position: absolute;
  top: ${({ searchBarActive }) => (searchBarActive ? '100%' : 60)};
  height: 100%;
  width: 100%;
  border-radius: 16px;
  background-color: #fff;
`;
