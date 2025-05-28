🧠 HTML Semantic Elements Cheatsheet
Semantic HTML uses elements that clearly describe their meaning in a human- and machine-readable way. These elements help improve accessibility, SEO, and code clarity.


📘 What Are Semantic Elements?
Semantic elements clearly define the role or purpose of the content they enclose.


🆚 Non-semantic:

<div id="header"></div>


✅ Semantic:
<header></header>
🔑 Common Semantic Tags


Tag	Description
<header>	Represents the top section (logo, nav, title) of a page or section
<nav>	Defines navigation links (menus, sidebars, etc.)
<main>	The central content of the document (only one per page)
<section>	Groups related content under a thematic block with a heading
<article>	A self-contained piece of content (e.g., blog post, news article)
<aside>	Content related to the main content (e.g., ads, sidebars, tips)
<footer>	Contains the bottom info (copyright, links, credits)
<figure>	Wraps media (images, charts) with <figcaption> for labels
<figcaption>	Provides a caption or description for a <figure>
<address>	Contains contact info (emails, addresses, authors)
<mark>	Highlights important text
<time>	Represents a date/time value
<details>	Toggleable content section (collapsible panels)
<summary>	Visible heading of a <details> element


📄 Example Page Structure with Semantic Tags
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Semantic HTML Example</title>
</head>
<body>

  <header>
    <h1>My Website</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>What is Semantic HTML?</h2>
      <p><mark>Semantic elements</mark> improve code readability and SEO.</p>
      <time datetime="2025-05-28">May 28, 2025</time>
    </article>

    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">HTML Basics</a></li>
        <li><a href="#">CSS Styling</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <address>Contact us: info@example.com</address>
    <p>&copy; 2025 My Website</p>
  </footer>

</body>
</html>


💡 Benefits of Semantic HTML
✅ Enhances Accessibility for screen readers

✅ Improves Search Engine Optimization (SEO)

✅ Makes code easier to read and maintain

✅ Helps tools like browsers and AI understand page structure


🔧 When to Use <div> or <span>
Use <div> when no semantic element fits (generic block container)

Use <span> for generic inline elements

Always prefer semantic tags when applicable

