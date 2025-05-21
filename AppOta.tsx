import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import {unzip} from 'react-native-zip-archive';
import {useCheckVersion} from './useCheckVersion';
import RNFS from 'react-native-fs';
import {useState} from 'react';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [versionS, setVersionS] = useState(0);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    Alert.alert('Success', `Account created for ${name}`);
  };

  // const {version} = useCheckVersion();

  const startUpdate = async () => {
    try {
      const response = await fetch(
        'https://zpxhngudkplmusxmrytv.supabase.co/storage/v1/object/sign/superapp/update.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RmNDVlZDgwLTkwN2QtNDM5MC05NzAxLWMyZmY0ZDNlOGE3YyJ9.eyJ1cmwiOiJzdXBlcmFwcC91cGRhdGUuanNvbiIsImlhdCI6MTc0NzgyMzA4MywiZXhwIjoxNzQ4NDI3ODgzfQ.5ewF5gaxz0M_oc5xR8nRWaztOd2z-Tj9sf7_VbiEMuM',
      );
      const data = await response.json();

      const version = data.version;
      const bundleZipUrl =
        Platform.OS === 'ios' ? data.downloadIosUrl : data.downloadAndroidUrl;

      const zipPath = `${RNFS.DocumentDirectoryPath}/index.android.bundle`;
      const downloadResult = await RNFS.downloadFile({
        fromUrl: bundleZipUrl,
        toFile: zipPath,
      }).promise;

      if (downloadResult.statusCode === 200) {
        const stats = await RNFS.stat(zipPath);
        Alert.alert('✅ ZIP File Size:' + stats.size);

        const targetPath = RNFS.DocumentDirectoryPath;
        await unzip(zipPath, targetPath);

        await AsyncStorage.setItem('appVersion', version.toString());

        Alert.alert('Update Complete', 'Restart the app to apply changes.');

        RNRestart?.restart();
      } else {
        throw new Error('Download failed');
      }
    } catch (err) {
      Alert.alert('Update failed', err.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}>
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
          <Text style={styles.title}>Create Account 🚀</Text>
          <Text style={styles.subtitle}>suhail</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            onPress={() => {
              Alert.alert('Updating...');
              startUpdate();
            }}
            style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginRedirect}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* {version.state.loading && <Text>Loading from git...</Text>}

          {!!version.state.progress && (
            <View style={styles.progress}>
              <View
                style={[
                  styles.process,
                  {
                    width: `${version.state.progress}%`,
                  },
                ]}
              />
            </View>
          )} */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  innerContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  progress: {
    height: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 1,
    overflow: 'hidden',
  },
  process: {
    height: 10,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#444',
  },
  loginLink: {
    color: '#28a745',
    fontWeight: '600',
  },
});

export default RegisterScreen;
