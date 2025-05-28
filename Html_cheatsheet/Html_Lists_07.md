📋 HTML Lists
HTML provides three types of lists:
| List Type        | Tag    | Description                |
| ---------------- | ------ | -------------------------- |
| Ordered List     | `<ol>` | Numbered list (1, 2, 3…)   |
| Unordered List   | `<ul>` | Bulleted list              |
| Description List | `<dl>` | Term and description pairs |


🔹 1. Ordered List (<ol>)
Displays items in a numbered format:
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>


✅ Optional <ol> Attributes:
| Attribute  | Description                 | Example                      |
| ---------- | --------------------------- | ---------------------------- |
| `type`     | Changes numbering style     | `type="A"` → A, B, C…        |
| `start`    | Sets starting number/letter | `start="3"` → starts from 3  |
| `reversed` | Reverses the list order     | `reversed` → counts backward |


<ol type="A" start="3" reversed>
  <li>Third</li>
  <li>Second</li>
  <li>First</li>
</ol>


🔹 2. Unordered List (<ul>)
Displays items with bullet points:
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>


🔹 3. Description List (<dl>)
Used for terms and their definitions:
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>


| Tag    | Purpose                |
| ------ | ---------------------- |
| `<dl>` | Wrapper for the list   |
| `<dt>` | Description Term       |
| `<dd>` | Description Definition |


🔹 Nesting Lists
You can nest one list inside another to create sub-lists:
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
