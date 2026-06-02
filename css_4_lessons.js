// css4_lessons.js
// CSS4 lesson data object
// Paste each property object beneath its comment banner
// Rename: lesson → property | Remove: group, category, browser_support

const css4_lessons = {
  version: "CSS4",
  released: "2011+",
  definition: "CSS4 refers to a collection of modern CSS modules extending CSS3 with new selectors, color functions, and UI controls.",
  what_it_introduced: "CSS4 introduced accent-color, color-scheme, caret-color, logical properties, container queries, and new pseudo-class selectors.",
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

        // accent-color
          {
    property: "accent-color",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css4_pr_accent-color.php",
    definition: "Sets the accent color for user-interface controls such as checkboxes, radio buttons, range sliders, and progress bars.",
    default_value: "auto",
   
    applies_to: ["input[type=checkbox]", "input[type=radio]", "input[type=range]", "progress"],
    syntax: "accent-color: auto | <color> | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "The browser chooses the accent color, typically matching the OS or user-agent theme.",
        syntax_example: "input[type=checkbox] { accent-color: auto; }"
      },
      {
        value: "<color>",
        description: "Any valid CSS color value (hex, rgb, hsl, named color, etc.) used as the accent color.",
        syntax_example: "input[type=checkbox] { accent-color: #c8a96e; }",
        units_note: "Accepts all legal color values. See CSS Colors for full reference."
      },
      {
        value: "initial",
        description: "Resets the property to its default value (auto).",
        syntax_example: "input { accent-color: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits the accent-color value from the parent element.",
        syntax_example: "input { accent-color: inherit; }"
      }
    ],
    examples: [
      {
        label: "Set different accent colors per input type",
        code: `input[type=checkbox] { accent-color: red; }
input[type=radio]    { accent-color: green; }
input[type=range]    { accent-color: rgb(0, 0, 255); }
progress             { accent-color: hsl(39, 100%, 50%); }`
      }
    ],
    browser_support: {
      chrome: "93",
      edge: "93",
      firefox: "92",
      safari: "15.4",
      opera: "79"
    }
  },


        // caret-color
          {
    property: "caret-color",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_caret-color.php",
    definition: "Sets the color of the text input cursor (caret) in form fields, contenteditable elements, and other editable areas.",
    default_value: "auto",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements that accept text input"],
    tip: "Useful for matching the caret color to your app's theme — especially on dark backgrounds where the default black caret may be hard to see.",
    syntax: "caret-color: auto | color | initial | inherit;",
    values: [
      { value: "auto", description: "Default. The browser uses the current text color for the caret.", syntax_example: "input { caret-color: auto; }" },
      { value: "color", description: "Any valid CSS color value.", syntax_example: "input { caret-color: #c8a96e; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "input { caret-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "input { caret-color: inherit; }" }
    ],
    examples: [{ label: "Gold caret in a text input", code: `input[type="text"] {\n  background: #1a1a2e;\n  color: #fff;\n  caret-color: #c8a96e;\n}` }],
    browser_support: { chrome: "57", edge: "79", firefox: "53", safari: "11.1", opera: "44" }
  },


        // pointer-events
          {
    property: "pointer-events",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_pointer-events.php",
    definition: "Sets whether an element can be the target of mouse or touch events — including clicks, hover, and drag.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use pointer-events: none on overlay elements like tooltips or loading screens to allow clicks to pass through to elements underneath.",
    note: "pointer-events: none makes an element completely non-interactive — it cannot receive hover, click, or touch events. It is still visible and takes up space.",
    syntax: "pointer-events: auto | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default. The element receives pointer events normally.", syntax_example: "div { pointer-events: auto; }" },
      { value: "none", description: "The element never receives pointer events. Clicks pass through to elements below.", syntax_example: ".overlay { pointer-events: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { pointer-events: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { pointer-events: inherit; }" }
    ],
    examples: [
      { label: "Click-through overlay", code: `.tooltip {\n  pointer-events: none;\n  position: absolute;\n  background: rgba(0,0,0,0.8);\n}` },
      { label: "Disabled button", code: `button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}` }
    ],
    browser_support: { chrome: "2", edge: "12", firefox: "3.6", safari: "4", opera: "9.5" }
  },


        // resize
          {
    property: "resize",
    category: "CSS3",
    group: "R",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_resize.php",
    definition: "Sets whether an element is resizable by the user, and if so, in which direction.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["elements with overflow other than visible"],
    tip: "Use resize: vertical on textarea elements to allow vertical resizing only — preventing users from breaking your layout by dragging horizontally.",
    note: "The resize property only works when overflow is set to something other than visible (use overflow: auto or overflow: hidden). It has no effect on inline elements.",
    syntax: "resize: none | both | horizontal | vertical | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. The element is not resizable.",
        syntax_example: "textarea { resize: none; }"
      },
      {
        value: "both",
        description: "The element can be resized both horizontally and vertically.",
        syntax_example: "div { resize: both; overflow: auto; }"
      },
      {
        value: "horizontal",
        description: "The element can only be resized horizontally.",
        syntax_example: "div { resize: horizontal; overflow: auto; }"
      },
      {
        value: "vertical",
        description: "The element can only be resized vertically.",
        syntax_example: "textarea { resize: vertical; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "textarea { resize: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "textarea { resize: inherit; }"
      }
    ],
    examples: [
      {
        label: "Textarea vertical resize only",
        code: `textarea {\n  resize: vertical;\n  min-height: 100px;\n  width: 100%;\n  padding: 12px;\n}`
      },
      {
        label: "Resizable panel",
        code: `.panel {\n  resize: both;\n  overflow: auto;\n  min-width: 200px;\n  min-height: 150px;\n  border: 1px solid #c8a96e;\n  padding: 16px;\n}`
      }
    ],
    browser_support: { chrome: "4", edge: "79", firefox: "5", safari: "4", opera: "15" }
  },


        // user-select
          {
    property: "user-select",
    category: "CSS3",
    group: "T",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_user-select.php",
    definition: "Controls whether the user can select text in an element.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use user-select: none on UI elements like buttons, labels, and drag handles to prevent accidental text selection when the user double-clicks or drags.",
    note: "user-select: none does not prevent programmatic text selection via JavaScript — it only affects user-initiated selection.",
    syntax: "user-select: auto | none | text | all | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser determines selectability based on context.", syntax_example: "div { user-select: auto; }" },
      { value: "none", description: "Text cannot be selected by the user.", syntax_example: "button { user-select: none; }" },
      { value: "text", description: "Text can be selected.", syntax_example: "p { user-select: text; }" },
      { value: "all", description: "Clicking once selects the entire element's content.", syntax_example: "code { user-select: all; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { user-select: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { user-select: inherit; }" }
    ],
    examples: [
      { label: "Prevent text selection on buttons", code: `.btn {\n  user-select: none;\n  cursor: pointer;\n}` },
      { label: "Select all on click for code snippets", code: `code {\n  user-select: all;\n  cursor: pointer;\n}` }
    ],
    browser_support: { chrome: "54", edge: "79", firefox: "69", safari: "3 (-webkit-)", opera: "41" }
  }


      ]
    }

  ] // end topics
}; // end css4_lessons
