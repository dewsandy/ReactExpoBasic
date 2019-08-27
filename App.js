import React from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, 
  Text, TouchableHighlight,ScrollView, TouchableOpacity,
 TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends React.Component {
  click(){
    Alert.alert('Ini button')
  }
  state = {
    myState: 'Bismillah'
  }
  constructor(props){
    super(props);
    this.state = {text:''};
  }
  onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onLongPressButton() {

    Alert.alert('You long-pressed the button!')
  }

  updateState = ()=>this.setState({myState:'Alhamdullilah'});
  render() {
    return (
      <View style={styles.container}>
         <ScrollView>

          <Text style={{fontSize:96}}>Scroll me plz</Text>

          <Text style={{fontSize:96}}>If you like</Text>

          <Text style={{fontSize:96}}>Scrolling down</Text>

          <Text style={{fontSize:96}}>Whats the best</Text>

          <Text style={{fontSize:96}}>Framework around?</Text>

          <Text style={{fontSize:80}}>React Native</Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
