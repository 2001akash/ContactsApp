import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ContactListScreen from './ContactListScreen';
import ContactDetailsPopup from './ContactDetailsPopup';

const MainNavigator = createStackNavigator({
  ContactList: { screen: ContactListScreen },
  ContactDetails: { screen: ContactDetailsPopup },
});

const App = createAppContainer(MainNavigator);

export default App;
