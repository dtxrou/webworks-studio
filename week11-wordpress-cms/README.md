# Week 11: Build for Content — WordPress & CMS Fundamentals

## CMS Project Overview

**Client:** Southtown Community Arts  
**Role:** Junior Web / CMS Specialist  
**Week:** 11 — Build for Content: WordPress & CMS Fundamentals

Briefly summarize what you configured in WordPress.

[I configured a home, about, programs, and post pages with client provided content. The pages structure is assembled using wordpress pre designed layouts.]

---

## WordPress Site Access

**Site URL or instructor-access information:**  
[https://susane40.sg-host.com/]

---

# Content Architecture

I organized the supplied client content by using pre designed wordpress templates that would match the provided client content properly.

## Pages

List the Pages you created and briefly explain why they belong as Pages.

- **Home:** [The Southtown Community Arts page belongs as a brief opener to Southtown Community Arts, and the programs it has to offer]

- **Programs:** [The Programs page is a more in depth page for users to learn about the programs available and what they are about]

- **About:** [The About Southtown Community Arts page belongs as a brief statement and values section to strengthen the connection to users and guide them to the programs page]

## Post

**News Post:** [Fall Workshop Registration Opens September 3]

Explain why this content belongs as a Post rather than a Page.

[This content belongs as a post since it will not be static information, and may be updated over time to display new relevant information]

---

# Reusable Pattern

**Pattern Name:**  
[Southtown - Program Callout]

**Used For:**  
[This repeated conent structure is used for call to action sections]

**Why a Pattern Was Appropriate:**  
[This content should be reusable as the CTA should be consistent to the site content, especially since there is a CTA section in most of the site pages]

---

# Site-Wide Structure

Describe the required Site Editor change you completed.

**Change:**  
[The change I completed is adding a global site footer]

**Where It Was Made:**  
[This change was made in the footer block of the pages]

**Why It Belongs at the Site Level:**  
[This should affect multiple pages since a site footer should remain consistent across the pages. This helps tie the pages together, and ensure the user can view contact information for Southtown Community Arts]

---

# Client Update Test

Complete `CLIENT-UPDATE.md` after the primary site build, then document the result here.

## Supplied Update

Briefly identify the client change you completed.

[Changes the Community Workshops description in the Programs page]

## Where I Made the Update

What WordPress content-editing area did you use?

[I used the WordPress content-editing in the paragraph area of the Community Workshops Description]

## Structure Check

Did you need to modify the header, footer, navigation, template, template part, or reusable pattern? Explain.

[I did not need to modify any of the following, all I simply needed to do was replace the original text with the new supplied text]

## Maintainability Result

Explain how this update demonstrates that routine content can change without rebuilding the site's global structure.

[This update demonstrates that routine content can change without rebuilding the sites global structure by not needing to modify any of the page's structure. You can make simple content changes without impacting the pages elements and overall layout]

---

# Accessibility & Responsive Checks

Document the quality checks you completed.

## Headings

[I verified logical heading structure by following client content structure]

## Images

[I handled meaningful alternative text by using WordPress default alt values, and adding descriptive alt text to images that I added]

## Links & Buttons

[I checked link/buttons by checking if they work properly, match supplied client content, and by using keyboard navigation]

## Keyboard

[I tested keyboard navigation and visible focus states by tabbing through the page and using enter to tap on links or buttons]

## Responsive Layout

[I checked narrow-screen behavior by shrinking my browser size, and by using the browser and WordPress tools to display the site at various mobile ratios]

---

# Evidence

Replace the files in the `evidence/` folder with your own screenshots using the exact required filenames.

## Home Page

![Completed Home page](evidence/home-page.png)

## Programs Page

![Completed Programs page](evidence/programs-page.png)

## News Post

![Published News post](evidence/news-post.png)

## Primary Navigation

![Primary site navigation](evidence/navigation.png)

## Reusable Pattern

![Reusable pattern in WordPress](evidence/reusable-pattern.png)

## Narrow-Screen / Mobile View

![Responsive WordPress page at a narrow viewport](evidence/mobile-page.png)

---

# Developer Handoff

Keep each response concise and specific to this project.

## CMS Choice

Why is WordPress an appropriate solution for Southtown Community Arts?

[WordPress is an appropriate solution for Southtown Community Arts by allowing them to easily create pre-structured pages with their own content. It is also a good solution as they can easily update the post section without extensive knowledge of WordPress]

## Editable Content

What information should Southtown Community Arts staff be able to update routinely?

[The Southtown Community Arts staff should be able to update the post section information routinely. The post is easy to update at any moment and will not give less experienced WordPress users any trouble]

## Reusable Structure

What site element did you make reusable or site-wide, and why?

[The site element I made reusable was the page's CTA since it is a repeating element among the pages and it is a good idea to have consistent styling this way. I also used the footer section site-wide to maintain site style consistency]

## Client Protection

What design or architecture decision helps the site remain consistent when staff members make routine updates?

[Using a post section for updating information helps keep the site remain the same by having static page information separate from content that would be updated in the future. Having similar page layouts and global elements helps keep this consistency among the pages, even if there is a big content change]

---

# CMS Reflection

What kinds of websites or client situations benefit from a CMS such as WordPress? What does a CMS make easier, and what tradeoffs does it introduce compared with a hand-coded static site?

[Static webstites and clients that need an updatable news post benefit from a CMS such as WordPress. A CMS makes page structuring and layout easy to use with their pre-made page layouts and content sections, you can change the images as needed or even generate new ones with the use of AI. The tradoffs it introduces when compared to a hand-coded static site are the loss of complete styling freedom, you will also tradeoff fluid page structuring since CMS's use prebuilt layouts and fixed block patterns and styling limit the placing of elements]

---

# Final Handoff Check

- [ ] Home, Programs, and About are published as Pages.
- [ ] The supplied announcement is published as a Post.
- [ ] Primary navigation works in the required order.
- [ ] One meaningful reusable Pattern is present.
- [ ] The required site-wide structure adjustment is complete.
- [ ] I completed the supplied `CLIENT-UPDATE.md` request after the main build.
- [ ] The client update did not require unnecessary global-structure changes.
- [ ] Headings are logical.
- [ ] Informative images have meaningful alternative text.
- [ ] Link and button labels are understandable.
- [ ] Keyboard focus is visible.
- [ ] Narrow-screen behavior was checked.
- [ ] All six evidence images display correctly in this README.
- [ ] All four Developer Handoff responses are complete.
- [ ] I committed and pushed this Week 11 handoff folder.
