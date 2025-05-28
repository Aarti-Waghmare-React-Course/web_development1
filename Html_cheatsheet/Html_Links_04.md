🔗 HTML Links
The <a> (anchor) tag is used to create hyperlinks that link one page to another, or trigger actions like email and file downloads.

🧱 Basic Syntax
<a href="URL">Link Text</a>

🔤 Examples
<!-- 1. Basic Link -->
<a href="https://www.google.com">Visit Google</a>

<!-- 2. Open in New Tab -->
<a href="https://www.google.com" target="_blank">Open Google in new tab</a>

<!-- 3. Email Link -->
<a href="mailto:someone@example.com">Send Email</a>

<!-- 4. Phone Call Link -->
<a href="tel:+910000000000">Call Us</a>

<!-- 5. Internal Page Link -->
<a href="#section2">Go to Section 2</a>

<!-- 6. File Download -->
<a href="files/sample.pdf" download>Download PDF</a>


🎯 The target Attribute
Specifies where to open the linked document:
| Value     | Description                          |
| --------- | ------------------------------------ |
| `_self`   | *(default)* Opens in the same tab    |
| `_blank`  | Opens in a new tab or window         |
| `_parent` | Opens in the parent frame            |
| `_top`    | Opens in the full body of the window |


🌐 Absolute vs Relative URLs
| Type         | Example                                       |
| ------------ | --------------------------------------------- |
| **Absolute** | `<a href="https://www.google.com">Google</a>` |
| **Relative** | `<a href="html_images.html">HTML Images</a>`  |
🔸 Absolute URL: Full web address.
🔸 Relative URL: Path relative to the current page.


🖼️ Image as a Link
<a href="https://www.example.com">
  <img src="logo.png" alt="Visit Example" width="100">
</a>
✅ Clicking the image takes you to the specified link.


🔘 Button-Style Link
<a href="https://www.example.com"
   style="padding: 10px 15px; background: #007BFF; color: white;
          text-decoration: none; border-radius: 5px;">
  Visit Example
</a>
✅ Styled like a button using inline CSS.

💬 Tooltip on Hover
<a href="https://www.google.com" title="Go to Google homepage">
  Google
</a>
✅ title attribute shows tooltip text on hover — great for accessibility.


✅ Use links to navigate, connect, download, or trigger actions.
✅ Combine with attributes like target, download, title for better UX.
✅ Make them visually distinct and accessible.

