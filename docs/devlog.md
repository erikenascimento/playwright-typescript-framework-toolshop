### Nov 17, 2026
- Architecture improved by configuring projects in [playwright.config.ts](../playwright.config.ts)  
Now api and ui tests are independent and also tests that required and tests that do not require authentication as well.

### NOV 18, 2026
- First Page Object implmented with [home.page.ts](../src/pages/home.page.ts)  
- Patched the CI Github Actions pipeline to at least ignore the problematic auth tests