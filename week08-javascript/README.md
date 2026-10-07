# Week 8 — JavaScript Interaction Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors

1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

What elements did your script need to select, and why?

[My script needed to select the button for the difficulty panel, as well as the div element containing the panel information so that it can listen to a click event for the button, and so that it can change the state of the panel from being hidden to being displayed when the button is clicked.

The other elements that needed to be selected were the form and feedback sections, as well as the inputs inside the form so that when listening for a submit event in the form, it can use the values obtained from the form to return text in the feedback section by changing its text content dynamically by using the values that were submitted.]

### Decision 2 — Event Handling

What events did you listen for? Why were those events appropriate?

[The events I listened to were click and submit, these events were appropriate since the first button was a normal button that needed to be clicked to produce a result, and submit was used for the second button since it was a submit type button that is part of a form, and we needed the values from the form that was submitted to manipulate our feedback text content.]

### Decision 3 — State / DOM Update

How did the interface change after user action?

[After interacting with the difficulty button, the hidden panel information would then be revealed, displaying all of the panel content below the button, and would be hidden if the difficulty button would be pressed again.

The second interaction is after inputting values in the hike form and pressing the submit button, when pressed, the empty feedback section below the button would now display text content based on the values inputted in the form.]

### Decision 4 — Accessibility

How did you preserve or improve keyboard/accessibility behavior?

[I preserved keyboard/accessibility behavior by not changing the original HTML code, especially by having the default form element requirements, and by using javascript to manipulate aria elements.]

---

## Testing Notes

### Difficulty Disclosure

- Mouse: Mouse clicks work as intented to open and close the panel element
- Keyboard: Tabbing to button and using enter closes and opens panel as intended
- `aria-expanded`: aria expanded works as intended, switching between hidden and open as button is pressed
- Console errors: There are no console errors

### Planning Form

- Empty/invalid submission: Form does not submit if there is a missing value in the form
- Valid submission: Form submits as normal when all values are valid
- Keyboard: Tabbing, using enter, as well as arrow keys allows form use as intended
- Console errors: There are no console errors

---

## Live Site

[https://dtxrou.github.io/webworks-studio/week08-javascript/.]
