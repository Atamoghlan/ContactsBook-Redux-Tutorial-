import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TextInput, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class AddTodo extends Component {
    state = {
        contactName: ''
    }

    addTodo = (contactName) => {
        //redux store
        this.props.dispatch(addTodo(contactName))
        this.setState({ contactName: '' })
    }
    render() {
        let plusIcon = require('../icons/plus.png')
        let clearIcon = require('../icons/Clear.png')
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <View>
                    <TextInput
                        onChangeText={(contactName) => this.setState({ contactName })}
                        value={this.state.contactName}
                        placeholder="Name"
                        style={{ width:330, height:50,borderWidth: 2, 
                            borderColor: 'green', backgroundColor: 'white', 
                             padding: 5, fontSize: 25 }}
                    />
                     <TextInput
                        onChangeText={(contactName) => this.setState({ contactName })}
                        value={this.state.contactName}
                        placeholder="Phone number"
                        style={{ width:330, height:50,borderWidth: 2, 
                            borderColor: 'green', backgroundColor: 'white', 
                            padding: 5, fontSize: 25, marginTop: 5 }}
                    />
                    <TouchableOpacity onPress={() => this.addTodo(this.state.contactName)}>
                        <View style={{ width: 80, height: 50, 
                            alignItems: 'center', justifyContent: 'center' }}>
                            <Image 
                            source = {clearIcon}
                            style={{ marginTop: 10,marginLeft: 250,width: 100, height: 50 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.addTodo(this.state.contactName)}>
                        <View style={{ width: 80, height: 50, 
                            alignItems: 'center', justifyContent: 'center' }}>
                            <Image 
                            source = {plusIcon}
                            style={{ marginTop: 50,width: 50, height: 50 }} />
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}
export default connect()(AddTodo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameInput: {
        borderWidth: 1, borderColor: 'green',
        backgroundColor: '#eaeaea', height: 60, width: 300,
        fontSize: 25, padding: 5, marginLeft: 10
    },
    numberInput: {
        borderWidth: 1, borderColor: 'green',
        backgroundColor: '#eaeaea', height: 60, width: 300,
        fontSize: 25, marginTop: 10,
        padding: 5, marginLeft: 10
    },
    plusButton: {
        marginLeft: 10, width: 70, height: 70,
        marginTop: 30
    }
})