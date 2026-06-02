// css2_lessons.js
// CSS2 lesson data object
// Paste each property object beneath its comment banner
// Rename: lesson → property | Remove: group, category, browser_support

const css2_lessons = {
  version: "CSS2",
  released: "1998",
  definition: "CSS2 expanded on CSS1 with new layout features, positioning models, and media types.",
  what_it_introduced: "CSS2 introduced absolute and relative positioning, z-index, media types, the cursor property, table layout, and additional pseudo-classes and pseudo-elements.",
  note: "",
  tip: "",
  topics: [

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Accessibility & UI Controls",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // cursor
          {
    property: "cursor",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_class_cursor.php",
    definition: "Specifies the type of mouse cursor to display when the pointer is over an element.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Always use cursor: pointer on clickable elements like buttons and links that don't use the <a> tag, so users know they are interactive.",
    note: "When using a custom cursor via url(), always include a fallback keyword at the end in case the image fails to load: cursor: url('cursor.cur'), auto;",
    syntax: "cursor: value | url(path), fallback | initial | inherit;",
    values: [
      { value: "auto", description: "Default. The browser sets the cursor based on context (text cursor over text, pointer over links, etc.).", syntax_example: "div { cursor: auto; }" },
      { value: "default", description: "The default arrow cursor.", syntax_example: "div { cursor: default; }" },
      { value: "pointer", description: "A pointing hand — indicates a link or clickable element.", syntax_example: "button { cursor: pointer; }" },
      { value: "text", description: "An I-beam — indicates selectable text.", syntax_example: "p { cursor: text; }" },
      { value: "move", description: "Crossed arrows — indicates something can be moved.", syntax_example: ".draggable { cursor: move; }" },
      { value: "grab", description: "An open hand — indicates something can be grabbed/dragged.", syntax_example: ".draggable { cursor: grab; }" },
      { value: "grabbing", description: "A closed hand — indicates something is being grabbed.", syntax_example: ".dragging { cursor: grabbing; }" },
      { value: "crosshair", description: "A crosshair — typically used for precision selection.", syntax_example: "canvas { cursor: crosshair; }" },
      { value: "wait", description: "A spinning indicator — indicates the program is busy.", syntax_example: ".loading { cursor: wait; }" },
      { value: "progress", description: "Arrow with a spinner — program is busy but still interactive.", syntax_example: ".processing { cursor: progress; }" },
      { value: "not-allowed", description: "A circle with a line through it — indicates the action cannot be performed.", syntax_example: ".disabled { cursor: not-allowed; }" },
      { value: "help", description: "Arrow with a question mark — indicates help is available.", syntax_example: ".tooltip { cursor: help; }" },
      { value: "copy", description: "Arrow with a plus — indicates something will be copied.", syntax_example: ".copy-btn { cursor: copy; }" },
      { value: "alias", description: "Arrow with a curved arrow — indicates a shortcut/alias will be created.", syntax_example: ".link-btn { cursor: alias; }" },
      { value: "no-drop", description: "Indicates a dragged item cannot be dropped here.", syntax_example: ".no-drop-zone { cursor: no-drop; }" },
      { value: "none", description: "No cursor is shown.", syntax_example: ".hide-cursor { cursor: none; }" },
      { value: "zoom-in", description: "Magnifier with a plus — indicates zoom in.", syntax_example: "img { cursor: zoom-in; }" },
      { value: "zoom-out", description: "Magnifier with a minus — indicates zoom out.", syntax_example: "img.zoomed { cursor: zoom-out; }" },
      { value: "n-resize / s-resize / e-resize / w-resize", description: "Single-direction resize cursors (north, south, east, west).", syntax_example: ".resize-n { cursor: n-resize; }" },
      { value: "ne-resize / nw-resize / se-resize / sw-resize", description: "Diagonal resize cursors.", syntax_example: ".resize-ne { cursor: ne-resize; }" },
      { value: "ew-resize / ns-resize / nesw-resize / nwse-resize", description: "Bidirectional resize cursors.", syntax_example: ".resize-ew { cursor: ew-resize; }" },
      { value: "col-resize", description: "Indicates a column border that can be resized horizontally.", syntax_example: "th { cursor: col-resize; }" },
      { value: "row-resize", description: "Indicates a row border that can be resized vertically.", syntax_example: "tr { cursor: row-resize; }" },
      { value: "all-scroll", description: "Indicates something can be scrolled in any direction.", syntax_example: ".scrollable { cursor: all-scroll; }" },
      { value: "cell", description: "Indicates a table cell or set of cells can be selected.", syntax_example: "td { cursor: cell; }" },
      { value: "context-menu", description: "Indicates a context menu is available.", syntax_example: "div { cursor: context-menu; }" },
      { value: "vertical-text", description: "I-beam rotated 90 degrees — for vertical text.", syntax_example: ".vertical { cursor: vertical-text; }" },
      { value: "url(path), fallback", description: "A custom cursor image. Always include a fallback keyword.", syntax_example: "div { cursor: url('cursor.png'), auto; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { cursor: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { cursor: inherit; }" }
    ],
    examples: [
      { label: "Pointer on custom button", code: `.btn {\n  cursor: pointer;\n}` },
      { label: "Not-allowed on disabled element", code: `.btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}` },
      { label: "Custom cursor with fallback", code: `div {\n  cursor: url('custom.cur'), auto;\n}` }
    ],
    browser_support: { chrome: "5", edge: "5.5", firefox: "4", safari: "5", opera: "9.6" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Borders",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [



        // outline
          {
    property: "outline",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/pr_outline.php",
    definition: "Shorthand for setting outline-width, outline-style, and outline-color in one declaration. An outline is drawn outside the border and does not affect the element's size or layout.",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Never use outline: none or outline: 0 without providing an alternative focus indicator. Outlines are critical for keyboard accessibility — they show which element has focus.",
    note: `Outline vs Border:
- Outline does NOT affect layout — it takes up no space
- Outline is drawn outside the border
- Outline cannot have different values per side
- Outline can be non-rectangular (follows element shape in some browsers)`,
    syntax: "outline: width style color | initial | inherit;",
    values: [
      {
        value: "outline-width",
        description: "Thickness of the outline.",
        syntax_example: "button:focus { outline: 2px solid #c8a96e; }"
      },
      {
        value: "outline-style",
        description: "Required for outline to display. Same values as border-style.",
        syntax_example: "button:focus { outline: 2px dashed #c8a96e; }"
      },
      {
        value: "outline-color",
        description: "Color of the outline.",
        syntax_example: "button:focus { outline: 3px solid #c8a96e; }"
      },
      {
        value: "none",
        description: "Removes the outline. Only use with an alternative focus style.",
        syntax_example: "button:focus { outline: none; box-shadow: 0 0 0 3px #c8a96e; }"
      },
      {
        value: "initial",
        description: "Resets to defaults.",
        syntax_example: "button { outline: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "button { outline: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "outline-offset",
        condition: "Use outline-offset to add space between the element's border and its outline, without affecting layout.",
        css_version: "CSS3",
        path: "CSS3 > UI > outline-offset",
        syntax_example: "button:focus { outline: 2px solid #c8a96e; outline-offset: 4px; }",
        section_id: "css3-ui-outline-offset"
      }
    ],
    examples: [
      {
        label: "Accessible custom focus style",
        code: `button:focus-visible {\n  outline: 3px solid #c8a96e;\n  outline-offset: 4px;\n}`
      },
      {
        label: "Replace outline with box-shadow",
        code: `input:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(200, 169, 110, 0.5);\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1.5", safari: "1.2", opera: "7" }
  },

        // outline-color
  {
    property: "outline-color",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/pr_outline-color.php",
    definition: "Sets the color of an element's outline.",
    default_value: "invert (or currentColor)",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "outline-color: color | invert | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "button:focus { outline-color: #c8a96e; }" },
      { value: "invert", description: "Inverts the color of the pixels under the outline for high contrast visibility.", syntax_example: "button:focus { outline-color: invert; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "button { outline-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "button { outline-color: inherit; }" }
    ],
    examples: [{ label: "Gold focus outline", code: `button:focus {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1.5", safari: "1.2", opera: "7" }
  },




        // outline-style
  {
    property: "outline-style",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/pr_outline-style.php",
    definition: "Sets the style of an element's outline. Must be set for the outline to be visible.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "outline-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | initial | inherit;",
    values: [
      { value: "none", description: "Default. No outline.", syntax_example: "button { outline-style: none; }" },
      { value: "solid", description: "Solid outline.", syntax_example: "button:focus { outline-style: solid; }" },
      { value: "dashed", description: "Dashed outline.", syntax_example: "button:focus { outline-style: dashed; }" },
      { value: "dotted", description: "Dotted outline.", syntax_example: "button:focus { outline-style: dotted; }" },
      { value: "double", description: "Double outline.", syntax_example: "button:focus { outline-style: double; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "button { outline-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "button { outline-style: inherit; }" }
    ],
    examples: [{ label: "Dashed focus outline", code: `button:focus {\n  outline-style: dashed;\n  outline-width: 2px;\n  outline-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1.5", safari: "1.2", opera: "7" }
  },



        // outline-width
  {
    property: "outline-width",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/pr_outline-width.php",
    definition: "Sets the width of an element's outline.",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "outline-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin outline.", syntax_example: "button:focus { outline-width: thin; }" },
      { value: "medium", description: "Default. Medium outline.", syntax_example: "button:focus { outline-width: medium; }" },
      { value: "thick", description: "Thick outline.", syntax_example: "button:focus { outline-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "button:focus { outline-width: 3px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default.", syntax_example: "button { outline-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "button { outline-width: inherit; }" }
    ],
    examples: [{ label: "3px focus outline", code: `button:focus {\n  outline-style: solid;\n  outline-width: 3px;\n  outline-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1.5", safari: "1.2", opera: "7" }
  }
  
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Box Model",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // overflow
          {
    property: "overflow",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_overflow.php",
    definition: "Shorthand for overflow-x and overflow-y. Specifies what happens when content overflows an element's box — whether to clip it, show scrollbars, or let it overflow visibly.",
    default_value: "visible",
    inherited: "no",
    animatable: "no",
    applies_to: ["block containers, flex containers, grid containers"],
    tip: "Use overflow: hidden on a parent to contain floated children (clearfix alternative) or to clip absolutely positioned children that extend beyond the parent.",
    note: `Setting overflow to anything other than visible creates a new block formatting context.
overflow: hidden  — clips content, no scrollbar
overflow: scroll  — always shows scrollbar
overflow: auto    — shows scrollbar only when needed (recommended)`,
    syntax: "overflow: visible | hidden | clip | scroll | auto | initial | inherit;",
    values: [
      {
        value: "visible",
        description: "Default. Content overflows the element's box and is visible outside it.",
        syntax_example: "div { overflow: visible; }"
      },
      {
        value: "hidden",
        description: "Content that overflows is clipped and hidden. No scrollbar is shown.",
        syntax_example: "div { overflow: hidden; }"
      },
      {
        value: "clip",
        description: "Like hidden, but also prevents programmatic scrolling. The overflow clip edge can be adjusted with overflow-clip-margin.",
        syntax_example: "div { overflow: clip; }"
      },
      {
        value: "scroll",
        description: "Content is clipped but a scrollbar is always shown even if content does not overflow.",
        syntax_example: "div { overflow: scroll; }"
      },
      {
        value: "auto",
        description: "Scrollbar appears only when content overflows. Recommended for scrollable containers.",
        syntax_example: "div { overflow: auto; }"
      },
      {
        value: "initial",
        description: "Resets to default (visible).",
        syntax_example: "div { overflow: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { overflow: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "overflow-x",
        condition: "Use overflow-x to control horizontal overflow independently from vertical overflow.",
        css_version: "CSS2",
        path: "CSS2 > Box Model > overflow-x",
        syntax_example: "div { overflow-x: auto; overflow-y: hidden; }",
        section_id: "css2-box-overflow-x"
      },
      {
        name: "overflow-y",
        condition: "Use overflow-y to control vertical overflow independently from horizontal overflow.",
        css_version: "CSS2",
        path: "CSS2 > Box Model > overflow-y",
        syntax_example: "div { overflow-y: scroll; }",
        section_id: "css2-box-overflow-y"
      }
    ],
    examples: [
      {
        label: "Scrollable content panel",
        code: `.panel {\n  height: 300px;\n  overflow: auto;\n  padding: 16px;\n  border: 1px solid #c8a96e;\n}`
      },
      {
        label: "Clip absolutely positioned children",
        code: `.card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Content & Counters",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // content
          {
    property: "content",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_gen_content.php",
    definition: "Inserts generated content before or after an element when used with the ::before and ::after pseudo-elements.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["::before and ::after pseudo-elements"],
    tip: "The content property is required on ::before and ::after — even if you just set it to an empty string — for the pseudo-element to render.",
    note: "Generated content is not part of the DOM and is not selectable by users. Do not use it for meaningful text.",
    syntax: 'content: normal | none | "" | "text" | url() | counter() | attr() | open-quote | close-quote | initial | inherit;',
    values: [
      { value: "normal", description: "Default. Computes to 'none' for ::before and ::after pseudo-elements.", syntax_example: "div::before { content: normal; }" },
      { value: "none", description: "No content is generated.", syntax_example: "div::before { content: none; }" },
      { value: '"text"', description: "Inserts the specified string of text.", syntax_example: 'div::before { content: "→ "; }' },
      { value: '""', description: "Empty string — required to make pseudo-elements render with no visible content.", syntax_example: '.clearfix::after { content: ""; display: block; clear: both; }' },
      { value: "url(path)", description: "Inserts an image.", syntax_example: 'div::before { content: url("icon.png"); }' },
      { value: "counter(name)", description: "Inserts the current value of a CSS counter.", syntax_example: "li::before { content: counter(list-counter) \". \"; }" },
      { value: "attr(attribute)", description: "Inserts the value of the specified HTML attribute.", syntax_example: 'a::after { content: " (" attr(href) ")"; }' },
      { value: "open-quote", description: "Inserts the appropriate opening quotation mark.", syntax_example: 'q::before { content: open-quote; }' },
      { value: "close-quote", description: "Inserts the appropriate closing quotation mark.", syntax_example: 'q::after { content: close-quote; }' },
      { value: "initial", description: "Resets to default.", syntax_example: "div::before { content: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div::before { content: inherit; }" }
    ],
    examples: [
      { label: "Add arrow before element", code: `div::before {\n  content: "→ ";\n  color: #c8a96e;\n}` },
      { label: "Show href after links when printing", code: `@media print {\n  a::after {\n    content: " (" attr(href) ")";\n  }\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  },


        // counter-increment
          {
    property: "counter-increment",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_gen_counter-increment.php",
    definition: "Increases or decreases the value of a CSS counter. Used with counter-reset and the content property to create automatic numbering.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "Multiple counters can be incremented at once by listing them space-separated. Default increment is 1 if no number is specified.",
    syntax: "counter-increment: none | name <number> | initial | inherit;",
    values: [
      { value: "none", description: "Default. No counter is incremented.", syntax_example: "li { counter-increment: none; }" },
      { value: "name", description: "The name of the counter to increment. Optionally followed by a number (default: 1).", syntax_example: "li { counter-increment: section; }" },
      { value: "name number", description: "Increment the named counter by the specified amount.", syntax_example: "li { counter-increment: section 2; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "li { counter-increment: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "li { counter-increment: inherit; }" }
    ],
    examples: [
      { label: "Custom numbered list", code: `ol {\n  counter-reset: list-counter;\n  list-style: none;\n}\n\nli {\n  counter-increment: list-counter;\n}\n\nli::before {\n  content: counter(list-counter) ". ";\n  color: #c8a96e;\n  font-weight: bold;\n}` }
    ],
    browser_support: { chrome: "2", edge: "12", firefox: "1", safari: "3", opera: "9.2" }
  },

        // counter-reset

  {
    property: "counter-reset",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_gen_counter-reset.php",
    definition: "Creates or resets a CSS counter to a specified value. Used together with counter-increment and the content property.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "counter-reset: none | name <number> | initial | inherit;",
    values: [
      { value: "none", description: "Default. No counter is reset.", syntax_example: "ol { counter-reset: none; }" },
      { value: "name", description: "Creates or resets the named counter to 0 (or a specified value).", syntax_example: "ol { counter-reset: section; }" },
      { value: "name number", description: "Resets the counter to the specified number.", syntax_example: "ol { counter-reset: section 5; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "ol { counter-reset: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "ol { counter-reset: inherit; }" }
    ],
    examples: [
      { label: "Initialize a section counter", code: `body {\n  counter-reset: section;\n}\n\nh2::before {\n  counter-increment: section;\n  content: "Section " counter(section) ": ";\n  color: #c8a96e;\n}` }
    ],
    browser_support: { chrome: "2", edge: "12", firefox: "1", safari: "3", opera: "9.2" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Fonts & Typography",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // font-size-adjust
          {
    property: "font-size-adjust",
    category: "CSS3",
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_font-size-adjust.php",
    definition: "Preserves the readability of text when a fallback font is used by adjusting the font size so the lowercase letter height (x-height) remains consistent across fonts.",
    default_value: "none",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "The value is the aspect ratio (x-height divided by font size) of the preferred font. When a fallback font loads, the browser scales it to maintain the same x-height.",
    syntax: "font-size-adjust: none | number | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No adjustment is made.",
        syntax_example: "p { font-size-adjust: none; }"
      },
      {
        value: "number",
        description: "The aspect value of the first-choice font. Fallback fonts are scaled to match this x-height ratio.",
        syntax_example: "p { font-size-adjust: 0.5; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "p { font-size-adjust: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-size-adjust: inherit; }"
      }
    ],
    examples: [
      {
        label: "Maintain x-height on font fallback",
        code: `p {\n  font-family: 'Verdana', sans-serif;\n  font-size-adjust: 0.58;\n}`
      }
    ],
    browser_support: { chrome: "127", edge: "127", firefox: "3", safari: "17", opera: "113" }
  },

        // font-stretch
  {
    property: "font-stretch",
    category: "CSS3",
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_font-stretch.php",
    definition: "Selects a normal, condensed, or expanded version of a font face. Only works if the font family has a condensed or expanded variant available.",
    default_value: "normal",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "font-stretch does not stretch or compress the font artificially — it selects a pre-designed variant from the font. If the font does not have the requested variant, the closest available face is used.",
    syntax: "font-stretch: ultra-condensed | extra-condensed | condensed | semi-condensed | normal | semi-expanded | expanded | extra-expanded | ultra-expanded | % | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. The normal width font face.",
        syntax_example: "p { font-stretch: normal; }"
      },
      {
        value: "condensed",
        description: "A condensed (narrower) font face.",
        syntax_example: "p { font-stretch: condensed; }"
      },
      {
        value: "expanded",
        description: "An expanded (wider) font face.",
        syntax_example: "p { font-stretch: expanded; }"
      },
      {
        value: "semi-condensed",
        description: "Slightly narrower than normal.",
        syntax_example: "p { font-stretch: semi-condensed; }"
      },
      {
        value: "semi-expanded",
        description: "Slightly wider than normal.",
        syntax_example: "p { font-stretch: semi-expanded; }"
      },
      {
        value: "ultra-condensed",
        description: "The most condensed variant available.",
        syntax_example: "p { font-stretch: ultra-condensed; }"
      },
      {
        value: "ultra-expanded",
        description: "The most expanded variant available.",
        syntax_example: "p { font-stretch: ultra-expanded; }"
      },
      {
        value: "%",
        description: "A percentage value where 100% = normal. Range typically 50%–200%.",
        syntax_example: "p { font-stretch: 75%; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { font-stretch: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-stretch: inherit; }"
      }
    ],
    examples: [
      {
        label: "Use condensed font variant",
        code: `h1 {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-stretch: condensed;\n}`
      }
    ],
    browser_support: { chrome: "60", edge: "12", firefox: "9", safari: "11", opera: "47" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Multi-Column Layout",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // orphans
          {
    property: "orphans",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_orphans.php",
    definition: "Sets the minimum number of lines of a paragraph that must remain at the bottom of a page or column before a page or column break.",
    default_value: "2",
    inherited: "yes",
    animatable: "no",
    applies_to: ["block container elements"],
    note: "orphans and widows are primarily used for print stylesheets (@media print) to prevent single lines of text from being stranded alone at the top or bottom of a page.",
    syntax: "orphans: number | initial | inherit;",
    values: [
      {
        value: "number",
        description: "The minimum number of lines that must remain at the bottom of a page before a break. Default is 2.",
        syntax_example: "p { orphans: 3; }"
      },
      {
        value: "initial",
        description: "Resets to default (2).",
        syntax_example: "p { orphans: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { orphans: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "widows",
        condition: "widows is the companion property to orphans. widows sets the minimum number of lines that must appear at the top of a page after a break.",
        css_version: "CSS2",
        path: "CSS2 > Paged Media > widows",
        syntax_example: "p { orphans: 2; widows: 2; }",
        section_id: "css2-paged-widows"
      }
    ],
    examples: [
      {
        label: "Print-friendly paragraph breaks",
        code: `@media print {\n  p {\n    orphans: 3;\n    widows: 3;\n  }\n}`
      }
    ],
    browser_support: { chrome: "25", edge: "12", firefox: "Not supported", safari: "1.3", opera: "9.2" }
  },
  
    // page-break-after
  {
    property: "page-break-after",
    w3schools_url: "https://www.w3schools.com/cssref/pr_print_page-break-after.php",
    definition: "Specifies whether a page break should occur after an element when printing. Deprecated in favor of break-after.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    note: "page-break-after is deprecated. Use break-after instead for modern CSS. Both are still widely supported.",
    syntax: "page-break-after: auto | always | avoid | left | right | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Automatic page break.", syntax_example: "div { page-break-after: auto; }" },
      { value: "always", description: "Always insert a page break after the element.", syntax_example: ".chapter { page-break-after: always; }" },
      { value: "avoid", description: "Avoid a page break after the element.", syntax_example: "h2 { page-break-after: avoid; }" },
      { value: "left", description: "Insert page breaks so next page is a left page.", syntax_example: "div { page-break-after: left; }" },
      { value: "right", description: "Insert page breaks so next page is a right page.", syntax_example: "div { page-break-after: right; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { page-break-after: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { page-break-after: inherit; }" }
    ],
    examples: [
      { label: "New page after each section", code: "@media print {\n  section { page-break-after: always; }\n}" }
    ]
  },

  // page-break-before
  {
    property: "page-break-before",
    w3schools_url: "https://www.w3schools.com/cssref/pr_print_page-break-before.php",
    definition: "Specifies whether a page break should occur before an element when printing. Deprecated in favor of break-before.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    note: "page-break-before is deprecated. Use break-before for modern CSS.",
    syntax: "page-break-before: auto | always | avoid | left | right | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { page-break-before: auto; }" },
      { value: "always", description: "Always insert a page break before the element.", syntax_example: "h1 { page-break-before: always; }" },
      { value: "avoid", description: "Avoid a page break before the element.", syntax_example: "div { page-break-before: avoid; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { page-break-before: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { page-break-before: inherit; }" }
    ],
    examples: [
      { label: "New page before each chapter heading", code: "@media print {\n  h1 { page-break-before: always; }\n}" }
    ]
  },

  // page-break-inside
  {
    property: "page-break-inside",
    w3schools_url: "https://www.w3schools.com/cssref/pr_print_page-break-inside.php",
    definition: "Specifies whether a page break should be avoided inside an element when printing. Deprecated in favor of break-inside.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    note: "page-break-inside is deprecated. Use break-inside for modern CSS.",
    syntax: "page-break-inside: auto | avoid | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Automatic.", syntax_example: "div { page-break-inside: auto; }" },
      { value: "avoid", description: "Avoid a page break inside the element.", syntax_example: "figure { page-break-inside: avoid; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { page-break-inside: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { page-break-inside: inherit; }" }
    ],
    examples: [
      { label: "Keep figures intact when printing", code: "@media print {\n  figure { page-break-inside: avoid; }\n}" }
    ]
  },

        // widows
          {
    property: "widows",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_widows.php",
    definition: "Sets the minimum number of lines of a paragraph that must appear at the top of a page or column after a page or column break.",
    default_value: "2",
    inherited: "yes",
    animatable: "no",
    applies_to: ["block container elements"],
    note: "widows and orphans are used in print stylesheets to prevent isolated lines. widows controls lines at the top of a new page; orphans controls lines at the bottom of a page before a break.",
    syntax: "widows: number | initial | inherit;",
    values: [
      {
        value: "number",
        description: "The minimum number of lines that must appear at the top of a page after a break. Default is 2.",
        syntax_example: "p { widows: 3; }"
      },
      {
        value: "initial",
        description: "Resets to default (2).",
        syntax_example: "p { widows: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { widows: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "orphans",
        condition: "orphans is the companion property to widows. orphans sets the minimum number of lines at the bottom of a page before a break.",
        css_version: "CSS2",
        path: "CSS2 > Paged Media > orphans",
        syntax_example: "p { widows: 2; orphans: 2; }",
        section_id: "css2-paged-orphans"
      }
    ],
    examples: [
      {
        label: "Prevent widow lines when printing",
        code: `@media print {\n  p {\n    widows: 3;\n    orphans: 3;\n  }\n}`
      }
    ],
    browser_support: { chrome: "25", edge: "12", firefox: "Not supported", safari: "1.3", opera: "9.2" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Positioning",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // clip
          {
    property: "clip",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_clip.php",
    definition: "Clips (hides) a portion of an absolutely positioned element. Defines a rectangular clipping region.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["absolutely positioned elements (position: absolute or fixed)"],
    note: "The clip property is deprecated in CSS3. Use clip-path instead for more flexible and powerful clipping.",
    syntax: "clip: auto | rect(top, right, bottom, left) | initial | inherit;",
    values: [
      { value: "auto", description: "Default. No clipping is applied.", syntax_example: "img { clip: auto; }" },
      { value: "rect(top, right, bottom, left)", description: "Defines a rectangle. Values are measured from the top-left corner of the element.", syntax_example: "img { position: absolute; clip: rect(0px, 100px, 100px, 0px); }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "img { clip: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "img { clip: inherit; }" }
    ],
    examples: [{ label: "Clip image to 100x100px region", code: `img {\n  position: absolute;\n  clip: rect(0px, 100px, 100px, 0px);\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "7" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Tables",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // caption-side
          {
    property: "caption-side",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_tab_caption-side.php",
    definition: "Specifies the placement of a table caption — above or below the table.",
    default_value: "top",
    inherited: "yes",
    animatable: "no",
    applies_to: ["table-caption elements"],
    syntax: "caption-side: top | bottom | initial | inherit;",
    values: [
      { value: "top", description: "Default. The caption is placed above the table.", syntax_example: "caption { caption-side: top; }" },
      { value: "bottom", description: "The caption is placed below the table.", syntax_example: "caption { caption-side: bottom; }" },
      { value: "initial", description: "Resets to default (top).", syntax_example: "caption { caption-side: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "caption { caption-side: inherit; }" }
    ],
    examples: [{ label: "Place table caption below the table", code: `table { caption-side: bottom; }` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  },


        // empty-cells
          {
    property: "empty-cells",
    
    group: "E",
    w3schools_url: "https://www.w3schools.com/cssref/pr_tab_empty-cells.php",
    definition: "Sets whether to show or hide the borders and background of empty table cells.",
    default_value: "show",
    inherited: "yes",
    animatable: "no",
    applies_to: ["table-cell elements"],
    note: "empty-cells has no effect when border-collapse: collapse is set on the table. It only applies when border-collapse: separate is used.",
    tip: "Use empty-cells: hide to clean up the appearance of tables that have sparse data, so empty cells don't display a visible box.",
    syntax: "empty-cells: show | hide | initial | inherit;",
    values: [
      {
        value: "show",
        description: "Default. Borders and backgrounds are displayed on empty cells just like filled cells.",
        syntax_example: "table { empty-cells: show; }"
      },
      {
        value: "hide",
        description: "Borders and backgrounds are hidden on empty cells. The cell still occupies space in the layout.",
        syntax_example: "table { empty-cells: hide; }"
      },
      {
        value: "initial",
        description: "Resets to default value (show).",
        syntax_example: "table { empty-cells: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "table { empty-cells: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "border-collapse",
        condition: "empty-cells only works when border-collapse is set to separate (the default). When border-collapse: collapse is set, empty-cells is ignored.",
        css_version: "CSS2",
        path: "CSS2 > Table Properties > border-collapse",
        syntax_example: "table { border-collapse: separate; empty-cells: hide; }",
        section_id: "css2-table-border-collapse"
      },
      {
        name: "visibility",
        condition: "An alternative to empty-cells: hide is setting visibility: hidden on individual empty td elements, which hides the cell content and border while keeping its space.",
        css_version: "CSS2",
        path: "CSS2 > Visual Formatting > visibility",
        syntax_example: "td:empty { visibility: hidden; }",
        section_id: "css2-visual-visibility"
      }
    ],
    examples: [
      {
        label: "Hide borders on empty table cells",
        code: `table {\n  border-collapse: separate;\n  empty-cells: hide;\n}\n\ntable, td, th {\n  border: 1px solid #c8a96e;\n}`
      },
      {
        label: "Show all cells including empty ones",
        code: `table {\n  border-collapse: separate;\n  empty-cells: show;\n}\n\ntable, td, th {\n  border: 1px solid #c8a96e;\n  padding: 8px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1.2", opera: "4" }
  },


        // table-layout
          {
    property: "table-layout",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_tab_table-layout.php",
    definition: "Sets the algorithm used to lay out the cells, rows, and columns of a table.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["table elements"],
    tip: "Use table-layout: fixed with a defined width for better performance on large tables — the browser doesn't need to read all cell content before rendering.",
    note: `auto (default): Column widths are determined by the widest content in each column. Browser must read entire table before rendering.
fixed: Column widths are determined by the first row or explicit col widths. Browser renders immediately. Overflow is handled by overflow property.`,
    syntax: "table-layout: auto | fixed | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Column widths are set by cell content.", syntax_example: "table { table-layout: auto; }" },
      { value: "fixed", description: "Column widths are set by the first row. Faster rendering.", syntax_example: "table { table-layout: fixed; width: 100%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "table { table-layout: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "table { table-layout: inherit; }" }
    ],
    examples: [{ label: "Fixed layout table with equal columns", code: `table {\n  table-layout: fixed;\n  width: 100%;\n}\n\nth, td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}` }],
    browser_support: { chrome: "14", edge: "12", firefox: "1", safari: "1", opera: "7" }
  },


        // vertical-align
          {
    property: "vertical-align",
    
    group: "V",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_vertical-align.php",
    definition: "Sets the vertical alignment of an inline, inline-block, or table-cell element relative to its line box or table cell.",
    default_value: "baseline",
    inherited: "no",
    animatable: "yes",
    applies_to: ["inline elements, inline-block elements, and table-cell elements"],
    tip: "vertical-align does NOT work on block-level elements. To vertically center block content, use flexbox (align-items: center) or CSS Grid instead.",
    note: `vertical-align applies to inline and inline-block elements — it aligns them relative to the line they sit on.
It also applies to table cells — aligning cell content vertically.

For block-level centering use:
.container { display: flex; align-items: center; }
or
.container { display: grid; place-items: center; }`,
    syntax: "vertical-align: baseline | sub | super | top | text-top | middle | bottom | text-bottom | length | % | initial | inherit;",
    values: [
      { value: "baseline", description: "Default. Aligns with the baseline of the parent element.", syntax_example: "img { vertical-align: baseline; }" },
      { value: "sub", description: "Aligns the element as a subscript.", syntax_example: "span { vertical-align: sub; }" },
      { value: "super", description: "Aligns the element as a superscript.", syntax_example: "span { vertical-align: super; }" },
      { value: "top", description: "Aligns the top of the element with the top of the tallest element on the line.", syntax_example: "img { vertical-align: top; }" },
      { value: "text-top", description: "Aligns the top of the element with the top of the parent element's font.", syntax_example: "img { vertical-align: text-top; }" },
      { value: "middle", description: "Aligns the middle of the element with the middle of the parent element.", syntax_example: "img { vertical-align: middle; }" },
      { value: "bottom", description: "Aligns the bottom of the element with the bottom of the lowest element on the line.", syntax_example: "img { vertical-align: bottom; }" },
      { value: "text-bottom", description: "Aligns the bottom of the element with the bottom of the parent element's font.", syntax_example: "img { vertical-align: text-bottom; }" },
      { value: "length", description: "Raises or lowers the element by a fixed amount. Negative values lower the element.", syntax_example: "sup { vertical-align: 4px; }", units_note: "Accepts px, em, rem." },
      { value: "%", description: "Raises or lowers the element as a percentage of the line-height.", syntax_example: "span { vertical-align: 50%; }" },
      { value: "initial", description: "Resets to default (baseline).", syntax_example: "img { vertical-align: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "img { vertical-align: inherit; }" }
    ],
    additional_properties: [
      {
        name: "align-items",
        condition: "For vertically centering block-level content, use align-items: center on a flex container or place-items: center on a grid container instead of vertical-align.",
        css_version: "CSS3",
        path: "CSS3 > Flexbox > align-items",
        syntax_example: ".container { display: flex; align-items: center; }",
        section_id: "css3-flexbox-align-items"
      }
    ],
    examples: [
      { label: "Align icon with text", code: `.icon {\n  vertical-align: middle;\n  margin-right: 8px;\n}` },
      { label: "Table cell vertical center", code: `td {\n  vertical-align: middle;\n  padding: 12px;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Text",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // text-shadow
  {
    property: "text-shadow",
    category: "CSS3",
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-shadow.php",
    definition: "Adds one or more shadow effects to text. Multiple shadows can be stacked by separating them with commas.",
    default_value: "none",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Stack multiple text-shadow values with commas to create glowing or layered text effects.",
    note: `Shadow syntax order: h-offset v-offset blur color
Do not add spaces between values and units:
Incorrect: text-shadow: 2 px 2 px #000;
Correct:   text-shadow: 2px 2px #000;`,
    syntax: "text-shadow: h-offset v-offset blur color | none | initial | inherit;",
    values: [
      { value: "none", description: "Default. No shadow.", syntax_example: "p { text-shadow: none; }" },
      { value: "h-offset v-offset color", description: "Horizontal and vertical offset with color. No blur.", syntax_example: "h1 { text-shadow: 2px 2px #000; }" },
      { value: "h-offset v-offset blur color", description: "Full shadow with blur radius.", syntax_example: "h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }", units_note: "Accepts px for offsets and blur. Color accepts any valid CSS color." },
      { value: "multiple shadows", description: "Stack shadows by separating with commas.", syntax_example: "h1 { text-shadow: 1px 1px #c8a96e, 2px 2px #888; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "p { text-shadow: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-shadow: inherit; }" }
    ],
    examples: [
      { label: "Subtle text shadow", code: `h1 {\n  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);\n}` },
      { label: "Glow effect", code: `.glow {\n  color: #c8a96e;\n  text-shadow: 0 0 10px #c8a96e, 0 0 20px #c8a96e, 0 0 40px rgba(200,169,110,0.5);\n}` }
    ],
    browser_support: { chrome: "2", edge: "12", firefox: "3.5", safari: "1.1", opera: "9.5" }
  },
    // unicode-bidi
  {
    property: "unicode-bidi",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_unicode-bidi.php",
    definition: "Used together with the direction property to set or override the bidirectional text algorithm for inline-level elements.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "unicode-bidi and direction work as a pair. The direction property sets the base direction; unicode-bidi controls how the Unicode bidirectional algorithm applies. This is an advanced property typically used for multilingual content.",
    syntax: "unicode-bidi: normal | embed | bidi-override | isolate | isolate-override | plaintext | initial | inherit;",
    values: [
      { value: "normal", description: "Default. The element does not open an additional level of embedding.", syntax_example: "p { unicode-bidi: normal; }" },
      { value: "embed", description: "For inline elements, opens an additional level of embedding.", syntax_example: "span { direction: rtl; unicode-bidi: embed; }" },
      { value: "bidi-override", description: "Overrides the bidirectional algorithm. Characters are reordered to match the direction property.", syntax_example: "span { direction: rtl; unicode-bidi: bidi-override; }" },
      { value: "isolate", description: "The element is isolated from its siblings for bidirectional purposes.", syntax_example: "span { unicode-bidi: isolate; }" },
      { value: "isolate-override", description: "Combines isolate and bidi-override.", syntax_example: "span { unicode-bidi: isolate-override; }" },
      { value: "plaintext", description: "Sets directionality using the Unicode P2 and P3 rules without considering the parent.", syntax_example: "p { unicode-bidi: plaintext; }" },
      { value: "initial", description: "Resets to default (normal).", syntax_example: "p { unicode-bidi: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { unicode-bidi: inherit; }" }
    ],
    examples: [
      { label: "Embed RTL text inline", code: ".arabic {\n  direction: rtl;\n  unicode-bidi: embed;\n}" }
    ]
  }



      ]
    }

  ] // end topics
}; // end css2_lessons
