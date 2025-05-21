import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  const validateAndSubmit = () => {
    if (!name || !email || !password || !confirm) {
      return setError('All fields are required.');
    }
    if (password !== confirm) {
      return setError('Passwords do not match.');
    }
    if (!agree) {
      return setError('You must agree to terms and conditions.');
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', `Welcome, ${name}!`);
      navigation.navigate('HomeScreen');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header Image */}
        <Image
          source={require('./assets/SignUp1.jpg')}
          style={styles.banner}
        />

        <Text style={styles.title}>Create Account</Text>

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        {/* Full Name */}
        <View style={styles.inputContainer}>
          {/* <Icon name="account" size={20} color="#999" /> */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          {/* <Icon name="email" size={20} color="#999" /> */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          {/* <Icon name="lock" size={20} color="#999" /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            {/* <Icon name={secure ? 'eye-off' : 'eye'} size={20} color="#999" /> */}
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          {/* <Icon name="lock-check" size={20} color="#999" /> */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry={secureConfirm}
            value={confirm}
            onChangeText={setConfirm}
          />
          <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
            {/* <Icon name={secureConfirm ? 'eye-off' : 'eye'} size={20} color="#999" /> */}
          </TouchableOpacity>
        </View>

        {/* Terms Agreement */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAgree(!agree)}>
          {/* <Icon
            name={agree ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={20}
            color="#FF6B00"
          /> */}
          <Text style={styles.checkboxText}>
            I agree to the Terms and Conditions
          </Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={validateAndSubmit}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <TouchableOpacity style={styles.socialButton}>
          {/* <Icon name="google" size={20} color="#fff" /> */}
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.socialButton}>
            {/* <Icon name="apple" size={20} color="#fff" /> */}
            <Text style={styles.socialButtonText}>Sign Up with Apple</Text>
          </TouchableOpacity>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}> Log In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>v1.0.0</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: '#FF6B00',
    marginBottom: 10,
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    height: 50,
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  checkboxText: {
    color: '#aaa',
    marginLeft: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FF6B00',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  dividerText: {
    color: '#777',
    marginHorizontal: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  footerText: {
    color: '#aaa',
  },
  footerLink: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
  version: {
    color: '#444',
    fontSize: 12,
    marginTop: 20,
  },
});

export default SignUpScreen;
