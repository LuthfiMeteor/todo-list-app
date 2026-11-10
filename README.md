# 📝 Todo List App

A simple todo list app built with **React Native + Expo** and **Firebase Firestore** as the real-time backend. You can add, view, edit, and delete todos — all synced live with the database.

## ✨ Features

- ➕ Add new todos
- 📋 View all todos in real-time
- ✏️ Edit / update existing todos
- 🗑️ Delete todos
- ⚡ Live sync powered by Firebase Firestore

## 🛠️ Tech Stack

| Tech | Version |
|------|---------|
| React Native | 0.88.1 |
| Expo | ~58.0.22 |
| Expo Router | ~58.0.29 |
| Firebase | ^13.1.0 |
| TypeScript | ~6.0.3 |
| React Navigation | ^7.5.1 |

## 📁 Project Structure

```
todo-list-app/
├── src/
│   ├── app/
│   │   ├── Screens/
│   │   │   ├── Home.tsx       # Main screen — list & add todos
│   │   │   └── Detail.tsx     # Detail screen — edit a todo
│   │   ├── config/
│   │   │   └── firebase.tsx   # Firebase config & init
│   │   └── index.tsx          # Navigation entry point
│   └── global.css
├── .env                        # Your secret env vars (not committed)
├── .env.example                # Template for env vars
├── app.json                    # Expo config
└── package.json
```

## ⚙️ Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Bun](https://bun.sh/) (package manager)
- [Android Studio](https://developer.android.com/studio) (for the Android emulator)
- A [Firebase](https://firebase.google.com/) account with an active project

---

## 🔧 Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd todo-list-app
```

### 2. Install dependencies

```bash
bun install
```

### 3. Set up environment variables

Copy the example env file:

```bash
cp .env.example .env
```

Then fill in your Firebase credentials in `.env`:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **Where to find your Firebase credentials:**
> 1. Go to [Firebase Console](https://console.firebase.google.com/)
> 2. Open your project → **Project Settings → General**
> 3. Scroll down to **Your apps → Web app**
> 4. Copy the values from `firebaseConfig`

### 4. Enable Firestore

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (fine for development)
4. Pick a server location → **Enable**

---

## 🚀 Running the App

### Option 1 — Expo Go (Scan QR with your phone)

Fastest way to run the app — no build needed, just scan a QR code.

**Step 1:** Install **Expo Go** on your phone
- Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
- iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

**Step 2:** Start the dev server

```bash
bun run start
# or
npx expo start
```

**Step 3:** Scan the QR code
- Open **Expo Go** on your phone
- Tap **"Scan QR code"**
- Point your camera at the QR code shown in the terminal

> **Make sure your phone and laptop are on the same Wi-Fi network!**
> If they're not, run `npx expo start --tunnel` instead.

**Keyboard shortcuts while dev server is running:**

| Key | Action |
|-----|--------|
| `a` | Open on Android Emulator |
| `i` | Open on iOS Simulator |
| `w` | Open in browser |
| `r` | Reload the app |
| `m` | Toggle dev menu |

---

### Option 2 — Android Emulator (Android Studio)

**Step 1: Set up Android Studio**

1. Download and install [Android Studio](https://developer.android.com/studio)
2. On first launch, follow the setup wizard and install the **Android SDK**

**Step 2: Create a virtual device (AVD)**

1. Open **Android Studio → More Actions → Virtual Device Manager**
   (or from the menu: **Tools → Device Manager**)
2. Click **"Create Device"**
3. Pick a device (e.g. Pixel 6) → click **Next**
4. Select a **System Image** — recommended: **API Level 34 (Android 14)**
   - Download it if it's not already available
5. Click **Next → Finish**

**Step 3: Launch the emulator**

In **Device Manager**, click the ▶️ play button next to your device.
Wait until the Android homescreen fully loads.

**Step 4: Set up environment variables (Linux)**

Add these to your `~/.bashrc` or `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Then reload your shell:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

**Step 5: Run the app on the emulator**

```bash
# Start dev server and press 'a' to open on emulator
bun run start

# Or directly build and run on Android
npx expo run:android
```

> **Note:** `npx expo run:android` will generate the `android/` folder and do a native build. You only need this the first time or when adding a new native module.

**Verify the emulator is detected:**

```bash
adb devices
# Expected output:
# List of devices attached
# emulator-5554   device
```

---

## 📜 Available Scripts

```bash
bun run start          # Start the Expo dev server
bun run android        # Build and run on Android
bun run ios            # Build and run on iOS
bun run web            # Run in the browser
bun run lint           # Run ESLint
npx tsc --noEmit       # TypeScript type check
npx expo-doctor        # Check dependencies and config health
```

---

## 🐛 Troubleshooting

**Expo Go can't connect to the dev server**
- Make sure your phone and laptop are on the **same Wi-Fi**
- Try pressing `s` in the terminal to switch to Expo Go mode
- Use tunnel mode if on different networks: `npx expo start --tunnel`

**Emulator not detected**
- Make sure the emulator is fully booted before running the app
- Run `adb devices` to check
- Restart ADB if needed: `adb kill-server && adb start-server`

**Firebase / Firestore errors**
- Double-check your `.env` values
- Make sure Firestore is enabled in Firebase Console
- Check **Firestore Rules** — read/write should be allowed in test mode

**Metro bundler errors**
```bash
npx expo start --clear   # Clear cache and restart
```

---

## 📄 License

Built for **Mobile Programming** coursework.
