Week 1 – JavaScript Basics
What is programming?
Variables (let, const)
Data types
Operators
if, else, switch
Loops (for, while)
Functions
Practice problems

Mini Project: Build a simple calculator in JavaScript.

Week 2 – Intermediate JavaScript
Arrays
Objects
String methods
Array methods (map, filter, find, forEach)
Arrow functions
Destructuring
Spread (...) and Rest operators
Template literals

Mini Project: Create a student management system using arrays and objects.

Phase 2: JavaScript for Automation (Week 3)

These topics appear everywhere in Playwright.

Modules (import / export)
Scope
Callbacks
Promises
async / await
Error handling (try / catch)
Reading JSON files
Reading environment variables

Mini Project: Read login credentials from a JSON file.

Phase 3: Web Fundamentals (Week 4)

Before automating a website, you need to understand how web pages are built.

HTML basics
CSS selectors
IDs and classes
XPath
Browser DevTools
DOM (Document Object Model)

Mini Project: Inspect elements and identify the correct selectors.

Phase 4: Git & GitHub (Week 5)

You'll use these every day in automation projects.

Git basics
Repository creation
Clone
Commit
Push
Pull
Branches
Merge
Pull Requests
.gitignore

Mini Project: Maintain your learning repository with daily commits.

Phase 5: Playwright Basics (Week 6)

Now we start Playwright.

Install Playwright
Project structure
First test
Running tests
Understanding page
Test lifecycle
Headed vs headless mode

Example:

import { test, expect } from '@playwright/test';

test('My First Test', async ({ page }) => {
    await page.goto('https://example.com');
});
Phase 6: Locators (Week 7)

Locators are the foundation of reliable automation.

You'll learn:

getByRole()
getByLabel()
getByText()
getByPlaceholder()
locator()
CSS selectors
XPath (when needed)
Chaining locators
Filtering locators

Mini Project: Automate a login page.

Phase 7: User Actions (Week 8)

Common interactions:

Click
Fill
Type
Checkboxes
Radio buttons
Dropdowns
File upload
Keyboard
Mouse actions
Hover
Drag and drop

Mini Project: Automate a registration form.

Phase 8: Assertions & Waits (Week 9)

A test isn't complete without validation.

You'll learn:

expect()
Text assertions
URL assertions
Visibility checks
Element counts
Auto-waiting
Explicit waits (and when to avoid them)

Mini Project: Validate a successful login.

Phase 9: Framework Design (Week 10)

Write maintainable automation.

Topics include:

Page Object Model (POM)
Reusable helper functions
Test data management
Fixtures
Hooks (beforeEach, afterEach)
Configuration
Environment variables

Mini Project: Build a reusable login framework.

Phase 10: Advanced Playwright (Week 11)

Real-world scenarios:

Multiple browser tabs
Frames and iframes
Alerts
Network interception
API testing
Authentication reuse
Parallel execution
Retry logic
Screenshots and videos

Mini Project: End-to-end automation for an e-commerce workflow.

Phase 11: CI/CD (Week 12)

Run tests automatically.

Topics:

GitHub Actions
Running Playwright in CI
HTML reports
JUnit reports
Trace Viewer
Debugging failed tests

Mini Project: Configure GitHub Actions so your Playwright tests run automatically whenever you push code.