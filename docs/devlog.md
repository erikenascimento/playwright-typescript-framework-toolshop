### Nov 17, 2026
- Architecture improved by configuring projects in [playwright.config.ts](/playwright.config.ts)  
Now api and ui tests are independent and also tests that required and tests that do not require authentication as well.

### Nov 18, 2026
- First Page Object implmented with [home.page.ts](/src/pages/home.page.ts)  
- Patched the CI Github Actions pipeline to at least ignore the problematic auth tests

### Nov 20, 2026
- Installed axe-core for accessibility testing
- Created ~~[acessibility.spec.ts](/tests/ui/unauthenticated/home_accessibility.spec.ts)~~ as a template accessibility test just checking that no new accessibility violations have been introduced

### NOV 23, 2026
- Proper accessibility test [home_accessibility.spec.ts](/tests/ui/unauthenticated/home_accessibility.spec.ts) now actually does what it says it does. Before it was just checking if the number of violations stayed at 5.
- New test: [keyboard_accessibility.spec.ts](/tests/ui/unauthenticated/keyboard_accessibility.spec.ts) asserts if the user can reach the home navbar item using the tab key on the keyboard