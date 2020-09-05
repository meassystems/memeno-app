import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    useWindowDimensions,
} from 'react-native';

const MemesSwiper = () => {
    const memContainerWidth = useWindowDimensions().width;

    return (
        <>
            <View style={layouts.memesSwiper}>
                <ImageBackground
                    style={layouts.currentMemBackground}
                    imageStyle={styles.currentMemBackground}
                    source={require('../../../resources/mem.jpg')}>
                    <Image
                        style={StyleSheet.compose(layouts.currentMem, {
                            width: memContainerWidth,
                        })}
                        source={require('../../../resources/mem.jpg')}
                    />
                </ImageBackground>
            </View>
        </>
    );
};

const layouts = StyleSheet.create({
    memesSwiper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flex: 1,
    },
    currentMemBackground: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    currentMem: {
        resizeMode: 'contain',
    },
});

const styles = StyleSheet.create({
    currentMemBackground: {
        opacity: 0.4,
    },
});

export default MemesSwiper;
