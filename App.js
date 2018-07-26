import React from 'react';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import JobLists from './components/JobLists';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import { Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Tabs key="mainScenes" swipeEnabled={true} animationEnabled={true}>
            <Scene key="jobLists" component={JobLists} tabBarLabel="ログイン" />
            <Scene key="login" component={ChatList} tabBarLabel="hoge" />
            <Scene key="home" component={Chat} tabBarLabel="ホーム" />
          </Tabs>
        </Scene>
      </Router>
    );
  }
}
