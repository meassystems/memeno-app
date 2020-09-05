import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface ILikeButton {
    onClick: () => void;
}

const Index: React.FC<ILikeButton> = (props) => {
    return <TouchableOpacity style={styles.likeButton} activeOpacity={0.5} />;
};

const styles = StyleSheet.create({
    likeButton: {
        flex: 1,
        backgroundColor: '#ffea00',
        borderRadius: 2,
        borderTopColor: '#ffee38',
        borderTopWidth: 2,
        borderBottomColor: '#ffee38',
        borderBottomWidth: 2,
        borderRightColor: '#ffee38',
        borderRightWidth: 2,
    },
});

export default Index;
