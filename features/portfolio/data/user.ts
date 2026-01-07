import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Nithish",
  lastName: "Gowda",
  displayName: "Nithish Gowda",
  username: "nithish",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "Bangalore, Karnataka, India",
  phoneNumber: "ODMxMDM3MDU4Mw==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bmlpaXRoaXNoQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://nithish.app",
  jobTitle: "Junior Frontend Developer",
  jobs: [
    {
      title: "Junior Frontend Developer",
      company: "",
      website: "",
    },
  ],
  about: `
- **Design Engineer** with 5+ years of experience, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
`,
  avatar: "/nithish.jpg",
  ogImage: "",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "nithish",
    "nithish gowda",
  ],
  dateCreated: "2025-01-06", // YYYY-MM-DD
} satisfies User;
