# 🌐 HTML Cheatsheet

> **HTML (HyperText Markup Language)** is the standard language for creating web pages and applications.

---

## 🧱 Basic Structure

```html
<!DOCTYPE html>          <!-- HTML5 document -->
<html>                   <!-- Root element of HTML page -->
  <head>                 <!-- Meta information about HTML -->
    <title>This is Title</title> <!-- Title for browser tab -->
  </head>
  <body>                 <!-- Document body, all visible content here -->
    <h1>This is heading</h1> <!-- Large heading -->
    <p>This is paragraph</p>  <!-- Paragraph text -->
  </body>
</html>
```

---

## 🔤 What is an HTML Element?

An **HTML element** is defined by a start tag, some content, and an end tag.

```html
<h1>This is heading</h1>
<p>This is paragraph</p>
```

---

## 🕳️ Empty Elements

Some HTML elements have no content:

```html
<hr>     <!-- Horizontal rule -->
<br>     <!-- Line break -->
<pre>    <!-- Preformatted text -->
```

---

## ⚙️ HTML Attributes

* Provide **additional information** about elements
* Always in **name="value"** pairs
* Specified **in the start tag**

---

## 🧾 HTML Headings

From `<h1>` (largest) to `<h6>` (smallest):

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

---

## 📄 HTML Paragraphs

```html
<p>This is a paragraph</p>
```

---

## 💬 HTML Comments

```html
<!-- Write your comments here -->
```

---

## 🖼️ HTML Favicon

A favicon is a small icon shown in the browser tab.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

---

## 🔖 `<title>` Tag

Defines the title of the document, displayed in the browser tab.

---

## 🧱 Block-Level Elements

Start on a new line and take up the full width available:

```html
<address> <article> <aside> <blockquote> <canvas> <dd> <div>
<dl> <dt> <fieldset> <figcaption> <figure> <footer> <form>
<h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol>
<p> <pre> <section> <table> <tfoot> <ul> <video>
```

---

## 🧵 Inline Elements

Do not start on a new line; only take as much width as necessary:

```html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite>
<code> <dfn> <em> <i> <img> <input> <kbd> <label> <map>
<object> <output> <q> <samp> <script> <select> <small> <span>
<strong> <sub> <sup> <textarea> <time> <tt> <var>
```

---

## 🖼️ HTML Iframes

Used to embed another webpage within the current page:

```html
<iframe src="url" title="description" height="300" width="400" style="border:none;"></iframe>
```

---

## 🧠 Scripting Tags

```html
<script>     <!-- Defines client-side script -->
<noscript>   <!-- Alternative for non-script browsers -->
```

---

## 🧩 HTML Layout Elements Cheatsheet

HTML5 introduced semantic layout tags to define page structure:

### 📦 Common Layout Elements

| Element     | Purpose                                              |
| ----------- | ---------------------------------------------------- |
| `<header>`  | Introductory content or navigational links           |
| `<nav>`     | Navigation links                                     |
| `<main>`    | Main unique content of the document                  |
| `<section>` | Thematic section with heading                        |
| `<article>` | Independent, reusable content like articles or blogs |
| `<aside>`   | Sidebars or related info                             |
| `<footer>`  | Footer section with copyright/contact info           |
| `<div>`     | Generic container, non-semantic                      |

---

## 💡 Example Semantic Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Layout</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Welcome</h2>
      <p>This is the homepage of my awesome site.</p>
    </section>

    <article>
      <h2>Latest Blog Post</h2>
      <p>This article talks about HTML layout elements.</p>
    </article>

    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">HTML Basics</a></li>
        <li><a href="#">CSS Layouts</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

## 📌 Semantic Structure Summary

```html
<header>     <!-- Top branding/logo/navigation -->
<nav>        <!-- Navigation menu -->
<main>       <!-- Main content area -->
<section>    <!-- Group of related content -->
<article>    <!-- Standalone, reusable content -->
<aside>      <!-- Sidebar/related info -->
<footer>     <!-- Footer content -->
<div>        <!-- Generic container -->
```

✅ Use semantic tags to improve SEO and accessibility.
✅ Combine with CSS classes/IDs for styling.
✅ Keep only one <main> per page.
✅ Reduce unnecessary use of <div>.
