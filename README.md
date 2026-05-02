# Google Calendar Embed Codes 2025

This repository is the central reference for the trainer calendars used in LearnWorlds.

## Files

- `trainers.js`: official list with each trainer's `name`, `divId`, and `calendarId`
- `index.html`: reference page to preview all calendars
- `styles.css`: page styling

## How to use in LearnWorlds

1. Open `index.html` in your browser to look up the trainer and confirm the `divId` and `calendarId`.
2. Copy this template:

```html
<div id="YOUR_DIV_ID"></div>
<script>
  (function() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const calendarId = "YOUR_GOOGLE_CALENDAR_ID";

    const iframeSrc = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=${encodeURIComponent(userTimeZone)}&mode=WEEK`;

    const iframe = document.createElement("iframe");
    iframe.src = iframeSrc;
    iframe.style.border = "0";
    iframe.width = "800";
    iframe.height = "600";

    document.getElementById("YOUR_DIV_ID").appendChild(iframe);
  })();
</script>
```

3. In LearnWorlds, replace only:
- `YOUR_DIV_ID`
- `YOUR_GOOGLE_CALENDAR_ID`

## How to update a trainer

Edit the matching entry in `trainers.js`.

Example:

```javascript
{
  name: "Anya Adair",
  divId: "aa1",
  calendarId: "c_72e0a1a53ac3b725d35348f09e141608771c16f69d9e08c63273d5bc446dda75@group.calendar.google.com"
}
```

## GitHub

To publish the project:

```bash
git init
git add .
git commit -m "Add LearnWorlds calendar embeds"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
