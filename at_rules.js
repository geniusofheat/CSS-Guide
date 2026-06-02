// css_atrules.js
// CSS At-Rules lesson data
// Organized by CSS version

const css_atrules = {

  // ─────────────────────────────────────────────────────────────────────────
  // CSS2 AT-RULES
  // ─────────────────────────────────────────────────────────────────────────
  css2: [

    {
      property: "@charset",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_charset.php",
      definition: "Specifies the character encoding of an external CSS stylesheet. Must be the very first rule in the file if used.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["external CSS files"],
      note: "@charset must be the very first thing in the CSS file — no space, no comment, no BOM before it.\nCorrect:   @charset \"UTF-8\";\nIncorrect: /* comment */ @charset \"UTF-8\";",
      syntax: '@charset "charset-name";',
      values: [
        { value: '"UTF-8"', description: "The most widely used character encoding. Supports virtually all characters from all languages.", syntax_example: '@charset "UTF-8";' },
        { value: '"ISO-8859-1"', description: "Latin-1 encoding. Limited to Western European characters.", syntax_example: '@charset "ISO-8859-1";' }
      ],
      examples: [
        { label: "Declare UTF-8 encoding at top of CSS file", code: '@charset "UTF-8";\n\nbody {\n  font-family: \'Playfair Display\', serif;\n}' }
      ]
    },

    {
      property: "@import",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_import.php",
      definition: "Imports an external CSS stylesheet into the current stylesheet. Must appear at the top of the file before any other rules except @charset.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the document"],
      tip: "For performance, prefer using HTML <link> tags instead of @import. Multiple @import rules block parallel loading — each imported file must finish loading before the next begins.",
      note: "@import must come before all other rules except @charset:\nCorrect:\n@charset \"UTF-8\";\n@import url('styles.css');\nbody { ... }\n\nIncorrect:\nbody { ... }\n@import url('styles.css'); /* ignored — too late */",
      syntax: "@import url('stylesheet.css'); or @import 'stylesheet.css';",
      values: [
        { value: "url('path')", description: "The path to the external CSS file using url() notation.", syntax_example: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display');" },
        { value: "'path'", description: "The path to the external CSS file as a string (without url()).", syntax_example: "@import 'variables.css';" },
        { value: "url('path') media-query", description: "Import a stylesheet conditionally based on a media query.", syntax_example: "@import url('print.css') print;\n@import url('mobile.css') screen and (max-width: 600px);" }
      ],
      examples: [
        { label: "Import Google Font at top of stylesheet", code: "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');\n\nbody {\n  font-family: 'Playfair Display', serif;\n}" },
        { label: "Import local partials", code: "@import 'variables.css';\n@import 'reset.css';\n@import 'typography.css';" }
      ]
    },

    {
      property: "@media",
      w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mediaquery.php",
      definition: "Applies CSS rules conditionally based on the characteristics of the device or viewport — such as screen width, height, orientation, resolution, or color capability.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the document — conditionally applies rules"],
      tip: "Design mobile-first: write base styles for small screens, then use min-width media queries to progressively enhance for larger screens.",
      note: "Common breakpoints (mobile-first):\n@media (min-width: 480px)  { /* small phones landscape */ }\n@media (min-width: 768px)  { /* tablets */ }\n@media (min-width: 1024px) { /* desktops */ }\n@media (min-width: 1280px) { /* wide desktops */ }\n\nMedia types: all, screen, print, speech",
      syntax: "@media media-type and (condition) { /* CSS rules */ }",
      values: [
        { value: "min-width", description: "Applies styles when the viewport is at least the specified width. Used in mobile-first design.", syntax_example: "@media (min-width: 768px) { .sidebar { display: block; } }" },
        { value: "max-width", description: "Applies styles when the viewport is at most the specified width. Used in desktop-first design.", syntax_example: "@media (max-width: 767px) { .nav { flex-direction: column; } }" },
        { value: "orientation: portrait / landscape", description: "Applies styles based on device orientation.", syntax_example: "@media (orientation: landscape) { .hero { height: 50vh; } }" },
        { value: "prefers-color-scheme: dark / light", description: "Applies styles based on the user's OS color mode preference.", syntax_example: "@media (prefers-color-scheme: dark) { body { background: #1a1a2e; color: #e8e8e8; } }" },
        { value: "prefers-reduced-motion", description: "Applies styles when the user has requested reduced motion in their OS settings.", syntax_example: "@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }" },
        { value: "print", description: "Applies styles only when the page is being printed.", syntax_example: "@media print { .no-print { display: none; } }" }
      ],
      examples: [
        { label: "Mobile-first responsive layout", code: "/* Base: single column */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n/* Tablet: two columns */\n@media (min-width: 768px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}\n\n/* Desktop: three columns */\n@media (min-width: 1024px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}" },
        { label: "Dark mode styles", code: "@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #1a1a2e;\n    color: #e8e8e8;\n  }\n}" }
      ]
    },

    {
      property: "@namespace",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_namespace.php",
      definition: "Declares an XML namespace prefix for use in CSS selectors. Used when styling XML or XHTML documents that use namespaces, such as SVG or MathML embedded in HTML.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["XML and XHTML documents with namespaces"],
      tip: "For standard HTML5 web pages, @namespace is rarely needed. It becomes relevant when working with inline SVG or MathML that uses namespace prefixes.",
      note: "@namespace must appear after any @charset and @import rules, but before all other rules.\nThe default namespace applies to all elements without a prefix.\nA prefixed namespace only applies to elements using that prefix in selectors.",
      syntax: "@namespace prefix url('namespace-uri');",
      values: [
        { value: "url('namespace-uri')", description: "Declares a default namespace — applies to all unprefixed elements.", syntax_example: "@namespace url('http://www.w3.org/1999/xhtml');" },
        { value: "prefix url('namespace-uri')", description: "Declares a prefixed namespace for use in selectors.", syntax_example: "@namespace svg url('http://www.w3.org/2000/svg');\nsvg|circle { fill: #c8a96e; }" }
      ],
      examples: [
        { label: "Declare SVG namespace", code: "@namespace url('http://www.w3.org/1999/xhtml');\n@namespace svg url('http://www.w3.org/2000/svg');\n\nsvg|circle {\n  fill: #c8a96e;\n  stroke: #1a1a2e;\n}" }
      ]
    },

    {
      property: "@page",
      w3schools_url: "https://www.w3schools.com/cssref/css3_pr_page.php",
      definition: "Modifies the page box when printing — used to set margins, size, and orientation of printed pages.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the printed page"],
      tip: "Always include @page rules inside @media print to keep print styles separate from screen styles.",
      syntax: "@page { margin: ...; size: ...; }",
      values: [
        { value: "margin", description: "Sets the margin of the printed page.", syntax_example: "@page { margin: 2cm; }" },
        { value: "size", description: "Sets the size and orientation: auto, portrait, landscape, or explicit dimensions.", syntax_example: "@page { size: A4 landscape; }" },
        { value: ":first", description: "Styles the first page only.", syntax_example: "@page :first { margin-top: 4cm; }" },
        { value: ":left / :right", description: "Styles left or right pages in double-sided printing.", syntax_example: "@page :left { margin-left: 3cm; }\n@page :right { margin-right: 3cm; }" }
      ],
      examples: [
        { label: "Print page margins", code: "@media print {\n  @page {\n    margin: 2cm;\n    size: A4 portrait;\n  }\n}" }
      ]
    }

  ], // end css2

  // ─────────────────────────────────────────────────────────────────────────
  // CSS3 AT-RULES
  // ─────────────────────────────────────────────────────────────────────────
  css3: [

    {
      property: "@container",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_container.php",
      definition: "A CSS at-rule that applies styles to elements based on the size of their containing element (container query), rather than the viewport size as with @media.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["elements with a defined containment context"],
      tip: "To use @container, first define a containment context on the parent element with container-type: inline-size (or size). Then query it with @container.",
      note: "Container queries are a major CSS advancement — they allow truly component-driven responsive design independent of the viewport.",
      syntax: "@container <name> (<condition>) { /* styles */ }",
      values: [
        { value: "inline-size", description: "Query based on the container's inline (horizontal) size.", syntax_example: ".card-wrapper { container-type: inline-size; }\n@container (min-width: 400px) { .card { flex-direction: row; } }" },
        { value: "size", description: "Query based on both inline and block size.", syntax_example: ".wrapper { container-type: size; }\n@container (min-height: 300px) { .hero { font-size: 2rem; } }" },
        { value: "named container", description: "Optionally name the container to target specifically.", syntax_example: ".sidebar { container-type: inline-size; container-name: sidebar; }\n@container sidebar (min-width: 300px) { .widget { display: grid; } }" }
      ],
      examples: [
        { label: "Responsive card based on container width", code: ".card-wrapper {\n  container-type: inline-size;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n}\n\n@container (min-width: 500px) {\n  .card {\n    flex-direction: row;\n  }\n}" }
      ]
    },

    {
      property: "@counter-style",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_counter-style.php",
      definition: "Defines a custom counter style that can be used with list-style-type or the counter() and counters() functions.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["list elements"],
      tip: "Use @counter-style to create custom bullet styles like emoji, symbols, or any pattern beyond the built-in types.",
      syntax: "@counter-style name { system: ...; symbols: ...; suffix: ...; }",
      values: [
        { value: "system", description: "Defines the algorithm: cyclic, numeric, alphabetic, symbolic, additive, fixed.", syntax_example: "@counter-style thumbs { system: cyclic; symbols: '\\1F44D'; suffix: ' '; }" },
        { value: "symbols", description: "The symbols or strings used to represent counter values.", syntax_example: "@counter-style stars { system: cyclic; symbols: ★ ☆; suffix: ' '; }" },
        { value: "suffix", description: "The string appended after the counter value (default is '. ').", syntax_example: "@counter-style custom { system: numeric; symbols: '0' '1' '2'; suffix: ') '; }" },
        { value: "prefix", description: "A string prepended before the counter value.", syntax_example: "@counter-style custom { system: fixed; symbols: A B C; prefix: '('; }" },
        { value: "fallback", description: "The counter style to use if this style can't represent a value.", syntax_example: "@counter-style custom { system: fixed; symbols: ①②③; fallback: decimal; }" }
      ],
      examples: [
        { label: "Thumbs-up bullet list", code: "@counter-style thumbs {\n  system: cyclic;\n  symbols: \"\\1F44D\";\n  suffix: \" \";\n}\n\nul {\n  list-style: thumbs;\n}" }
      ]
    },

    {
      property: "@font-face",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_font-face.php",
      definition: "Allows custom fonts to be loaded from a file or URL and used in the page. Defines the font name and source so it can be referenced with font-family.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the document — defines a font for use anywhere"],
      tip: "Always include multiple format() hints and a web-safe font fallback. The woff2 format has the best compression and browser support.",
      note: "The font-family name you define in @font-face is arbitrary — it's the name you'll use in your font-family declarations. It does not have to match the actual font file name.\n\nFormat priority (best to worst compression/support):\n1. woff2\n2. woff\n3. ttf / otf",
      syntax: "@font-face { font-family: 'name'; src: url('path.woff2') format('woff2'); }",
      values: [
        { value: "font-family", description: "Required. The name you assign to the font for use in CSS declarations.", syntax_example: "@font-face { font-family: 'MyFont'; src: url('myfont.woff2') format('woff2'); }" },
        { value: "src", description: "Required. The path to the font file. Multiple sources separated by commas provide fallbacks.", syntax_example: "@font-face {\n  font-family: 'MyFont';\n  src: url('myfont.woff2') format('woff2'),\n       url('myfont.woff') format('woff');\n}" },
        { value: "font-weight", description: "Optional. Specifies which weight this font file represents.", syntax_example: "@font-face { font-family: 'MyFont'; src: url('myfont-bold.woff2') format('woff2'); font-weight: bold; }" },
        { value: "font-style", description: "Optional. Specifies if this file is normal, italic, or oblique.", syntax_example: "@font-face { font-family: 'MyFont'; src: url('myfont-italic.woff2') format('woff2'); font-style: italic; }" },
        { value: "font-display", description: "Controls how the font is displayed while loading: auto, block, swap, fallback, optional.", syntax_example: "@font-face { font-family: 'MyFont'; src: url('myfont.woff2') format('woff2'); font-display: swap; }" }
      ],
      examples: [
        { label: "Load and use a custom font", code: "@font-face {\n  font-family: 'Playfair';\n  src: url('playfair.woff2') format('woff2'),\n       url('playfair.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\nbody {\n  font-family: 'Playfair', Georgia, serif;\n}" }
      ]
    },

    {
      property: "@font-palette-values",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_font-palette-values.php",
      definition: "Allows customization of the color palette of a color font — overriding specific palette colors or selecting a predefined palette from the font.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["color font elements"],
      note: "Color fonts (like Noto Color Emoji or Twemoji Mozilla) contain built-in color palettes. @font-palette-values lets you override those colors or pick an alternate palette.",
      syntax: "@font-palette-values --name { font-family: 'FontName'; base-palette: number; override-colors: index color; }",
      values: [
        { value: "font-family", description: "Required. The color font this palette applies to.", syntax_example: "@font-palette-values --MyPalette { font-family: 'Bungee Shade'; base-palette: 0; }" },
        { value: "base-palette", description: "Selects which built-in palette from the font to use as a starting point.", syntax_example: "@font-palette-values --MyPalette { font-family: 'Rocher'; base-palette: 1; }" },
        { value: "override-colors", description: "Overrides specific colors in the palette by index number.", syntax_example: "@font-palette-values --MyPalette { font-family: 'Rocher'; override-colors: 0 #c8a96e, 1 #1a1a2e; }" }
      ],
      examples: [
        { label: "Custom color font palette", code: "@font-palette-values --GoldPalette {\n  font-family: 'Bungee Shade';\n  base-palette: 0;\n  override-colors: 0 #c8a96e, 1 #1a1a2e;\n}\n\nh1 {\n  font-family: 'Bungee Shade';\n  font-palette: --GoldPalette;\n}" }
      ]
    },

    {
      property: "@keyframes",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_keyframes.php",
      definition: "Defines the intermediate steps (keyframes) in a CSS animation sequence. Each keyframe specifies the CSS styles the element should have at a given point during the animation.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["used with animation-name on any element"],
      tip: "Use from and to as shorthand for 0% and 100%. For more complex animations, define as many percentage keyframes as needed.",
      note: "The @keyframes name must match the animation-name property on the element exactly.\nIf the name contains spaces, wrap it in quotes.\n\nKeyframe selectors:\nfrom  = 0%  (start)\nto    = 100% (end)\nAny % value defines an intermediate step.",
      syntax: "@keyframes animationname { from { ... } to { ... } }",
      values: [
        { value: "from", description: "Shorthand for 0% — the starting styles of the animation.", syntax_example: "@keyframes slide { from { left: 0; } to { left: 300px; } }" },
        { value: "to", description: "Shorthand for 100% — the ending styles of the animation.", syntax_example: "@keyframes fade { from { opacity: 1; } to { opacity: 0; } }" },
        { value: "percentage", description: "Any percentage from 0% to 100% defines the styles at that point in the animation cycle.", syntax_example: "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }" }
      ],
      examples: [
        { label: "Simple slide animation", code: "@keyframes slidein {\n  from { transform: translateX(-100%); opacity: 0; }\n  to   { transform: translateX(0);    opacity: 1; }\n}\n\n.card {\n  animation: slidein 0.5s ease-out;\n}" },
        { label: "Multi-step pulse animation", code: "@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.05); }\n  100% { transform: scale(1); }\n}\n\n.btn {\n  animation: pulse 2s infinite;\n}" }
      ]
    },

    {
      property: "@layer",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_layer.php",
      definition: "Declares a cascade layer — a named group of CSS rules with an explicit priority order. Lower layers have lower priority; later-declared layers win over earlier ones.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the document — organizes CSS rules into priority groups"],
      tip: "Declare your layer order at the top of your stylesheet before defining any layers. This sets the priority regardless of where the actual rules appear.",
      note: "Layer order determines cascade priority — NOT the order rules appear in the file.\nThe last declared layer has the highest priority.\n\nBest practice: declare all layers at the top first:\n@layer reset, base, components, utilities;",
      syntax: "@layer layername { /* CSS rules */ } or @layer layername;",
      values: [
        { value: "@layer name { rules }", description: "Defines a named cascade layer containing CSS rules.", syntax_example: "@layer base {\n  body { margin: 0; font-family: sans-serif; }\n}" },
        { value: "@layer name;", description: "Declares a layer order without defining rules yet.", syntax_example: "@layer reset, base, components, utilities;" },
        { value: "@layer (anonymous)", description: "A layer without a name. Cannot be appended to later.", syntax_example: "@layer {\n  p { color: #333; }\n}" }
      ],
      examples: [
        { label: "Define and use cascade layers", code: "@layer reset, base, components, utilities;\n\n@layer reset {\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n}\n\n@layer base {\n  body { font-family: 'Crimson Pro', serif; color: #e8e8e8; background: #1a1a2e; }\n}\n\n@layer utilities {\n  .text-gold { color: #c8a96e; }\n}" }
      ]
    },

    {
      property: "@property",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_property.php",
      definition: "Registers a custom CSS property (CSS variable) with a defined type, initial value, and inheritance behavior. Enables typed custom properties that can be animated.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the document — defines a typed custom property"],
      tip: "Use @property to animate CSS custom properties (variables) — regular CSS variables cannot be animated, but @property registered properties can.",
      note: "@property requires three descriptors:\nsyntax     — the type: <color>, <length>, <number>, <percentage>, <angle>, etc.\ninherits   — true or false\ninitial-value — the default value",
      syntax: "@property --name { syntax: '...'; inherits: true|false; initial-value: ...; }",
      values: [
        { value: "syntax", description: "Defines the type of the custom property.", syntax_example: "@property --my-color { syntax: '<color>'; inherits: false; initial-value: #c8a96e; }" },
        { value: "inherits", description: "Whether the property inherits its value from the parent element.", syntax_example: "@property --my-size { syntax: '<length>'; inherits: true; initial-value: 0px; }" },
        { value: "initial-value", description: "The default value of the custom property.", syntax_example: "@property --my-angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }" }
      ],
      examples: [
        { label: "Animate a gradient via custom property", code: "@property --gradient-angle {\n  syntax: '<angle>';\n  inherits: false;\n  initial-value: 0deg;\n}\n\n.animated-gradient {\n  background: linear-gradient(var(--gradient-angle), #1a1a2e, #c8a96e);\n  animation: rotate-gradient 4s linear infinite;\n}\n\n@keyframes rotate-gradient {\n  to { --gradient-angle: 360deg; }\n}" }
      ]
    },

    {
      property: "@scope",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_scope.php",
      definition: "Limits CSS rules to a specific subtree of the DOM — styles inside @scope only apply to elements within the defined scope root and optional limit.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["elements within the defined scope"],
      tip: "Use @scope to write component-scoped CSS without needing BEM naming conventions or CSS Modules.",
      note: "@scope is a newer CSS feature. Always check browser support before using in production.",
      syntax: "@scope (scope-root) to (scope-limit) { /* CSS rules */ }",
      values: [
        { value: "@scope (.component)", description: "Styles apply only inside elements matching .component.", syntax_example: "@scope (.card) {\n  h2 { font-size: 1.2rem; }\n  p  { color: #ccc; }\n}" },
        { value: "@scope (.root) to (.limit)", description: "Styles apply inside .root but stop at .limit — a donut scope.", syntax_example: "@scope (.article) to (.ad-block) {\n  p { line-height: 1.6; }\n}" }
      ],
      examples: [
        { label: "Scoped card styles", code: "@scope (.card) {\n  h2 {\n    font-size: 1.25rem;\n    color: #c8a96e;\n  }\n  p {\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n}" }
      ]
    },

    {
      property: "@starting-style",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_starting-style.php",
      definition: "Defines the initial styles for an element before its first style update — enabling entry animations for elements that are newly added to the DOM or transition from display: none.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["any element with CSS transitions"],
      tip: "Use @starting-style to animate elements entering the page without JavaScript — previously impossible with CSS alone.",
      note: "@starting-style is a newer CSS feature with growing browser support. It works alongside CSS transitions to define the 'from' state of an entry animation.",
      syntax: "@starting-style { selector { property: value; } }",
      values: [
        { value: "@starting-style { ... }", description: "Defines the starting values for properties before the first transition fires.", syntax_example: ".dialog {\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n\n@starting-style {\n  .dialog { opacity: 0; }\n}" }
      ],
      examples: [
        { label: "Fade in dialog on open", code: ".dialog[open] {\n  opacity: 1;\n  translate: 0 0;\n  transition: opacity 0.3s, translate 0.3s;\n}\n\n@starting-style {\n  .dialog[open] {\n    opacity: 0;\n    translate: 0 -20px;\n  }\n}" }
      ]
    },

    {
      property: "@supports",
      w3schools_url: "https://www.w3schools.com/cssref/atrule_supports.php",
      definition: "Applies CSS rules only if the browser supports a specific CSS feature. Used for progressive enhancement — providing fallbacks for browsers that lack support.",
      default_value: "n/a",
      inherited: "n/a",
      animatable: "n/a",
      applies_to: ["the document — conditionally applies rules based on feature support"],
      tip: "Use @supports not() to provide styles specifically for browsers that do NOT support a feature.",
      syntax: "@supports (property: value) { /* CSS rules */ }",
      values: [
        { value: "@supports (property: value)", description: "Applies styles only if the browser supports the specified property and value.", syntax_example: "@supports (display: grid) {\n  .container { display: grid; }\n}" },
        { value: "@supports not (property: value)", description: "Applies styles only if the browser does NOT support the feature.", syntax_example: "@supports not (display: grid) {\n  .container { display: flex; }\n}" },
        { value: "@supports (condition) and (condition)", description: "Both conditions must be true.", syntax_example: "@supports (display: grid) and (gap: 1rem) {\n  .container { display: grid; gap: 1rem; }\n}" },
        { value: "@supports (condition) or (condition)", description: "Either condition being true applies the styles.", syntax_example: "@supports (transform: rotate(1deg)) or (-webkit-transform: rotate(1deg)) {\n  div { transform: rotate(45deg); }\n}" }
      ],
      examples: [
        { label: "Grid with flexbox fallback", code: "/* Fallback for all browsers */\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Enhanced for grid-supporting browsers */\n@supports (display: grid) {\n  .container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n}" }
      ]
    }

  ] // end css3

}; // end css_atrules
