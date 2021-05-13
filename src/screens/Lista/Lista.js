import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { GetPokemons } from '../../services/rest/pokemon';
import { Pagination, PaginationReset } from '../../store/modules/pagination/actions';


import { colors } from '../../styles';

import { useSelector, useDispatch } from 'react-redux';
import {
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from 'react-native';

import {
    Container,
    ContainerPaginationBar,
    ContainerList,
    ListItemButton,
    ListItemText,
    ListItemImage,
    PaginationIcon
} from './styles';
export function Lista() {

    const dispatch = useDispatch();
    const [pokemons, setPokemons] = useState([]);
    const { navigate } = useNavigation();


    useEffect(() => {
        dispatch(PaginationReset())
        ListarPokemons();
    }, []);

    const pagina = useSelector(state => state.pagination.pagina);
    const offset = useSelector(state => state.pagination.offset);

    function ListarPokemons(value = 0) {
        GetPokemons(value).then((res) => {
            setPokemons(res.data.results);
        });
    }
    function ProximaPagina() {
        dispatch(Pagination(offset + 20, pagina + 1));
        ListarPokemons(offset + 20);
    }
    function PaginaAnterior() {
        dispatch(Pagination(offset - 20, pagina - 1));
        ListarPokemons(offset - 20);
    }

    function RenderPokemons(item) {

        const { name, url } = item.item;
        const id = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
        const urlImagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

        return (
            <ContainerList>
                <ListItemButton 
                    onPress={() => {
                        navigate('Detalhes', {
                            pokemonName: name,
                            pokemonImage: urlImagem,
                        })
                    }}>

                    <ListItemImage
                        source={{ uri: urlImagem }}
                    />
                    <ListItemText numberOfLines={2}>#{id} {name}</ListItemText>
                </ListItemButton>
            </ContainerList>
        )
    }

    return (
        <Container>
            <ImageBackground
                source={require('../../assets/img/charizard.jpg')}
                style={{ resizeMode: 'cover' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pokemons}
                    keyExtractor={(pokemon) => pokemon.name}
                    renderItem={RenderPokemons}
                    numColumns={2}
                />

            </ImageBackground>

            <ContainerPaginationBar>

                <TouchableOpacity
                    onPress={() => PaginaAnterior()}
                    disabled={offset == 0 ? true : false}>
                    <PaginationIcon style={{color: offset ==0 ? colors.bluish : colors.white}}>{`<`}</PaginationIcon>

                </TouchableOpacity>
                <PaginationIcon>{pagina}</PaginationIcon>
                <TouchableOpacity
                    onPress={() => ProximaPagina()}
                >
                    <PaginationIcon>{`>`}</PaginationIcon>
                </TouchableOpacity>
            </ContainerPaginationBar>
        </Container>
    );

}

