# min-chalutong.github.io

Min Chalutong's personal website. It's built with plain **HTML + CSS + a little JavaScript**, with no frameworks or build tools, so it's easy to learn and edit.

---

## 1. How the project is organised

```
min-chalutong.github.io/
├── index.html      ← Home page (hero, about, news, education, experience)
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

## 3. Publish it at https://minchalut6.github.io

GitHub gives every account **one** short address, `https://<username>.github.io`. You get it by naming the repository exactly after your username:

1. On GitHub, open this repository → **Settings** → **General**.
2. Under *Repository name*, rename it to **`minchalut6.github.io`** → **Rename**.
3. Go to **Settings → Pages**. Set *Source* = **Deploy from a branch**, *Branch* = **`main`**, folder = **`/ (root)`** → **Save**.
4. After about a minute, the site is live at **https://minchalut6.github.io**.

All links in the site are *relative* (for example `href="talks.html"`), so nothing in the code has to change when you rename. The `<link rel="canonical" ...>` line in each page already points to the new address.

After that, every time you push a change to `main`, the site updates automatically.

---

## 4. Common edits (copy and paste recipes)

### Add news (Home page, `News` section)
Newest at the top:
```html
<li>
  <span class="news-date">Dec 2026</span>
  <span>Presented at <strong>APIEMS 2026</strong> in Busan, Korea.</span>
</li>
```

### Add a job or degree (Home page, `Education` / `Experience`)
```html
<li class="timeline-item">
  <p class="timeline-date">Jan 2027 &ndash; Present</p>
  <h3>Job Title</h3>
  <p class="timeline-place">Organisation &middot; City, Country</p>
</li>
```
`&ndash;` = –, `&middot;` = ·, `&amp;` = &. These are HTML "entities" for special characters.

### Add a research interest
Add a line inside `<ul class="chips">`: `<li>Multi-objective Optimization</li>`

### Add a talk (`talks.html`)
Copy a whole `<li class="card"> ... </li>` block and change the text. Change the badge
`<span class="badge">Accepted</span>` to `Presented` after the conference.

### Add your CV
Save it as `files/cv.pdf`. The "CV" menu link and "Download CV" button already point there.

### Fix the LinkedIn / YouTube / supervisor links
Search `index.html` for `YOUR-LINKEDIN-ID`, `YOUR-CHANNEL` and `href="#"`, and replace them with the real addresses.

### Change the photo
Replace `images/profile.jpg` with a new photo that has the same name. Upload the original file straight from your phone; don't run it through apps that compress it. If its size differs from 1200×1600, update `width="..." height="..."` on the `<img>` tag.

### Change colours or fonts
At the top of `css/style.css` are the variables: `--navy` (dark blue), `--light-blue`, `--pale-blue`, and so on. Change one value and every page updates.

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
