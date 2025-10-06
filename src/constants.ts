import axios from "axios";

export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/v1"
    : "https://nsaproject.onrender.com/v1";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const COLOR_INDICATORS = {
  0: {
    foreground: "#B42318",
    background: "#FEF3F2",
  },
  1: {
    foreground: "#B54708",
    background: "#FFFAEB",
  },
  2: {
    foreground: "#344054",
    background: "#F2F4F7",
  },
};

export const ticketSupportQuickActions = [
  {
    command: "Log ticket for password reset request from",
    issue: "user unable to access their account.",
  },
  {
    command: "Create ticket for system slowness reported by",
    issue: "employee during daily operations.",
  },
  {
    command: "Raise ticket for internet connectivity issue in",
    issue: "with the main office network.",
  },
  {
    command: "Log ticket for printer not responding in",
    issue: "the administration department.",
  },
  {
    command: "Create ticket for software installation request from",
    issue: "a new staff member onboarding today.",
  },
  {
    command: "Raise ticket for email delivery failure reported by",
    issue: "user unable to send or receive emails.",
  },
] as const;
