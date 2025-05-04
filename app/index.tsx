import { View,  ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@/context/userContext';
import { router } from 'expo-router';
import { Account, Client } from 'react-native-appwrite';

const Main = () => {
    let client: Client;
    let account: Account;
    client = new Client();
    client
    .setEndpoint('YOUR_ACTUAL_ENDPOINT') // your actual endpoint.. 
    .setProject('YOUR_PROJECT_ID') // project_id 
    .setPlatform('yOUR_PLATFORM_ID');// platform_id or device _ids(Android or iOS)
    account = new Account(client);

    const { loggedInUser, setLoggedInUser }:any = useUser();

    const [isMounted, setIsMounted] = useState(false);
    
     useEffect( ()  =>  {

        const checkUser = async () => {

            try {
              const user = await account.get();
              setLoggedInUser(user);
            } catch (error) {
              setLoggedInUser(null)
              console.log(error);
              
            }
                setIsMounted(true);
          };
          
          checkUser();

    }, []);


    useEffect(() => {
      
      // console.log("loggedInUser ", loggedInUser);
      // console.log("isMounted ", isMounted);
      
      if (isMounted) {
        if (loggedInUser) {
          router.push('/welcome');
        } else {
          router.push('/auth/register');
        }
    }
    }, [isMounted]);
  
    if (!isMounted) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    return null; 
    
}

export default Main;
