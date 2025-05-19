// import {StyleSheet, View, Text, Button, Image} from 'react-native';
// import {useCheckVersion} from './useCheckVersion';

// export default function App() {
//   const {version} = useCheckVersion();

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           color: 'white',
//           fontSize: 20,
//         }}>{`Version: ${version.state.version}`}</Text>

//       <Button title={'check update OTA'} onPress={version.onCheckVersion} />
//       <Button title={'rollback OTA'} onPress={version.rollBack} />
//       {/* <Button title={'check update Git'} onPress={version.onCheckGitVersion} />
//       <Button title={'remove update Git'} onPress={version.removeGitUpdate} /> */}

//       {version.state.loading && <Text>Loading from git...</Text>}
//       {!!version.state.progress && (
//         <View style={styles.progress}>
//           <View
//             style={[
//               styles.process,
//               {
//                 width: `${version.state.progress}%`,
//               },
//             ]}
//           />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 10,
//     backgroundColor: '#A0C878',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
//   progress: {
//     height: 10,
//     width: '80%',
//     marginTop: 20,
//     borderRadius: 8,
//     borderColor: 'grey',
//     borderWidth: 1,
//     overflow: 'hidden',
//   },
//   process: {
//     height: 10,
//     backgroundColor: 'blue',
//   },
//   img: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
// });

import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useCheckVersion} from './useCheckVersion';

export default function App() {
  const {version} = useCheckVersion();

  return (
    <View style={styles.container}>
      <Image source={require('./promotional_banner.jpeg')} style = {{width : 300 , height : 200}} />
      <Text
        style={{color: 'white'}}>{`Version: ${version.state.version}`}</Text>
      <Button title={'check update OTA'} onPress={version.onCheckVersion} />
      <Button title={'rollback OTA'} onPress={version.rollBack} />
      <Button title={'check update Git'} onPress={version.onCheckGitVersion} />
      <Button title={'remove update Git'} onPress={version.removeGitUpdate} />

      {version.state.loading && <Text>Loading from git...</Text>}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(248, 90, 90, 0.6)',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
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
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
