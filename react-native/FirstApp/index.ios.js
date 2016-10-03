import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

class FirstApp extends Component {
  render() {
      let pic = {
          uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
          <View>
            <Child name='Rexxar' />
            <Child name='Jaina' />
            <Child name='Vaeera' />
            <Image source={pic} style={{width:193, height:110}} />
          </View>
      );
  }
}

class Child extends Component{
    constructor(props){
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000)
    }
    render(){
        let text = this.state.showText ? 'Hello ' + this.props.name + '!' : ' ';
        return (
            <Text>{text}</Text>
        );
    }
}

AppRegistry.registerComponent('FirstApp', () => FirstApp);
