import React from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ChatList = () => (
  <View>
    <TouchableOpacity
      onPress={() => {
        Actions.chat();
      }}
    >
      <Text>Chat画面にいく</Text>
    </TouchableOpacity>
  </View>
);

export default ChatList;
