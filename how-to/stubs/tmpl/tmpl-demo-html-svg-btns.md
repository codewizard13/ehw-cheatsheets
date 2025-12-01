Eric Hepperle, ChatGPT, 10/06/25


---



Great! Here's the **updated version** with each button wrapped in an anchor (`<a>`) tag linking to their respective platforms. You can replace the `href` URLs with your actual podcast links.

---

### ✅ Updated Code (With Links):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Podcast Buttons</title>
  <style>
    body {
      margin: 0;
      background: #f0f4f8;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pod-btns {
      display: flex;
      gap: 2.5rem;
    }

    .pod-btn {
      width: 100px;
      height: 100px;
      background-color: teal;
      border: 2px solid #002147; /* Oxford blue */
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      animation: bounce 0.6s ease;
      transition: border 0.3s ease;
      text-decoration: none; /* Remove link underline */
    }

    .pod-btn:hover {
      border: 4px solid orange;
    }

    .pod-btn svg {
      width: 50%;
      height: 50%;
      fill: white;
    }

    @keyframes bounce {
      0%   { transform: scale(0.8); }
      60%  { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  </style>
</head>
<body>

  <div class="pod-btns">
    <!-- Spotify Button -->
    <a href="https://open.spotify.com/" target="_blank" class="pod-btn" title="Listen on Spotify" rel="noopener noreferrer">
      <svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
        <path d="M84,0C37.7,0,0,37.7,0,84s37.7,84,84,84s84-37.7,84-84S130.3,0,84,0z M121.3,121.2c-1.7,2.6-5.2,3.3-7.7,1.6
        c-21.1-12.9-47.7-15.8-79-8.6c-3,0.7-6-1.2-6.7-4.2c-0.7-3,1.2-6,4.2-6.7c34.8-8.1,65.3-5,89.1,9.4
        C122.3,115.3,123,118.7,121.3,121.2z M132.3,96.5c-2.1,3.2-6.5,4.2-9.7,2.1c-24.2-15.1-61.1-19.5-89.6-10.6
        c-3.6,1.1-7.4-0.9-8.5-4.5c-1.1-3.6,0.9-7.4,4.5-8.5c33.7-10.1,75.1-5.2,103.7,12.2C133.2,88.8,134.3,93.3,132.3,96.5z
         M133.8,70.6c-29-17.3-77.5-18.9-105-10.2c-4.2,1.3-8.7-1-10-5.2c-1.3-4.2,1-8.7,5.2-10c31.6-9.6,87.7-7.7,121,12
        c3.7,2.2,4.9,7,2.6,10.6C145.2,71.7,139.5,74,133.8,70.6z"/>
      </svg>
    </a>

    <!-- Apple Podcasts Button -->
    <a href="https://podcasts.apple.com/" target="_blank" class="pod-btn" title="Listen on Apple Podcasts" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.371 0 0 5.373 0 12c0 5.285 3.438 9.766 8.207 11.387.6.111.82-.26.82-.577
        0-.285-.012-1.236-.018-2.243-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.082-.729.082-.729
        1.205.086 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93
        0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.019.005
        2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.119 3.176.77.84 1.235 1.911
        1.235 3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.814 1.102.814 2.222
        0 1.606-.014 2.901-.014 3.293 0 .319.216.694.825.576C20.565 21.765 24 17.283 24 12
        24 5.373 18.627 0 12 0z"/>
      </svg>
    </a>
  </div>

</body>
</html>
```

---

### ✅ Notes:

* **`target="_blank"`** opens the link in a new tab.
* **`rel="noopener noreferrer"`** is for security when opening external links.
* Replace the `href` attributes:

  * `https://open.spotify.com/your-podcast`
  * `https://podcasts.apple.com/your-podcast`

---

Let me know if you'd like:

* Text labels under the icons (e.g. "Spotify", "Apple").
* Accessibility improvements.
* Tooltip styling or focus states for keyboard navigation.
* Dark mode adaptation.

Happy to help you take it further!
