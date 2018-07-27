import React from 'react';
import { Text, Animated, Easing } from 'react-native';
import styled from 'styled-components';
import Dimensions from 'Dimensions';

import SearchField from './SearchField';
import JobItem from './JobItem';

export default class JobLists extends React.Component {
  state = {
    searchBarActive: false,
    jobListPosition: new Animated.Value(60)
  };

  openJobListField = () => {
    this.setState({ searchBarActive: false });

    Animated.timing(this.state.jobListPosition, {
      toValue: 60,
      duration: 500,
      easing: Easing.back()
    }).start();
  };

  closeJobListField = () => {
    this.setState({ searchBarActive: true });

    Animated.timing(this.state.jobListPosition, {
      toValue: Dimensions.get('window').height,
      duration: 500,
      easing: Easing.back()
    }).start();
  };

  render() {
    const animatedStyle = { top: this.state.jobListPosition };

    return (
      <JobListsWrapper>
        <SearchField
          onFocusSearchField={this.closeJobListField}
          openJobListField={this.openJobListField}
        />
        <AnimatedJobList
          style={[animatedStyle]}
          searchBarActive={this.state.searchBarActive}
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <JobItem />}
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
  height: ${Dimensions.get('window').height - 160}px;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #ddd;
`;

const AnimatedJobList = Animated.createAnimatedComponent(JobList);
