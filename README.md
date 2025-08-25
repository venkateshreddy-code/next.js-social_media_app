
# AryanConnect | Next.js Social Media Platform

**Live Demo:** [https://next-js-social-media-app-postgre.vercel.app/](https://next-js-social-media-app-postgre.vercel.app/)
**GitHub Repository:** [venkateshreddy-code/next.js-social\_media\_app](https://github.com/venkateshreddy-code/next.js-social_media_app)

---

## Overview

**AryanConnect** is a full-featured social media platform built using **Next.js**, designed with modern user expectations in mind. It delivers seamless authentication, intuitive content creation, responsive design, and real-time interaction capabilities—all powered by a serverless, scalable stack.

---

## Features

* **Secure Authentication**

  * Google OAuth and Email/Password with 6-digit OTP (using Clerk)
  * Manage linked devices and delete accounts

* **Posts & Engagement**

  * Rich posts with text and media via UploadThing
  * Like, comment, follow/unfollow interactions
  * Suggested user recommendations for discovery

* **Notifications**

  * Real-time-like updates for likes, comments, and follows

* **User Profiles**

  * Edit profile, browse post history and likes
  * Fully responsive with Light & Dark mode switch

* **Frontend & UX**

  * Styled with Tailwind CSS and ShadCN UI
  * Highly responsive and accessible interface

* **Backend & Deployment**

  * API routes via Next.js, using Prisma with Neon (PostgreSQL)
  * Hosted on Vercel with CI/CD setup

---

## Tech Stack

![Tech Stack](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148268/stack_og7bmo.png)

| Layer        | Technology                                           |
| ------------ | ---------------------------------------------------- |
| **Frontend** | Next.js (App Router), React, Tailwind CSS, ShadCN UI |
| **Backend**  | Next.js API Routes                                   |
| **Auth**     | Clerk (Google OAuth, Email + OTP)                    |
| **Database** | Neon (PostgreSQL), Prisma ORM                        |
| **Uploads**  | UploadThing                                          |
| **Deploy**   | Vercel                                               |

---

## Visual Highlights

### Home Page – Light & Dark

* **Dark Mode:**
  ![Dark Mode](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148215/Screenshot_2025-08-25_at_2.56.26_PM_yybf93.png)

* **Light Mode:**
  ![Light Mode](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148174/Screenshot_2025-08-25_at_2.54.44_PM_foojvx.png)

---

### Post Interaction

* **Post by Sam Smith:**
  ![Post](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148399/Screenshot_2025-08-25_at_2.59.10_PM_kwcbib.png)

* **Liked & Commented by Venkatesh Reddy:**
  ![Engagement](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148530/Screenshot_2025-08-25_at_3.01.09_PM_zzbaqu.png)

---

### User Profiles

* **Sam Smith’s Profile:**
  ![Sam Smith Profile](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148530/Screenshot_2025-08-25_at_3.01.09_PM_zzbaqu.png)

* **Venkatesh Reddy’s Profile (viewed from Sam Smith):**
  ![Venkatesh Profile](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148714/Screenshot_2025-08-25_at_3.04.42_PM_j68rpd.png)

---

### Notifications

* **Notifications for Sam Smith when Venkatesh Reddy interacts:**
  ![Notifications](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148863/Screenshot_2025-08-25_at_3.06.45_PM_rc3d1l.png)

---

### Deployment

* **Hosted on Vercel with seamless deployment flow:**
  ![Deployment](https://res.cloudinary.com/dlo8jlx3k/image/upload/v1756148937/Screenshot_2025-08-25_at_3.08.20_PM_bfzfri.png)

---

## Getting Started (Setup Guide)

```bash
git clone https://github.com/venkateshreddy-code/next.js-social_media_app.git
cd next.js-social_media_app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app locally.

---

## API Reference

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/posts`         | Create a new post           |
| GET    | `/api/posts`         | Fetch feed/timeline posts   |
| DELETE | `/api/posts/:id`     | Delete your own post        |
| POST   | `/api/likes`         | Like or unlike a post       |
| POST   | `/api/comments`      | Add a comment to a post     |
| GET    | `/api/notifications` | Retrieve your notifications |
| POST   | `/api/follow`        | Follow or unfollow a user   |

---

## Contributing

Contributions are highly appreciated!

* Fork the repository
* Work on your feature branch
* Submit a pull request with clear changes and context

---

## Roadmap

* Add real-time functionality (WebSockets or Pusher)
* Improve search capabilities (hashtags/users)
* Add direct messaging
* Enable video uploads and media editing
* Integrate infinite scroll and caching
* Establish full test coverage (E2E + unit tests)

---

## Connect with Me

**Venkatesh Reddy Ningam**

* GitHub: [@venkateshreddy-code](https://github.com/venkateshreddy-code)
* LinkedIn: [linkedin.com/in/venkateshreddyningam](https://www.linkedin.com/in/venkateshreddyningam)

---

> **AryanConnect** demonstrates a strong command of modern full-stack development with Next.js, combining security, performance, and clean design to deliver a scalable social media experience.

---


