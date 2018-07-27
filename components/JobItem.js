import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';
import Dimensions from 'Dimensions';
import { Divider } from 'react-native-elements';

const JobItem = () => (
  <Job>
    <Thumbnail
      style={{ marginBottom: 15 }}
      source={{
        uri:
          'http://imgc.appbank.net/c/wp-content/uploads/2018/04/octopathtraveler-101.jpg'
      }}
    />
    <Label style={{ marginBottom: 15 }}>デキるエンジニア</Label>
    <Title style={{ marginBottom: 10 }}>
      旅立とう、きみだけの物語へ―― OCTOPATH TRAVELER
    </Title>
    <Description>
      主人公は、「8人」の旅人たち。物語の舞台となるのはオルステラ大陸。
      きみはその一人としてこの世界を自由に旅することができる。
    </Description>

    <Divider style={{ marginTop: 20, marginBottom: 20 }} />

    <CompanyInfo>
      <CompanyLogo
        style={{ marginRight: 15 }}
        source={{
          uri:
            'http://imgc.appbank.net/c/wp-content/uploads/2018/04/octopathtraveler-101.jpg'
        }}
      />
      <CompanyName>SQUARE ENIX</CompanyName>
    </CompanyInfo>
  </Job>
);

const Job = styled.View`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
`;

const Thumbnail = styled.Image`
  width: ${Dimensions.get('window').width - 40}px;
  height: 180px;
`;

const Label = styled.Text`
  padding: 5px 8px;
  border-radius: 4px;
  border: 1px #ddd;
  color: #888;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 16px;
`;

const CompanyInfo = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
`;

const CompanyLogo = styled.Image`
  width: 32px;
  height: 32px;
`;

const CompanyName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export default JobItem;
