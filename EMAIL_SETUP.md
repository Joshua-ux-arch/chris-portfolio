# Email Setup — Web3Forms (Free, No Credit Card)

Web3Forms sends form submissions straight to your email.
Free forever. No templates. No limits on the free plan. 2-minute setup.

---

## Step 1 — Get your free access key

Go to: https://web3forms.com

Click **"Create your Access Key"**
Enter your email address (e.g. your Gmail)
Check your inbox and click the confirmation link
You'll get an access key that looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

---

## Step 2 — Add it to your site

Open `index.html` and find this line (around line 120):

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
```

Replace `YOUR_WEB3FORMS_KEY` with your real key:

```html
<input type="hidden" name="access_key" value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
```

Save the file. Done.

---

## How it works

When someone clicks "Send Message" on your portfolio, the form data
is submitted to Web3Forms servers and forwarded directly to your email.

You don't need to:
- Create an account with a credit card
- Set up templates
- Configure anything else

The email you receive will include:
- The person's name, email, phone
- Which service they need
- Their budget
- Their message

---

## WhatsApp (already configured)

The WhatsApp button is already linked to +2348132003769.
It auto-fills a message with whatever the visitor typed in the form.
No setup needed.

---

## If you change your email

Go back to web3forms.com, create a new access key with your new email,
and replace the old key in index.html.
