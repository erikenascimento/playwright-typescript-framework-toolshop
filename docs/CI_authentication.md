# Why the CI is ignoring tests that require authentication?

You might notice that in [playwright.ym](/.github/workflows/playwright.yml) the lines that define the Github Actions steps to run authenticated tests is commented out while only the other tests are set to run.  

This happens because the third party application website seems to be blocking the access to the login page by Github Actions API. This issue needs to be investigated but it goes beyond the scope of this project as of right now. Therefore, this project can be considered finished without this issue being investigated and resolved fully.

So, these test are not being run by Github Action's CI as they will always fail.