# 🎥 Movies App

Welcome to the Movies App project!

## 🚀 Quick Start

To get started quickly, run the following commands:

```bash
yarn && yarn build && yarn start
```

The server will start on **[http://localhost:3000](http://localhost:3000)**.

## Prerequisites

Before you get started, ensure you have the following installed:

- **Node.js 20** (you can use [Volta](https://volta.sh) to ensure the correct version)
- **Yarn 1.2**

## Project Structure

```
movies/
|
├── public/              # Static assets
|
├── src/                 # Source code
│   ├── components/      # Reusable components
│   ├── styles/          # Sass files
│   ├── App.jsx          # Main React component
│   └── index.js         # Client entry point
|
├── server.js            # Express server for SSR
├── webpack.config.js     # Webpack configuration for client
├── webpack.server.js    # Webpack configuration for server
├── .babelrc             # Babel config
```

### Project Logs

Steps followed to complete the challenge:

1. Setup github repo
2. Added webpack config, react, sass, babel and main page entry.
3. Added SSR config with express.
   - **Client**: The client-side bundle (`bundle.js`) is served to make the app interactive.
   - **Server**: The server bundle (`server.js`) renders the initial HTML to improve SEO and loading times.
