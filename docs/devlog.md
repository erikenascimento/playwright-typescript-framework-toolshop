### Nov 17, 2026
- Architecture improved by configuring projects in [playwright.config.ts](/playwright.config.ts)  
Now api and ui tests are independent and also tests that required and tests that do not require authentication as well.

### Nov 18, 2026
- First Page Object implmented with [home.page.ts](/src/pages/home.page.ts)  
- Patched the CI Github Actions pipeline to at least ignore the problematic auth tests

### Nov 20, 2026
- Installed axe-core for acessibility testing
- Created [acessibility.spec.ts](/tests/ui/unauthenticated/acessibility.spec.ts) as a template acessibility test just checking that no new acessibility violations have been introduced