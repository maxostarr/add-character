function buildJournalContent(data) {
  const {
    race,
    genderExpression,
    firstMet,
    generatedTraits,
    physicalDescription,
    notes,
  } = data
  return `<p>
  <span style="font-family: Signika, sans-serif"
    ><strong style="box-sizing: border-box; user-select: text">Race:</strong>
    ${race}</span
  >
</p>
<p
  style="
    box-sizing: border-box;
    user-select: text;
    margin: 0.5em 0px;
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-align: start;
  "
>
  <span style="font-family: Signika, sans-serif"
    ><strong style="box-sizing: border-box; user-select: text"
      >Gender Expression:</strong
    >${genderExpression}</span
  >
</p>
<p
  style="
    box-sizing: border-box;
    user-select: text;
    margin: 0.5em 0px;
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-align: start;
  "
>
  <span style="font-family: Signika, sans-serif"
    ><strong style="box-sizing: border-box; user-select: text"
      >First Met:</strong
    >${firstMet}</span
  >
</p>
<p
  style="
    box-sizing: border-box;
    user-select: text;
    margin: 0.5em 0px;
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-align: start;
  "
>
  <span style="font-family: Signika, sans-serif"
    ><strong style="box-sizing: border-box; user-select: text"
      >Generated Traits:</strong
    >${generatedTraits}</span
  >
</p>
<hr
  style="
    box-sizing: border-box;
    user-select: text;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-top: 1px solid var(--color-border-light-primary);
    border-bottom: 1px solid var(--color-border-light-highlight);
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-align: start;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
  "
/>
<p
  style="
    box-sizing: border-box;
    user-select: text;
    margin: 0.5em 0px;
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-align: start;
  "
>
  <span style="font-family: Signika, sans-serif">${physicalDescription}</span>
</p>
<hr
  style="
    box-sizing: border-box;
    user-select: text;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-top: 1px solid var(--color-border-light-primary);
    border-bottom: 1px solid var(--color-border-light-highlight);
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-align: start;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
  "
/>
<p
  style="
    box-sizing: border-box;
    user-select: text;
    margin: 0.5em 0px;
    color: rgb(25, 24, 19);
    font-family: Signika, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: normal;
    orphans: 2;
    text-indent: 0px;
    text-transform: none;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    text-align: start;
  "
>
  <span style="font-family: Signika, sans-serif"
    ><em style="box-sizing: border-box; user-select: text">Notes:</em>${notes}</span
  >
</p>
`
}

export function createJournalEntry(data) {
  const { name } = data
  const content = buildJournalContent(data)
  JournalEntry.create({
    name,
    content,
    folder: game.folders.getName("Characters"),
    ownership: {
      default: 3,
    },
  })
}
