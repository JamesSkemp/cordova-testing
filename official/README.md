# Following Official Getting Started Guides
The following Cordova and Ionic projects focus on creating an Android application on a MacBook Air.

## Cordova
From https://cordova.apache.org/docs/en/latest/guide/cli/.

1. `npm install -g cordova`
2. `cordova create hello com.example.hello HelloWorld`
3. `cd hello`
4. `cordova platform add android`
	- `cordova platform ls` will list all platforms for a project
5. `cordova requirements` will check requirements
	- `brew install gradle`
	- [Download and install Android Studio](https://developer.android.com/studio/).
		- Start Android Studio.
		- Make sure you update the profile with the new system variables. Since I use iTerm2 and oh-my-zsh, I had to update .zshrc in /Users/james/
			> export ANDROID_HOME=/Users/james/Library/Android/sdk/
			> export ANDROID_SDK_ROOT=$ANDROID_HOME
			> export PATH=${PATH}:/Users/james/Library/Android/sdk/platform-tools:/Users/james/Library/Android/sdk/tools
		- Start a new terminal to get the updated profile.
			- Or run `. ~/.zshrc`
		- Running `cordova requirements` again should tell you what API level you need to install, in my case it was actually Level 26, despite what the guide above said. So open the SDK Manager, and install level 26.
6. Once all requirements have been satisified, `cordova build`.
7. To start an emulator, `cordova emulate android`.
	- In Android Studio you may need to add the AVD Manager to the Tools menu and then use that to download a system image and create a new virtual device.
	- It may be necessary to run `adb kill-server && adb forward --remove-all && adb start-server` if it can't connect.

## Ionic
From https://ionicframework.com/docs/intro/installation/.

1. `npm install -g ionic`
2. `ionic start helloWorld blank`
	- Integrate your new app with Cordova by entering `y` next.
	- Don't install Ionic Pro SDK.
3. `cd helloWorld`
4. `ionic serve` will load the project in a browser.

## Misc
- If you want to check on your Android Virtual Devices (AVD) via the command line, `cd ~/Library/Android/sdk/tools/bin` and run `./avdmanager list avd`.

