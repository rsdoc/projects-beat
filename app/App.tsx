import 'react-native-gesture-handler';
import React from 'react';

// navigation setup
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// logged out screeb
import Login from './screens/Login';
import Register from './screens/Register';

// logged in screens
import Home from './screens/Home';
import Profile from './screens/Profile';

const isLoggedIn = false;

export interface Props {}

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AppStack.Navigator>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Register" component={Register} />
        </AppStack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
