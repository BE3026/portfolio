# 🚀 React Portfolio

A modern, responsive personal portfolio built with **React** to showcase my projects, skills, and experience. The project follows industry best practices with **ESLint**, **GitHub Actions CI/CD**, and automatic deployment to **Vercel**.

🌐 **Live Demo:** https://bharath-eswar-portfolio.vercel.app/

---

## 📸 Preview

> Add a screenshot of your homepage here.

```text
assets/
└── portfolio-preview.png
```

Then use:

```markdown
![Portfolio Preview](assets/portfolio-preview.png)
```

---

## ✨ Features

* 🎨 Modern and responsive UI
* ⚡ Fast performance with React
* 📱 Mobile-friendly design
* 🌙 Clean and minimal interface
* 📂 Project showcase
* 👨‍💻 Skills section
* 📄 Resume download
* 📞 Contact section
* 🔍 SEO-friendly
* 🚀 Automated CI/CD pipeline

---

## 🛠️ Tech Stack

| Category        | Technologies      |
| --------------- | ----------------- |
| Frontend        | React, JavaScript |
| Styling         | CSS3              |
| Build Tool      | Vite              |
| Linting         | ESLint            |
| Version Control | Git & GitHub      |
| CI/CD           | GitHub Actions    |
| Deployment      | Vercel            |

---

## 📁 Project Structure

```text
react-portfolio/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Navigate to the project

```bash
cd <repository-name>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 🏗️ Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Starts development server        |
| `npm run build`   | Creates production build         |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Runs ESLint                      |

---

## 🚀 CI/CD Pipeline

This project uses **GitHub Actions** for Continuous Integration and Continuous Deployment.

### Workflow

```text
Push / Pull Request
        │
        ▼
Install Dependencies
        │
        ▼
Run ESLint
        │
        ▼
Build Project
        │
        ▼
Push to main?
     │         │
    No        Yes
     │         │
     ▼         ▼
   Finish   Deploy to Vercel
```

The deployment runs automatically whenever changes are pushed to the `main` branch.

---

## 📌 Future Improvements

* Dark / Light theme
* Blog section
* Animations
* Multi-language support
* Contact form with backend integration
* Unit testing

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 👤 Author

**Bharath Eswar**

* 🌐 Portfolio: https://bharath-eswar-portfolio.vercel.app/
* 💼 LinkedIn: *(Add your LinkedIn URL)*
* 📧 Email: *(Add your email)*

---

## ⭐ Support

If you like this project, consider giving it a **⭐ Star** on GitHub.

It helps others discover the repository and motivates further improvements.

---

## 📜 License

This project is licensed under the MIT License.
