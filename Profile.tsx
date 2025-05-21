import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <Image
        source={require('./assets/Profile1.jpg')} 
        style={styles.avatar}
      />

      {/* User Info */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      {/* Action Buttons */}
      <TouchableOpacity onPress={()=>{
        navigation.navigate('HomeScreen')
      }} style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('WelcomeScreen')
      }} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#bbbbbb',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF6B00',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
