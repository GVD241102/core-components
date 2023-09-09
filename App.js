import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React from "react";
import { FlatList } from "react-native-web";

export default function App() {
  const [contact, setContact] = React.useState("");
  const [contacts, setContacts] = React.useState([]);

  const addContactHandler = () =>  {
    if (contact.trim() !== "") {
      setContacts([...contacts, {  name: contact }]);
      setContact("");
    }
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={(text) => setContact(text)}
        />
        <Button title="Add Contact" onPress={addContactHandler} />
      </View>
      <View style={styles.contactsContainer}>
        <Text>List of Contacts...</Text>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 80,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 10,
    padding: 10,
  },
  contactsContainer: {
    flex: 6,
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingVertical: 10,
  },
});