import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { colors } from '../../styles';

import {
    ContainerBar,
    TextInfo,
    ProgressBar
} from './styles';

export const Progressbar = ({ status, nome }) => {
    const width = Dimensions.get('screen').width;

    return (

        <ContainerBar>
            <TextInfo>
                {nome}   -  {status}
            </TextInfo>
            <ProgressBar style={{
                width: ((width - 50) * status) / 100,
            }}>
            </ProgressBar>
        </ContainerBar>

    )
}