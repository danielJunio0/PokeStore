import styled from 'styled-components/native';
import {  Dimensions } from 'react-native';
import { colors } from '../../styles';

const width = Dimensions.get('screen').width;

export const Container = styled.View`
    height: 95%;
`;

export const ContainerPaginationBar = styled.View`
    padding: 3px; 
    justifyContent: space-evenly; 
    flexDirection: row;
    backgroundColor:${colors.primary};
`;

export const ContainerList = styled.View`
padding: 5%;
`;

export const ListItemButton = styled.TouchableOpacity`
    backgroundColor: ${colors.white};
    borderRadius: 20px;
    alignItems: center;
`;

export const ListItemText = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    fontFamily: 'monospace';
    color:${colors.green};
`;

export const ListItemImage = styled.Image`
    width: 150px; 
    height: 150px;
    margin: 10px;
`;

export const PaginationIcon = styled.Text`
    fontSize: 24px;
    fontWeight: bold; 
    color: ${colors.white};
`;