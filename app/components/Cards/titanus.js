import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

// import Deck from './Deck.json';

var styles = StyleSheet.create({
    image: {
        height: 600,
        width: 400,
        resizeMode: 'cover'
    }
}) 

class Titanus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Titanus",
            id: "0013",
            played: false,
            value: 7,
            type: "artillery",
            modalVisible: false
        }    
    }

    componentWillMount(){
        console.log('this is deck!!! PAY ATTENTION TO ME');
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render(){
        return(
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Image
                                source= {require('./imgs/card_0013_titanus.png')}
                                style= {styles.image}
                            />
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text 
                                    style={
                                        {
                                            fontSize: 10,
                                            padding: 5,
                                            backgroundColor: 'red'
                                        }
                                }>
                                    Hide Info
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Text 
                        style={
                            {
                                fontSize: 30,
                                padding: 20,
                                backgroundColor: 'white'
                            }
                        }>
                        {this.state.name}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


export default Titanus;
export const titanusId = '0013';