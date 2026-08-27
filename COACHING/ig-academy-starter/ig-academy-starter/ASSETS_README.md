# Add your real images here

The starter is intentionally wired to local assets.

Required examples:
- src/assets/logo.png
- src/assets/hero/hero-main.jpg
- src/assets/hero/hero-1.jpg ... hero-6.jpg
- src/assets/selections/2023-24/*.jpg
- src/assets/selections/2024-25/*.jpg
- src/assets/selections/2025-26/*.jpg
- src/assets/director/director.jpg
- src/assets/library/library-main.jpg
- src/assets/library/library-1.jpg ... library-3.jpg
- src/assets/gallery/gallery-1.jpg, gallery-2.jpg

Replace the sample student names/data in src/data/selections.js with the client's real selection data.

Important:
Vite supports local imports. For production, a cleaner version is to import each image at the top of the data file (e.g. `import aman from "../assets/selections/2023-24/aman-yadav.jpg"`) and use `image: aman`.
