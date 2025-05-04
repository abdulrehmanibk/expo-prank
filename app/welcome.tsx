import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from '@/context/userContext';


const Welcome = () => {

    const { loggedInUser, logout }:any = useUser();

  return (
    <>  
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#3b5998', '#192f6a']} // start to end colors
            style={styles.container}
        >   
        
        <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.logout}>Logout 🛑</Text>
        </TouchableOpacity>

            <View style={{
                display:'flex', 
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{fontSize: 80}}>
                🌎 {'\n'} 
                </Text>
                <Text style={{fontSize: 24, color:'#FFF'}}>
                    Hello {loggedInUser.name} ⏻
                </Text>
            </View>

            <View style={styles.welcomeBox}>
                <Text style={{color:'#ff7e5f', fontSize: 28, fontWeight:'800'}}>Welcome to 
                Fun-Prank! 🎉 </Text>
                <Text style={{color:'grey', fontSize: 13, textAlign:'center'}}>
                    Read Some Latest News and got Pranked</Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/news')}>
                     <Image source={require('../assets/images/Icon-Right.png')} 
                     style={{position:'absolute'}} />

                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => router.push('/readme')}>
                <Text style={{color:'grey', fontSize: 20, marginBlock: '15%'}}>
                ℹ️ Readme
                </Text>
                </TouchableOpacity>
                
        </LinearGradient>

    </>
  )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        gap: 50,
    },
    welcomeBox:{
        width: '80%',
        height: 200,
        backgroundColor: '#fff',
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        marginBottom: 50,
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        gap: 2,
    },
    nextButton: {
        width: 50,
        height: 50,
        backgroundColor:'#4c669f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        bottom:'-10%',
        position: 'absolute',
    },
    logout:{
        fontSize: 20,
        color: '#f0f0f0',
        marginLeft: 'auto',
        marginRight: 20,
        top: '2%'
    },
});