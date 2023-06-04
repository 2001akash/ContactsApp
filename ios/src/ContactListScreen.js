import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';

const ContactListScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch contacts from the phone or an API
    // Update the "contacts" state with the fetched data
  }, []);

  const handleContactPress = (contact) => {
    const [selectedContact, setSelectedContact] = useState(null);

const handleContactPress = (contact) => {
  setSelectedContact(contact);
};

// Inside the render method
{selectedContact && (
  <ContactDetailsPopup
    contact={selectedContact}
    onClose={() => setSelectedContact(null)}
  />
)}

    // Show a popup with contact details
    // You can use a modal or any other component for the popup
    // Display the "contact.name" and "contact.number" in the popup
  const renderContactItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(query.toLowerCase())
        );
        setContacts(filteredContacts);
      };
      
    // Filter the contacts based on the search query
    // Update the "contacts" state with the filtered contacts

  return (
    <View>
      <TextInput
        placeholder="Search contacts"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ContactListScreen;
