import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const Readme = () => {

  return (
    <ScrollView>
    <View style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10%', flexDirection:'column'}}>
      <Text style={{fontSize:24}}>Prank Screen App - Demo Usage</Text>
      <Text style={{fontSize:28, fontWeight:'800'}}>Overvie</Text>
      <Text style={{fontSize:24, color:' grey'}}>
        How to Use
      {'\n'}
      {'\n'}

      </Text>     
      <Text style={{fontSize:20, fontWeight:'800', alignSelf:'flex-start'}}>
        Open the App:
      </Text>


      <Text style={{fontSize:15}}>
      {'\n'}
        1. Launch the app and navigate to the News Page to read random articles. 
        {'\n'}
        2. Wait for 4 seconds, and the broken screen prank will be triggered over the news content.    
        {'\n'}
        {'\n'}
        <Text style={{fontSize:15, color:' grey'}}>
            Back and Re-enter:  
            {'\n'}
            If you navigate away from the News Page and return, the broken screen prank resets and shows a new, randomized broken screen effect.
            {'\n'}
            Enjoy the Randomized News and Pranks:   
            {'\n'}
            Each time you visit the News Page, you will see fresh, random news and a new broken screen effect, along with the prank's accompanying vibration.
        {'\n'}
        {'\n'}
        </Text>
        Notes:  
        <Text style={{fontSize:12, color:' grey',fontWeight:'800',}}>
        {'\n'}
        1. The prank is harmless and intended for fun, with a slight vibration accompanying the broken screen.
        {'\n'}

        2. The broken screen effect only appears on the News Page, adding an element of surprise while reading.
        {'\n'}

        3. It resets every time the user navigates back and re-enters the News Page.   
        {'\n'}
        </Text>

        </Text>

      </View>
      </ScrollView>
  );
};

export default Readme;
