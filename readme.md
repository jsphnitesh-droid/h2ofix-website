# H2OFIX — Water Treatment Solutions | Bengaluru

**"We Don't Sell — We Solve"**

Static website for H2OFIX, Bengaluru's authorized water treatment dealer.
Deployed on Vercel with automated SSL and DNS management.

## 🚀 Quick Deploy

### Vercel (Production)
1. Import this repo to Vercel: `vercel.com/new`
2. Framework Preset: **Other** (static HTML)
3. Deploy → Auto SSL provisioning

### DNS Configuration (Hostingr)
After Vercel deploy, update Hostingr DNS zone:

| Record | Type | Value |
|--------|------|-------|
| @ | A | 76.76.21.61 (Vercel) |
| www | CNAME | cname.vercel-dns.com |

**Remove old Lovable records:**
- Remove: `76.76.19.165`
- Remove: `cname.lovable.app`

## 📁 File Structure
- `index.html` — Main landing page (hero, panic awareness, calculator, products)
- `emi.html` — Easy EMI pilot page (Bajaj Finserv, HDFC, ICICI, SBI)
- `products.html` — Full catalog (41 products, searchable)
- `app.js` — Product data, calculators, lead webhook
- `webhook.gs` — Google Apps Script (deploy separately)

## 🔧 Lead Engine v2

### Deploy Webhook (Google Apps Script)
1. Go to `script.google.com` (login: info.h2ofix@gmail.com)
2. New Project → Paste `webhook.gs` content
3. Deploy → Web App
   - Execute as: **Me**
   - Access: **Anyone**
4. Copy Web App URL
5. Paste into `app.js`: `const WEBHOOK_URL = "YOUR_URL_HERE"`

**Leads saved to:** Google Drive → `h2ofix-leads.txt`  
**Alerts sent to:** care@h2ofix.in (instant email)

##  Design System (v1.1)
- **Background:** #050E1A (navy)
- **Cards:** #0D1F35
- **Primary CTA:** #F59E0B (orange)
- **Accent:** #0EA5E9 (blue)
- **WhatsApp:** #25D366
- **Fonts:** Space Grotesk (headings), Inter (body)

## 📊 Features
- ✅ 41 Products (13 brands: 3M, AO Smith, Kent, Eureka Forbes, etc.)
- ✅ Savings Calculator (5-year cost analysis)
- ✅ EMI Calculator (pilot phase)
- ✅ Mobile responsive
- ✅ WhatsApp integration (+91 9945429988)
- ✅ Lead capture webhook
- ✅ SEO optimized

##  Company Info
**H2OFIX**  
#34 Esther Green Layout, Kada Agrahara,  
Bidarahalli Hobli, Bangalore 560077  
📧 care@h2ofix.in | 📱 +91 9945429988

## 🔐 Security
- No API keys committed (placeholders only)
- Webhook URL added post-deploy
- Google Drive private file storage
- Let's Encrypt SSL (auto via Vercel)

---

© 2025 H2OFIX. All rights reserved.
