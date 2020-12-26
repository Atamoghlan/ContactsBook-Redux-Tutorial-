import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity
} from 'react-native'
import AddContact from '../src/containers/AddContact'

export default class Book extends React.Component {
    render() {
        return (
            <View>
                <AddContact/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        

    },
})