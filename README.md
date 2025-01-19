# Silent Failure on Malformed JSON POST Requests in Express.js

This repository demonstrates a common, yet subtle, error in Express.js applications:  the silent failure when processing malformed JSON in POST requests.  The absence of proper error handling can make debugging challenging.  The solution provided demonstrates best practices for robust error handling.

## Bug

The `bug.js` file showcases the problematic code.  It uses `express.json()` middleware but lacks crucial error handling for situations where the incoming request body is not valid JSON or is missing entirely.  This leads to the server silently failing without providing any informative error messages.

## Solution

The `bugSolution.js` file presents a corrected version.  It incorporates the following improvements:

1.  **Error Handling in POST Request:**  It uses a `try...catch` block to handle potential `JSON.parse` errors.  Appropriate error responses are sent to the client.
2.  **Global Error Handler:**  A global error handler is added using `app.use((err, req, res, next) => { ... })` to catch any unhandled errors, preventing silent failures.  This ensures that all errors are logged and appropriate responses are returned to the client.

This approach provides a robust and user-friendly experience, even when unexpected data is received.