# min-chalutong.github.io

Min Chalutong's personal website. It's built with plain **HTML + CSS + a little JavaScript**, with no frameworks or build tools, so it's easy to learn and edit.

---

## 1. How the project is organised

```
min-chalutong.github.io/
├── index.html      ← Home page (photo, intro, education, work)
├── talks.html      ← Talks page (conference presentations)
├── css/
│   └── style.css   ← ALL the design (fonts, colours, spacing, mobile layout)
├── js/
│   └── main.js     ← Opens/closes the menu on phones
├── images/
│   └── profile.jpg ← Your photo
└── files/
    └── cv.pdf      ← Put your CV here (you need to add this file)
```

The three languages each do one job:

| Language   | Job                          | Analogy             |
|------------|------------------------------|---------------------|
| HTML       | **What** is on the page      | The walls and rooms |
| CSS        | **How** it looks             | Paint and furniture |
| JavaScript | **What happens** on a click  | Light switches      |

---

## 2. See the site on your computer

1. Download or clone this repository.
2. Double-click `index.html` and it opens in your browser.
3. Edit a file in a text editor ([VS Code](https://code.visualstudio.com/) is free and good), save, then **refresh** the browser.

Tip: In VS Code, install the **Live Server** extension. Right-click `index.html` → *Open with Live Server*, and the page reloads by itself every time you save.

---

## 3. Publish it with GitHub Pages (free)

1. On GitHub, open the repository → **Settings** → **Pages**.
2. Under *Build and deployment*, set **Source = Deploy from a branch**, **Branch = `main`**, folder **`/ (root)`** → **Save**.
3. Wait about 1 minute. Your site will be live at
   `https://minchalut6.github.io/min-chalutong.github.io/`

> If you want the shorter address `https://minchalut6.github.io/`, rename the repository to exactly **`minchalut6.github.io`** (it must match your GitHub username).

After that, every time you push a change to `main`, the site updates automatically.

---

## 4. Common edits (copy and paste recipes)

### Add a new job or degree
In `index.html`, find the `EDUCATION` or `WORK EXPERIENCES` section, copy one whole `<li> ... </li>` block, paste it at the top of the list, and change the text:

```html
<li>
  <strong>Job Title, Organisation</strong>
  <p>City, Country.</p>
  <p>Jan, 2027 - Present.</p>
</li>
```

### Add a new talk
In `talks.html`, copy one `<li>` inside `CONFERENCE PRESENTATIONS`:

```html
<li>
  Author, A. &amp; <strong>Chalutong, M.</strong> (2027).
  Title of the paper.
  <em>Conference Name (ABBR 2027)</em>, Dates, City, Country.
</li>
```
Note: write `&` as `&amp;` in HTML.

### Add your CV
Save your CV as `files/cv.pdf` and push. The "My current CV" link already points there.

### Fix the LinkedIn / YouTube / supervisor links
Search `index.html` for `YOUR-LINKEDIN-ID`, `YOUR-CHANNEL` and `href="#"`, and replace them with the real URLs.

### Change the photo
Replace `images/profile.jpg` with a new photo that has the same name, or change `src="images/profile.jpg"` in `index.html`.

### Change colours or fonts
Open `css/style.css`. The **variables** at the top (`--accent-color`, `--heading-font`, …) control the whole site. Change one value and every page updates.

---

## 5. Add a whole new page (e.g. Publications)

1. Copy `talks.html` and rename the copy to `publications.html`.
2. In the new file, change the `<title>`, the `<h1>`, and the content inside `<main>`.
3. Add the menu link to **every** page (`index.html`, `talks.html`, `publications.html`):
   ```html
   <li><a href="publications.html">Publications</a></li>
   ```
4. On `publications.html` only, give that link `class="active"` (it shows grey to mark the current page).

---

## 6. Saving and publishing your changes with Git

```bash
git add .
git commit -m "Add new talk"
git push
```

Or, on github.com, open a file → click the ✏️ pencil → edit → **Commit changes**. That works fine for small text edits.

---

## 7. Learn more

- HTML & CSS basics: <https://developer.mozilla.org/en-US/docs/Learn>
- Flexbox (used for the menu): <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
- Right-click any element in your browser → **Inspect** to see and try out its HTML/CSS live.
