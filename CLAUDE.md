# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Professional portfolio for Shady Attia, a Full Stack Developer. The project uses a "Modern Technical Professional" brand with a high-contrast dark-mode aesthetic ("Electric Midnight").

## Tech Stack
- **Framework:** Next.js 16+ (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Architecture
- **Content-Driven:** Most site content (profile, skills, experience, projects) is stored in `data/projects.json` for easy maintenance.
- **Page Structure:** 
    - `/` (Home): Single-page layout combining Hero, SkillMatrix, ExperienceTimeline, and ProjectShowcase.
    - `/projects/[slug]`: Dynamic route for project case studies.
    - `/cv`: Web-optimized resume page.
- **Design System:** Managed via CSS variables in `app/globals.css` and Tailwind configuration.

## Common Commands
- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Start:** `npm run start`
- **Lint:** `npm run lint`

## Development Guidelines
- **Styling:** Use the custom CSS variables (`--accent-blue`, `--secondary-bg`, etc.) defined in `globals.css` for consistency.
- **Animations:** Use `framer-motion` for entrance and hover animations.
- **Images:** Always use `next/image` for optimization.
- **Data:** When adding new projects or experience, update `data/projects.json` first.
