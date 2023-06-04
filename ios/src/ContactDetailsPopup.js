import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ContactDetailsPopup = ({ contact, onClose }) => {
  return (
    <View>
      <Text>Name: {contact.name}</Text>
      <Text>Number: {contact.number}</Text>
      <TouchableOpacity onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactDetailsPopup;
