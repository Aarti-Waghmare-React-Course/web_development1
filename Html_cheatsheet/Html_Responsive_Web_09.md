📱 HTML Responsive Web Design Cheatsheet
Responsive Web Design (RWD) ensures your website looks good on all screen sizes — from desktops to tablets and mobile phones. It’s achieved using HTML + CSS techniques.


🔑 Key Concepts
✅ 1. Viewport Meta Tag
Defines how the page should be displayed on different devices.

<meta name="viewport" content="width=device-width, initial-scale=1.0">
width=device-width: Uses the full width of the device.

initial-scale=1.0: Sets initial zoom level.


✅ 2. Media Queries (CSS)
Applies different styles depending on screen size.

/* Small devices (phones) */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Medium devices (tablets) */
@media (min-width: 601px) and (max-width: 1024px) {
  body {
    background-color: lightgreen;
  }
}

/* Large devices (desktops) */
@media (min-width: 1025px) {
  body {
    background-color: lightgray;
  }
}


✅ 3. Flexible Layouts with Percentages
Use relative units instead of fixed pixels.

.container {
  width: 80%;
  margin: auto;
}


✅ 4. Responsive Images
Images scale with screen size using max-width: 100%:

<img src="image.jpg" alt="sample" style="max-width:100%; height:auto;">


✅ 5. Responsive Text
Use relative units like em, rem, %, vw (viewport width):

h1 {
  font-size: 4vw; /* scales based on screen width */
}


✅ 6. CSS Grid & Flexbox for Layouts
These modern layout models are responsive by nature.

Flexbox Example:
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

Grid Example:
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}


💡 Bonus Tips
✅ Use min-width for mobile-first design

✅ Avoid fixed widths (px) for containers

✅ Test on real devices and emulators

✅ Combine layout elements with media queries for full control


🧪 Sample Responsive HTML Page

<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: sans-serif;
      padding: 1rem;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .box {
      background-color: #eee;
      padding: 1rem;
      text-align: center;
    }

    @media (max-width: 600px) {
      .box {
        background-color: lightblue;
      }
    }
  </style>
</head>
<body>

<h1>Responsive Grid</h1>
<div class="container">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <div class="box">Item 3</div>
</div>

</body>
</html>