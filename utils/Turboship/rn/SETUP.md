# Setup React Native

## Steps
- Initialize a new React Native project:
  - `npx react-native@latest init AwesomeProject`
- Move into dir:
  - `cd AwesomeProject`
- Copy & paste generated src code to `AwesomeProject`
- Install dependencies:
  - `npm install`
- Run project:
  - `npx react-native run-ios`

- Setup [RN Vector Icons](https://www.npmjs.com/package/react-native-vector-icons#installation)

  - iOS
    - Set `.ttf`s inside of `Info.plist`
    ```sh
    <key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>FontAwesome6_Brands.ttf</string>
      <string>FontAwesome6_Regular.ttf</string>
      <string>FontAwesome6_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
      <string>Fontisto.ttf</string>
    </array>
    ```
  - Android

