🖼️ HTML Images
The <img> tag is used to embed images in an HTML page.
It is an empty tag (no closing tag), and uses attributes to define the source and behavior.

🧠 Basic Syntax
<img src="image.jpg" alt="Description of image">

| Attribute | Description                                          |
| --------- | ---------------------------------------------------- |
| `src`     | Path to the image (relative or absolute)             |
| `alt`     | Alternative text (used for accessibility + fallback) |


🔤 Examples
📌 1. Basic Image
<img src="logo.png" alt="Website Logo">


📐 2. Image with Width & Height
<img src="pic.jpg" alt="A landscape" width="300" height="200">


🖼️ 3. Clickable Image (Image as a Link)
<a href="https://example.com">
  <img src="banner.jpg" alt="Visit Site">
</a>


💬 4. Image with Tooltip
<img src="icon.png" alt="Info Icon" title="Information icon">


🎨 5. Styled Image (Border & Rounded Corners)
<img src="avatar.jpg" alt="User Avatar"
     style="border: 2px solid #ccc; border-radius: 10px;">


✅ Advanced Use Cases
📁 1. Images in Another Folder
<img src="images/photo.jpg" alt="Photo from images folder">


📂 Folder Structure:
project/
├── index.html
└── images/
    └── photo.jpg


🌐 2. Images from Another Server
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools Logo">
✅ Requires an internet connection.


🌀 3. Animated Images (GIFs)
<img src="funny-cat.gif" alt="Funny cat animation" width="300">
✅ GIFs play automatically.


🧲 4. Floating Image (Text Wrap)
<img src="avatar.jpg" alt="Avatar"
     style="float: right; margin: 10px;" width="100">
<p>This text wraps around the image using float.</p>

float: right; or float: left;
Add margin for spacing


🔗 5. Image as a Button
<a href="https://example.com">
  <img src="logo.png" alt="Example Site">
</a>


📊 6. Common Image Formats
| Format  | Use Case                  | Notes                                   |
| ------- | ------------------------- | --------------------------------------- |
| `.jpg`  | Photos, real-life images  | Lossy compression, small size           |
| `.png`  | Transparent, crisp images | Lossless, supports alpha channel        |
| `.gif`  | Animated images           | Limited colors, supports animation      |
| `.svg`  | Icons, logos (vector)     | Scalable, small, resolution independent |
| `.webp` | Modern web images         | Small file size, high quality           |


🗺️ HTML Image Maps
Define clickable areas inside an image using <map> and <area>.

🧠 Image Map Tags Overview
| Tag      | Purpose                                      |
| -------- | -------------------------------------------- |
| `<img>`  | Displays image and links it to a `<map>` tag |
| `usemap` | Binds image to a named `<map>`               |
| `<map>`  | Defines a collection of clickable areas      |
| `<area>` | Defines each clickable region inside the map |


💡 Image Map Example
<img src="world-map.jpg" usemap="#worldmap" alt="World Map" width="500">

<map name="worldmap">
  <area shape="rect" coords="34,44,270,350" href="https://example.com/north-america" alt="North America">
  <area shape="circle" coords="400,150,50" href="https://example.com/asia" alt="Asia">
  <area shape="poly" coords="130,130,180,180,160,210,110,190" href="https://example.com/africa" alt="Africa">
</map>

| Shape    | Description                      |
| -------- | -------------------------------- |
| `rect`   | Rectangle (`x1,y1,x2,y2`)        |
| `circle` | Circle (`centerX, centerY, r`)   |
| `poly`   | Polygon (`x1,y1,x2,y2,x3,y3...`) |


🧾 Best Practices
✅ Always include alt text for accessibility
✅ Optimize image size to improve page load time
✅ Use SVG for logos and icons — sharp and scalable
✅ Store images in a dedicated folder (e.g., /images/)
