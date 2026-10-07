"use strict";

/*
  WEBWORKS STUDIO — WEEK 8
  Hill Country Trail Guide

  Your job is to implement TWO behaviors:
  1. Accessible difficulty disclosure
  2. Hike-planning form validation and feedback

  Do not use inline onclick/onchange attributes.
  Use addEventListener().
  Test with mouse AND keyboard.
  Keep aria-expanded synchronized with the disclosure state.
*/

// ======================================================
// PART 1 — DIFFICULTY DISCLOSURE
// ======================================================

// TODO 1:
// Select the disclosure button and the panel it controls.
const difficultyButton = document.querySelector(`#difficulty-toggle`);
const difficultyPanel = document.querySelector(`#difficulty-panel`);

// TODO 2:
// Listen for activation of the button.
difficultyButton.addEventListener(`click`, () => {
  // TODO 3:
  // Determine whether the panel is currently open/closed.
  const isOpen = difficultyButton.getAttribute(`aria-expanded`) === "true";

  // TODO 4:
  // Show or hide the panel.
  difficultyPanel.hidden = isOpen;

  // TODO 5:
  // Update aria-expanded to match the visible state.
  difficultyButton.setAttribute(`aria-expanded`, String(!isOpen));
});

// ======================================================
// PART 2 — HIKE PLANNING FORM
// ======================================================

// TODO 6:
// Select the form and the feedback region.
const hikeForm = document.querySelector(`#hike-form`);
const formFeedback = document.querySelector(`#form-feedback`);

// TODO 7:
// Listen for form submission.
hikeForm.addEventListener(`submit`, (event) => {
  // TODO 8:
  // Preserve native HTML validation.
  // If the form is invalid, allow/report useful validation behavior
  // and DO NOT display success feedback.
  if (!hikeForm.checkValidity()) {
    return;
  }

  // TODO 9:
  // If the form is valid, prevent a real server submission.
  event.preventDefault();

  // TODO 10:
  // Read the values you need from the form.
  const trail = document.querySelector(`#trail`).value;
  const experience = document.querySelector(`#experience`).value;
  const hours = document.querySelector(`#hours`).value;

  // TODO 11:
  // Display useful confirmation/feedback in #form-feedback.
  // The message should help the user understand what they selected.
  formFeedback.textContent = `Plan ready: ${trail} for ${experience} for ${hours} hours. Check official conditions before you leave.`;
  console.log(formFeedback.textContent);
});

// TODO 12:
// Test:
// - empty form
// - partially completed form
// - valid form
// - keyboard-only interaction
// - browser console
