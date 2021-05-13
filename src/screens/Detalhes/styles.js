import styled from 'styled-components/native';
import { View, Dimensions, Text } from 'react-native';
import { colors } from '../../styles';

export const Container = styled.View`
    flex:1;
`;

export const HeaderContainer = styled.View`
    backgroundColor: ${colors.primary};
     borderBottomRightRadius: 50;
     borderBottomLeftRadius: 50;
`;
export const BackButton = styled.Text`
    fontSize: 24;
    fontWeight: bold;
    color: ${colors.white};
    padding: 10px;
`;

export const ImageContainer = styled.Image`
    width: 200px; 
    height: 200px;
    alignSelf: center;
    top: 60;
`;

export const InfosContainer = styled.View`
    top: 60px;
`;

export const TextName = styled.Text`
    textAlign: center;
    fontSize: 30;
`;
export const ContainerType = styled.View`
    backgroundColor: ${colors.redOpacity};
    width: 30%;
    alignSelf:center;
    borderRadius:10;
`;
export const TextType = styled.Text`
    textAlign: center;
    fontSize: 20;
    fontWeight: bold;
    color: ${colors.white};
`;

export const TextHeightWight = styled.Text`
    textAlign: center;
    fontSize: 20;
`;