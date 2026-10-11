# 📰 KhabarSetu

**Your daily connection to the latest news.**

KhabarSetu is a React-based news web application that allows users to explore the latest articles across multiple categories through a simple and user-friendly interface.

## ✨ Features

- 🏠 **Category-Based News:** Browse General, Business, Entertainment, Health, Science, Sports, and Technology news.
- 🔍 **Search Functionality:** Search for news articles using keywords.
- ♾️ **Infinite Scrolling:** Load more articles automatically while scrolling.
- 📰 **News Cards:** View article titles, descriptions, images, sources, authors, and publication dates.
- 📱 **Responsive Interface:** Browse news using a responsive Bootstrap layout.
- ⚡ **Loading Indicator:** Track loading progress while fetching news.

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS
- **Build Tool:** Vite
- **Styling:** Bootstrap
- **Routing:** React Router DOM
- **API:** NewsAPI
- **Libraries:** React Infinite Scroll Component, React Top Loading Bar

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anshuch1306/KhabarSetu.git
```

### 2. Navigate to the project directory

```bash
cd KhabarSetu
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create a `.env.local` file in the project's root directory and add:

```env
VITE_NEWS_API_KEY=your_newsapi_key
```

Replace `your_newsapi_key` with your own API key from [NewsAPI](https://newsapi.org/).

**Important:** Never upload your `.env.local` file or publish your API key.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal to use KhabarSetu.

## 📂 Project Structure

```text
KhabarSetu/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── News.jsx
│   │   ├── NewsItem.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── package.json
└── vite.config.js
```

## 🎯 Project Goal

The goal of KhabarSetu is to make browsing news across different topics easier by bringing category navigation, keyword search, and continuous article loading into one application.

## 👩‍💻 Author

**Anshu Choudhary**

GitHub: [@anshuch1306](https://github.com/anshuch1306)

---

*Built with React and Vite.*