# Link Sharing App

## 🚀 Overview

**Link Sharing App** is a full-stack web application that allows users to create, manage, and share their personalized links built using next.js.

- **Protected Routes:** All routes (login, create-account, links, profile-details) are protected except the **preview** route, which allows public viewing of a user’s shared links and details.
- **Live Demo:** Visit [www.moustafa.com](https://www.moustafa.com) to see it live.

---

## 🛠️ Features

- 🔑 **User Authentication & Authorization:** Secure login and account creation via Supabase.
- 📝 **Link Management:**
  - Create, read, update, and delete links.
  - Reorder links via drag and drop.
  - Real-time link previews in a mobile mockup.
  - Form validations for empty fields or incorrect URL patterns.
- 👤 **Profile Management:**
  - Add profile details (profile picture, first name, last name, email).
  - Receive form validations for missing first or last names.
- 📄 **Public Preview & Sharing:**
  - Preview the user’s profile and copy the preview link to the clipboard.
  - Public users can view shared links without logging in.
- 📱 **Responsive Design:** Optimal layout adjustments for all device sizes.
- 🖱️ **Interactive UI:** Hover and focus states for all interactive elements.
- 💾 **Database Integration:**
  - Save profile and link details to a Supabase database.
  - Utilize foreign keys and table joins for efficient data relations.
- 🧩 **Bonus Features:**
  - Full-stack implementation with Supabase backend.
  - Authentication and protected routes for enhanced security.

---

## 🧩 Tech Stack

- **Frontend:** React, TypeScript, Next.js
- **Backend & Database:** Supabase (Authentication, Storage, Database)
- **State Management:** React Query
- **Styling:** Styled Components
- **Forms & Validations:** React Hook Form, React Select
- **Drag & Drop:** React DnD Kit
- **Testing:** Jest, React Testing Library, User Events, Mocking
- **Middleware:** Next.js Middleware for route protection and session management

---

## 🚀 Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the website on your device**

   ```bash
   npm run dev
   ```
