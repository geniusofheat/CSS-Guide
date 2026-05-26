// css_topics.js
// Level 2 data file for the CSS Guide engine.
// Contains topic group objects with rich content and lessons arrays.
// PART 1 OF 2 — topics: Accessibility through Grid Layout

const css_topics = [

  // ─── ACCESSIBILITY & UI CONTROLS ─────────────────────────────────────────
  {
    topic: "Accessibility & UI Controls",
    css_version: "CSS3",
    lessons: [
      "accent-color",
      "caret-color",
      "pointer-events",
      "user-select",
      "cursor",
      "resize"
    ],
    definition: "Accessibility and UI control properties are the part of CSS that directly affects how users interact with the interface — not just how it looks, but how it behaves under their hands. These properties control the visual appearance of interactive elements like checkboxes and range inputs, the color of the text cursor inside input fields, whether an element can be clicked or selected, how the mouse cursor changes as it moves across the page, and whether a user can manually resize an element. Together they form a bridge between visual design and usable, inclusive experiences.",
    what_it_introduced: "This group introduced accent-color, which finally gave developers a single property to change the default browser color on form controls like checkboxes, radio buttons, range sliders, and progress bars without resorting to complex custom component rewrites. Caret-color gave developers control over the blinking cursor inside text inputs and textareas. Pointer-events introduced the ability to make elements completely transparent to mouse and touch interaction, a critical tool for layered UI designs. User-select controls whether text can be highlighted and copied by the user. Cursor provides a long list of visual states that communicate interactivity to the user through the mouse pointer. Resize allows textarea and other elements to be made freely resizable by the user.",
    note: "Before accent-color arrived, styling a checkbox to match a brand color required hiding the native input entirely and building a custom replacement from scratch using divs, pseudo-elements, and JavaScript. It was one of the most tedious tasks in front-end development. Accent-color eliminated all of that with a single line. That is the pattern you will see throughout accessibility properties — they exist because the browser's default behavior was either invisible to CSS or required enormous workarounds to change.",
    tip: "Pointer-events set to none is one of the most useful tools in layered UI design. When you stack elements on top of each other using position absolute or z-index, the top layer normally blocks all clicks from reaching the layers beneath it. Setting pointer-events to none on the top layer makes it completely click-through, as if it were not there at all. This is how overlays, decorative elements, and tooltip layers are built without interfering with the interactive elements underneath them."
  },

  // ─── ANIMATION ───────────────────────────────────────────────────────────
  {
    topic: "Animation",
    css_version: "CSS3",
    lessons: [
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function"
    ],
    definition: "CSS Animation is the system that allows elements to transition through multiple visual states over time, without any JavaScript. It is built on two connected ideas — the animation properties that describe how an animation runs, and the at-keyframes rule that describes what the animation does at each stage. Together they form a complete motion system capable of producing everything from a subtle fade-in to a complex multi-step sequence that loops indefinitely. Before CSS animation existed, every motion effect on the web required JavaScript timers or Flash.",
    what_it_introduced: "The animation group introduced animation-name to connect an element to a keyframe sequence, animation-duration to set how long one cycle takes, animation-timing-function to control the acceleration curve of the motion, animation-delay to hold the animation before it starts, animation-iteration-count to repeat it a set number of times or infinitely, animation-direction to run it forward, backward, or alternating, animation-fill-mode to control what state the element holds before and after the animation runs, and animation-play-state to pause and resume an animation dynamically. The animation shorthand property combines all of these into a single declaration.",
    note: "Animation-fill-mode is the property most beginners forget about and then spend hours debugging. When an animation ends, the default behavior is for the element to snap back to its original state — as if the animation never happened. This is almost never what you want. Setting animation-fill-mode to forwards tells the element to hold the final keyframe state after the animation completes. Setting it to backwards applies the first keyframe state during the delay period before the animation starts. Understanding fill-mode is the difference between an animation that feels polished and one that feels broken.",
    tip: "Animation-play-state is what makes CSS animations interactive without JavaScript controlling the keyframes directly. By default its value is running. If you change it to paused — through a hover state, a class toggle, or a CSS variable — the animation freezes exactly where it is. Remove the paused state and it resumes from that same point. This gives you a lightweight way to build play and pause controls for animated UI elements using nothing but a class name change."
  },

  // ─── BACKGROUNDS ─────────────────────────────────────────────────────────
  {
    topic: "Backgrounds",
    css_version: "CSS1",
    lessons: [
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size"
    ],
    definition: "Background properties control everything that appears behind an element's content — color fills, images, gradients, and the precise rules for how those visuals are positioned, sized, repeated, and clipped. CSS1 introduced the basic background properties, but CSS3 dramatically expanded the system by adding support for multiple backgrounds on a single element, background sizing, background origin, blend modes, and gradients as background images. The background of an element is often the most visually expressive part of a layout, and this property group gives complete control over it.",
    what_it_introduced: "Background-color sets a solid fill behind an element. Background-image accepts image URLs and CSS gradient functions, and CSS3 extended it to accept multiple comma-separated values for layered backgrounds. Background-repeat controls tiling behavior with values like repeat, no-repeat, repeat-x, and repeat-y. Background-position places the background image within the element using keywords, percentages, or length values. Background-size, introduced in CSS3, allows the image to be stretched to cover the element, contained within it, or set to exact dimensions. Background-attachment controls whether the background scrolls with the page or stays fixed. Background-clip and background-origin define the painting area and positioning origin relative to the border, padding, or content box. Background-blend-mode applies Photoshop-style blending between background layers.",
    note: "Before background-size and the cover value, creating a full-screen background image that always filled the browser window regardless of screen size required JavaScript to calculate and set dimensions dynamically. Background-size cover eliminated that entirely. It scales the image to the smallest size that completely covers the element, maintaining aspect ratio, with no gaps. It is one of those CSS3 additions that seems small in description but is used in virtually every modern web design that features a hero image or full-page background.",
    tip: "Multiple backgrounds on a single element are one of the most underused CSS3 features. You can stack gradients on top of images, or layer multiple gradient angles to create complex patterns, all without adding any extra HTML elements. The layers are listed in order in the background-image property, separated by commas, with the first value sitting on top. Each layer can have its own background-position, background-size, and background-repeat values, also listed in comma-separated order. This technique keeps your HTML clean while giving you full visual complexity in the stylesheet."
  },

  // ─── BORDERS ─────────────────────────────────────────────────────────────
  {
    topic: "Borders",
    css_version: "CSS1",
    lessons: [
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "box-decoration-break",
      "box-reflect",
      "box-shadow"
    ],
    definition: "Border properties define the visible lines drawn around an element, along with shadows cast by the element's box. CSS1 introduced the foundational border properties — style, width, and color — for each of the four sides. CSS3 then transformed borders from simple lines into expressive design tools by adding border-radius for rounded corners, border-image for using actual images as borders, and box-shadow for depth and layering effects. This group is one of the most frequently used in everyday CSS work because borders and shadows are central to almost every UI component design.",
    what_it_introduced: "The border shorthand sets width, style, and color in one declaration. Individual side properties — border-top, border-right, border-bottom, border-left — allow each side to be styled independently. Border-radius, introduced in CSS3, rounds the corners of an element's box and was one of the most celebrated additions to the language because it ended years of using corner images to fake rounded buttons and cards. Box-shadow adds one or more shadows to an element, with control over horizontal offset, vertical offset, blur radius, spread radius, color, and whether the shadow is inset or outset. Border-image allows a sliced image to be used as the border, enabling highly decorative frame effects. Border-collapse controls whether table borders merge into a single shared border or remain separate.",
    note: "Before border-radius, creating a button with rounded corners required either a background image with pre-rounded corners baked in, or a complex HTML structure with multiple elements each holding a corner image. Design teams maintained entire libraries of corner graphics at different sizes and colors. When border-radius shipped in browsers around 2010, it made rounded corners a single CSS property and eliminated entire categories of image assets from web projects. It is one of the clearest examples of CSS saving enormous amounts of design and development work.",
    tip: "Box-shadow can be stacked. You can list multiple shadow declarations separated by commas on a single element, each with different offsets, blur values, and colors. This technique is used to create soft multi-layered depth effects, colored glow effects, and even to simulate additional borders without affecting the box model. Because box-shadow does not take up space in the layout — it does not affect width, height, or margin — it is also useful when you need a visual border effect without changing the element's dimensions or pushing surrounding elements."
  },

  // ─── BOX MODEL ───────────────────────────────────────────────────────────
  {
    topic: "Box Model",
    css_version: "CSS1",
    lessons: [
      "box-sizing",
      "height",
      "width",
      "max-height",
      "max-width",
      "min-height",
      "min-width",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "aspect-ratio",
      "overflow",
      "overflow-anchor",
      "overflow-wrap",
      "overflow-x",
      "overflow-y"
    ],
    definition: "The box model is the foundational concept of CSS layout. Every single element on a web page — whether it is a heading, a button, an image, or a div — is treated as a rectangular box. That box has four layers: the content area at the center, surrounded by padding, surrounded by the border, surrounded by the margin. Understanding the box model means understanding how these four layers interact to determine the actual size of an element and the space it occupies on the page. Every layout problem in CSS ultimately comes back to the box model.",
    what_it_introduced: "Width and height set the dimensions of the content area. Padding adds space inside the border, between the content and the edge of the element. Margin adds space outside the border, pushing other elements away. Min-width, max-width, min-height, and max-height set boundaries that prevent an element from becoming too small or too large. Overflow controls what happens when content is larger than its container — whether it is hidden, shown regardless, or made scrollable. Box-sizing, introduced in CSS3, changes the calculation model so that padding and border are included in the declared width and height rather than added on top of it. Aspect-ratio, a more recent addition, maintains a proportional relationship between width and height automatically.",
    note: "Box-sizing is the single most important CSS3 addition to the box model, and almost every modern stylesheet begins with this rule: *, *::before, *::after { box-sizing: border-box; }. Here is why. In the original CSS1 box model, if you set an element to width 200px and then added 20px of padding on each side, the element's actual rendered width became 240px. That made layout math extremely difficult. Border-box changes the model so that the 200px includes the padding and border. The element stays exactly 200px wide no matter how much padding you add. Once you understand why this reset exists, you will never build a stylesheet without it.",
    tip: "Margin collapse is one of the most confusing behaviors in the box model and the source of countless layout bugs for beginners. When two block elements are stacked vertically and both have vertical margins, those margins do not add together — they collapse into a single margin equal to the larger of the two. A heading with margin-bottom 30px above a paragraph with margin-top 20px will produce a 30px gap, not a 50px gap. This only happens with vertical margins between block elements. Horizontal margins never collapse. Flexbox and grid containers also prevent margin collapse inside them. Knowing when collapse applies and when it does not is essential for predictable vertical spacing."
  },

  // ─── CLIPPING & SHAPE ────────────────────────────────────────────────────
  {
    topic: "Clipping & Shape",
    css_version: "CSS3",
    lessons: [
      "clip",
      "clip-path"
    ],
    definition: "Clipping properties control the visible region of an element by defining a shape that acts as a window — anything outside the shape is hidden from view. The element itself is not resized or repositioned, only its visible area is changed. CSS1 introduced the clip property for this purpose but it was limited to rectangular regions and only worked on absolutely positioned elements. CSS3 introduced clip-path, which expanded clipping to support circles, ellipses, polygons, and SVG path shapes, making it possible to create non-rectangular visible areas for any element on the page.",
    what_it_introduced: "The clip property accepts a rect function with four values defining the top, right, bottom, and left edges of a rectangular clipping region. It is considered a legacy property because it only works with position absolute or fixed and only supports rectangles. Clip-path replaced it with a far more powerful system. It accepts basic shape functions — inset for rectangles, circle, ellipse, and polygon — as well as path for arbitrary SVG curves. Clip-path works on any positioned or non-positioned element, supports animation and transition, and can be used to create diagonal cuts, hexagonal frames, star shapes, and virtually any geometric form imaginable.",
    note: "Clip-path polygon is where this property becomes truly expressive. By defining a list of coordinate points, you can clip an element into any polygon shape. A simple diagonal cut across the bottom of a hero section is just a four-point polygon where the bottom two corners are offset vertically from each other. Web designers spent years achieving this effect by layering a rotated div on top of a section to fake the angled edge. Clip-path makes it a single property declaration with no extra markup required.",
    tip: "Clip-path supports transitions and animations, which makes it a powerful tool for reveal effects. An element clipped to a circle with radius zero is invisible. Animating the radius to cover the full element creates a circular reveal effect. An element clipped to inset 100% is hidden. Animating inset to 0% reveals the element with a wipe effect. Because clip-path changes are GPU-accelerated in modern browsers, these transitions run smoothly even on complex elements. Combined with animation-timing-function, clip-path reveal effects can feel polished and cinematic."
  },

  // ─── COLOR ───────────────────────────────────────────────────────────────
  {
    topic: "Color",
    css_version: "CSS1",
    lessons: [
      "color",
      "color-scheme",
      "opacity",
      "mix-blend-mode",
      "isolation"
    ],
    definition: "Color properties in CSS control the foreground color of text, the transparency of elements, and how elements visually blend with the content behind them. CSS1 introduced basic color and opacity concepts, and subsequent versions expanded color into a rich system supporting named colors, hex values, RGB, HSL, and in modern CSS, wide-gamut color spaces like oklch and display-p3. Color is the most immediately expressive tool in CSS — it communicates mood, hierarchy, brand identity, and state all at once.",
    what_it_introduced: "The color property sets the foreground color of an element, which applies to text and also serves as the default value for the currentColor keyword used elsewhere in CSS. Opacity sets the transparency of an entire element including its children, from 0 for fully transparent to 1 for fully opaque. Color-scheme tells the browser which color schemes an element supports, enabling proper integration with the user's system-level light or dark mode preference. Mix-blend-mode controls how an element's colors blend with the colors of elements behind it, using the same blend modes found in Photoshop — multiply, screen, overlay, and many others. Isolation creates a new stacking context that prevents mix-blend-mode from bleeding past a container boundary.",
    note: "Opacity and color transparency are not the same thing, and understanding the difference matters. Setting opacity to 0.5 on an element makes the element itself and everything inside it — including its text, borders, backgrounds, and child elements — fifty percent transparent. There is no way to make a child element more opaque than its parent when opacity is used. In contrast, using an RGBA or HSLA color value with an alpha channel only affects that specific color property. The background can be semi-transparent while the text inside remains fully opaque. Choosing between the two approaches is one of the first real decisions you make when working with transparency.",
    tip: "The currentColor keyword is one of the most useful and underused values in CSS. It refers to the current value of the color property on the element. If you set color to gold on a component and then use currentColor as the value for border-color, box-shadow, or an SVG fill, those properties automatically match the text color. When the text color changes — on hover, in a dark mode, or through a class toggle — all the currentColor references update simultaneously. This makes components dramatically easier to theme and maintain because the text color becomes the single source of truth for the entire component's accent color."
  },

  // ─── CONTENT & COUNTERS ──────────────────────────────────────────────────
  {
    topic: "Content & Counters",
    css_version: "CSS2",
    lessons: [
      "content",
      "counter-increment",
      "counter-reset",
      "counter-set",
      "quotes"
    ],
    definition: "Content and counter properties give CSS the ability to generate text and numbering directly in the stylesheet, without adding any HTML. The content property works exclusively with the before and after pseudo-elements to insert generated content into the page. CSS counters provide a mechanism for automatically numbering any set of elements — headings, list items, figures, steps — using CSS variables that increment as the browser traverses the document. Together these properties power decorative additions, automatic numbering systems, and custom quote characters, all without touching the HTML structure.",
    what_it_introduced: "The content property accepts strings, counter references, image URLs, the attr function for reading HTML attribute values, and the open-quote and close-quote keywords. Counter-reset initializes a named counter at a specified starting value, typically placed on the parent container. Counter-increment increases or decreases a named counter each time the browser encounters a matching element, typically placed on the child elements. Counter-set forces a counter to a specific value at any point. The quotes property defines the characters used for the open-quote and close-quote values in the content property, allowing different quotation mark styles for different languages or design aesthetics.",
    note: "The attr function inside the content property is a remarkably useful tool for displaying HTML attribute values as visible page content. If a link has a data-label attribute, you can make that label appear as a tooltip using nothing but CSS — no JavaScript, no title attribute, no extra HTML. Setting the before or after pseudo-element's content to attr(data-label) reads directly from the HTML attribute. The same technique is used to create custom tooltips, to show URLs next to links in print stylesheets, and to build data-driven decorative labels entirely in CSS.",
    tip: "CSS counters can be nested, which makes them suitable for generating multi-level numbering like 1, 1.1, 1.2, 2, 2.1 for document outlines and technical specifications. Each heading level resets a counter for the level below it and increments the counter for its own level. The content property then reads multiple counters and concatenates them with separator characters. This entire automatic numbering system runs in CSS with no JavaScript and no manually maintained numbers in the HTML. If a section is added or removed, all the numbers update automatically on the next page render."
  },

  // ─── DISPLAY & VISIBILITY ────────────────────────────────────────────────
  {
    topic: "Display & Visibility",
    css_version: "CSS1",
    lessons: [
      "display",
      "visibility",
      "all"
    ],
    definition: "Display and visibility properties control whether elements appear on the page and how they participate in the document's layout flow. The display property is arguably the single most powerful property in all of CSS — it determines the layout model an element uses, whether it generates a block, an inline box, a flex container, a grid container, or nothing at all. Visibility controls whether an element is visually rendered while still occupying its space in the layout. Together these two properties are the primary tools for showing and hiding content and for establishing the layout context in which child elements are arranged.",
    what_it_introduced: "Display was introduced in CSS1 with the basic values block, inline, and none. CSS2 expanded it with inline-block, list-item, and table-related values. CSS3 then transformed it completely by introducing flex and grid as display values, effectively making display the gateway to entire new layout systems. The none value removes an element from the layout entirely — it takes up no space and is invisible. Visibility hidden hides an element visually but preserves its space in the layout, which is an important distinction. The all property, introduced in CSS3, resets every CSS property on an element to either its initial value or its inherited value in a single declaration, providing a complete style reset for a specific element.",
    note: "The difference between display none and visibility hidden is one of the most frequently tested concepts in CSS because it affects layout in completely different ways. An element with display none does not exist in the layout — the space it would have occupied collapses and surrounding elements move to fill it. An element with visibility hidden is still there — it still takes up exactly the same space — but it is rendered as if it were transparent. This distinction matters enormously in animation, in accessibility for screen readers, and in any situation where you need to toggle content without causing surrounding elements to shift.",
    tip: "Inline-block is the value that solves a very specific and common problem. Block elements stack vertically and take full width. Inline elements flow with text and cannot have explicit width or height. Inline-block gives you both — elements sit side by side like inline elements, but they respect width, height, padding, and margin like block elements. Before flexbox, inline-block was the primary method for building horizontal navigation bars, icon rows, and grid-like arrangements of equal-height boxes. Even with flexbox available today, inline-block remains useful for situations where you want elements to wrap naturally like text while still having box-model control."
  },

  // ─── EFFECTS & FILTERS ───────────────────────────────────────────────────
  {
    topic: "Effects & Filters",
    css_version: "CSS3",
    lessons: [
      "backdrop-filter",
      "filter",
      "image-rendering",
      "paint-order"
    ],
    definition: "Effects and filter properties apply visual processing to elements and their backgrounds — blurring, brightening, colorizing, and compositing — directly in the browser without any image editing software or JavaScript canvas manipulation. The filter property processes the element itself and everything inside it. The backdrop-filter property processes what is visible behind the element, enabling the frosted glass effect used extensively in modern UI design. These properties brought Photoshop-level visual effects into CSS and dramatically expanded what could be achieved with pure markup and stylesheets.",
    what_it_introduced: "Filter accepts a list of function values including blur for Gaussian blur, brightness and contrast for luminance adjustment, saturate and hue-rotate for color manipulation, grayscale and sepia for monochrome effects, invert for color inversion, and drop-shadow for a filter-based shadow that follows the actual shape of the content rather than its bounding box. Backdrop-filter accepts the same function values but applies them to the area behind the element, requiring the element itself to have some transparency so the effect is visible. Image-rendering controls the algorithm the browser uses when scaling images, with values like pixelated for preserving sharp edges on pixel art and crisp-edges for high-contrast images. Paint-order controls the drawing sequence of fill and stroke on SVG text elements.",
    note: "Backdrop-filter is what produces the frosted glass effect seen in operating system interfaces, notification panels, navigation bars, and modal overlays across modern UI design. The effect requires three things — the element must have a semi-transparent background so the backdrop is partially visible, backdrop-filter blur must be applied with a meaningful radius, and there must be visible content behind the element for the blur to process. When all three conditions are met, the result is a soft, blurred view of whatever is behind the element, creating a sense of depth and layering that feels native and contemporary.",
    tip: "The filter drop-shadow function and the box-shadow property produce very different results on the same element, and knowing when to use each one matters. Box-shadow always casts a shadow based on the element's rectangular bounding box — it ignores transparency and irregular shapes entirely. Filter drop-shadow traces the actual rendered shape of the content, including transparent areas. On a PNG image with a transparent background, box-shadow creates a rectangle of shadow while drop-shadow creates a shadow that matches the shape of the visible image. For icons, logos, and cutout images, drop-shadow almost always produces the correct visual result."
  },

  // ─── FLEXBOX ─────────────────────────────────────────────────────────────
  {
    topic: "Flexbox",
    css_version: "CSS3",
    lessons: [
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "justify-items",
      "justify-self",
      "place-content",
      "place-items",
      "place-self",
      "gap",
      "row-gap",
      "order"
    ],
    definition: "Flexbox, formally known as the Flexible Box Layout Module, is a one-dimensional layout system that distributes space and aligns elements along a single axis — either a row or a column. It was introduced in CSS3 and became one of the most transformative additions to the language because it finally gave developers a layout tool that was actually designed for layout. Before flexbox, tasks like vertically centering an element, distributing equal space between items, or making a row of boxes the same height required complex hacks. Flexbox solved all of these problems with a small set of intuitive properties.",
    what_it_introduced: "Setting display to flex on a container activates the flexbox model for its direct children. Flex-direction sets the main axis — row for horizontal, column for vertical. Flex-wrap controls whether items wrap to a new line when they run out of space. Justify-content distributes space along the main axis with values like flex-start, flex-end, center, space-between, and space-around. Align-items aligns children along the cross axis — perpendicular to the main axis — with the center value finally making vertical centering trivially easy. Flex-grow and flex-shrink control how individual children expand or contract to fill available space. Flex-basis sets the initial size of a child before growing or shrinking. The gap property sets consistent spacing between flex items without requiring margins.",
    note: "The hardest concept in flexbox is the relationship between the main axis and the cross axis, because they swap depending on flex-direction. When flex-direction is row, the main axis is horizontal and justify-content controls horizontal distribution while align-items controls vertical alignment. When flex-direction is column, the axes flip — justify-content now controls vertical distribution and align-items controls horizontal alignment. This is the source of most flexbox confusion. The properties do not change — only the direction they apply to changes. Internalizing this axis relationship is the key to reading flexbox rules correctly without having to look anything up.",
    tip: "The flex shorthand with a single numeric value — flex: 1 — is one of the most useful declarations in everyday layout work. It sets flex-grow to 1, flex-shrink to 1, and flex-basis to 0, which means the element will grow to fill all available space, shrink if needed, and start its size calculation from zero. Apply flex: 1 to all children in a flex container and they become equal-width columns that fill the entire container and adjust automatically when the container resizes. This single declaration replaces what used to require calculating exact percentages or using JavaScript to set widths dynamically."
  },

  // ─── FLOAT & CLEAR ───────────────────────────────────────────────────────
  {
    topic: "Float & Clear",
    css_version: "CSS2",
    lessons: [
      "float",
      "clear",
      "shape-outside"
    ],
    definition: "Float and clear properties come from CSS2 and were originally designed for a single, specific purpose — flowing text around images, the same way text wraps around a photograph in a printed magazine. Float removes an element from the normal document flow and pushes it to the left or right edge of its container, allowing inline content to wrap around it. Clear prevents an element from sitting beside a floated element, forcing it to drop below the float instead. For over a decade, developers repurposed these properties to build entire page layouts — a use they were never designed for — until flexbox and grid arrived to replace them.",
    what_it_introduced: "Float accepts left, right, and none as values. A floated element is taken out of normal flow, meaning its parent container does not automatically expand to contain it — a behavior known as the collapsing parent problem. Clear accepts left, right, both, and none, and forces the element to move below any floats on the specified side. The clearfix hack — a widely used CSS technique where a pseudo-element with clear both is added to a container — became the standard solution to the collapsing parent problem and was used in virtually every major CSS framework for years. Shape-outside, introduced in CSS3, extended float by allowing the inline content to wrap around a custom geometric or image-based shape rather than the float's rectangular bounding box.",
    note: "The reason floats dominated web layout for fifteen years is not because they were good at layout — they were not. It is because they were the only tool available that could place elements side by side. The float was essentially misused by an entire industry out of necessity. Every two-column layout, every three-column magazine grid, every sidebar and main content arrangement built between 1998 and 2015 was almost certainly using floats for structure. Understanding this history explains why flexbox was such a relief when it arrived and why clearing floats, the clearfix pattern, and collapsing containers are still discussed in every CSS learning resource.",
    tip: "Shape-outside is the property that restores float to its original intended purpose and makes it genuinely exciting again. By default, text wraps around a float's rectangular box — even if the float contains a circular image with a transparent background. Shape-outside tells the text to wrap around the actual visual shape instead. Using shape-outside circle or a polygon, or even providing an image where the browser reads the alpha channel to determine the shape boundary, you can create text that flows around photographs, illustrations, and irregular shapes exactly the way editorial print design has done for decades."
  },

  // ─── FONTS & TYPOGRAPHY ──────────────────────────────────────────────────
  {
    topic: "Fonts & Typography",
    css_version: "CSS1",
    lessons: [
      "font",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-variant-caps",
      "font-weight",
      "initial-letter"
    ],
    definition: "Font and typography properties control the visual rendering of text — the typeface, its size, weight, style, and the fine typographic details that distinguish professional design from default browser rendering. CSS1 introduced the core font properties that have been in every stylesheet ever written. CSS3 dramatically expanded the typography system with the at-font-face rule for loading custom web fonts, font-feature-settings for accessing advanced OpenType features like ligatures and alternate glyphs, and font-variant properties for fine typographic control. Typography is often described as the most important visual element in any design, and this property group is where CSS engages with that idea most directly.",
    what_it_introduced: "Font-family sets the typeface with a priority list of font names and a generic fallback — serif, sans-serif, or monospace. Font-size sets the text size using pixels, ems, rems, percentages, or viewport units. Font-weight controls the thickness of the strokes from 100 to 900 or with keyword values like bold and normal. Font-style applies italic or oblique rendering. Font-variant and font-variant-caps control small-caps rendering and other alternate letter forms. Font-stretch adjusts the width of the typeface where the font supports condensed or expanded variants. Font-kerning controls the spacing between specific letter pairs. Font-feature-settings provides low-level access to OpenType font features using four-character feature tags. Initial-letter creates drop cap effects for the first letter of a block.",
    note: "The rem unit, while technically a length unit rather than a font property, transformed how font sizes are managed across an entire project. Before rem, font sizes set in em were relative to the parent element's font size — which meant nested elements accumulated size changes in unpredictable ways. Rem is always relative to the root element's font size, which is set once on the html element and remains constant throughout the document. Setting the root font size to a percentage like 62.5% to make 1rem equal 10px became a widely adopted baseline that made all font sizing calculations simple and predictable.",
    tip: "Font-family should always end with a generic font family name — serif, sans-serif, monospace, cursive, or fantasy — as the final fallback. But the real power of the font stack comes from thoughtfully choosing the intermediate fallbacks between your preferred font and the generic. A well-crafted font stack ensures that if your primary web font fails to load, the page renders with a visually similar system font rather than a jarring mismatch. Specifying system-ui, -apple-system, Segoe UI, and Roboto before sans-serif means the page will use the native system font on each platform, which often looks better than a generic fallback and loads instantly with no network request."
  },

  // ─── GRID LAYOUT ─────────────────────────────────────────────────────────
  {
    topic: "Grid Layout",
    css_version: "CSS3",
    lessons: [
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows"
    ],
    definition: "CSS Grid Layout is a two-dimensional layout system that divides a container into rows and columns simultaneously, allowing elements to be placed precisely anywhere within that grid structure. It was introduced in CSS3 and became the most powerful layout tool the web had ever seen. While flexbox handles one-dimensional layouts — distributing items along a single row or column — Grid handles both dimensions at once, making it ideal for full page layouts, card grids, dashboard interfaces, and any design where both horizontal and vertical placement need to be controlled simultaneously.",
    what_it_introduced: "Setting display to grid on a container activates the grid layout model. Grid-template-columns and grid-template-rows define the structure of the grid using length values, percentages, the fr unit for fractional space, the repeat function for repetitive patterns, and minmax for flexible size ranges. Grid-column and grid-row place items by specifying which grid lines they start and end on. Grid-area names an item for placement in a named region. Grid-template-areas creates a visual ASCII-art map of the layout in the stylesheet itself, with each string representing a row and each word representing a named area. Grid-auto-flow controls how items that are not explicitly placed are automatically positioned within the grid. The gap property sets spacing between rows and columns.",
    note: "The fr unit is what makes Grid truly different from any layout system that came before it. Fr stands for fraction of the available space. A three-column grid defined as grid-template-columns: 1fr 2fr 1fr creates columns where the middle column is always exactly twice the width of the outer columns, and all three together fill the container exactly, regardless of the container's width. No percentages to calculate, no widths that break when a border or padding is added, no JavaScript to recalculate on resize. The fr unit makes proportional layouts that were previously impossible to express in CSS trivially simple.",
    tip: "Grid-template-areas is the most readable layout property in all of CSS. Instead of thinking in terms of coordinates and line numbers, you draw the layout directly in the stylesheet as a text map. A header area spanning the full width, a sidebar on the left, a main content area on the right, and a footer spanning the full width is written exactly as it looks. Each child element is then assigned its area name using grid-area. The result is a stylesheet where the layout intent is immediately readable by anyone, making maintenance and redesign dramatically simpler than any coordinate-based approach."
  },

  // ─── IMAGES & OBJECTS ────────────────────────────────────────────────────
  {
    topic: "Images & Objects",
    css_version: "CSS3",
    lessons: [
      "object-fit",
      "object-position"
    ],
    definition: "Images and object properties control how replaced elements — images, videos, iframes, and other embedded content — are sized and positioned within their containers. Before these properties existed, placing an image inside a fixed-size container almost always resulted in distortion, letterboxing, or overflow. Object-fit and object-position, introduced in CSS3, gave developers the same kind of control over replaced content that background-size and background-position provide for background images. They are small in number but solve one of the most persistent visual problems in web design.",
    what_it_introduced: "Object-fit controls how the content of a replaced element is resized to fit its container. The fill value stretches the content to match the container exactly, which was the default browser behavior and often caused distortion. The contain value scales the content to fit entirely within the container while preserving its aspect ratio, potentially leaving empty space. The cover value scales the content to completely fill the container while preserving aspect ratio, cropping the overflow — the same behavior as background-size cover. The none value preserves the content's natural size. The scale-down value uses whichever is smaller between none and contain. Object-position controls which part of the content is visible when it is cropped, using the same syntax as background-position.",
    note: "Before object-fit, making a grid of equal-size image cards where every image filled its card without distortion required either JavaScript to detect each image's dimensions and apply cropping math, or CSS hacks where the image was set as a background image on a div instead of using an actual img tag. Both approaches were messy. Object-fit cover on an img element with a fixed height and width produces pixel-perfect cropped image cards in a single declaration. It is one of the clearest examples of CSS3 removing an entire category of front-end workaround code.",
    tip: "Object-position is most useful when the subject of an image is not centered. A portrait photograph where the face is in the upper third will be cropped to the center by default with object-fit cover, cutting off the face entirely. Setting object-position to top shifts the visible area upward so the face remains in frame. For product photography where the product is to one side, object-position left or right keeps the product visible. Combining object-fit cover with a thoughtful object-position value ensures that the most important part of every image stays visible regardless of how the container is sized."
  },

  // ─── LISTS ───────────────────────────────────────────────────────────────
  {
    topic: "Lists",
    css_version: "CSS1",
    lessons: [
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type"
    ],
    definition: "List style properties control the appearance of the marker that appears beside each list item in ordered and unordered lists. The marker is the bullet point, number, letter, or custom image that identifies each item as part of a sequence. CSS1 introduced these properties to replace the HTML type attribute that previously controlled list marker appearance inline in the markup. While list properties are a small group, they are significant because list elements are among the most semantically important in HTML — navigation menus, step-by-step instructions, ingredient lists, and table of contents structures are all built on list elements.",
    what_it_introduced: "List-style-type sets the marker style with values including disc, circle, and square for unordered lists, and decimal, lower-alpha, upper-alpha, lower-roman, and upper-roman for ordered lists, among many others. List-style-position controls whether the marker sits outside the list item's content box — the default, which keeps text alignment clean — or inside it, which makes the marker part of the content flow and causes wrapped text to align under the marker rather than under the first character. List-style-image replaces the marker with a custom image URL. The list-style shorthand combines all three properties in one declaration.",
    note: "The most common thing developers do with list properties is set list-style to none. Navigation menus are almost always built using unordered lists semantically, but the bullet points are never visible in the final design. Setting list-style none on the ul removes the markers entirely. This is so universal that CSS resets and normalize stylesheets include it by default for nav elements. Understanding that a list is the correct semantic element for navigation — even when it looks nothing like a list visually — is one of the foundational principles of writing meaningful, accessible HTML.",
    tip: "List-style-type accepts a much wider range of values than most developers realize. Beyond the common disc and decimal values, it supports Georgian and Armenian numerals, various Asian counting systems, and with CSS3 the at-counter-style rule allows completely custom marker definitions using any Unicode character or symbol. For most design work, custom markers are better achieved by setting list-style to none and using the before pseudo-element with the content property to insert a custom character or icon, because this approach gives full control over the marker's color, size, font, and spacing independently of the list item text."
  },

  // ─── LOGICAL PROPERTIES ──────────────────────────────────────────────────
  {
    topic: "Logical Properties",
    css_version: "CSS3",
    lessons: [
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-start",
      "border-inline",
      "border-inline-end",
      "border-inline-start",
      "block-size",
      "inline-size",
      "max-block-size",
      "max-inline-size",
      "min-block-size",
      "min-inline-size",
      "inset",
      "inset-block",
      "inset-inline",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start"
    ],
    definition: "Logical properties are a modern CSS system that replaces physical directional terms — top, right, bottom, left — with writing-mode-aware logical terms based on the flow of content. In a left-to-right horizontal writing system like English, block refers to the vertical axis and inline refers to the horizontal axis. But in a right-to-left language like Arabic, or a vertical writing mode used in some East Asian typography, the physical directions do not map correctly. Logical properties solve this by describing layout in terms of content flow rather than screen coordinates, making stylesheets that work correctly across multiple writing systems without requiring separate overrides.",
    what_it_introduced: "Every physical property has a logical equivalent. Margin-top becomes margin-block-start. Margin-bottom becomes margin-block-end. Margin-left becomes margin-inline-start. Margin-right becomes margin-inline-end. The same pattern applies to padding, borders, width, height, and positioning offsets. Inline-size replaces width and block-size replaces height. Inset is a shorthand for all four positioning offsets — top, right, bottom, left — and inset-block and inset-inline provide the logical equivalents. Border-block and border-inline apply borders to the block and inline axes respectively.",
    note: "Logical properties matter most when building applications that need to support both left-to-right and right-to-left languages — any application with Arabic, Hebrew, or Persian users for example. With physical properties, supporting RTL layouts requires a separate stylesheet or a large block of overrides that reverses all the left and right values. With logical properties, the same stylesheet works in all writing modes automatically because the browser resolves block-start and inline-start based on the current writing direction. Setting the writing-mode or direction property at the root level and having the entire layout adapt is the goal logical properties make achievable.",
    tip: "Even if you never build a multilingual application, logical properties have a practical benefit in everyday work — the shorthand forms are genuinely more concise. Margin-block sets the top and bottom margins in one declaration. Margin-inline sets the left and right margins. Instead of writing margin-top and margin-bottom as separate rules, or remembering which of the four values in the margin shorthand controls which side, margin-block and margin-inline make the intent immediately clear and reduce the number of declarations needed. This alone makes them worth adopting even for single-language projects."
  },

  // ─── MASKING ─────────────────────────────────────────────────────────────
  {
    topic: "Masking",
    css_version: "CSS3",
    lessons: [
      "mask",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type"
    ],
    definition: "Masking properties use an image or gradient as a transparency map that controls which parts of an element are visible and which are hidden. Where the mask is opaque, the element shows through. Where the mask is transparent, the element disappears. This is similar in concept to clip-path, which also hides parts of an element, but masking is far more powerful because it supports gradual transparency — a mask can fade from fully opaque to fully transparent, creating smooth blending effects that clip-path, with its hard geometric edges, cannot produce. The masking system in CSS mirrors the masking and channel concepts found in professional image editing software.",
    what_it_introduced: "Mask-image is the core property, accepting an image URL or gradient as the mask source. The luminance or alpha channel of the mask image determines visibility — bright areas reveal the element, dark areas hide it when using luminance mode. Mask-mode selects whether the alpha channel or luminance values of the mask image are used. Mask-size, mask-position, mask-repeat, mask-origin, and mask-clip work identically to their background counterparts, controlling how the mask image is sized and positioned relative to the element. Mask-composite controls how multiple mask layers interact with each other when layered masks are applied. Mask-type applies to SVG mask elements and selects the channel interpretation.",
    note: "The most visually striking use of CSS masking is the gradient fade effect — making an element appear to dissolve into transparency at its edges. A linear gradient from black to transparent used as a mask-image causes the element to be fully visible where the gradient is black and fully invisible where it is transparent, creating a smooth fade. This technique is used for fading long text passages into a read-more prompt, for blending image edges into a background, and for creating the appearance of content that extends beyond the visible area. It achieves in one CSS declaration what previously required Photoshop compositing or complex canvas manipulation.",
    tip: "Mask and clip-path can be combined on the same element for effects that neither can achieve alone. Clip-path creates a hard geometric boundary for the visible area. Masking then applies transparency within that boundary. The combination allows you to shape an element with a precise polygon or circle using clip-path and then apply a gradient fade within that shape using mask-image. This layered approach is used in creative layouts where images or cards are cut into angular shapes but their edges still need to feel soft and designed rather than sharply cut."
  },

  // ─── MULTI-COLUMN LAYOUT ─────────────────────────────────────────────────
  {
    topic: "Multi-Column Layout",
    css_version: "CSS3",
    lessons: [
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "break-after",
      "break-before",
      "break-inside",
      "orphans",
      "widows"
    ],
    definition: "Multi-column layout properties divide an element's content into multiple vertical columns, like the columns of a printed newspaper or magazine. The browser automatically flows text from the bottom of one column into the top of the next, handling all the wrapping and distribution automatically. This is one of the most direct translations of print layout concepts into CSS, and it works on any block container — not just text, but any mix of content including headings, images, and lists. Multi-column layout is particularly useful for long text passages on wide screens where a single full-width column of text would produce uncomfortably long line lengths.",
    what_it_introduced: "Column-count sets the number of columns explicitly. Column-width sets a preferred column width and lets the browser calculate how many columns fit. When both are specified together using the columns shorthand, column-count acts as a maximum and column-width acts as a minimum — the browser uses the approach that best fits the container. Column-gap sets the space between columns. Column-rule draws a decorative line between columns using the same syntax as border, with separate properties for width, style, and color. Column-span allows an element — typically a heading — to break out of the column structure and span the full width of the container. Break-before, break-after, and break-inside control how column breaks interact with specific elements. Orphans and widows control the minimum number of lines that must appear at the bottom or top of a column.",
    note: "Column-span all is the property that makes multi-column layout usable for real editorial content. Without it, every element in a multi-column container is constrained to its column — including section headings that should visually introduce all the columns below them. Setting column-span all on a heading breaks it out of the column flow and stretches it across the full container width, exactly the way a newspaper headline sits above multiple columns of article text. This single property transforms a column layout from a uniform text flow tool into a genuine editorial design system.",
    tip: "Multi-column layout pairs well with the CSS column-fill property for controlling how content is distributed across columns. The balance value — which is the default — tries to make all columns approximately equal in height, which looks clean but can result in awkward partial columns at the end of content. The auto value fills columns sequentially from left to right, which can leave later columns partially empty but ensures the first columns are always full. For paginated or card-based content where visual balance matters, balance is the right choice. For text passages where reading order is the priority, auto often produces a more natural result."
  },

  // ─── OUTLINE ─────────────────────────────────────────────────────────────
  {
    topic: "Outline",
    css_version: "CSS2",
    lessons: [
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width"
    ],
    definition: "Outline properties draw a line around an element that sits outside the border and does not affect the layout. Unlike borders, outlines do not take up space in the box model — they are drawn on top of surrounding content without pushing anything else away. Outlines were introduced in CSS2 primarily as a browser default for keyboard focus indicators, making it visually clear which element has focus when a user navigates with the Tab key. This accessibility role is the most important thing to understand about outlines — they are the primary visual cue for keyboard and assistive technology users navigating a web page.",
    what_it_introduced: "Outline accepts the same style, width, and color values as border, with styles including solid, dotted, dashed, double, groove, ridge, inset, and outset. Outline-color, outline-style, and outline-width are the individual longhand properties. Outline-offset, introduced in CSS3, sets a gap between the outline and the border edge of the element — a positive value pushes the outline outward, a negative value draws it inside the element. The outline shorthand combines style, width, and color in a single declaration.",
    note: "The most dangerous thing a developer can do with outline is set outline to none on all focusable elements in a CSS reset without providing a replacement focus style. This removes the only visual focus indicator for keyboard users, making the page impossible to navigate for anyone who cannot use a mouse. Removing the default outline is acceptable — and often necessary for visual design reasons — but only when a thoughtful replacement focus style using outline, box-shadow, or another visible indicator is applied to the focus state. The focus-visible pseudo-class, introduced in CSS4, provides a better solution — it applies the focus style only when the browser determines that the focus indicator is needed, hiding it for mouse clicks while showing it for keyboard navigation.",
    tip: "Outline-offset combined with a colored outline is one of the cleanest ways to build custom focus indicators that match a design system. Setting outline-offset to 3 or 4 pixels creates a small gap between the element and its focus ring, which looks intentional and polished rather than like a browser default. Combining a custom outline color with outline-offset produces a focus style that is clearly visible, clearly designed, and clearly communicates interactivity — which is exactly what accessibility guidelines require. Box-shadow can achieve a similar effect and has the added benefit of supporting border-radius to match rounded elements."
  },

  // ─── POSITIONING ─────────────────────────────────────────────────────────
  {
    topic: "Positioning",
    css_version: "CSS2",
    lessons: [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index"
    ],
    definition: "Positioning properties give elements the ability to step outside the normal document flow and be placed at specific coordinates within the page or within a containing ancestor. The position property establishes which positioning model an element uses, and the top, right, bottom, and left offset properties then place the element within that model. Z-index controls the stacking order of positioned elements, determining which elements appear in front of or behind others. Positioning is the foundation of overlay UI patterns — modals, dropdowns, tooltips, sticky headers, and fixed navigation bars are all built on the positioning system.",
    what_it_introduced: "Position static is the default — the element follows normal document flow and offset properties have no effect. Position relative moves an element from its normal position using offset values while preserving its original space in the document flow, and it establishes a positioning context for absolutely positioned descendants. Position absolute removes the element from the document flow entirely and places it relative to its nearest positioned ancestor — the closest ancestor with any position value other than static. Position fixed removes the element from the document flow and places it relative to the viewport, so it stays in place as the page scrolls. Position sticky, introduced later, is a hybrid that behaves like relative until the element reaches a scroll threshold, then behaves like fixed until its parent container scrolls out of view.",
    note: "The concept of a positioning context — or containing block — is the most critical thing to understand about absolute positioning. An absolutely positioned element does not position itself relative to the page or the browser window. It positions itself relative to the nearest ancestor that has a position value other than static. If no such ancestor exists, it falls back to the initial containing block, which is the viewport. This is why setting position relative on a parent container with no offset values — a zero-cost operation that changes nothing visually — is such a common CSS pattern. It exists solely to establish a positioning context for the absolutely positioned children inside it.",
    tip: "Position sticky is one of the most useful layout tools for long scrollable interfaces. A sticky element acts like a relatively positioned element in normal flow until it reaches the threshold defined by its top, right, bottom, or left value as the user scrolls. At that point it sticks in place relative to the scroll container, remaining visible while the rest of the content scrolls past. When the parent container scrolls out of view, the sticky element goes with it. This behavior is perfect for section headers in long lists, table headers in tall data tables, and sidebars that should stay visible while the main content scrolls."
  },

  // ─── SCROLL & SNAP ───────────────────────────────────────────────────────
  {
    topic: "Scroll & Snap",
    css_version: "CSS3",
    lessons: [
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "overscroll-behavior",
      "overscroll-behavior-x",
      "overscroll-behavior-y"
    ],
    definition: "Scroll and snap properties control the scrolling experience of a page or scrollable container — how scrolling animates, where it stops, how snap points lock the viewport to specific positions, how scrollbars are styled, and how scroll momentum behaves at the boundaries of a scroll container. These properties transform basic browser scrolling into a designed, intentional experience. Scroll snap in particular enables carousel interfaces, full-screen section layouts, and image galleries that lock to each item as the user scrolls, without any JavaScript scroll event listeners or position calculations.",
    what_it_introduced: "Scroll-behavior smooth enables animated scrolling when the page jumps to an anchor link or when JavaScript sets the scroll position, replacing the jarring instant jump that was the default for years. Scroll-snap-type activates scroll snapping on a container, with values controlling the axis and whether snapping is mandatory or merely suggested. Scroll-snap-align tells each child element where its snap point is — start, center, or end of the container. Scroll-padding and scroll-margin adjust the effective snap position, accounting for fixed headers that would otherwise obscure snapped content. Scrollbar-color sets custom colors for the scrollbar track and thumb. Overscroll-behavior controls what happens when scrolling reaches the end of a container — whether the scroll chains up to a parent container or stops at the boundary.",
    note: "Scroll-snap was the solution to a problem that JavaScript had been solving expensively for years. Every carousel, full-page scrolling site, and snap-to-section interface on the web was previously built with JavaScript scroll event listeners that fired continuously as the user scrolled, calculated distances to snap points, and used animation libraries to ease the scroll to the correct position. This was heavy, performance-sensitive code that was difficult to maintain. Scroll-snap-type and scroll-snap-align replace all of it with two CSS properties — one on the container, one on the children — and the browser handles all the snapping natively at the compositor level.",
    tip: "Overscroll-behavior is an underappreciated property for modal and drawer interfaces. By default, when a user scrolls to the end of a modal's scrollable content and continues scrolling, the scroll event chains up to the page behind the modal and the page itself begins to scroll. This is almost never the desired behavior in a modal — the page behind it should feel frozen. Setting overscroll-behavior to contain on the modal's scroll container prevents this scroll chaining. The scrolling stops at the modal boundary and the page behind it stays still. This single property replaces JavaScript-based scroll locking for modal implementations."
  },

  // ─── SELECTORS ───────────────────────────────────────────────────────────
  {
    topic: "Selectors",
    css_version: "CSS1",
    lessons: [
      "ID Selector",
      "Class Selector",
      "Attribute Selector",
      "Pseudo-Class Selectors",
      "Type Selector",
      "Universal Selector",
      "Descendant Combinator",
      "Child Combinator",
      "Adjacent Sibling Combinator",
      "General Sibling Combinator",
      "Pseudo-Elements"
    ],
    definition: "Selectors are the mechanism by which CSS rules are connected to HTML elements. A selector is the part of a CSS rule that comes before the curly braces — it identifies which element or elements on the page the declarations inside should apply to. CSS1 introduced the foundational selectors: type, class, ID, and descendant. CSS2 expanded the system with pseudo-classes, pseudo-elements, attribute selectors, and combinators. CSS3 and CSS4 added advanced structural pseudo-classes, logical selectors, and new combinators. The selector system is the grammar of CSS — understanding it fully is what separates someone who writes CSS from someone who truly commands it.",
    what_it_introduced: "The type selector targets elements by their HTML tag name. The class selector targets elements by their class attribute, prefixed with a dot. The ID selector targets a single unique element by its id attribute, prefixed with a hash. The universal selector, the asterisk, targets every element. Attribute selectors target elements based on the presence or value of an HTML attribute. Combinators express relationships — the descendant combinator uses a space to target any nested descendant, the child combinator uses a greater-than sign to target only direct children, the adjacent sibling combinator uses a plus sign to target the immediately following sibling, and the general sibling combinator uses a tilde to target all following siblings. Pseudo-classes like hover, focus, active, and first-child target elements in specific states or structural positions. Pseudo-elements like before and after create virtual elements for generated content.",
    note: "Specificity is the rule that determines which CSS declaration wins when multiple selectors target the same element and define the same property with different values. The ID selector carries the highest specificity weight of any simple selector — it outranks any number of class selectors or type selectors. A class selector outranks any number of type selectors. Inline styles outrank everything written in a stylesheet. The important declaration overrides all specificity rules entirely. Understanding specificity resolves almost every CSS conflict — when a style refuses to apply, the answer is almost always that another selector with higher specificity is winning the competition for that element.",
    tip: "The most powerful change in the CSS4 selector specification is the has pseudo-class, which acts as a parent selector — something CSS was considered incapable of supporting for its entire history. Writing a selector like div:has(img) targets any div that contains an img element inside it. Writing li:has(+ li) targets any li that is immediately followed by another li. This single pseudo-class enables contextual styling based on what an element contains, which previously required JavaScript to detect and apply class names dynamically. The has pseudo-class is supported in all modern browsers and fundamentally changes how component-level conditional styling is written."
  },

  // ─── TABLES ──────────────────────────────────────────────────────────────
  {
    topic: "Tables",
    css_version: "CSS1",
    lessons: [
      "border-collapse",
      "border-spacing",
      "caption-side",
      "empty-cells",
      "table-layout",
      "vertical-align"
    ],
    definition: "Table properties control the visual rendering of HTML table elements — the collapse behavior of cell borders, the spacing between cells, the position of the table caption, the visibility of empty cells, and the algorithm used to calculate column widths. Tables are the correct HTML element for presenting tabular data — rows and columns of related information where the relationship between cells matters. CSS table properties give fine-grained control over how that data is presented visually, and the display table values extend the table layout model to non-table elements when a grid-like arrangement is needed without semantic table markup.",
    what_it_introduced: "Border-collapse determines whether adjacent cell borders are merged into a single shared border or remain as separate borders with a gap between them. The collapse value produces the clean bordered grid appearance used in most data tables. Border-spacing sets the gap between cells when borders are not collapsed, accepting one value for both axes or two values for horizontal and vertical spacing separately. Caption-side moves the table's caption element above or below the table. Empty-cells controls whether cells with no content render their borders and background. Table-layout sets the algorithm for column width calculation — auto allows the browser to measure all cell content before setting widths, while fixed uses the first row to define column widths and then renders the rest of the table without measuring content, which is dramatically faster for large tables.",
    note: "Table-layout fixed with a declared width on the table element is one of the most important performance optimizations for rendering large data tables. With the default auto layout, the browser cannot render a single row until it has measured the content of every cell in the entire table, because any cell might contain content wide enough to change a column's width. For a table with thousands of rows, this creates a significant rendering delay. Fixed layout tells the browser to use only the first row to determine column widths and then render everything else immediately, making the table appear almost instantly regardless of how many rows it contains.",
    tip: "Vertical-align behaves very differently on table cells than it does on inline elements. On inline elements, vertical-align positions the element relative to the surrounding text baseline. On table cells, vertical-align positions the cell's content relative to the top, middle, or bottom of the cell's height. The middle value on a table cell produces true vertical centering within the cell without any flexbox or padding tricks — it was the primary method for vertically centering content in the pre-flexbox era. This distinction between inline and table-cell behavior is worth memorizing because it explains a lot of seemingly contradictory vertical-align behavior depending on context."
  },

  // ─── TEXT ────────────────────────────────────────────────────────────────
  {
    topic: "Text",
    css_version: "CSS1",
    lessons: [
      "direction",
      "hanging-punctuation",
      "hyphens",
      "letter-spacing",
      "line-height",
      "tab-size",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-decoration-thickness",
      "text-emphasis",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-shadow",
      "text-transform",
      "text-underline-offset",
      "text-underline-position",
      "unicode-bidi",
      "white-space",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode"
    ],
    definition: "Text properties control every aspect of how written content is displayed — alignment, spacing, decoration, overflow, transformation, and the directional flow of characters on the page. CSS1 introduced the foundational text properties that have been in everyday use since the beginning of web design. Subsequent versions added shadow, overflow handling, advanced decoration control, and writing mode support for vertical and bidirectional text. Text properties are arguably the most used group in all of CSS because every web page is primarily a delivery mechanism for written content, and the quality of the text rendering determines much of the quality of the overall experience.",
    what_it_introduced: "Text-align controls horizontal alignment — left, right, center, and justify. Text-indent offsets the first line of a block. Letter-spacing and word-spacing adjust the space between characters and words. Line-height controls the vertical space between lines of text and is one of the most important readability properties in CSS. Text-decoration applies underlines, overlines, and strikethroughs with separate properties for line type, color, style, and thickness. Text-transform converts text to uppercase, lowercase, or title case in the browser without changing the HTML. Text-shadow adds one or more shadows to text characters. Text-overflow controls what happens when text is longer than its container — ellipsis produces the truncated trailing dots used throughout UI design. White-space controls how whitespace and line breaks in the HTML are handled. Word-break and overflow-wrap control how long words break across lines.",
    note: "Line-height is the single text property with the greatest impact on readability, and its unitless value syntax is the most important thing to understand about it. Setting line-height to 1.5 means each line of text is 1.5 times the current font size — if the font is 16px, each line is 24px tall, with 8px of space distributed above and below the text. Using a unitless value rather than a fixed pixel value matters enormously for inheritance. When a parent element sets line-height to 1.5 and a child has a larger font size, the line-height scales proportionally. With a fixed pixel value, the child inherits the exact pixel amount, which often causes lines to overlap on larger text.",
    tip: "Text-overflow ellipsis requires three properties working together to function, and forgetting any one of them causes the ellipsis to never appear. The element must have overflow set to hidden, white-space set to nowrap to prevent the text from wrapping to a new line, and then text-overflow set to ellipsis to replace the hidden overflow with the three-dot symbol. Without overflow hidden, the text simply extends past the container. Without white-space nowrap, the text wraps to a new line instead of overflowing. All three declarations are required together. This three-property combination is one of the most frequently copied CSS patterns in UI development."
  },

  // ─── TRANSFORMS ──────────────────────────────────────────────────────────
  {
    topic: "Transforms",
    css_version: "CSS3",
    lessons: [
      "rotate",
      "scale",
      "translate",
      "transform",
      "transform-origin",
      "transform-style"
    ],
    definition: "Transform properties move, rotate, scale, and skew elements visually without affecting the document flow. A transformed element does not push other elements away or change its position in the layout — only its painted appearance changes. Transforms are applied in the compositing layer by the browser's GPU, which makes them one of the most performance-friendly ways to animate elements. CSS3 introduced the transform property with a comprehensive set of function values for two-dimensional transformations, and extended it with 3D transformation functions that place elements in three-dimensional space. CSS4 introduced standalone individual transform properties — rotate, scale, and translate — making simple transforms easier to write and animate independently.",
    what_it_introduced: "The transform property accepts one or more transformation functions applied in order. Translate moves an element along the X and Y axes. Rotate spins an element around a point, defaulting to its center. Scale resizes an element proportionally or independently on each axis. Skew distorts an element along the X or Y axis. The individual CSS4 properties rotate, scale, and translate provide the same effects as their transform function counterparts but as standalone properties, making it possible to animate each independently without the specificity and override problems that came with animating the combined transform property. Transform-origin changes the reference point around which the transformation is applied. Transform-style with the value preserve-3d enables 3D transformations to apply across parent and child elements in the same three-dimensional space.",
    note: "The reason transforms are the preferred approach for animations over changing top, left, width, height, or margin is performance. Properties that affect layout — dimensions and positions — trigger the browser's layout engine every time they change, forcing it to recalculate the position and size of potentially every element on the page. Transform and opacity are the two CSS properties that bypass layout entirely and operate directly in the compositor, on the GPU. Animating transform translate instead of left and top produces animations that run at 60 frames per second on mobile devices where layout-triggering animations would stutter or drop frames.",
    tip: "The order of transform functions matters and produces different visual results. Translate then rotate is not the same as rotate then translate. When you translate first, you move the element to a new position and then rotate it around its new center. When you rotate first, you rotate the element around its original center and then move the rotated element. This is because each transform function is applied relative to the coordinate system established by all previous transforms. When building complex animations that combine multiple transform functions, working through the order on paper first prevents unexpected results that can be genuinely difficult to debug."
  },

  // ─── TRANSITIONS ─────────────────────────────────────────────────────────
  {
    topic: "Transitions",
    css_version: "CSS3",
    lessons: [
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function"
    ],
    definition: "Transition properties animate changes to CSS property values over time, creating smooth visual movement between states rather than instant jumps. When a property that has a transition defined on it changes its value — due to a hover state, a focus state, a class being added, or any other trigger — the browser interpolates between the old value and the new value over the specified duration. Transitions were one of the most immediately impactful CSS3 additions because they made interactive interfaces feel polished and responsive without requiring any JavaScript animation libraries or frame-by-frame code.",
    what_it_introduced: "Transition-property specifies which CSS property the transition applies to, or the all keyword to transition every animatable property. Transition-duration sets how long the transition takes, in seconds or milliseconds. Transition-timing-function controls the acceleration curve — ease starts fast and slows down, linear maintains constant speed, ease-in starts slow and accelerates, ease-out starts fast and decelerates, ease-in-out is slow at both ends, and cubic-bezier accepts four control point values for a completely custom curve. Transition-delay postpones the start of the transition. The transition shorthand combines all four in one declaration, and multiple transitions on different properties can be listed as comma-separated values.",
    note: "Transition-timing-function is where transitions go from functional to expressive. The difference between a linear transition and an ease-out transition on a dropdown menu or a modal entrance is the difference between something that feels mechanical and something that feels designed. Ease-out — which starts fast and decelerates to a stop — matches the physics of objects in the real world decelerating as they reach their resting position. Linear motion, by contrast, feels robotic because nothing in the physical world moves at a perfectly constant speed. Spending time with the cubic-bezier editor in browser developer tools and finding timing curves that match the personality of an interface is one of the highest-return investments in the feel of a UI.",
    tip: "Transitioning all properties with transition: all is convenient but carries a hidden performance cost. If any property that triggers layout — such as width, height, padding, or margin — is included in the all transition, and that property changes during an interaction, the browser must run its layout engine on every frame of the transition. On complex pages this can cause the transition to stutter. The safer approach is to be explicit — list only the properties that actually need to transition, and ensure they are compositor-safe properties like transform, opacity, and color. This keeps transitions fast even on low-powered devices."
  },

  // ─── 3D & PERSPECTIVE ────────────────────────────────────────────────────
  {
    topic: "3D & Perspective",
    css_version: "CSS3",
    lessons: [
      "backface-visibility",
      "perspective",
      "perspective-origin",
      "transform-style"
    ],
    definition: "3D and perspective properties extend CSS transforms into three-dimensional space, allowing elements to be rotated around the X, Y, and Z axes, positioned at different depths, and viewed through a virtual camera with a configurable focal length. The perspective property establishes the depth of the three-dimensional scene — a lower value creates a more dramatic, close-up perspective effect, while a higher value produces a subtler, more distant effect. These properties are the foundation of CSS card flip effects, 3D cube interfaces, depth-layered animations, and any visual effect that simulates three-dimensional space.",
    what_it_introduced: "Perspective is set on the parent container and defines the distance between the viewer and the Z plane — the flat surface at Z equals zero. A value of 500 to 1000 pixels produces a natural-looking perspective for most UI effects. Perspective-origin moves the vanishing point, shifting the viewer's apparent position from the center of the container to any other point. Transform-style with the value preserve-3d tells the browser to render child elements in the same 3D space as the parent, enabling 3D structures where multiple faces of a cube or card exist as separate elements but are positioned and rotated together in three-dimensional space. Backface-visibility controls whether the back face of a 3D-rotated element is visible or hidden — setting it to hidden makes the back of a card invisible when rotated away from the viewer, which is essential for card flip effects where front and back faces should alternate cleanly.",
    note: "The card flip effect is the signature demonstration of 3D CSS and the best way to understand how perspective, transform-style, and backface-visibility work together. The pattern requires a container with perspective set, two child elements representing the front and back face, both using position absolute to occupy the same space, the back face rotated 180 degrees on the Y axis from the start, both faces with backface-visibility hidden so each is only visible from its own side, and a hover state on the container that rotates the entire group 180 degrees. When the container rotates, the front face turns away and hides, and the back face rotates into view. Five CSS properties, one of the most satisfying interactive effects in UI design.",
    tip: "Perspective set on a parent versus perspective set as a transform function on an element itself produce different results that are easy to confuse. When perspective is a property on the parent, all children share the same vanishing point and appear to exist in a common 3D scene. When perspective is a transform function on an individual element — transform: perspective(500px) rotateY(30deg) — each element has its own isolated perspective that does not relate to its siblings. For multi-element 3D scenes like cubes, carousels, and flip cards, the parent property is always the correct approach. For a single element that simply needs a realistic perspective skew, the transform function is simpler."
  },

  // ─── MISCELLANEOUS ───────────────────────────────────────────────────────
  {
    topic: "Miscellaneous",
    css_version: "CSS3",
    lessons: [
      "appearance"
    ],
    definition: "The Miscellaneous topic collects CSS properties that do not fit cleanly into any of the other topic groups — properties that are unique in their function, experimental in their status, or so broad in their application that no single category contains them. The appearance property is currently the primary member of this group. As the CSS specification continues to evolve and new properties are introduced, this group serves as the holding area for additions that have not yet found their natural category home.",
    what_it_introduced: "The appearance property controls whether an element is rendered using the browser's native platform styling or a completely unstyled baseline. Setting appearance to none removes all native browser styling from form elements like buttons, inputs, selects, and checkboxes, giving the developer a blank slate to apply completely custom styles. Without this property, certain form elements resist CSS styling because the browser applies its own platform-specific rendering on top of whatever the stylesheet specifies. The auto value, which is the default, tells the browser to apply its native styling where appropriate.",
    note: "Form elements are the most inconsistent group of HTML elements across browsers and operating systems, and appearance none is the first step in building a consistent cross-platform form design. A select element, a range input, and a checkbox all render differently on Chrome, Safari, Firefox, Windows, and macOS by default. Setting appearance to none and then rebuilding the visual design from scratch in CSS is the approach used by every major component library and design system to achieve visually consistent form controls regardless of the platform the user is on.",
    tip: "When setting appearance to none on a select element to apply custom styling, be aware that the dropdown portion of the select — the list of options that appears when clicked — cannot be styled with CSS on most browsers. Only the collapsed trigger button that shows the selected value can be styled. The options themselves are rendered by the operating system, not by the browser's CSS engine, which is why truly custom select dropdowns in design systems are built using non-select HTML — typically a button that toggles a list — rather than a styled native select element. For simple cases where only basic color and border changes are needed, the native select styled with appearance none is sufficient. For fully custom designs, a custom component is the only path."
  }

];
