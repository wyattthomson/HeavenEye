import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';

// import Deck from './Deck.json';

var styles = StyleSheet.create({
    image: {
        height: 500,
        width: 375,
        resizeMode: 'contain'
    },
    thumb: {
        height:100,
        width:60,
        resizeMode: 'contain'
    }
}) 

class Archdaemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Archdaemon",
            id: "0008",
            played: false,
            value: 4,
            type: "melee",
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
                                source= {require('./imgs/card_0008_archdaemon.png')}
                                style= {styles.image}
                            />
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text 
                                    style={
                                        {
                                            fontSize: 20,
                                            padding: 10,
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
                    <Image
                        source= {require("./thumbs/thumb_008.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Archdaemon;
export const archdeaemonId = '0008';