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

class AeolianDance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Aeolian Dance",
            id: "0005",
            played: false,
            type: "battleCon",
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
                                source= {require('./imgs/card_0005_aeolian-dance.png')}
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
                    <Image
                        source= {require("./thumbs/thumb_005.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default AeolianDance;
export const atonementId = '0005';