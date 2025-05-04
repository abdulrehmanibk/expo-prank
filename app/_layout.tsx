
import { UserProvider } from '@/context/userContext';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';

export default function RootLayout() {

  return (
    <>   
    <UserProvider>
        <StatusBar backgroundColor="#3b5998" barStyle="light-content" />
        <Stack screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
      </>
  );
}
