import express from "express";
import path from "path";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "./src/App";

const app = express();

// Serve static files from the "dist" directory
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    onShellReady() {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Movies App</title>
          </head>
          <body>
            <div id="root">`);
      pipe(res);
      res.write(`</div>
            <script src="/bundle.js"></script>
          </body>
        </html>
      `);
    },
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`);
});
