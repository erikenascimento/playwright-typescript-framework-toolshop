# Best Practices
This document will collect some important Playwright Best practices which I constantly need to consult. This way they will be more accessible and organized.

### Recommended built-in locators:
These locators are presentend in order, the ones in the top should be used whenever possible and only go down on the list when the options at the top are not available.  
- `page.getByRole()` to locate by explicit and implicit accessibility attributes. 
- `page.getByLabel()` to locate a form control by associated label's text.  
- `page.getByPlaceholder()` to locate an input by placeholder.  
- `page.getByText()` to locate by text content.  
- `page.getByAltText()` to locate an element, usually image, by its text alternative.  
- `page.getByTitle()` to locate an element by its title attribute.  
- `page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).  
- `page.locator()` for CSS and XPath only as the very last resort.  