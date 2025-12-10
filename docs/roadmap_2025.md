# 2025 Feature Wishlist & Roadmap

## 🚀 Priority Features

### 1. Multi-Language Support 🌍
**Goal:** Expand accessibility to Spanish and Farsi speaking patients.
**Implementation Strategy:**
- **Framework:** Use Next.js Internationalization (i18n) Routing.
- **Libraries:** `next-intl` or `react-i18next` for managing translations.
- **Content:**
    - Initial automated translation via DeepL Pro / OpenAI.
    - Specialized medical review for accuracy.
- **UI:** Add a Language Switcher in the Navbar (🇺🇸 | 🇪🇸 | 🇮🇷).

### 2. Real-Time GHL (GoHighLevel) Schedule Integration 📅
**Goal:** Allow patients to book real slots directly on the site.
**Implementation Strategy:**
- **Method A (Easiest):** Embed the GHL Calendar Widget Iframe.
    - *Pros:* Instant setup, reliable, handled entirely by GHL.
    - *Cons:* Styling limitations.
- **Method B (Custom):** Use GHL API to fetch slots and build a custom React booking component.
    - *Pros:* Perfect visual integration.
    - *Cons:* Higher development effort.

### 3. AI-Driven Widget & LLM for Conditions 🤖
**Goal:** An intelligent assistant to answer patient questions about eye conditions (Keratoconus, Dry Eye, etc.) 24/7.
**Implementation Strategy:**
- **Tech Stack:** Vercel AI SDK + OpenAI GPT-4o (or custom fine-tuned model).
- **Knowledge Base:** Index the site's content (especially the "Hidden Library" of conditions) into a vector database (Pinecone or Supabase pgvector) for RAG (Retrieval Augmented Generation).
- **Guardrails:** Strict prompting to ensure it provides "educational information only" and always steers towards booking an appointment.

### 4. AI Phone Integration 📞
**Goal:** Connect phone calls directly to an AI agent that can answer questions and book appointments.
**Implementation Strategy:**
- **Platforms:** **Retell AI**, **Bland AI**, or **Vapi.ai**.
- **Workflow:**
    1.  Provision a phone number from the AI provider.
    2.  Forward "After Hours" or "Overflow" calls from the main office line to this AI number.
    3.  **Integration:** The AI agent can be connected to GHL via webhooks to:
        -   Check calendar availability.
        -   Book appointments.
        -   Create contact records.

---

## ✍️ Automated Blog "No-Code" Strategy

**Goal:** Create auto-blogs for the site using AI without writing code.

### Idea 1: The "Set & Forget" Platform (Easiest)
Use a specialized AI-SEO tool like **Byword.ai** or **Koala.sh**.
- **How it works:** You connect your WordPress or CMS account. You give it a keyword (e.g., "Keratoconus symptoms"). It writes the article, finds images, and posts it directly to your site.
- **Cost:** Subscription based.

### Idea 2: Make.com Automation (Flexible)
Build a visual workflow in **Make (formerly Integromat)**.
1.  **Trigger:** A Google Sheet row is added with a "Topic".
2.  **Step 1 (Research):** Perplexity API searches the web for the latest info on the topic.
3.  **Step 2 (Write):** OpenAI (GPT-4) writes the blog post using the research.
4.  **Step 3 (Image):** DALL-E 3 or Unsplash API generates/finds a relevant image.
5.  **Step 4 (Post):** Make.com posts the final HTML content to the Website CMS API.

### Idea 3: GoHighLevel (GHL) Content AI
Since you use GHL, check their **"Content AI"** and **"Social Planner"** features.
- They are increasingly adding long-form content capabilities. You might be able to generate and schedule blogs directly within the platform you already pay for.

---

## 🌠 Future Wishlist

*   **Virtual Try-On for Frames:** Use AR (Augmented Reality) to let users see glasses on their face via webcam.
*   **Patient Portal Dashboard:** secure login to view prescriptions and upcoming appointments (requires deep integration with RevolutionEHR/Crystal PM).
*   **Video Testimonial Kiosk:** A dedicated iPad app for the office where happy patients can record a quick video review that instantly uploads to the site.
