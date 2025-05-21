import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Switch,
  Alert,
  Platform,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      navigation.navigate('SignUpScreen');
      setError('');
      Alert.alert('Login Successful', `Welcome, ${email}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header with image */}
      <View style={styles.header}>
        <Image
          source={require('./assets/Login1.jpg')}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          {/* <Icon name="email-outline" size={20} color="#999" style={styles.inputIcon} /> */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          {/* <Icon name="lock-outline" size={20} color="#999" style={styles.inputIcon} /> */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            style={styles.input}
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            {/* <Icon
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#999"
              style={styles.eyeIcon}
            /> */}
          </TouchableOpacity>
        </View>

        {/* Error */}
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}

        {/* Remember Me + Forgot */}
        <View style={styles.rememberRow}>
          <View style={styles.rememberBox}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{true: '#FF6B00'}}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* OR divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Logins */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            {/* <Icon name="google" size={24} color="#EA4335" /> */}
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            {/* <Icon name="apple" size={24} color="#000" /> */}
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Signup */}
        <Text style={styles.termsText}>
          By logging in, you agree to our <Text style={styles.link}>Terms</Text>{' '}
          and <Text style={styles.link}>Privacy Policy</Text>.
        </Text>

        <View style={styles.signupRow}>
          <Text style={styles.newHere}>New here?</Text>
          <TouchableOpacity>
            <Text style={styles.link}> Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.version}>v1.0.0 • MyApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 60,
  },
  headerImage: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 5,
  },
  form: {
    padding: 20,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 10,
  },
  eyeIcon: {
    padding: 5,
  },
  error: {
    color: '#FF6B00',
    marginBottom: 10,
    fontSize: 14,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#ccc',
    marginLeft: 10,
  },
  forgotText: {
    color: '#FF6B00',
  },
  loginButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  orText: {
    color: '#aaa',
    marginHorizontal: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  socialText: {
    marginLeft: 8,
    color: '#000',
  },
  termsText: {
    color: '#888',
    textAlign: 'center',
    fontSize: 13,
    marginVertical: 10,
  },
  link: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  newHere: {
    color: '#ccc',
  },
  version: {
    textAlign: 'center',
    color: '#555',
    fontSize: 12,
    paddingBottom: 15,
  },
});

export default LoginScreen;
