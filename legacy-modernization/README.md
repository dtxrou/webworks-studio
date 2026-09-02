# Southtown Plant Co. — Week 2 Inherited Client Site

## Scenario

WebWorks Studio has inherited this small-business website from a previous developer.

The site is functional, but the underlying front-end code reflects practices common in older websites. Your assignment is to modernize the code while preserving the client's content and general visual identity.

## Before You Edit

1. Keep an untouched copy of this starter project.
2. Put your working copy in:
   `webworks-studio/week02-build-better/`
3. Open the entire project folder in Visual Studio Code.
4. Preview `index.html` in a browser.
5. Resize the browser window and observe the existing behavior before you change anything.

## Important

The inherited site is intentionally **not responsive**.

Do not simply redesign the site from scratch. Refactor it according to the requirements in the Week 2 Canvas assignment.

## Preserve

- Client content
- General color palette and visual identity
- Working navigation and links
- Meaningful image alternative text
- Required site information

## Your Goal

Make the code easier for another developer to understand, maintain, and extend.

Refer to the Canvas assignment for all required technical work, GitHub workflow, and submission directions.

## Changed

Improved syntax usage, removed inline styles, and cleared uneccessary code.

Added Generic style rules, CSS Grid, Fkexbox, Media Queries, and responsive measurements.

## Why

This improves the codebases readability, and accessibility for site users and code editors.

## What I Intentionally Did Not Change

Some fixed width layouts remain for week 3, so that I have the original size that needs to be updated into a flexible responsive unit

## Next Sprint

The responsive problems i expect to address next week are fixed width issues, layout and spacing issues, and general page organization

## Problem

What failed in the week 2 layout were non responsive measurements.

## Solution

The responsive change I made was changing px to rem, and adding CSS Grid and Flexbox.

## Why

This choice was appropriate as it meets the modern responsiveness standards, and makes code easier to read.

## Identify

My major grid use was for section layouts where there needed to be grids inside of a grid

My major Flexbox use was for linearly placed elements such as the navigation bar

## Live URL

https://dtxrou.github.io/webworks-studio/legacy-modernization/
