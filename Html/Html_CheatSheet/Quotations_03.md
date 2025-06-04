📝 HTML Quotation and Citation Elements
These tags are used to define quotations, citations, abbreviations, contact info, and text direction.

🔤 Elements with Meaning & Examples
<!-- 1. <blockquote>: Long (block-level) quotation -->
<blockquote cite="https://www.example.com">
  This is a long quote from another source.
</blockquote>
<!-- ✅ Used for longer, standalone quotes. Usually indented. -->

<!-- 2. <q>: Short inline quotation -->
<p>He said, <q>This is an inline quote.</q></p>
<!-- ✅ Short quotes inside a paragraph. Adds quotation marks automatically. -->

<!-- 3. <abbr>: Abbreviation with full form in tooltip -->
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<!-- ✅ Hovering over the text shows the full form. Improves accessibility. -->

<!-- 4. <address>: Author or contact information -->
<address>
  Written by John Doe<br>
  Visit us at: <a href="https://example.com">example.com</a><br>
  Location: Earth
</address>
<!-- ✅ Contact details; often shown in footer or about pages. -->

<!-- 5. <cite>: Citation (e.g., title of a work) -->
<p><cite>The Great Gatsby</cite> is a novel by F. Scott Fitzgerald.</p>
<!-- ✅ Italicizes and marks creative works or references. -->

<!-- 6. <bdo>: Bi-Directional Override -->
<p><bdo dir="rtl">This text is reversed using bdo.</bdo></p>
<!-- ✅ Overrides text direction (e.g., for RTL languages like Arabic, Hebrew). -->


| Tag            | Purpose                                 | Notes                                   |
| -------------- | --------------------------------------- | --------------------------------------- |
| `<blockquote>` | Long block-level quotation              | Usually indented, use `cite` for source |
| `<q>`          | Short inline quotation                  | Auto adds quotation marks               |
| `<abbr>`       | Abbreviation with tooltip               | Hover to see full form                  |
| `<address>`    | Contact or author information           | Often used in `<footer>`                |
| `<cite>`       | Title of a work (e.g., books, articles) | Usually italicized                      |
| `<bdo>`        | Bi-directional text override            | Use `dir="rtl"` or `dir="ltr"`          |

✅ Use these tags to enhance semantics, accessibility, and clarity in your HTML documents.