import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import RNFS from 'react-native-fs';

const OTA_ASSET_BASE_PATH = `${RNFS.DocumentDirectoryPath}/output/drawable-mdpi/`;

const availableOtaImages = new Set();

RNFS.readDir(OTA_ASSET_BASE_PATH)
  .then(files => {
    files.forEach(file => availableOtaImages.add(file.name));
  })
  .catch(() => {
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

require('react-native/Libraries/Image/resolveAssetSource').default = patchedResolveAssetSource;

AppRegistry.registerComponent(appName, () => App);
