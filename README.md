**📦 OTA Update Process for Android (React Native)**
This guide explains how to generate and upload OTA updates for Android using react-native-ota-hot-update and Supabase Storage.


# 🛠️ Step-by-Step Instructions
Generate OTA Bundle
Run the following command to export the Android OTA bundle:
```js
npm run export-android
```

# Upload to Supabase
Open the android folder in your file explorer.
Locate the file: index.android.bundle.zip.

Drag and drop this file into your Supabase Storage bucket (e.g., updates/).

# Get the Public URL
In Supabase, click the three dots (⋮) next to the uploaded file.

Select “Copy Public URL”.

# Update update.json
Paste the copied URL into the # downloadAndroidUrl field.

Increment the version value.

Example:
```js
{
  "version": "1.0.2",
  "downloadAndroidUrl": "https://xyz.supabase.co/storage/v1/object/public/updates/index.android.bundle.zip"
}
```

**Use the URL in App Code**
Go to your App.tsx file (or the file where OTA update is called).

Paste the updated URL or version reference where your OTA update function fetches the bundle.

**🔁 Example OTA Fetch Usage**
```js
checkForUpdates({
  platform: 'android',
  url: 'https://xyz.supabase.co/storage/v1/object/public/updates/index.android.bundle.zip',
  version: '1.0.2'
});
```


# Note :-

To test this project run the command as below

```js
npm run androidp
```
