import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo or App Icon */}
      <Image
        source={require('./assets/Welcome1.png')} // Replace with your logo URI or use require() if local
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Text style={styles.subtitle}>Your journey begins here</Text>

      {/* Action Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF6B00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
