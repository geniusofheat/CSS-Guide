// css_guide_additional_values.js
// Additional values for CSS properties that have nested value relationships.
// Keyed by property name, then by value name.
// The engine merges these into the correct value list items when rendering.

const css_guide_additional_values = {

  "background": {
    "url()": [
      {
        value: "no-repeat",
        description: "background-image must be defined first. Then set background-repeat to no-repeat to prevent the image from tiling. Without this, the image repeats both horizontally and vertically by default.",
        syntax_example: "div { background-image: url('img.jpg'); background-repeat: no-repeat; }"
      },
      {
        value: "repeat-x",
        description: "background-image must be defined first. Repeats the image only horizontally. The image tiles across the width but not the height.",
        syntax_example: "div { background-image: url('img.jpg'); background-repeat: repeat-x; }"
      },
      {
        value: "repeat-y",
        description: "background-image must be defined first. Repeats the image only vertically. The image tiles down the height but not the width.",
        syntax_example: "div { background-image: url('img.jpg'); background-repeat: repeat-y; }"
      },
      {
        value: "cover",
        description: "background-image must be defined first, then background-size must be set to cover. Scales the image to cover the entire element while maintaining aspect ratio. Parts of the image may be cropped.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: cover; }"
      },
      {
        value: "contain",
        description: "background-image must be defined first, then background-size must be set to contain. Scales the image to fit entirely within the element while maintaining aspect ratio. Empty areas may appear.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: contain; }"
      }
    ]
  },

  "background-image": {
    "url()": [
      {
        value: "no-repeat",
        description: "background-image must be defined first. Set background-repeat to no-repeat to prevent tiling. The image renders once at its defined position.",
        syntax_example: "div { background-image: url('img.jpg'); background-repeat: no-repeat; }"
      },
      {
        value: "repeat-x",
        description: "background-image must be defined first. Set background-repeat to repeat-x to tile the image horizontally only.",
        syntax_example: "div { background-image: url('img.jpg'); background-repeat: repeat-x; }"
      },
      {
        value: "repeat-y",
        description: "background-image must be defined first. Set background-repeat to repeat-y to tile the image vertically only.",
        syntax_example: "div { background-image: url('img.jpg'); background-repeat: repeat-y; }"
      },
      {
        value: "cover",
        description: "background-image must be defined first, then background-size must be set to cover. The image scales to cover the full element area. Aspect ratio is preserved but the image may be cropped.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: cover; }"
      },
      {
        value: "contain",
        description: "background-image must be defined first, then background-size must be set to contain. The image scales to fit fully inside the element. Aspect ratio is preserved but empty space may appear.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: contain; }"
      },
      {
        value: "center",
        description: "background-image must be defined first, then background-position must be set to center. The image is centered both horizontally and vertically within the element.",
        syntax_example: "div { background-image: url('img.jpg'); background-position: center; }"
      }
    ],
    "linear-gradient()": [
      {
        value: "to right",
        description: "Defines the direction of the gradient. Must be the first argument inside linear-gradient(). Followed by the color stops separated by commas.",
        syntax_example: "div { background-image: linear-gradient(to right, red, blue); }"
      },
      {
        value: "to bottom",
        description: "Defines a top-to-bottom gradient direction. Must be the first argument inside linear-gradient(). This is the default direction if no angle or direction is specified.",
        syntax_example: "div { background-image: linear-gradient(to bottom, red, blue); }"
      },
      {
        value: "deg",
        description: "An angle in degrees can replace the direction keyword as the first argument. 0deg points upward, 90deg points to the right, 180deg points downward.",
        syntax_example: "div { background-image: linear-gradient(45deg, red, blue); }"
      }
    ],
    "radial-gradient()": [
      {
        value: "circle",
        description: "Defines the shape of the gradient as a circle. Must be the first argument inside radial-gradient(). Followed by the color stops.",
        syntax_example: "div { background-image: radial-gradient(circle, red, blue); }"
      },
      {
        value: "ellipse",
        description: "Defines the shape of the gradient as an ellipse. This is the default shape if no shape keyword is provided.",
        syntax_example: "div { background-image: radial-gradient(ellipse, red, blue); }"
      },
      {
        value: "at center",
        description: "Defines the position of the gradient origin. Must follow the shape keyword. The gradient radiates outward from the specified position.",
        syntax_example: "div { background-image: radial-gradient(circle at center, red, blue); }"
      }
    ]
  },

  "background-size": {
    "auto": [
      {
        value: "cover",
        description: "Can be used instead of auto. background-image must be defined first. Scales the image to cover the full element. Aspect ratio is preserved but cropping may occur.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: cover; }"
      },
      {
        value: "contain",
        description: "Can be used instead of auto. background-image must be defined first. Scales the image to fit inside the element without cropping. Empty space may appear.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: contain; }"
      },
      {
        value: "px or %",
        description: "An explicit width and height can be set using pixel or percentage values. The first value sets the width and the second sets the height. If only one value is given, the second defaults to auto.",
        syntax_example: "div { background-image: url('img.jpg'); background-size: 200px 100px; }"
      }
    ]
  },

  "border": {
    "border-style": [
      {
        value: "solid",
        description: "The most commonly used border style. Renders a single continuous solid line. border-style must be set for the border to be visible, even if border-width and border-color are defined.",
        syntax_example: "div { border: 2px solid black; }"
      },
      {
        value: "dashed",
        description: "Renders the border as a series of short dashes. border-style must be defined before the border renders.",
        syntax_example: "div { border: 2px dashed black; }"
      },
      {
        value: "dotted",
        description: "Renders the border as a series of dots. border-style must be defined before the border renders.",
        syntax_example: "div { border: 2px dotted black; }"
      },
      {
        value: "double",
        description: "Renders two solid lines. The border-width must be at least 3px for the double lines to be visible.",
        syntax_example: "div { border: 4px double black; }"
      },
      {
        value: "groove",
        description: "Renders a 3D grooved border. The effect depends on the border-color value.",
        syntax_example: "div { border: 4px groove gray; }"
      },
      {
        value: "ridge",
        description: "Renders a 3D ridged border, the opposite of groove. The effect depends on the border-color value.",
        syntax_example: "div { border: 4px ridge gray; }"
      },
      {
        value: "inset",
        description: "Renders a 3D inset border that makes the element appear embedded in the page.",
        syntax_example: "div { border: 4px inset gray; }"
      },
      {
        value: "outset",
        description: "Renders a 3D outset border that makes the element appear raised from the page.",
        syntax_example: "div { border: 4px outset gray; }"
      }
    ]
  },

  "display": {
    "block": [
      {
        value: "width",
        description: "Block-level elements accept width. By default they stretch to fill the full width of their container. A specific width can be set using px, %, em, or other units.",
        syntax_example: "div { display: block; width: 300px; }"
      },
      {
        value: "height",
        description: "Block-level elements accept height. By default the height is determined by content. An explicit height can be set.",
        syntax_example: "div { display: block; height: 200px; }"
      },
      {
        value: "margin",
        description: "Block-level elements accept all four margin values. Top and bottom margins of adjacent block elements collapse into a single margin.",
        syntax_example: "div { display: block; margin: 10px auto; }"
      }
    ],
    "inline": [
      {
        value: "no width or height",
        description: "Inline elements do not accept width or height properties. Their size is determined entirely by their content. To apply width or height, change display to inline-block.",
        syntax_example: "span { display: inline; }"
      },
      {
        value: "horizontal margin and padding only",
        description: "Inline elements only respect left and right margin and padding. Top and bottom margin and padding do not affect surrounding elements.",
        syntax_example: "span { display: inline; margin: 0 10px; padding: 0 5px; }"
      }
    ],
    "inline-block": [
      {
        value: "width and height",
        description: "Unlike inline elements, inline-block elements accept width and height. They flow inline with text but behave like block elements internally.",
        syntax_example: "span { display: inline-block; width: 100px; height: 50px; }"
      }
    ],
    "none": [
      {
        value: "removed from layout",
        description: "Setting display to none removes the element completely from the document flow. It takes up no space and is invisible. This is different from visibility: hidden, which hides the element but preserves its space.",
        syntax_example: "div { display: none; }"
      }
    ]
  },

  "flex-direction": {
    "row": [
      {
        value: "main axis",
        description: "When flex-direction is row, the main axis runs horizontally from left to right. justify-content controls alignment along this axis and align-items controls alignment along the cross axis which runs vertically.",
        syntax_example: ".container { display: flex; flex-direction: row; justify-content: center; }"
      }
    ],
    "column": [
      {
        value: "main axis",
        description: "When flex-direction is column, the main axis runs vertically from top to bottom. justify-content now controls vertical alignment and align-items controls horizontal alignment.",
        syntax_example: ".container { display: flex; flex-direction: column; justify-content: center; }"
      }
    ]
  },

  "flex-wrap": {
    "wrap": [
      {
        value: "align-content",
        description: "When flex-wrap is set to wrap and multiple lines exist, align-content controls how the lines are distributed along the cross axis. align-items only affects single-line containers.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: space-between; }"
      }
    ]
  },

  "float": {
    "left": [
      {
        value: "clear",
        description: "When an element is floated left, following elements wrap around it. To force an element below the float, set clear: left or clear: both on the element that should not wrap.",
        syntax_example: ".next-element { clear: left; }"
      },
      {
        value: "clearfix",
        description: "A parent container of floated elements collapses to zero height. To fix this, add overflow: hidden or a clearfix to the parent container.",
        syntax_example: ".parent { overflow: hidden; }"
      }
    ],
    "right": [
      {
        value: "clear",
        description: "When an element is floated right, following elements wrap around its left side. To force an element below the float, set clear: right or clear: both on the following element.",
        syntax_example: ".next-element { clear: right; }"
      }
    ]
  },

  "font": {
    "font-style": [
      {
        value: "italic",
        description: "font-style must come before font-weight in the font shorthand. Sets the text to italic. If the font does not have a true italic variant, the browser synthesizes an oblique version.",
        syntax_example: "p { font: italic bold 16px Arial; }"
      },
      {
        value: "oblique",
        description: "font-style must come before font-weight in the font shorthand. Similar to italic but uses a slanted version of the normal font rather than a true italic design.",
        syntax_example: "p { font: oblique bold 16px Arial; }"
      }
    ],
    "font-size": [
      {
        value: "line-height",
        description: "line-height must immediately follow font-size in the font shorthand, separated by a forward slash. It cannot be placed elsewhere in the shorthand.",
        syntax_example: "p { font: 16px/1.5 Arial; }"
      }
    ]
  },

  "overflow": {
    "hidden": [
      {
        value: "clearfix alternative",
        description: "Setting overflow to hidden on a parent container also clears floated children, collapsing the parent height issue without a clearfix.",
        syntax_example: ".parent { overflow: hidden; }"
      }
    ],
    "scroll": [
      {
        value: "overflow-x and overflow-y",
        description: "Setting overflow to scroll enables scrollbars on both axes. To control each axis independently, use overflow-x for horizontal scrolling and overflow-y for vertical scrolling.",
        syntax_example: "div { overflow-x: hidden; overflow-y: scroll; }"
      }
    ]
  },

  "position": {
    "relative": [
      {
        value: "top, right, bottom, left",
        description: "When position is relative, the top, right, bottom, and left offset properties move the element from its normal position in the document flow. The original space is preserved.",
        syntax_example: "div { position: relative; top: 10px; left: 20px; }"
      },
      {
        value: "z-index",
        description: "position: relative creates a stacking context, allowing z-index to take effect. Without a position value other than static, z-index has no effect.",
        syntax_example: "div { position: relative; z-index: 10; }"
      }
    ],
    "absolute": [
      {
        value: "positioned ancestor",
        description: "An absolutely positioned element is placed relative to its nearest ancestor that has a position value other than static. If no such ancestor exists, it positions relative to the initial containing block.",
        syntax_example: ".parent { position: relative; } .child { position: absolute; top: 0; left: 0; }"
      },
      {
        value: "removed from flow",
        description: "Absolutely positioned elements are removed from the normal document flow. Other elements act as if the absolutely positioned element does not exist.",
        syntax_example: "div { position: absolute; top: 20px; right: 20px; }"
      }
    ],
    "fixed": [
      {
        value: "viewport",
        description: "Fixed positioned elements are placed relative to the browser viewport, not any parent element. They remain in place when the page is scrolled.",
        syntax_example: ".navbar { position: fixed; top: 0; width: 100%; }"
      }
    ],
    "sticky": [
      {
        value: "threshold",
        description: "A sticky element behaves like relative until it reaches a defined threshold, then sticks in place like fixed. At least one of top, right, bottom, or left must be defined for sticky to work.",
        syntax_example: ".header { position: sticky; top: 0; }"
      },
      {
        value: "parent boundary",
        description: "A sticky element only sticks within the boundaries of its parent container. Once the parent scrolls out of view, the sticky element scrolls away with it.",
        syntax_example: "section .sticky-header { position: sticky; top: 0; }"
      }
    ]
  },

  "transform": {
    "rotate()": [
      {
        value: "deg",
        description: "The rotate() function requires an angle value in degrees. Positive values rotate clockwise and negative values rotate counterclockwise.",
        syntax_example: "div { transform: rotate(45deg); }"
      },
      {
        value: "transform-origin",
        description: "By default, rotation occurs around the center of the element. To change the pivot point, set transform-origin before the transform. transform-origin must be defined on the same element.",
        syntax_example: "div { transform-origin: top left; transform: rotate(45deg); }"
      }
    ],
    "scale()": [
      {
        value: "single value",
        description: "A single value scales the element equally on both axes. A value of 1 is the original size. Values below 1 shrink the element and values above 1 enlarge it.",
        syntax_example: "div { transform: scale(1.5); }"
      },
      {
        value: "two values",
        description: "Two values scale the element independently on the X and Y axes. The first value is horizontal scale and the second is vertical scale.",
        syntax_example: "div { transform: scale(1.5, 0.5); }"
      }
    ],
    "translate()": [
      {
        value: "two values",
        description: "The first value moves the element horizontally and the second moves it vertically. Positive horizontal values move right and positive vertical values move down.",
        syntax_example: "div { transform: translate(50px, 100px); }"
      },
      {
        value: "percentage",
        description: "Percentage values are relative to the element's own size, not the parent. This makes translate() useful for centering elements.",
        syntax_example: "div { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }"
      }
    ],
    "skew()": [
      {
        value: "two values",
        description: "The first value skews the element along the X axis and the second skews along the Y axis. Both values are angles in degrees.",
        syntax_example: "div { transform: skew(20deg, 10deg); }"
      }
    ],
    "multiple transforms": [
      {
        value: "chaining",
        description: "Multiple transform functions can be applied to one element by listing them space-separated in the same transform property. They are applied right to left, so order matters.",
        syntax_example: "div { transform: rotate(45deg) scale(1.5) translate(20px, 0); }"
      }
    ]
  },

  "transition": {
    "transition-property": [
      {
        value: "specific property",
        description: "Instead of transitioning all properties, specify a single property name to limit the transition. This improves performance compared to using all.",
        syntax_example: "div { transition: background-color 0.3s ease; }"
      }
    ],
    "transition-timing-function": [
      {
        value: "ease",
        description: "The default timing function. Starts slow, speeds up in the middle, and slows down at the end.",
        syntax_example: "div { transition: all 0.3s ease; }"
      },
      {
        value: "linear",
        description: "The transition progresses at a constant speed from start to finish with no acceleration or deceleration.",
        syntax_example: "div { transition: all 0.3s linear; }"
      },
      {
        value: "ease-in",
        description: "The transition starts slow and accelerates toward the end.",
        syntax_example: "div { transition: all 0.3s ease-in; }"
      },
      {
        value: "ease-out",
        description: "The transition starts fast and decelerates toward the end.",
        syntax_example: "div { transition: all 0.3s ease-out; }"
      },
      {
        value: "ease-in-out",
        description: "The transition starts slow, speeds up in the middle, and slows down at the end. Similar to ease but more symmetrical.",
        syntax_example: "div { transition: all 0.3s ease-in-out; }"
      },
      {
        value: "cubic-bezier()",
        description: "Defines a custom timing curve using four numeric values. Must come after transition-duration in the shorthand. Allows precise control over acceleration.",
        syntax_example: "div { transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }"
      }
    ]
  },

  "animation": {
    "animation-timing-function": [
      {
        value: "ease",
        description: "The default timing function. The animation starts slow, accelerates through the middle, and slows at the end.",
        syntax_example: ".el { animation: slide 1s ease; }"
      },
      {
        value: "linear",
        description: "The animation progresses at a constant speed throughout its duration.",
        syntax_example: ".el { animation: slide 1s linear; }"
      },
      {
        value: "steps()",
        description: "Divides the animation into a defined number of equal steps instead of a smooth curve. Must specify the number of steps as the first argument.",
        syntax_example: ".el { animation: slide 1s steps(4); }"
      }
    ],
    "animation-fill-mode": [
      {
        value: "forwards",
        description: "After the animation ends, the element retains the styles from the last keyframe. animation-fill-mode must be set to forwards to prevent the element from snapping back to its original styles.",
        syntax_example: ".el { animation: slide 1s ease forwards; }"
      },
      {
        value: "backwards",
        description: "During the animation delay period, the element applies the styles from the first keyframe before the animation starts.",
        syntax_example: ".el { animation: slide 1s ease 0.5s backwards; }"
      },
      {
        value: "both",
        description: "Combines forwards and backwards. The element applies first keyframe styles during the delay and retains last keyframe styles after completion.",
        syntax_example: ".el { animation: slide 1s ease 0.5s both; }"
      }
    ]
  },

  "grid-template-columns": {
    "fr": [
      {
        value: "fractional unit",
        description: "The fr unit represents a fraction of the available space in the grid container. It can only be used inside grid-template-columns and grid-template-rows, not in margin or padding.",
        syntax_example: ".container { display: grid; grid-template-columns: 1fr 2fr 1fr; }"
      },
      {
        value: "repeat()",
        description: "The repeat() function must be used inside grid-template-columns or grid-template-rows. The first argument is the number of repetitions and the second is the track size.",
        syntax_example: ".container { display: grid; grid-template-columns: repeat(3, 1fr); }"
      },
      {
        value: "minmax()",
        description: "The minmax() function sets a minimum and maximum size for a grid track. Must be used inside grid-template-columns or grid-template-rows. The first argument is the minimum and the second is the maximum.",
        syntax_example: ".container { display: grid; grid-template-columns: repeat(3, minmax(100px, 1fr)); }"
      }
    ]
  },

  "grid-template-rows": {
    "fr": [
      {
        value: "fractional unit",
        description: "The fr unit divides available row space. It only works inside grid-template-rows when the grid container has a defined height.",
        syntax_example: ".container { display: grid; height: 300px; grid-template-rows: 1fr 2fr; }"
      },
      {
        value: "repeat()",
        description: "The repeat() function simplifies defining multiple row tracks of the same size. Must be used inside grid-template-rows.",
        syntax_example: ".container { display: grid; grid-template-rows: repeat(3, 100px); }"
      }
    ]
  },

  "z-index": {
    "number": [
      {
        value: "stacking context",
        description: "z-index only works on elements with a position value other than static. Elements with position: static ignore z-index entirely. Set position to relative, absolute, fixed, or sticky first.",
        syntax_example: "div { position: relative; z-index: 10; }"
      },
      {
        value: "negative values",
        description: "Negative z-index values are allowed and place the element behind its parent and other elements with higher z-index values.",
        syntax_example: "div { position: relative; z-index: -1; }"
      }
    ]
  },

  "opacity": {
    "number": [
      {
        value: "stacking context",
        description: "Setting opacity to any value less than 1 creates a new stacking context, which affects how z-index and transforms interact with child elements.",
        syntax_example: "div { opacity: 0.9; }"
      },
      {
        value: "visibility difference",
        description: "Unlike display: none, opacity: 0 makes the element invisible but it still occupies space in the layout and can still receive pointer events unless pointer-events: none is also set.",
        syntax_example: "div { opacity: 0; pointer-events: none; }"
      }
    ]
  },

  "filter": {
    "blur()": [
      {
        value: "px",
        description: "The blur() function requires a length value in pixels. Higher values produce more blur. A value of 0 produces no blur.",
        syntax_example: "div { filter: blur(4px); }"
      }
    ],
    "brightness()": [
      {
        value: "number or percentage",
        description: "A value of 1 or 100% is the original brightness. Values below 1 darken the element and values above 1 brighten it.",
        syntax_example: "img { filter: brightness(1.5); }"
      }
    ],
    "contrast()": [
      {
        value: "number or percentage",
        description: "A value of 1 or 100% is the original contrast. Values below 1 reduce contrast and values above 1 increase it.",
        syntax_example: "img { filter: contrast(2); }"
      }
    ],
    "multiple filters": [
      {
        value: "chaining",
        description: "Multiple filter functions can be applied to one element by listing them space-separated in the same filter property. They are applied in order from left to right.",
        syntax_example: "img { filter: brightness(1.2) contrast(1.5) blur(1px); }"
      }
    ]
  },

  "clip-path": {
    "polygon()": [
      {
        value: "coordinates",
        description: "The polygon() function takes a list of x y coordinate pairs separated by commas. Each pair defines a vertex of the clipping shape. Coordinates can be in px or %.",
        syntax_example: "div { clip-path: polygon(50% 0%, 100% 100%, 0% 100%); }"
      }
    ],
    "circle()": [
      {
        value: "radius and position",
        description: "The circle() function takes an optional radius and an optional at keyword followed by a position. If no radius is given, the browser calculates one based on the element size.",
        syntax_example: "div { clip-path: circle(50% at center); }"
      }
    ],
    "inset()": [
      {
        value: "offsets",
        description: "The inset() function takes one to four length values defining how far to inset the clip from each edge, in the order top, right, bottom, left. An optional round keyword followed by a radius adds rounded corners.",
        syntax_example: "div { clip-path: inset(10px 20px 10px 20px round 5px); }"
      }
    ]
  },

  "cursor": {
    "url()": [
      {
        value: "fallback",
        description: "When using a custom cursor image with url(), always provide a fallback cursor keyword at the end. If the image fails to load, the browser uses the fallback.",
        syntax_example: "div { cursor: url('cursor.png'), auto; }"
      }
    ]
  },

  "content": {
    "url()": [
      {
        value: "image insertion",
        description: "The url() value inserts an image as generated content. It must be used with the ::before or ::after pseudo-element. The image is inserted inline and cannot be sized with width or height.",
        syntax_example: "p::before { content: url('icon.png'); }"
      }
    ],
    "counter()": [
      {
        value: "counter-reset required",
        description: "Before using counter() in content, counter-reset must be defined on an ancestor element to initialize the counter. counter-increment must also be defined to advance the counter.",
        syntax_example: "ol { counter-reset: item; } li::before { counter-increment: item; content: counter(item) '. '; }"
      }
    ],
    "attr()": [
      {
        value: "HTML attribute",
        description: "The attr() function retrieves the value of an HTML attribute from the element and inserts it as generated content. The attribute name is passed as a string argument.",
        syntax_example: "a::after { content: ' (' attr(href) ')'; }"
      }
    ]
  },

  "list-style": {
    "list-style-type": [
      {
        value: "disc",
        description: "The default marker for unordered lists. Renders as a filled circle. list-style-type must be set on the li element or its parent ul or ol.",
        syntax_example: "ul { list-style-type: disc; }"
      },
      {
        value: "circle",
        description: "Renders as an unfilled circle outline. Used as an alternative to disc for nested list levels.",
        syntax_example: "ul ul { list-style-type: circle; }"
      },
      {
        value: "square",
        description: "Renders as a filled square. Commonly used for third-level nested lists.",
        syntax_example: "ul ul ul { list-style-type: square; }"
      },
      {
        value: "decimal",
        description: "The default marker for ordered lists. Renders as standard Arabic numerals starting from 1.",
        syntax_example: "ol { list-style-type: decimal; }"
      },
      {
        value: "lower-alpha",
        description: "Renders ordered list markers as lowercase letters a, b, c and so on.",
        syntax_example: "ol { list-style-type: lower-alpha; }"
      },
      {
        value: "upper-roman",
        description: "Renders ordered list markers as uppercase Roman numerals I, II, III and so on.",
        syntax_example: "ol { list-style-type: upper-roman; }"
      },
      {
        value: "none",
        description: "Removes the list marker entirely. The list item still has its block-level behavior but no bullet or number is shown.",
        syntax_example: "ul { list-style-type: none; }"
      }
    ]
  },

  "text-decoration": {
    "text-decoration-line": [
      {
        value: "underline",
        description: "Draws a line beneath the text. text-decoration-line must be set for any decoration to appear. Color and style can be controlled with text-decoration-color and text-decoration-style.",
        syntax_example: "p { text-decoration: underline; }"
      },
      {
        value: "overline",
        description: "Draws a line above the text. Can be combined with underline by listing both values space-separated.",
        syntax_example: "p { text-decoration: overline; }"
      },
      {
        value: "line-through",
        description: "Draws a line through the middle of the text, commonly used to indicate deleted or deprecated content.",
        syntax_example: "p { text-decoration: line-through; }"
      },
      {
        value: "underline overline",
        description: "Multiple text-decoration-line values can be combined space-separated to apply more than one decoration at once.",
        syntax_example: "p { text-decoration: underline overline; }"
      }
    ]
  },

  "box-shadow": {
    "values": [
      {
        value: "offset-x offset-y",
        description: "The first two values are required. offset-x controls the horizontal position of the shadow and offset-y controls the vertical position. Positive offset-x moves the shadow right and positive offset-y moves it down.",
        syntax_example: "div { box-shadow: 5px 5px; }"
      },
      {
        value: "blur-radius",
        description: "The third optional value sets the blur radius. Higher values produce a more diffused shadow. A value of 0 produces a sharp shadow. Must come after offset-x and offset-y.",
        syntax_example: "div { box-shadow: 5px 5px 10px; }"
      },
      {
        value: "spread-radius",
        description: "The fourth optional value sets the spread radius. Positive values expand the shadow and negative values shrink it. Must come after blur-radius.",
        syntax_example: "div { box-shadow: 5px 5px 10px 3px; }"
      },
      {
        value: "color",
        description: "The color value sets the shadow color. It can appear before or after the offset values. If omitted, the shadow uses the element's current text color.",
        syntax_example: "div { box-shadow: 5px 5px 10px 3px rgba(0,0,0,0.5); }"
      },
      {
        value: "inset",
        description: "The inset keyword makes the shadow appear inside the element rather than outside. It must come first or last in the shadow declaration.",
        syntax_example: "div { box-shadow: inset 5px 5px 10px rgba(0,0,0,0.5); }"
      },
      {
        value: "multiple shadows",
        description: "Multiple shadows can be applied by separating each shadow declaration with a comma. The first shadow listed appears on top.",
        syntax_example: "div { box-shadow: 5px 5px 10px black, -5px -5px 10px blue; }"
      }
    ]
  },

  "outline": {
    "outline-offset": [
      {
        value: "px",
        description: "outline-offset adds space between the outline and the border edge of the element. It must be defined separately from the outline shorthand. Positive values push the outline outward and negative values pull it inward.",
        syntax_example: "div { outline: 2px solid blue; outline-offset: 4px; }"
      }
    ]
  },

  "text-overflow": {
    "ellipsis": [
      {
        value: "required conditions",
        description: "For text-overflow: ellipsis to work, three conditions must all be met on the same element. The element must have overflow set to hidden, white-space set to nowrap, and a defined width.",
        syntax_example: "div { width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }"
      }
    ]
  },

  "white-space": {
    "nowrap": [
      {
        value: "text-overflow",
        description: "white-space: nowrap is required for text-overflow: ellipsis to work. It prevents text from wrapping so overflow can be detected and the ellipsis applied.",
        syntax_example: "div { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }"
      }
    ],
    "pre": [
      {
        value: "tab-size",
        description: "When white-space is set to pre or pre-wrap, tab characters are preserved. The tab-size property controls how wide tab characters appear.",
        syntax_example: "pre { white-space: pre; tab-size: 4; }"
      }
    ]
  },

  "width": {
    "auto": [
      {
        value: "block elements",
        description: "For block-level elements, auto means the element stretches to fill the full width of its containing block minus any margin.",
        syntax_example: "div { width: auto; }"
      },
      {
        value: "inline elements",
        description: "For inline elements, auto means the element is only as wide as its content. Width and height cannot be set on inline elements directly.",
        syntax_example: "span { width: auto; }"
      }
    ],
    "percentage": [
      {
        value: "relative to parent",
        description: "Percentage width values are relative to the width of the containing block, not the viewport. The parent must have a defined width for percentage values to calculate correctly.",
        syntax_example: "div { width: 50%; }"
      }
    ]
  },

  "height": {
    "auto": [
      {
        value: "content-based",
        description: "For block elements, auto height means the element expands to fit its content. If the element has no content, it collapses to zero height.",
        syntax_example: "div { height: auto; }"
      }
    ],
    "percentage": [
      {
        value: "parent height required",
        description: "Percentage height values only work if the parent element has an explicitly defined height. If the parent height is auto, the percentage has no effect.",
        syntax_example: ".parent { height: 300px; } .child { height: 50%; }"
      }
    ]
  },

  "margin": {
    "auto": [
      {
        value: "horizontal centering",
        description: "Setting margin to auto on the left and right centers a block-level element horizontally within its container. The element must have a defined width for this to work.",
        syntax_example: "div { width: 300px; margin: 0 auto; }"
      },
      {
        value: "flex auto margin",
        description: "Inside a flex container, margin: auto absorbs all available space in that direction. This is useful for pushing items to opposite ends of the container.",
        syntax_example: ".item { margin-left: auto; }"
      }
    ],
    "collapsing": [
      {
        value: "margin collapse",
        description: "Top and bottom margins of adjacent block-level elements collapse into a single margin equal to the larger of the two values. This does not happen with left and right margins or inside flex and grid containers.",
        syntax_example: "p { margin: 20px 0; }"
      }
    ]
  },

  "padding": {
    "shorthand order": [
      {
        value: "four values",
        description: "When four values are provided, they apply in clockwise order: top, right, bottom, left. Remember the mnemonic TRouBLe.",
        syntax_example: "div { padding: 10px 20px 15px 5px; }"
      },
      {
        value: "two values",
        description: "When two values are provided, the first applies to top and bottom and the second applies to right and left.",
        syntax_example: "div { padding: 10px 20px; }"
      },
      {
        value: "three values",
        description: "When three values are provided, the first applies to top, the second to right and left, and the third to bottom.",
        syntax_example: "div { padding: 10px 20px 15px; }"
      }
    ]
  },

  "color": {
    "hex": [
      {
        value: "shorthand hex",
        description: "A three-character hex value is shorthand for a six-character value where each character is doubled. For example #f0a is equivalent to #ff00aa.",
        syntax_example: "p { color: #f0a; }"
      }
    ],
    "rgb()": [
      {
        value: "rgba()",
        description: "rgba() extends rgb() with a fourth alpha transparency value between 0 and 1. A value of 0 is fully transparent and 1 is fully opaque.",
        syntax_example: "p { color: rgba(255, 0, 0, 0.5); }"
      }
    ],
    "hsl()": [
      {
        value: "hsla()",
        description: "hsla() extends hsl() with a fourth alpha transparency value between 0 and 1. A value of 0 is fully transparent and 1 is fully opaque.",
        syntax_example: "p { color: hsla(0, 100%, 50%, 0.5); }"
      }
    ]
  },

  "border-radius": {
    "shorthand": [
      {
        value: "four values",
        description: "When four values are provided, they apply to the corners in clockwise order starting from the top-left: top-left, top-right, bottom-right, bottom-left.",
        syntax_example: "div { border-radius: 5px 10px 15px 20px; }"
      },
      {
        value: "elliptical corners",
        description: "A forward slash can separate horizontal and vertical radii for elliptical corners. The values before the slash are horizontal radii and the values after are vertical radii.",
        syntax_example: "div { border-radius: 10px / 20px; }"
      },
      {
        value: "percentage",
        description: "Percentage values create elliptical corners relative to the element dimensions. Setting border-radius to 50% on an element with equal width and height creates a perfect circle.",
        syntax_example: "div { width: 100px; height: 100px; border-radius: 50%; }"
      }
    ]
  }

};
