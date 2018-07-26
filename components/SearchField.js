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
import Dimensions from 'Dimensions';
import { SearchBar } from 'react-native-elements';
import styled from 'styled-components';

export default class SearchField extends React.Component {
  state = {
    text: ''
  };

  onFocusSearchBar = () => {
    this.props.onFocusSearchField();
  };

  render() {
    return (
      <SearchBarWrapper>
        <SearchBar
          lightTheme
          onChangeText={text => this.setState({ text })}
          onClear={() => this.setState({ text: '' })}
          onFocus={this.onFocusSearchBar}
          placeholder="Type Here..."
        />
        <SearchInfo
          renderItem={({ item, index, section }) => (
            <Item key={index}>{item}</Item>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader>{title}</SectionHeader>
          )}
          sections={[
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] }
          ]}
          keyExtractor={(item, index) => item + index}
        />
        <CloseButton onPress={() => this.props.openJobListField()} />
      </SearchBarWrapper>
    );
  }
}

const SearchBarWrapper = styled.View`
  flex: 1;
  background-color: rgba(50, 106, 218, 0.24);
`;

const SearchInfo = styled.SectionList`
  background-color: rgba(227, 238, 227, 1);
`;

const SectionHeader = styled.Text`
  padding: 20px;
  font-weight: bold;
  color: #fff;
`;

const Item = styled.Text`
  padding-left: 25px;
  color: #fff;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  background-color: tomato;
  bottom: 20px;
  left: ${Dimensions.get('window').width / 2 - 12};
  width: 24px;
  height: 24px;
  border-radius: 24px;
`;
