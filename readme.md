# Email Sending Script

This JavaScript script uses the `nodemailer` package to send emails to a list of recipients sequentially. It reads recipient email addresses from a file, extracts dynamic data (e.g., names and companies) from the email addresses, and sends customized emails to each recipient.

## Features

- Reads email addresses from a specified text file.
- Extracts employee names and company names dynamically from email addresses.
- Sends personalized emails with custom subject lines and HTML content.
- Sends emails sequentially to avoid overwhelming the SMTP server.

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your machine.
2. **Dependencies**: Install the required Node.js packages by running:

   ```bash
   npm install nodemailer
   ```
3. **Email Service**: Configure an SMTP server and obtain the necessary credentials (e.g., email, password, SMTP host, port).
4. **Email List File**: Prepare a `.txt` file with recipient email addresses, one per line.

## Configuration

Update the following placeholders in the script with your actual values:

- `<SERVICE>`: The email service provider (e.g., `Gmail`).
- `<SMTP_HOST>`: The SMTP server's host address (e.g., `smtp.gmail.com`).
- `<SMTP_PORT>`: The SMTP port (e.g., `465` for SSL or `587` for TLS).
- `<EMAIL_USER>`: The sender's email address.
- `<EMAIL_PASSWORD>`: The sender's email password or app-specific password.
- `<EMAIL_FILE>`: Path to the file containing recipient email addresses.
- `<SUBJECT_PLACEHOLDER>`: The email's subject line.
- `<HTML_BODY_PLACEHOLDER>`: The email's HTML content.

## Usage

1. **Edit the Script**: Replace placeholders in the script with your actual configuration.

2. **Run the Script**:

   ```bash
   node skeleton.js
   ```

3. **Output**: The script logs the status of each email sent to the console.

## Error Handling

- If the script encounters errors (e.g., file read issues or email sending errors), it will log the errors to the console.

## Example Email File

Example `emails.txt` file format:

```
recipient1@example.com
recipient2@example.com
recipient3@example.com
```

## Disclaimer

Ensure sensitive information (e.g., email credentials) is not hardcoded. Use environment variables or secure configuration management practices.

---

Feel free to modify this script to suit your specific requirements!

