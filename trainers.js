const trainers = [
  {
    name: "Anya Adair",
    divId: "aa1",
    calendarId: "c_72e0a1a53ac3b725d35348f09e141608771c16f69d9e08c63273d5bc446dda75@group.calendar.google.com"
  },
  {
    name: "Dinara Toktosunova",
    divId: "dt1",
    calendarId: "c_de41f3a376e3d034960620e47e774d29076940daa07411ec4563971bf13aafe2@group.calendar.google.com"
  },
  {
    name: "Dinara Toktosunova",
    divId: "dt2",
    calendarId: "c_f41b7ccbad07a32067ffe0c0ea734ed267f7c322ac9460e68fea4e3954e2104c@group.calendar.google.com"
  },
  {
    name: "Eliza Lau",
    divId: "el1",
    calendarId: "c_3e0050c144edbf5249b9d41406916b2d2ef2958b45b9e19853740abc9cd4775e@group.calendar.google.com"
  },
  {
    name: "Eliza Lau",
    divId: "el2",
    calendarId: "c_2d176cbb04b16ed94016e5280b6674acee1477b1447cb9af64c41a9b8f9be1fd@group.calendar.google.com"
  },
  {
    name: "Frederic Auquier",
    divId: "fa1",
    calendarId: "c_a766d05e03b1d0ee2e1bee4a9de28e5958bbdd11dbe0abcc8bc6de1f465b3608@group.calendar.google.com"
  },
  {
    name: "Frederic Auquier",
    divId: "fa2",
    calendarId: "c_44b9a22d61d47274ed66cf12f43509b171489843e1b52b0bdf6b8411a41e891e@group.calendar.google.com"
  },
  {
    name: "George Hughes",
    divId: "gh1",
    calendarId: "c_cf050edf7c66e9ed560500875a2a8433d1efac03681a10e06180efb1aaffbd84@group.calendar.google.com"
  },
  {
    name: "Kasumi Kato",
    divId: "kk1",
    calendarId: "c_a76db994570644c722ebe58d6d191b142ab93394a6c23ad7fc6182695d9d2357@group.calendar.google.com"
  },
  {
    name: "Kasumi Kato",
    divId: "kk2",
    calendarId: "c_054bb21bc95dbeb1ac3088d7bf3f0bdcc88108709d5bcab360a0b5c40d5e0fca@group.calendar.google.com"
  },
  {
    name: "Kunsang Palmo",
    divId: "kp1",
    calendarId: "c_f88cfbb5cb90462e2c8d178215b1f16f1c3a0b1b2462c80373c2801f2fcf8235@group.calendar.google.com"
  },
  {
    name: "Lama Jigme",
    divId: "lj1",
    calendarId: "c_a1bff0fbd87f8733a763aa335ddf94dd1f2d669a61844622c532e93585c8a405@group.calendar.google.com"
  },
  {
    name: "Lama Jigme",
    divId: "lj2",
    calendarId: "c_e73c9182c211d9b847ecd87617051ea176f47478c81afe0bce974921e01409de@group.calendar.google.com"
  },
  {
    name: "Maya Sepulchre",
    divId: "ms1",
    calendarId: "c_975225548d097451462075ee108488bfaccec62f1886fcaf70966f519378b89c@group.calendar.google.com"
  },
  {
    name: "Maya Sepulchre",
    divId: "ms2",
    calendarId: "c_e8178c1af26d480b154e78dc84380625d13091cc6b9f5e8f54c8211ae98027b3@group.calendar.google.com"
  },
  {
    name: "Michell Wong",
    divId: "mw1",
    calendarId: "c_b77c48e22e4c58c96e3b5ba2128bdc1ccacb1e9c1dd29c588b6d4d266607c9f3@group.calendar.google.com"
  },
  {
    name: "Stephanie Wagner",
    divId: "sw1",
    calendarId: "c_017bda6020156354b0cc6f43dc96d788c9cb3379bd7a57774961b1c1524c8116@group.calendar.google.com"
  },
  {
    name: "Stephanie Wagner",
    divId: "sw2",
    calendarId: "c_f33e182b33be88a5b05a678f46be013e431d55cf235179c9d55e36a4ed328aa7@group.calendar.google.com"
  }
];

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const container = document.getElementById("calendar-list");

trainers.forEach((trainer) => {
  const section = document.createElement("section");
  section.className = "trainer-card";

  const title = document.createElement("h2");
  title.textContent = `${trainer.name} (${trainer.divId})`;

  const iframe = document.createElement("iframe");
  iframe.src = `https://calendar.google.com/calendar/embed?src=${trainer.calendarId}&ctz=${encodeURIComponent(userTimeZone)}&mode=WEEK`;
  iframe.style.border = "0";
  iframe.width = "100%";
  iframe.height = "600";

  section.appendChild(title);
  section.appendChild(iframe);
  container.appendChild(section);
});
