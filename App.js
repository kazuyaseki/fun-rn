import React from 'react';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import JobLists from './components/JobLists';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import { Image, Text } from 'react-native';

import msgIcon from './public/img/icon_message.png';
import personIcon from './public/img/icon_person.png';
import searchIcon from './public/img/icon_search.png';

const Icon = ({ source }) => <Image source={source} />;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Tabs
            key="mainScenes"
            swipeEnabled
            animationEnabled
            showLabel={false}
            tabBarStyle={{ backgroundColor: '#333' }}
          >
            <Scene
              key="jobLists"
              component={JobLists}
              icon={() => <Icon source={searchIcon} />}
            />
            <Scene
              key="login"
              component={ChatList}
              icon={() => <Image source={msgIcon} />}
            />
            <Scene
              key="home"
              component={Chat}
              icon={() => <Image source={personIcon} />}
            />
          </Tabs>
        </Scene>
      </Router>
    );
  }
}
