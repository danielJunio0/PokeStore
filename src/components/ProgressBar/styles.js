import styled from 'styled-components/native';
import { View, Dimensions, Text } from 'react-native';
import { colors } from '../../styles';
const width = Dimensions.get('screen').width;

export const ContainerBar = styled.View`
    width:90%;
    paddingHorizontal: 10px;
    flexDirection:column;
`;

export const TextInfo = styled.Text`
    fontSize: 16px;
    fontWeight: bold;
    color: ${colors.blackBluish};
`;

export const ProgressBar = styled.View`
    backgroundColor: ${colors.gold};
    height: 10px;
    borderRadius: 15px;
`;