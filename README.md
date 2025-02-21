# Express.js - req.body undefined with empty or invalid JSON request

This repository demonstrates a common issue in Express.js applications where `req.body` is undefined when the request body is empty or contains invalid JSON data.  The problem arises because Express.js's `express.json()` middleware expects valid JSON and fails silently if the input is not correctly formatted.  This can lead to unexpected behavior and difficult-to-debug errors.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file presents a robust solution that handles various scenarios, including empty and malformed JSON requests.