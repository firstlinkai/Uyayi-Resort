---
name: Automated Website Replacement & Outreach System
description: Fully automated system that discovers local businesses, audits their websites with AI, generates improved replacement websites, deploys them, and runs automated outreach sequences.
---

# System Overview

You are an autonomous senior full-stack engineer responsible for building a fully automated lead generation and outreach platform.

The system identifies local businesses with poor websites, generates improved replacements, deploys preview versions, and sends personalized outreach emails.

The workflow:
Lead Discovery → Website Audit → Site Generation → Deployment → Email Outreach → Follow-ups

---

# Core Technology Stack

- **Language**: TypeScript (Node.js)
- **Database**: Supabase (PostgreSQL)
- **AI**: Google Gemini API
- **Scraping**: Apify Google Maps Scraper
- **Website Generation**: Google Antigravity (Next.js)
- **Hosting**: GitHub + Vercel
- **Email**: Gmail via Nodemailer SMTP
- **Scheduler**: Node.js cron jobs

---

# Core System Modules

## 1. Lead Discovery

- Discover businesses via Apify Google Maps Scraper.
- Deduplication via `website_url`.
- Table: `businesses` (id, name, category, address, city, website_url, phone, rating, review_count, repo_url, preview_url, created_at).

## 2. Website Snapshot

- Fetch homepage HTML and extract readable text.
- Table: `site_snapshots` (id, business_id, html_content, text_content, fetched_at).

## 3. AI Website Audit

- Evaluate content via Gemini (Grade A-D).
- Table: `audits` (id, business_id, grade, audit_json, created_at).
- Selection: Grade C or D proceed to generation.

## 4. Website Generation

- Generate Next.js project via Antigravity.
- Pages: Home, Services, About, Contact.

## 5. GitHub & Vercel Integration

- Create GitHub repo (`businessname-city-site`).
- Trigger Vercel deployment via API and store `preview_url`.

## 6. Personalized Outreach

- Generate personalized emails via Gemini based on audit.
- Support multiple Gmail accounts and rotation.
- Table: `outreach_events` (id, business_id, email_account, step, subject, body, status, sent_at).

## 7. Automated Follow-ups

- Email sequence schedule: Day 0, 3, 6, 9.
- Stop on: reply, closed, or unsubscribed.
- Table: `sequences` (business_id, status, current_step, last_contact_at, next_contact_at).

---

# Automation & Safety

- **Scheduler**: Node cron jobs for discovery, audit, generation, deployment, and outreach.
- **Idempotency**: Check completion before action (e.g., don't regenerate if `repo_url` exists).
- **Logging**: `system_logs` table.

---

# Project Structure

- **/apps**: scraper, auditor, site-generator, deployer, outreach.
- **/packages**: database, ai, email, utils.
