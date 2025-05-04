import { router } from "expo-router";
import { createContext, useContext, useState } from "react";
import { Account, Client, ID, Models } from 'react-native-appwrite';

interface UserData {
    name: string;
    email: string;
    password: string;
}

interface UserContextType {
    loggedInUser: Models.User<Models.Preferences> | null;
    setLoggedInUser: React.Dispatch<React.SetStateAction<Models.User<Models.Preferences> | null>>;
    logout: () => void;
    login: () => void;
    register: () => void;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    userData: UserData;

  }
  
  const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }:any) => {

    let client: Client;
    let account: Account;

    client = new Client();
    client
      .setEndpoint('YOUR_ACTUAL_ENDPOINT') // your actual endpoint.. 
      .setProject('YOUR_PROJECT_ID') // project_id 
      .setPlatform('YOUR_PLATFORM_ID'); // platform_id or device-id(Android or iOS)
    
    account = new Account(client);

    const [userData, setUserData ] = useState({
        name: '',
        email: '',
        password: '',    
    });
    const [loggedInUser, setLoggedInUser] = useState<Models.User<Models.Preferences> | null>(null);

    const logout = async () => {
        await account.deleteSession('current'); 
        router.push('/auth/register')
    }

    const login = async () => {
        try {
            // await account.deleteSession('current'); 

            const session = await account.createEmailPasswordSession(userData.email, userData.password);
            // console.log('Login session created:', session);
            const user = await account.get();
            setLoggedInUser(user);
            router.push('/');
            setUserData({
                ...userData,
                email: '',
                name: '',
                password: '',
            });
        } catch (error) {
            console.log('Login failed:', error);
            alert('Login failed. Check email and password.');
            setUserData({
                ...userData,
                email: '',
                name: '',
                password: '',
            });
        }
      };

      const register = async () => {
        try {

            const newUser = await account.create(ID.unique(), userData.email, userData.password, userData.name);
            // console.log('User registered:', newUser);
      
            await login();
        } catch (error) {
            console.log('Registration failed:', error);
            alert('Registration failed. User may already exist.');
            setUserData({
                ...userData,
                email: '',
                name: '',
                password: '',
            });
        }
      };

    return(
        <UserContext.Provider value={
            {
                setLoggedInUser,
                loggedInUser,
                login, 
                logout, 
                register, 
                userData, 
                setUserData
            }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);
