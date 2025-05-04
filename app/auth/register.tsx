import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Client, Account, ID, Models } from 'react-native-appwrite';
import { useUser } from '@/context/userContext';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Register = () => {

    const { setLoggedInUser, userData, setUserData, login, register }:any = useUser();

    const [ userAuthNeed, setUserAuthNeed ] = useState(true)

    const handleInputs = (name:string, value:string) => {
        setUserData({
            ...userData,
            [name]: value,
        });
    };



  return (
    <>
    
    {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#3b5998', '#192f6a']}
        style={styles.container}
    > */}
    <View style={styles.container}>    
        <View style={styles.registerContainer}>
            <Text style={{fontSize: 24, fontWeight: '900', color: Colors.c1}}>
                {userAuthNeed  && 'Login here' }
                {!userAuthNeed  && 'Register yourself' }
            </Text>

            <View style={styles.registerBox}>
                <Text style={styles.label}>
                    Email
                </Text>
                <TextInput placeholder=' name@example.com' style={styles.input}  value={userData.email} onChangeText={(val) => handleInputs('email', val)}/>             

                {!userAuthNeed &&
                <>
                    <Text style={styles.label}>
                        Name
                    </Text>
                    <TextInput placeholder=' John' style={styles.input}  value={userData.name} onChangeText={(val) => handleInputs('name', val)}/>
                </>                
                }

                <Text style={styles.label}>
                    Password
                </Text>
                <TextInput placeholder=' Password' style={styles.input} secureTextEntry value={userData.password} onChangeText={(val) => handleInputs('password', val)}/>

                <TouchableOpacity 
                    onPress={() => {
                      if (userAuthNeed) {
                          login();
                    } else {
                        register();
                      }
                    }}
                    style={styles.btn}
                >
                    <Text style={{fontSize: 18,color: Colors.c1}}>
                        {userAuthNeed ? 'Login' : 'Register'} 
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setUserAuthNeed(!userAuthNeed)}>
            <Text style={{ fontSize: 12, color: Colors.c3, textDecorationLine:'underline'}}>
                {userAuthNeed ? 
                'Dont have an account Register' 
                : 
                'Already have an account Login'}
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        {/* </LinearGradient> */}
        </>
)
}

export default Register;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.c1
    },
    registerContainer:{
        width: '90%',
        // height: '65%',
        backgroundColor: Colors.c5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        alignItems:'center',
        // justifyContent:'space-evenly',
        padding: 20,
        gap: 20,
    },
    registerBox:{
        width: '100%',
        display:'flex',
        flexDirection:'column',
        gap: 2,
    },
    label:{
        fontSize: 18,
        color: 'gray',

    },
    input:{
        width:'100%',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: Colors.c7,
        borderRadius: 10,
        fontSize: 15,
        backgroundColor: Colors.c1
    },
    btn:{
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.c7,
        padding: 5,
        marginTop: 8
    },
}); 