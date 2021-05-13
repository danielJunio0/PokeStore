import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';

import { GetDetailsPokemons } from '../../services/rest/pokemon';
import { Progressbar } from '../../components/ProgressBar/progressBar';

import {
    Container,
    HeaderContainer,
    BackButton,
    ImageContainer,
    InfosContainer,
    TextName,
    ContainerType,
    TextType,
    TextHeightWight
} from './styles';

export function Detalhes(navigation) {

    const pokemonName = navigation.route.params.pokemonName;
    const pokemonImageUrl = navigation.route.params.pokemonImage;

    const [types, setTypes] = useState([]);
    const [status, setStatus] = useState([]);

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    useEffect(() => {
        GetDetailsPokemons(pokemonName)
            .then((res) => {
                setTypes(res.data.types.map(info => info.type.name).join(' | '));
                setStatus(res.data.stats);
                setAltura(res.data.height);
                setPeso(res.data.weight);
            });
    }, []);

    return (
        <Container>
            <HeaderContainer>
                <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
                    <BackButton>{`< back`}</BackButton>
                </TouchableOpacity>
                <ImageContainer source={{ uri: pokemonImageUrl }} />
            </HeaderContainer>

            <InfosContainer>
                <View>
                    <TextName>
                        {pokemonName}
                    </TextName>
                    <ContainerType>
                        <TextType>
                            {types}
                        </TextType>
                    </ContainerType>

                    <TextHeightWight>
                        Altura: {altura}
                    </TextHeightWight>

                    <TextHeightWight>
                        Peso: {peso}
                    </TextHeightWight>
                </View>
                <View>
                    {
                        status.map((element, index) => (
                            <Progressbar
                                key={index}
                                nome={element.stat.name}
                                status={element.base_stat}
                            />
                        ))
                    }
                </View>
            </InfosContainer>
        </Container>
    )
}