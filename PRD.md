# 📝 Product Requirements Document (PRD)

## Overview

### Product Name
**Shot by Love** – Your wedding, beautifully planned and captured 📸

### App Description
Shot by Love is an interactive wedding photography planning hub designed to help engaged couples beautifully plan and capture their big day. From finding your photography style to building a custom shot list, estimating your budget, and creating a picture-perfect timeline, Shot by Love guides you through every step with ease and elegance. Crafted by the creative team at Dreams Collective Studios, this app blends professional expertise with intuitive tools—so you can focus on the love, while we frame the moments that matter most.

### Purpose
A lead-generation digital product that helps engaged couples plan their wedding photography, showcases Dreams Collective’s work, and encourages them to book services.

---

## 🎯 Goals & Objectives

- Provide real value to couples early in the wedding planning journey
- Build trust and position Dreams Collective Studios as the ideal vendor
- Collect qualified leads through interactive tools and educational content
- Automate the beginning of the client journey (pre-sales funnel)

---

## 🧩 Features

### 1. Photography Style Quiz
- Interactive, image-driven quiz to determine preferred photo style (e.g., romantic, cinematic, documentary)
- Results display sample galleries and testimonials matching their style
- Email required to unlock results

**Deliverables**:
- React quiz component
- Gallery preview component
- Email capture modal

---

### 2. Shot List Builder
- Guided form that allows couples to select key moments they want captured
- Generates downloadable PDF or printable version
- Option to send shot list via email (email integration added later)

**Deliverables**:
- React form component with checkboxes
- PDF generation script (`jsPDF`)
- Email delivery UI

---

### 3. Budget Estimator
- Interactive calculator where users input session length, locations, and add-ons
- Returns estimate range
- Option to schedule a consult after estimate

**Deliverables**:
- React form with conditional logic
- Budget output component
- CTA to Calendly embed or contact form

---

### 4. Wedding Photo Timeline Generator
- Couples input ceremony time, prep/start/end time, and group sizes
- App suggests a sample timeline
- Optional download or email delivery (email integration added later)

**Deliverables**:
- React form component
- Timeline logic engine
- Output view with downloadable version
- Email delivery UI

---

### 5. Venue Lookbook Gallery
- Interactive map or grid of popular wedding venues in SoCal
- Each venue includes:
  - Sample photos from past shoots
  - Tips and notes
  - Testimonials

**Deliverables**:
- Image gallery with filter/sort
- Venue detail modal or sub-page
- Static data file

---

### 6. Client Love Wall
- Testimonials and video reviews from real clients
- Carousel component for featured stories
- Optional filter by event type

**Deliverables**:
- Carousel slider
- Video embed support
- Optional category tabs

---

### 7. Video Mini-Course: "How to Prep for Your Wedding Photos"
- 3–5 embedded videos (hosted on Vimeo or YouTube unlisted)
- Each section has quick summary tips and CTA to book
- Gated access via email (email integration added later)

**Deliverables**:
- Video player page
- Email gate modal
- CTA button with routing to contact form

---

### 8. Smart Booking Flow
- Persistent CTA bar: “See If Your Date Is Available”
- Opens booking modal or routes to custom form
- Auto-send email (integration added later)

**Deliverables**:
- Calendly embed or booking modal
- Confirmation page/state
- Email delivery UI

---

## 🛠 Tech Stack

- **Framework**: React + Vite
  - No TypeScript, use vanilla JavaScript
- **Styling**: Tailwind CSS + shadcn
- **Forms**: React Hook Form + Yup
- **Routing**: React Router
- **State**: Zustand
- **PDF**: jsPDF

---

## 📝 Non-Functional Requirements

- Mobile responsive
- Clear CTAs on every feature page
- SEO metadata per route/page

---

## 📅 Timeline (Suggested Phases)

### Phase 1 – MVP
- Photography Style Quiz
- Budget Estimator
- Smart Booking Flow
- Lead capture UI (email integration added later)

### Phase 2 – Value Builders
- Shot List Builder
- Timeline Generator
- Venue Lookbook

### Phase 3 – Trust & Engagement
- Video Mini-Course
- Client Love Wall
- Blog or Planning Resources Section

---

## 📌 Success Metrics

- Conversion rate from visitors to email leads (goal: 20%+)
- Conversion rate from leads to booked calls (goal: 10%)
- Time on site (avg 3–5 minutes)
- Reduced bounce rate on quiz/timeline pages
- Bookings attributed to lead funnel
