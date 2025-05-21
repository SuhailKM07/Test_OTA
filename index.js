import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import RNFS from 'react-native-fs';

const OTA_ASSET_BASE_PATH = `${RNFS.DocumentDirectoryPath}/output/images/`;

// 🧠 In-memory cache of available OTA images
const availableOtaImages = new Set();

// 🔄 Preload OTA image filenames on app start
RNFS.readDir(OTA_ASSET_BASE_PATH)
  .then(files => {
    files.forEach(file => availableOtaImages.add(file.name));
  })
  .catch(() => {
    // Ignore error if directory doesn't exist
  });

const originalResolveAssetSource = resolveAssetSource;

function isOtaAsset(uri) {
  return uri && uri.startsWith('asset:/');
}

function patchedResolveAssetSource(source) {
  const resolved = originalResolveAssetSource(source);

  if (resolved && isOtaAsset(resolved.uri)) {
    const filename = resolved.uri.replace('asset:/', '');
    if (availableOtaImages.has(filename)) {
      const otaPath = `${OTA_ASSET_BASE_PATH}${filename}`;
      return {
        ...resolved,
        uri: Platform.select({
          android: `file://${otaPath}`,
          ios: otaPath,
        }),
      };
    }
  }

  return resolved;
}

// ✅ Patch RN's asset loader
require('react-native/Libraries/Image/resolveAssetSource').default = patchedResolveAssetSource;

// 🔁 App Start
AppRegistry.registerComponent(appName, () => App);
