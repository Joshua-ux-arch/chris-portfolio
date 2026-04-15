# EmailJS Setup Guide — Torsu Portfolio

Follow these 5 steps to connect your contact form to your email inbox.

---

## Step 1 — Create a free EmailJS account
Go to: https://www.emailjs.com
Click **Sign Up Free** (200 emails/month on free plan — plenty to start).

---

## Step 2 — Add an Email Service
1. In your dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (easiest) or any other provider
4. Connect your Gmail account (e.g. `hello@torsu.design`)
5. Copy your **Service ID** — looks like: `service_abc1234`

---

## Step 3 — Create an Email Template
1. Go to **Email Templates** → **Create New Template**
2. Set it up like this:

**Subject:**
```
New Project Inquiry from {{from_name}}
```

**Body:**
```
You have a new message from your portfolio!

Name:    {{from_name}}
Email:   {{from_email}}
Phone:   {{phone}}
Service: {{service}}
Budget:  {{budget}}

Message:
{{message}}
```

3. Save the template and copy the **Template ID** — looks like: `template_xyz789`

---

## Step 4 — Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** — looks like: `aBcDeFgHiJkLm1234`

---

## Step 5 — Add to your code
Open `js/main.js` and replace lines 11–13:

```js
const EMAILJS_PUBLIC_KEY  = 'aBcDeFgHiJkLm1234';   // ← your public key
const EMAILJS_SERVICE_ID  = 'service_abc1234';       // ← your service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789';       // ← your template ID
```

Save and reload — your form is now live!

---

## WhatsApp
WhatsApp is already connected to **+2348132003769**.
The "WhatsApp Me" button auto-fills a message with whatever the user typed in the form.

To change the number, search for `2348132003769` in `index.html` and `js/main.js`
and replace with your number (no + sign, no spaces).

---

## Testing
Fill in the form and click **Send Message**.
- If EmailJS is not yet configured, it will fall back to opening your mail client.
- Once configured, messages go directly to your Gmail inbox.
