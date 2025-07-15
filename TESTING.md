# Project Test Plan

**Project:** `joaoptgrilo.github.io`
**Version:** 1.0
**Author:** QA Lead

## 1. Introduction & Purpose

This document outlines the Quality Assurance (QA) and testing strategy for the personal portfolio website. The primary goal is to ensure the delivery of a high-quality, reliable, and bug-free product across all supported environments. This plan establishes a "Shift-Left" approach to quality, integrating testing early and throughout the development lifecycle.

## 2. Testing Strategy

Our strategy is built on a foundation of automated checks to ensure consistency and speed, supplemented by targeted manual testing for aspects that automation cannot easily cover.

- Automation First: Repetitive and critical-path tests are automated to provide a fast, reliable safety net against regressions.
- CI/CD Quality Gates: All code pushed to the `main` branch must pass our automated test suite before it can be built and deployed. This is a non-negotiable quality gate.
- Risk-Based Manual Testing: Manual testing focuses on exploratory testing, usability, and complex user interactions that are inefficient to automate.
- Continuous Improvement: This plan is a living document and will be updated as the project and our processes evolve.

## 3. Types of Testing

### 3.1. Unit & Integration Testing (Developer Responsibility)

- Description: Developers are responsible for writing unit and integration tests for their components and functions to ensure individual pieces of code work as expected.
- Framework: Jest / React Testing Library (Future consideration).
- Status: Not yet implemented for this project, but a goal for future complex features.

### 3.2. End-to-End (E2E) Testing (Automated)

This is the core of our automated QA strategy.

- Description: We use Playwright to simulate real user interactions in a browser, testing the application as a whole from the user's perspective.
- Framework: **Playwright**
- Execution: These tests are automatically executed by the GitHub Actions CI/CD pipeline on every push to `main`.
- Current Scope (`[TEST] Develop Foundational E2E Test Suite`):
  - **Smoke Test:** Verifies that the homepage loads correctly and the main title is visible.
  - **Core Functionality Test:**
    - Confirms that the Light/Dark theme switcher works.
    - Confirms that the CV download button initiates a download for both `en` and `pt` versions.
  - **Link Integrity Test:** Programmatically crawls the homepage to find all `<a>` tags and verifies that they do not point to broken links (4xx or 5xx errors). It intelligently skips external domains known to block automated checks (e.g., LinkedIn).

### 3.3. Manual & Exploratory Testing

- Description: Performed by QA or the developer before merging a new feature. This involves testing outside of pre-defined scripts to discover usability issues, visual glitches, and edge-case bugs.
- Scope:
  - Visual verification of new UI components against design mockups.
  - Testing on multiple physical devices and browsers if needed.
  - Assessing the overall "feel" and user experience of a new feature.

## 4. Testing & Deployment Environments

The project utilizes two primary production environments, both deployed from the same `main` branch commit via our CI/CD pipeline.

1. **Vercel (Primary):**
   - **Build Type:** Server-Side Rendered (SSR) / Next.js standard build.
   - **Purpose:** The primary, fully-featured version of the site. It supports all Next.js features, including middleware for internationalization.
   - **Verification:** Post-deployment checks must be performed on the main Vercel URL.

2. **GitHub Pages (Static Fallback/Host):**
   - **Build Type:** Static HTML Export (`next export`).
   - **Purpose:** A static-only version of the site. Middleware and other server-side features do not run here. It serves as a robust, globally distributed version of the site.
   - **Verification:** Post-deployment checks must be performed on the `joaoptgrilo.github.io` URL.

## 5. Defect Management

For the scope of this project, defects found during development are expected to be addressed immediately by the developer on the feature branch.

- Bug Reporting: Defects found by automated tests will cause the CI/CD pipeline to fail, immediately notifying the team.
- Triage: The developer responsible for the code change is responsible for fixing the bug to allow the pipeline to pass.
- Verification: The fix is verified by re-running the automated test suite.
  