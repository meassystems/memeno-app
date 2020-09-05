import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface IDislikeButton {
    onClick: () => void;
}

const Index: React.FC<IDislikeButton> = (props) => {
    return (
        <TouchableOpacity style={styles.dislikeButton} activeOpacity={0.5} />
    );
};

const styles = StyleSheet.create({
    dislikeButton: {
        flex: 1,
        backgroundColor: '#3a3a3a',
        borderRadius: 2,
        borderTopColor: '#656565',
        borderTopWidth: 2,
        borderBottomColor: '#656565',
        borderBottomWidth: 2,
        borderLeftColor: '#656565',
        borderLeftWidth: 2,
    },
});

export default Index;
