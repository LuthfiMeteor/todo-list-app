# 📝 Todo List App

Aplikasi manajemen tugas (Todo List) berbasis **React Native** dengan **Expo**, menggunakan **Firebase Firestore** sebagai backend database secara real-time.

## ✨ Fitur

- ➕ **Tambah** todo baru
- 📋 **Lihat** daftar semua todo secara real-time
- ✏️ **Edit / Update** todo yang sudah ada
- 🗑️ **Hapus** todo
- ⚡ Sinkronisasi data real-time menggunakan Firebase Firestore

## 🛠️ Tech Stack

| Teknologi | Versi |
|-----------|-------|
| React Native | 0.88.1 |
| Expo | ~58.0.22 |
| Expo Router | ~58.0.29 |
| Firebase | ^13.1.0 |
| TypeScript | ~6.0.3 |
| React Navigation | ^7.5.1 |

## 📁 Struktur Proyek

```
todo-list-app/
├── src/
│   ├── app/
│   │   ├── Screens/
│   │   │   ├── Home.tsx       # Halaman utama (daftar & tambah todo)
│   │   │   └── Detail.tsx     # Halaman detail (edit todo)
│   │   ├── config/
│   │   │   └── firebase.tsx   # Konfigurasi Firebase
│   │   └── index.tsx          # Entry point navigasi
│   └── global.css
├── .env                        # Environment variables (tidak di-commit)
├── .env.example                # Template environment variables
├── app.json                    # Konfigurasi Expo
└── package.json
```

## ⚙️ Prasyarat

Pastikan kamu sudah menginstal:

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- [Bun](https://bun.sh/) (package manager)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (untuk Android Emulator)
- Akun [Firebase](https://firebase.google.com/) dengan project yang aktif

## 🔧 Instalasi

### 1. Clone Repository

```bash
git clone <url-repository>
cd todo-list-app
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Konfigurasi Environment Variables

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Lalu isi nilai-nilainya dengan kredensial Firebase kamu:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **Cara mendapatkan kredensial Firebase:**
> 1. Buka [Firebase Console](https://console.firebase.google.com/)
> 2. Pilih / buat project
> 3. Masuk ke **Project Settings → General**
> 4. Scroll ke bawah ke bagian **Your apps → Web app**
> 5. Salin nilai dari `firebaseConfig`

### 4. Setup Firebase Firestore

1. Di Firebase Console, buka **Firestore Database**
2. Klik **Create database**
3. Pilih mode **Start in test mode** (untuk development)
4. Pilih lokasi server, lalu klik **Enable**

---

## 🚀 Run Aplikasi

### Menggunakan Expo Go (Scrpy / Scan QR)

Cara paling cepat — tidak perlu build, cukup scan QR code dengan aplikasi **Expo Go** di HP kamu.

**1. Install Expo Go di HP kamu:**
- Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

**2. Jalankan dev server:**

```bash
bun run start
# atau
npx expo start
```

**3. Scan QR Code:**
- Buka aplikasi **Expo Go** di HP
- Tap **"Scan QR code"**
- Arahkan kamera ke QR code yang muncul di terminal

> **Pastikan HP dan laptop berada di jaringan Wi-Fi yang sama!**

**Opsi tambahan saat dev server berjalan:**

| Tombol | Fungsi |
|--------|--------|
| `a` | Buka di Android Emulator |
| `i` | Buka di iOS Simulator |
| `w` | Buka di browser web |
| `r` | Reload aplikasi |
| `m` | Toggle menu dev |

---

### Menggunakan Android Emulator (Android Studio)

**1. Setup Android Studio:**

a. Download dan install [Android Studio](https://developer.android.com/studio)

b. Saat pertama kali buka, ikuti wizard setup dan install **Android SDK**

c. Buka **Android Studio → More Actions → Virtual Device Manager** (atau dari menu **Tools → Device Manager**)

d. Klik **"Create Device"**, pilih perangkat (contoh: Pixel 6), lalu klik **Next**

e. Pilih **System Image** (rekomendasi: API Level 34 / Android 14), download jika belum ada, lalu klik **Next → Finish**

**2. Jalankan Emulator:**

a. Di **Device Manager**, klik tombol ▶️ (Play) di samping perangkat yang sudah dibuat

b. Tunggu hingga emulator selesai booting (muncul tampilan homescreen Android)

**3. Set environment variable (jika belum):**

```bash
# Tambahkan ke ~/.bashrc atau ~/.zshrc
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Lalu reload shell:
```bash
source ~/.bashrc
# atau
source ~/.zshrc
```

**4. Jalankan aplikasi ke emulator:**

```bash
# Langsung run ke Android (memerlukan build)
npx expo run:android

# ATAU: jalankan dev server lalu tekan 'a'
bun run start
# tekan huruf 'a' di terminal untuk membuka di emulator
```

> **Catatan:** `npx expo run:android` akan men-generate folder `android/` dan melakukan build native. Ini diperlukan pertama kali atau saat ada perubahan native module.

**5. Verifikasi emulator terdeteksi:**

```bash
adb devices
# Output yang diharapkan:
# List of devices attached
# emulator-5554   device
```

---

## 📜 Scripts yang Tersedia

```bash
bun run start          # Jalankan Expo dev server
bun run android        # Build dan jalankan di Android
bun run ios            # Build dan jalankan di iOS
bun run web            # Jalankan di browser web
bun run lint           # Jalankan linter (ESLint)
npx tsc --noEmit       # Type check TypeScript
npx expo-doctor        # Diagnosa dependency & konfigurasi
```

---

## 🐛 Troubleshooting

### Expo Go tidak bisa terhubung ke dev server
- Pastikan HP dan laptop di jaringan Wi-Fi **yang sama**
- Coba tekan `s` di terminal untuk beralih ke **Expo Go** mode
- Gunakan **tunnel** jika di jaringan berbeda: `npx expo start --tunnel`

### Emulator tidak terdeteksi
- Pastikan emulator sudah fully booted
- Jalankan `adb devices` untuk memverifikasi
- Coba restart ADB: `adb kill-server && adb start-server`

### Error Firebase / Firestore
- Periksa kembali nilai di file `.env`
- Pastikan Firestore sudah diaktifkan di Firebase Console
- Periksa **Firestore Rules** — pastikan read/write diizinkan

### Metro bundler error
```bash
npx expo start --clear   # Clear cache dan restart
```

---

## 📄 Lisensi

Project ini dibuat untuk keperluan mata kuliah **Pemrograman Mobile**.

