# 🌐 Real-Time Translator

A sleek, dark-themed real-time text translator app powered by the **MyMemory Translation API**. This app supports translation across multiple languages with keyboard shortcuts and a modern UI, making it intuitive and accessible.


## 🧰 Key Features
- **Real-Time Translation**: Translate text seamlessly between 10 languages.
- **Neural Machine Translation**: High-quality translation results powered by the MyMemory API.
- **Intuitive Dark-Themed UI**: Designed with Tailwind CSS for a polished user experience.
- **Keyboard Shortcuts**: Trigger translation instantly with `Ctrl/Cmd + Enter`.

## 🔑 Key Components

| Component          | Function |
| ------------------ | -------- |
| `TranslationBox`   | Manages input/output text areas. |
| `LanguageSelector` | Dropdown for selecting languages. |
| `Hero`             | Stylish landing header with a globe animation. |
| `Features`         | Showcases app features in card format. |

## 🛠️ Architecture Overview

This app is built with modern technologies for fast performance and a smooth user experience.

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API Requests**: Axios
- **Build Tool**: Vite

## 🌀 Translation Flow

1. **Enter Text**: Type or paste text in the source language input box.
2. **Select Languages**: Choose both source and target languages from the dropdown.
3. **Translate**: Hit the "Translate" button or press `Ctrl/Cmd + Enter` for quick translation.
4. **View Results**: The translated text appears instantly in the output box.

## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm** installed.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chriz-ty/Multilingual-Translator.git
   cd realtime-translator

2. **Install Dependencies**:
```bash
npm install
```

3. **Run the App**:
```bash
npm run dev
```

The app will be running locally at http://localhost:3000.

## 🌐 Usage

* Enter your text, choose languages, and translate with ease
* Use the keyboard shortcut (`Ctrl/Cmd + Enter`) to speed up translation

## 📦 Technologies Used

* **React + TypeScript**: Modern frontend with type safety
* **Tailwind CSS**: Responsive, clean styling
* **Lucide React**: Beautiful, customizable icons
* **Axios**: For making API requests to MyMemory Translation API
* **Vite**: Fast build and development setup

## 📸 Screenshots

### Translation Page
![image](https://github.com/user-attachments/assets/c1e8353c-f360-4707-b679-1feb0a0c31f6)
![image](https://github.com/user-attachments/assets/1475bd54-53cd-4669-aa2a-581065cfdc5d)

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
