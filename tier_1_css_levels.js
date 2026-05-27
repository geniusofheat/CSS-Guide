// css_levels.js
// Level 1 data file for the CSS Guide engine.
// Contains the four CSS version objects with lesson groups and rich content.

const css_levels = [

  // ─── CSS1 ─────────────────────────────────────────────────────────────────
  {
    version: "CSS1",
    released: "1996",
    lessons: [
      "Fonts & Typography",
      "Color",
      "Backgrounds",
      "Borders",
      "Text",
      "Box Model",
      "Lists",
      "Display & Visibility"
    ],
    definition: "CSS1 was the first official Cascading Style Sheets specification, published by the W3C in December 1996. Before CSS existed, all visual styling had to be written directly inside the HTML — font tags, color attributes, alignment attributes — everything was tangled together in the markup itself. CSS1 introduced the radical idea that structure and presentation should be separated. The HTML would describe what the content is, and the stylesheet would describe how it looks. That single idea changed web development permanently.",
    what_it_introduced: "CSS1 introduced the foundational building blocks that every stylesheet still uses today. It gave developers control over fonts — family, size, weight, and style. It introduced color for text and backgrounds. It defined the box model — the idea that every element on a page is a rectangular box with content, padding, borders, and margins. It introduced text properties like alignment, indentation, letter spacing, and line height. It introduced list styling, basic display control, and the cascade itself — the rules that determine which style wins when multiple rules target the same element. Everything you touch in CSS today has its roots in what CSS1 defined.",
    note: "What makes CSS1 fascinating is not just what it added — it is what it replaced. Before CSS1, if you wanted a heading to be red, you wrapped it in a font tag with a color attribute. If you had fifty headings, you wrote fifty font tags. Changing the color meant editing fifty places. CSS1 introduced the selector, which let you write one rule and apply it everywhere at once. That was not a small improvement. That was a fundamental shift in how web pages were built and maintained.",
    tip: "CSS1 is worth studying even today because it forces you to understand the language at its most basic level. Every property you learn in CSS3 or CSS4 is an extension of ideas that CSS1 planted. The box model you use for flexbox layouts, the cascade you rely on for theming, the font properties you use with Google Fonts — all of it traces back to 1996. When something in a modern stylesheet confuses you, going back to CSS1 logic almost always explains why it works the way it does."
  },

  // ─── CSS2 ─────────────────────────────────────────────────────────────────
  {
    version: "CSS2",
    released: "1998",
    lessons: [
      "Positioning",
      "Float & Clear",
      "Display & Visibility",
      "Tables",
      "Outline",
      "Borders",
      "Content & Counters",
      "Fonts & Typography",
      "Text",
      "Box Model",
      "Selectors"
    ],
    definition: "CSS2 was published by the W3C in 1998, just two years after CSS1. While CSS1 taught the browser how to style content, CSS2 taught the browser how to place it. This was the version that introduced positioning — the ability to take an element completely out of the normal document flow and place it exactly where you wanted it on the page. For the first time, web designers could think about layout in terms of coordinates, layers, and spatial relationships rather than just top-to-bottom stacking. CSS2 also dramatically expanded the selector system, giving developers far more precise control over which elements a rule targets.",
    what_it_introduced: "CSS2 introduced the position property with its static, relative, absolute, and fixed values. It introduced z-index for stacking elements in layers. It introduced the float property, which became the dominant layout tool for over a decade. It added table display values, outline properties, and the before and after pseudo-elements along with the content property for generated content. It expanded the selector system to include attribute selectors, child combinators, adjacent sibling combinators, and the first pseudo-classes like first-child. It also introduced the concept of media types, allowing developers to write different styles for screens versus print.",
    note: "CSS2 is where web layout was born. Before CSS2, developers used HTML tables to build page layouts — not because tables made sense for that purpose, but because there was no other way to place things side by side or position them precisely. CSS2 changed that by introducing a real positioning model. The float property in particular took over the web for the next fifteen years. Every two-column layout, every sidebar, every navigation bar built between 1998 and 2015 was almost certainly built with floats. Understanding CSS2 means understanding why floats exist and why they eventually had to be replaced.",
    tip: "The float property is one of those tools that feels simple until it causes a layout to completely collapse. That is because floated elements are removed from the normal document flow, which means their parent container does not automatically expand to contain them. CSS2 introduced this problem along with the fix — the clear property. Learning how float and clear work together is one of the most important foundational skills in CSS because even though flexbox has replaced floats for layout, floats are still used for wrapping text around images. Knowing the history of why floats behave the way they do makes every other layout method easier to understand."
  },

  // ─── CSS3 ─────────────────────────────────────────────────────────────────
  {
    version: "CSS3",
    released: "2011",
    lessons: [
      "Animation",
      "Backgrounds",
      "Borders",
      "Clipping & Shape",
      "Color",
      "Effects & Filters",
      "Flexbox",
      "Fonts & Typography",
      "Grid Layout",
      "Images & Objects",
      "Logical Properties",
      "Masking",
      "Multi-Column Layout",
      "Outline",
      "Scroll & Snap",
      "Selectors",
      "Text",
      "Transforms",
      "Transitions",
      "3D & Perspective"
    ],
    definition: "CSS3 is not a single specification like CSS1 or CSS2. It is a collection of independent modules, each developed and released on its own timeline by the W3C. This modular approach began around 2001 and continued rolling out features through the 2010s, with major milestones arriving around 2011 and 2012 when browsers began widely supporting the most transformative additions. CSS3 did not just add new properties — it reimagined what CSS was capable of. It gave the web animation, three-dimensional transforms, flexible layout systems, custom fonts, advanced selectors, and visual effects that previously required images or JavaScript to achieve.",
    what_it_introduced: "CSS3 introduced an enormous range of capabilities. Border radius for rounded corners. Box shadow and text shadow for depth. Gradients as background images. Transitions for smooth property changes over time. Keyframe animations for complex multi-step motion. Transforms for rotating, scaling, skewing, and translating elements in both 2D and 3D space. Flexbox for one-dimensional flexible layout. Grid for two-dimensional layout. The at-font-face rule for loading custom web fonts. Media queries for responsive design. Advanced selectors including nth-child, not, and attribute substring matching. Filters for blur, brightness, contrast, and other visual effects. Multiple backgrounds on a single element. Opacity and RGBA color with alpha transparency.",
    note: "CSS3 arrived at a moment when the web was under enormous pressure. Smartphones had just changed everything. Screens were suddenly every size imaginable. The old approach of designing a fixed-width page for a desktop monitor was broken overnight. CSS3 responded with media queries, which let a single stylesheet serve an entirely different layout depending on the device. At the same time, users expected richer visual experiences. CSS3 responded with animations and transforms. Developers needed more powerful layout tools. CSS3 responded with flexbox and grid. Almost every major problem the web faced in the 2010s was eventually solved by a CSS3 module.",
    tip: "The most important thing to understand about CSS3 is that flexbox and grid are not just new ways to do what floats did. They are a completely different mental model for thinking about layout. Floats were designed for text wrapping and were never intended to be layout tools. Flexbox was designed specifically for distributing space along a single axis — a row or a column. Grid was designed for two-dimensional layout where both rows and columns matter simultaneously. Learning all three systems and knowing which one to reach for in a given situation is the single most valuable layout skill a CSS developer can have."
  },

  // ─── CSS4 ─────────────────────────────────────────────────────────────────
  {
    version: "CSS4",
    released: "2017+",
    lessons: [
      "Accessibility & UI Controls",
      "Color",
      "Content & Counters",
      "Display & Visibility",
      "Fonts & Typography",
      "Grid Layout",
      "Logical Properties",
      "Scroll & Snap",
      "Selectors",
      "Text",
      "Transitions"
    ],
    definition: "CSS4 is not an official W3C designation — the W3C never released a document called CSS4. What developers mean when they say CSS4 is the most recent wave of CSS modules and features that go beyond the CSS3 baseline, primarily the Selectors Level 4 specification along with newer features in Color Level 5, Cascade Level 5, and other actively developed modules. CSS4 represents the cutting edge of the language — features that are either newly standardized, partially supported in modern browsers, or still working their way through the specification process. It is CSS at its most powerful and its most experimental.",
    what_it_introduced: "CSS4 level features include the is and where pseudo-classes for grouping selectors without specificity penalties, the has pseudo-class which introduced the concept of a parent selector for the first time in CSS history, the not pseudo-class expanded to accept complex selector lists, the focus-visible pseudo-class for accessible focus styling, container queries for component-level responsive design, cascade layers with the at-layer rule for explicit control over style priority, the color-mix function for mixing colors in CSS, wide-gamut color spaces including display-p3 and oklch, logical properties for writing-mode-aware layouts, the individual transform properties rotate scale and translate, and scroll-driven animations.",
    note: "The has pseudo-class alone is worth the entire CSS4 conversation. For decades, CSS could only style an element based on what it contained or what came after it — never based on what was inside it. A parent selector was considered impossible to implement without causing serious browser performance problems. CSS4 solved it. Now you can write a rule that says — if this container has a checked checkbox inside it, change the container's background color. That single selector changes how entire interactive UI patterns are built. No JavaScript needed. Just CSS.",
    tip: "Container queries are the CSS4 feature most likely to change how you think about responsive design. Media queries respond to the size of the viewport — the browser window. Container queries respond to the size of a parent element. This means a component can adapt its own layout based on the space it has been given, regardless of the screen size. A card component can display differently when it is inside a narrow sidebar versus a wide main column, all with pure CSS. This is the missing piece that made truly reusable responsive components possible, and it is available in all modern browsers right now."
  }

];
