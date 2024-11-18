# 🎥 Movies App

Welcome to the Movies App project!

## 🚀 Quick Start

To get started quickly, run the following commands:

```bash
yarn && yarn build && yarn start
```

The server will start on **[http://localhost:3000](http://localhost:3000)**.

## Prerequisites

- **Node.js 20** (you can use [Volta](https://volta.sh) to ensure the correct version)
- **Yarn 1.2**

### Project Logs

Steps followed to complete the challenge:

1. Setup github repo
2. Added webpack config, react, sass, babel and main page entry.
3. Added SSR config with express.

   - **Client**: The client-side bundle (`bundle.js`) is served to make the app interactive.
   - **Server**: The server bundle (`server.js`) renders the initial HTML to improve SEO and loading times.

4. Added nodemon to refresh on Save
