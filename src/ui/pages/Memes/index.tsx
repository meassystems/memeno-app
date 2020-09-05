import React from 'react';
import {StyleSheet, View} from 'react-native';
import MemesSwiper from '../../components/MemesSwiper';
import DislikeButton from '../../components/DislikeButton';
import LikeButton from '../../components/LikeButton';

declare const global: {HermesInternal: null | {}};

const Memes = () => {
    return (
        <>
            <View style={layouts.memesPage}>
                <View style={layouts.header}>
                    <View></View>
                    <View></View>
                    <View></View>
                </View>
                <View style={layouts.content}>
                    <MemesSwiper />
                </View>
                <View style={layouts.footer}>
                    <View style={layouts.dislikeButton}>
                        <DislikeButton onClick={() => {}} />
                    </View>
                    <View style={layouts.likeButton}>
                        <LikeButton onClick={() => {}} />
                    </View>
                </View>
            </View>
        </>
    );
};

const rowSize = 60;

const layouts = StyleSheet.create({
    memesPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: rowSize,
        backgroundColor: 'red',
        margin: 2,
    },
    content: {
        flex: 1,
        alignItems: 'stretch',
        flexBasis: 'auto',
        margin: 2,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: rowSize,
        margin: 2,
    },
    dislikeButton: {
        flex: 1,
    },
    likeButton: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Memes;
