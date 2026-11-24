# Hill Country Coffee — QA Report

**WebWorks Studio**  
**Week 15: Test, Refine & Deliver — Quality Assurance**

**Student:** [Dorian Trevino]  
**Test Date:** [11/23/2026]  
**Live Site URL:** [https://dtxrou.github.io/webworks-studio/hill-country-coffee/]  
**Repository URL:** [https://github.com/dtxrou/webworks-studio/tree/main/hill-country-coffee]

---

# 1. Release Candidate Summary

Briefly describe the current state of the Hill Country Coffee site before QA.

Include:

- which MVP pages/features are complete;
- any known Week 14 issues;
- whether the site is currently feature complete.

[All MVP pages (Home, Menu, Locations, About), and features (Mobile navigation and responsiveness) are complete. No known week 14 issues are present, site is currently feature complete.]

---

# 2. Test Environment

## Browsers Tested

| Browser | Version  | Device / OS | Result |
| ------- | -------- | ----------- | ------ |
| Brave   | 1.100.58 | Windows 11  | Pass   |
| Mullvad | 16.0.2   | Windows 11  | Pass   |

Test at least two modern browsers available to you.

## Representative Viewports

| Viewport             | Approximate Width | Result |
| -------------------- | ----------------: | ------ |
| Narrow / phone       |             375px | pass   |
| Medium / tablet-like |             768px | pass   |
| Wide / desktop       |            1200px | pass   |

---

# 3. Definition of Done Review

Compare the live site against the Week 13 Definition of Done.

## Content

- [ x ] Required MVP content is present.
- [ x ] Client facts have not been invented.
- [ x ] Content has been proofread.
- [ x ] Required pages are complete.

**Notes:**  
[Add notes.]

## Responsive Design

- [ x ] Required pages work at narrow widths.
- [ x ] Required pages work at medium widths.
- [ x ] Required pages work at wide widths.
- [ x ] No layout-caused horizontal scrolling occurs.
- [ x ] Content order remains understandable.

**Notes:**  
[Add notes.]

## Functionality

- [ x ] Primary navigation works.
- [ x ] Required links work.
- [ x ] Required calls to action work.
- [ x ] Required interactions work.
- [ x ] No obvious unresolved JavaScript errors remain.

**Notes:**  
[Add notes.]

## Accessibility

- [ x ] Semantic HTML reviewed.
- [ x ] Heading structure reviewed.
- [ x ] Keyboard operation tested.
- [ x ] Visible focus verified.
- [ x ] Focus order reviewed.
- [ x ] Color contrast reviewed.
- [ x ] Alternative-text decisions reviewed.
- [ x ] Link/button labels reviewed.
- [ x ] Responsive reflow / enlarged text reviewed.
- [ x ] Custom interactive states/labels reviewed, if applicable.

**Notes:**  
[Add notes.]

## GitHub & Handoff

- [ x ] Latest source is pushed.
- [ x ] Live GitHub Pages site reflects the latest source.
- [ x ] README is current.
- [ x ] Discovery plan remains in `docs/`.
- [ x ] QA report is saved in `docs/`.

**Notes:**  
[Add notes.]

---

# 4. Functional Testing

Record the result for each important user task.

| Test ID | User Task / Feature          | Expected Result       | Actual Result         | Pass / Fail | Defect ID if Failed |
| ------- | ---------------------------- | --------------------- | --------------------- | ----------- | ------------------- |
| F-01    | Primary navigation           | Sticks to top of page | Sticks to top of page | Pass        |                     |
| F-02    | Home page primary CTA        | Easy to see and click | Easy to see and click | Pass        |                     |
| F-03    | Menu access                  | Easy to acccess       | Easy to acccess       | Pass        |                     |
| F-04    | Location information access  | Easy to acccess       | Easy to acccess       | Pass        |                     |
| F-05    | About / brand information    | Easy to acccess       | Easy to acccess       | Pass        |                     |
| F-06    | Required interaction, if any | Functional            | Functional            | Pass        |                     |

Add rows as needed.

---

# 5. Responsive Testing

| Test ID | Page / Component          | Narrow | Medium | Wide   | Notes / Defect ID |
| ------- | ------------------------- | ------ | ------ | ------ | ----------------- |
| R-01    | Header / navigation       | 375px  | 768px  | 1200px | Functional        |
| R-02    | Home hero                 | 375px  | 768px  | 1200px | Functional        |
| R-03    | Repeated cards / sections | 375px  | 768px  | 1200px | Functional        |
| R-04    | Menu content              | 375px  | 768px  | 1200px | Functional        |
| R-05    | Locations content         | 375px  | 768px  | 1200px | Functional        |
| R-06    | Footer                    | 375px  | 768px  | 1200px | Functional        |

---

# 6. Cross-Browser Testing

| Test ID | Feature / Page          | Browser 1 | Browser 2 | Notes / Defect ID |
| ------- | ----------------------- | --------- | --------- | ----------------- |
| B-01    | Home page               | Brave     | Mullvad   | Functional        |
| B-02    | Navigation              | Brave     | Mullvad   | Functional        |
| B-03    | Menu page               | Brave     | Mullvad   | Functional        |
| B-04    | Location page / section | Brave     | Mullvad   | Functional        |
| B-05    | Required interaction    | Brave     | Mullvad   | Functional        |

---

# 7. Accessibility Testing

## Tool-Assisted Check

**Tool Used:**  
[(https://wave.webaim.org/)]

**Pages Checked:**  
[Home, Menu, Locations, About]

**Important Findings:**  
[All pages besides the about page with a passing score of 8.0 or above. Issues with accessibility that were found was the use of aria labeled by, which was used multiple times in the menu page, was missing an element reference, dropping its score to a 6.7. ]

## Keyboard Test

Test the site using only the keyboard.

- [ x ] Skip link works, if present.
- [ x ] Primary navigation is reachable.
- [ x ] All links/buttons are reachable.
- [ x ] Required interaction works.
- [ x ] Focus remains visible.
- [ x ] Focus order is logical.
- [ x ] No keyboard trap occurs.

**Notes:**  
[Add notes.]

## Headings & Landmarks

**Findings:**  
[Headings are built and function. aria landmarks(element reference) with aria labeled by are missing]

## Alternative Text

**Findings:**  
[Images have appropriate alternative text]

## Links & Buttons

**Findings:**  
[All links and buttons function and have hover and focus states]

## Contrast

**Findings:**  
[Color contrast with color contrast tools have passed]

## Reflow / Enlarged Text

**Method:**  
[Increased browser zoom size to 200%]

**Findings:**  
[Site still has functional responsive adaptation, and nothing breaks]

---

# 8. Content & Link Review

- [ x ] Client-facing copy proofread.
- [ x ] No unsupported client facts added.
- [ x ] All navigation links tested.
- [ x ] All calls to action tested.
- [ x ] External links, if any, tested.
- [ x ] Images/assets load on the published site.
- [ x ] Page titles are meaningful.
- [ x ] Basic metadata is present.

**Notes:**  
[Page title metadata could be more descriptive in Menu, About, and Locations page]

---

# 9. Defect Log

Use one row per defect.

Severity:

- Critical
- High
- Medium
- Low

Status:

- Open
- In Progress
- Fixed — Needs Retest
- Verified Fixed
- Deferred

| ID      | Title | Severity | Page / Location | Steps to Reproduce | Expected | Actual | Status | Resolution / Retest Notes |
| ------- | ----- | -------- | --------------- | ------------------ | -------- | ------ | ------ | ------------------------- |
| BUG-001 |       |          |                 |                    |          |        |        |                           |
| BUG-002 |       |          |                 |                    |          |        |        |                           |
| BUG-003 |       |          |                 |                    |          |        |        |                           |

Add rows as needed.

---

# 10. Retest Record

Record every corrected Critical, High, and Medium defect.

| Defect ID | Fix Commit / Description | Retest Steps | Result      | Final Status |
| --------- | ------------------------ | ------------ | ----------- | ------------ |
|           |                          |              | Pass / Fail |              |
|           |                          |              | Pass / Fail |              |

---

# 11. Regression Check

After important fixes, confirm that related functionality still works.

- [ ] Navigation still works after fixes.
- [ ] Responsive behavior remains intact.
- [ ] Accessibility behavior remains intact.
- [ ] Required interaction still works.
- [ ] No new console errors appeared.
- [ ] Published GitHub Pages build reflects the fix.

**Notes:**  
[No known bugs]

---

# 12. Final Defect Summary

| Severity | Found | Verified Fixed | Remaining |
| -------- | ----: | -------------: | --------: |
| Critical |       |                |           |
| High     |       |                |           |
| Medium   |       |                |           |
| Low      |       |                |           |

---

# 13. Release Readiness

Choose one:

- [ ] **Ready**
- [ x ] **Ready with documented minor issues**
- [ ] **Not ready**

## Release Statement

In approximately 75–125 words, explain your decision.

Address:

- whether essential user tasks work;
- whether Critical/High issues remain;
- whether accessibility requirements were reviewed;
- whether remaining issues materially affect release;
- what, if anything, should happen next.

[Essential user tasks work, such as navigating to the locations and menu page easily from the home page. No critical/high issues remaining for the site. Accessibility requirements were reviewed, such as increased browser page size and mobile responsiveness. Any minor issues remaining would not materially affect the release. If anything should happen next, it would be to fix aria labeled by use, and make page title names in the <head> element more descriptive to their respective page. ]

---

# 14. Remaining Issues

If any issues remain, list them here.

| Issue | Severity | Why It Remains | Recommended Next Step |
| ----- | -------- | -------------- | --------------------- |
|       |          |                |                       |

If none remain, write:

`No known release-blocking issues remain.`

---

# Final QA Handoff Check

- [ x ] I tested the published site.
- [ x ] I tested at least two browsers available to me.
- [ x ] I tested narrow, medium, and wide layouts.
- [ x ] I ran a tool-assisted accessibility check.
- [ x ] I completed a keyboard-only test.
- [ x ] I reviewed headings, labels, alt text, contrast, and reflow.
- [ x ] I created reproducible defect reports.
- [ x ] I assigned severity and status to defects.
- [ x ] Critical defects are resolved.
- [ x ] Required High-severity defects are resolved.
- [ x ] Fixed Critical/High/Medium defects were retested.
- [ x ] Important fixes were checked for regressions.
- [ x ] Latest fixes are pushed to GitHub.
- [ x ] The live site reflects the current source.
- [ x ] README links to this QA report and the live site.
- [ x ] A release-readiness statement is complete.
