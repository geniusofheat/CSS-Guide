// css_guide_default_values.js
// Supplemental default value content for each CSS property.
// Keyed by property name. Merged into lesson detail by css_guide_engine.js.

const css_guide_default_values = {

  "accent-color": {
    default_value_description: "By default, the browser automatically selects the accent color for UI controls like checkboxes, radio buttons, range sliders, and progress bars. This color typically matches the operating system or user-agent theme, meaning it will look different across devices and browsers without any CSS applied.",
    default_value_syntax: "input[type=checkbox] { accent-color: auto; }",
    default_value_applies_to: ["input[type=checkbox]", "input[type=radio]", "input[type=range]", "progress"]
  },

  "align-content": {
    default_value_description: "By default, flex lines or grid rows stretch to fill the available space in the container. This means if there is extra space along the cross axis, each line expands equally to fill it.",
    default_value_syntax: ".container { display: flex; flex-wrap: wrap; align-content: stretch; }",
    default_value_applies_to: ["flex containers", "grid containers"]
  },

  "align-items": {
    default_value_description: "By default, flex and grid items stretch to fill the full height of their row or column track. Every item in the container will match the height of the tallest item in that row unless overridden.",
    default_value_syntax: ".container { display: flex; align-items: stretch; }",
    default_value_applies_to: ["flex containers", "grid containers"]
  },

  "align-self": {
    default_value_description: "By default, a flex or grid item inherits the align-items value set on its container. Setting auto means the item defers to whatever the parent container specifies.",
    default_value_syntax: ".item { align-self: auto; }",
    default_value_applies_to: ["flex items", "grid items"]
  },

  "all": {
    default_value_description: "By default, this property has no effect. It must be explicitly set to initial, inherit, unset, or revert to reset all other CSS properties on the element.",
    default_value_syntax: ".element { all: unset; }",
    default_value_applies_to: ["all elements"]
  },

  "animation": {
    default_value_description: "By default, no animation is applied. Elements remain static until an animation name referencing a @keyframes rule is explicitly assigned.",
    default_value_syntax: ".element { animation: none; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-delay": {
    default_value_description: "By default, an animation starts immediately when applied, with no delay. The animation begins playing as soon as the element is rendered.",
    default_value_syntax: ".element { animation-delay: 0s; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-direction": {
    default_value_description: "By default, animations play forward from the first keyframe to the last on every iteration. The animation does not reverse on repeat.",
    default_value_syntax: ".element { animation-direction: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-duration": {
    default_value_description: "By default, an animation has zero duration, meaning it completes instantly and produces no visible effect unless a duration is explicitly set.",
    default_value_syntax: ".element { animation-duration: 0s; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-fill-mode": {
    default_value_description: "By default, an animation has no fill mode. The element returns to its original styles before and after the animation plays, with no keyframe styles persisting.",
    default_value_syntax: ".element { animation-fill-mode: none; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-iteration-count": {
    default_value_description: "By default, an animation plays exactly once and then stops. To loop continuously, the value must be changed to infinite.",
    default_value_syntax: ".element { animation-iteration-count: 1; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-name": {
    default_value_description: "By default, no animation name is assigned, so no @keyframes animation plays. An animation only runs when a valid @keyframes name is provided.",
    default_value_syntax: ".element { animation-name: none; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-play-state": {
    default_value_description: "By default, animations are in a running state. They play automatically when applied unless explicitly paused.",
    default_value_syntax: ".element { animation-play-state: running; }",
    default_value_applies_to: ["all elements"]
  },

  "animation-timing-function": {
    default_value_description: "By default, animations use an ease timing function, which starts slow, speeds up in the middle, and slows down at the end, giving a natural feel.",
    default_value_syntax: ".element { animation-timing-function: ease; }",
    default_value_applies_to: ["all elements"]
  },

  "aspect-ratio": {
    default_value_description: "By default, no aspect ratio is enforced. The element sizes itself based on its content or explicit width and height values.",
    default_value_syntax: ".element { aspect-ratio: auto; }",
    default_value_applies_to: ["all elements except inline elements"]
  },

  "backdrop-filter": {
    default_value_description: "By default, no backdrop filter is applied. The area behind the element renders normally without any blur, brightness, or other graphical effects.",
    default_value_syntax: ".element { backdrop-filter: none; }",
    default_value_applies_to: ["all elements"]
  },

  "backface-visibility": {
    default_value_description: "By default, the back face of a 3D-transformed element is visible. When an element is rotated 180 degrees, its mirrored back side shows through.",
    default_value_syntax: ".element { backface-visibility: visible; }",
    default_value_applies_to: ["transformable elements"]
  },

  "background": {
    default_value_description: "By default, elements have no background color or image. The background is fully transparent, allowing parent backgrounds to show through.",
    default_value_syntax: "div { background: transparent; }",
    default_value_applies_to: ["all elements"]
  },

  "background-attachment": {
    default_value_description: "By default, a background image scrolls along with the page content. When the user scrolls, the background moves with the element.",
    default_value_syntax: "div { background-attachment: scroll; }",
    default_value_applies_to: ["all elements"]
  },

  "background-blend-mode": {
    default_value_description: "By default, background layers do not blend with each other. Each background image or color renders normally on top of the one below it.",
    default_value_syntax: "div { background-blend-mode: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "background-clip": {
    default_value_description: "By default, the background extends to the outer edge of the border. The background color or image fills the entire border-box area.",
    default_value_syntax: "div { background-clip: border-box; }",
    default_value_applies_to: ["all elements"]
  },

  "background-color": {
    default_value_description: "By default, elements have a transparent background color. No color is painted behind the element's content unless explicitly set.",
    default_value_syntax: "div { background-color: transparent; }",
    default_value_applies_to: ["all elements"]
  },

  "background-image": {
    default_value_description: "By default, no background image is applied to any element. A background image only appears when explicitly set using a url() or gradient value.",
    default_value_syntax: "div { background-image: none; }",
    default_value_applies_to: ["all elements"]
  },

  "background-origin": {
    default_value_description: "By default, the background image positioning area starts at the padding edge of the element, inside the border.",
    default_value_syntax: "div { background-origin: padding-box; }",
    default_value_applies_to: ["all elements"]
  },

  "background-position": {
    default_value_description: "By default, a background image is positioned at the top-left corner of the element's background positioning area.",
    default_value_syntax: "div { background-position: 0% 0%; }",
    default_value_applies_to: ["all elements"]
  },

  "background-position-x": {
    default_value_description: "By default, the horizontal position of a background image starts at the left edge of the background positioning area.",
    default_value_syntax: "div { background-position-x: 0%; }",
    default_value_applies_to: ["all elements"]
  },

  "background-position-y": {
    default_value_description: "By default, the vertical position of a background image starts at the top edge of the background positioning area.",
    default_value_syntax: "div { background-position-y: 0%; }",
    default_value_applies_to: ["all elements"]
  },

  "background-repeat": {
    default_value_description: "By default, background images repeat both horizontally and vertically to fill the entire background area of the element.",
    default_value_syntax: "div { background-repeat: repeat; }",
    default_value_applies_to: ["all elements"]
  },

  "background-size": {
    default_value_description: "By default, a background image is displayed at its original full size. It is not scaled to fit or cover the element.",
    default_value_syntax: "div { background-size: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "block-size": {
    default_value_description: "By default, the block size of an element is determined automatically by its content. In a horizontal writing mode, block-size corresponds to height.",
    default_value_syntax: "div { block-size: auto; }",
    default_value_applies_to: ["all elements except inline elements"]
  },

  "border": {
    default_value_description: "By default, elements have no visible border. The border is not rendered unless a border-style is explicitly set.",
    default_value_syntax: "div { border: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block": {
    default_value_description: "By default, no border is applied to the block-start and block-end edges of an element. In horizontal writing modes, these correspond to the top and bottom edges.",
    default_value_syntax: "div { border-block: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-color": {
    default_value_description: "By default, the border color on block-start and block-end edges inherits the element's current text color.",
    default_value_syntax: "div { border-block-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-end": {
    default_value_description: "By default, no border is applied to the block-end edge. In a horizontal writing mode, this corresponds to the bottom edge of the element.",
    default_value_syntax: "div { border-block-end: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-end-color": {
    default_value_description: "By default, the block-end border color matches the element's current text color.",
    default_value_syntax: "div { border-block-end-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-end-style": {
    default_value_description: "By default, no border style is set on the block-end edge, so no border is visible even if a width or color is specified.",
    default_value_syntax: "div { border-block-end-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-end-width": {
    default_value_description: "By default, the block-end border width is set to medium, but it only renders if a border-style is also specified.",
    default_value_syntax: "div { border-block-end-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-start": {
    default_value_description: "By default, no border is applied to the block-start edge. In a horizontal writing mode, this corresponds to the top edge of the element.",
    default_value_syntax: "div { border-block-start: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-start-color": {
    default_value_description: "By default, the block-start border color matches the element's current text color.",
    default_value_syntax: "div { border-block-start-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-start-style": {
    default_value_description: "By default, no border style is set on the block-start edge, so no border is visible.",
    default_value_syntax: "div { border-block-start-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-start-width": {
    default_value_description: "By default, the block-start border width is medium, but only renders if a border-style is also applied.",
    default_value_syntax: "div { border-block-start-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-style": {
    default_value_description: "By default, no border style is applied to the block-start and block-end edges, so no border is visible.",
    default_value_syntax: "div { border-block-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-block-width": {
    default_value_description: "By default, the block-start and block-end border widths are medium, but only render if a border-style is also specified.",
    default_value_syntax: "div { border-block-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-bottom": {
    default_value_description: "By default, no bottom border is visible. A border only renders when a border-style value other than none is explicitly set.",
    default_value_syntax: "div { border-bottom: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-bottom-color": {
    default_value_description: "By default, the bottom border color matches the element's current text color.",
    default_value_syntax: "div { border-bottom-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-bottom-left-radius": {
    default_value_description: "By default, the bottom-left corner of an element is a sharp right angle with no rounding applied.",
    default_value_syntax: "div { border-bottom-left-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-bottom-right-radius": {
    default_value_description: "By default, the bottom-right corner of an element is a sharp right angle with no rounding applied.",
    default_value_syntax: "div { border-bottom-right-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-bottom-style": {
    default_value_description: "By default, no bottom border style is set, so no bottom border is visible regardless of color or width.",
    default_value_syntax: "div { border-bottom-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-bottom-width": {
    default_value_description: "By default, the bottom border width is medium, but it only renders when a border-style is also specified.",
    default_value_syntax: "div { border-bottom-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-collapse": {
    default_value_description: "By default, table borders are separated. Each cell has its own individual border with spacing between cells.",
    default_value_syntax: "table { border-collapse: separate; }",
    default_value_applies_to: ["table elements"]
  },

  "border-color": {
    default_value_description: "By default, border color is set to the element's current text color. No border is visible unless a border-style is also applied.",
    default_value_syntax: "div { border-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-image": {
    default_value_description: "By default, no border image is applied. The element uses its regular border-style instead.",
    default_value_syntax: "div { border-image: none; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-image-outset": {
    default_value_description: "By default, the border image does not extend beyond the border box of the element.",
    default_value_syntax: "div { border-image-outset: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-image-repeat": {
    default_value_description: "By default, the border image is stretched to fill each side of the border area.",
    default_value_syntax: "div { border-image-repeat: stretch; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-image-slice": {
    default_value_description: "By default, the border image is sliced at 100% from each edge, using the full image for each border side.",
    default_value_syntax: "div { border-image-slice: 100%; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-image-source": {
    default_value_description: "By default, no border image source is set, so the regular border style is used instead.",
    default_value_syntax: "div { border-image-source: none; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-image-width": {
    default_value_description: "By default, the border image width matches the border-width of the element.",
    default_value_syntax: "div { border-image-width: 1; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-inline": {
    default_value_description: "By default, no border is applied to the inline-start and inline-end edges. In horizontal writing modes, these correspond to the left and right edges.",
    default_value_syntax: "div { border-inline: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-color": {
    default_value_description: "By default, the inline border color matches the element's current text color.",
    default_value_syntax: "div { border-inline-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-end": {
    default_value_description: "By default, no border is applied to the inline-end edge. In left-to-right writing modes, this is the right edge.",
    default_value_syntax: "div { border-inline-end: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-end-color": {
    default_value_description: "By default, the inline-end border color matches the element's current text color.",
    default_value_syntax: "div { border-inline-end-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-end-style": {
    default_value_description: "By default, no border style is set on the inline-end edge, so no border is visible.",
    default_value_syntax: "div { border-inline-end-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-end-width": {
    default_value_description: "By default, the inline-end border width is medium, but only renders if a border-style is also applied.",
    default_value_syntax: "div { border-inline-end-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-start": {
    default_value_description: "By default, no border is applied to the inline-start edge. In left-to-right writing modes, this is the left edge.",
    default_value_syntax: "div { border-inline-start: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-start-color": {
    default_value_description: "By default, the inline-start border color matches the element's current text color.",
    default_value_syntax: "div { border-inline-start-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-start-style": {
    default_value_description: "By default, no border style is set on the inline-start edge, so no border is visible.",
    default_value_syntax: "div { border-inline-start-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-start-width": {
    default_value_description: "By default, the inline-start border width is medium, but only renders if a border-style is also applied.",
    default_value_syntax: "div { border-inline-start-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-style": {
    default_value_description: "By default, no border style is applied to the inline-start and inline-end edges, so no border is visible.",
    default_value_syntax: "div { border-inline-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-inline-width": {
    default_value_description: "By default, the inline-start and inline-end border widths are medium, but only render if a border-style is also specified.",
    default_value_syntax: "div { border-inline-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-left": {
    default_value_description: "By default, no left border is visible. A border only renders when a border-style value other than none is set.",
    default_value_syntax: "div { border-left: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-left-color": {
    default_value_description: "By default, the left border color matches the element's current text color.",
    default_value_syntax: "div { border-left-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-left-style": {
    default_value_description: "By default, no left border style is set, so no left border is visible.",
    default_value_syntax: "div { border-left-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-left-width": {
    default_value_description: "By default, the left border width is medium, but only renders when a border-style is also specified.",
    default_value_syntax: "div { border-left-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-radius": {
    default_value_description: "By default, all corners of an element are sharp right angles with no rounding.",
    default_value_syntax: "div { border-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-right": {
    default_value_description: "By default, no right border is visible. A border only renders when a border-style value other than none is set.",
    default_value_syntax: "div { border-right: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-right-color": {
    default_value_description: "By default, the right border color matches the element's current text color.",
    default_value_syntax: "div { border-right-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-right-style": {
    default_value_description: "By default, no right border style is set, so no right border is visible.",
    default_value_syntax: "div { border-right-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-right-width": {
_value_description: "By default, the right border width is medium, but only renders when a border-style is also specified.",
    default_value_syntax: "div { border-right-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-spacing": {
    default_value_description: "By default, table cells have 2px of spacing between their borders when border-collapse is set to separate.",
    default_value_syntax: "table { border-spacing: 2px; }",
    default_value_applies_to: ["table elements"]
  },

  "border-style": {
    default_value_description: "By default, no border style is set on any side of an element, so no border is visible even if a width or color is specified.",
    default_value_syntax: "div { border-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-top": {
    default_value_description: "By default, no top border is visible. A border only renders when a border-style value other than none is set.",
    default_value_syntax: "div { border-top: medium none currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-top-color": {
    default_value_description: "By default, the top border color matches the element's current text color.",
    default_value_syntax: "div { border-top-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "border-top-left-radius": {
    default_value_description: "By default, the top-left corner of an element is a sharp right angle with no rounding applied.",
    default_value_syntax: "div { border-top-left-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-top-right-radius": {
    default_value_description: "By default, the top-right corner of an element is a sharp right angle with no rounding applied.",
    default_value_syntax: "div { border-top-right-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-top-style": {
    default_value_description: "By default, no top border style is set, so no top border is visible.",
    default_value_syntax: "div { border-top-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "border-top-width": {
    default_value_description: "By default, the top border width is medium, but only renders when a border-style is also specified.",
    default_value_syntax: "div { border-top-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-width": {
    default_value_description: "By default, the border width is medium on all sides, but borders only render when a border-style is also specified.",
    default_value_syntax: "div { border-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "border-end-end-radius": {
    default_value_description: "By default, the border-end-end corner has no rounding. In a left-to-right horizontal writing mode, this corresponds to the bottom-right corner.",
    default_value_syntax: "div { border-end-end-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-end-start-radius": {
    default_value_description: "By default, the border-end-start corner has no rounding. In a left-to-right horizontal writing mode, this corresponds to the bottom-left corner.",
    default_value_syntax: "div { border-end-start-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-start-end-radius": {
    default_value_description: "By default, the border-start-end corner has no rounding. In a left-to-right horizontal writing mode, this corresponds to the top-right corner.",
    default_value_syntax: "div { border-start-end-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "border-start-start-radius": {
    default_value_description: "By default, the border-start-start corner has no rounding. In a left-to-right horizontal writing mode, this corresponds to the top-left corner.",
    default_value_syntax: "div { border-start-start-radius: 0; }",
    default_value_applies_to: ["all elements except internal table elements"]
  },

  "bottom": {
    default_value_description: "By default, the bottom offset is auto, meaning the browser calculates the position based on the normal flow of the document. This only takes effect when position is set to relative, absolute, fixed, or sticky.",
    default_value_syntax: "div { position: absolute; bottom: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "box-decoration-break": {
    default_value_description: "By default, when an element breaks across lines, columns, or pages, its box decorations like borders and padding are applied as if the element were one continuous box.",
    default_value_syntax: "span { box-decoration-break: slice; }",
    default_value_applies_to: ["all elements"]
  },

  "box-reflect": {
    default_value_description: "By default, no reflection is applied to any element. A reflection only appears when a direction and optional offset are explicitly set.",
    default_value_syntax: "div { box-reflect: none; }",
    default_value_applies_to: ["all elements"]
  },

  "box-shadow": {
    default_value_description: "By default, no shadow is applied to any element. Shadows only appear when explicit offset, blur, and color values are provided.",
    default_value_syntax: "div { box-shadow: none; }",
    default_value_applies_to: ["all elements"]
  },

  "box-sizing": {
    default_value_description: "By default, width and height only apply to the content area. Padding and border are added on top of the specified width and height, which can make layout calculations more complex.",
    default_value_syntax: "div { box-sizing: content-box; }",
    default_value_applies_to: ["all elements that accept width or height"]
  },

  "break-after": {
    default_value_description: "By default, no forced break is inserted after an element. The browser decides where to break content across columns or pages.",
    default_value_syntax: "div { break-after: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "break-before": {
    default_value_description: "By default, no forced break is inserted before an element. The browser decides where to break content across columns or pages.",
    default_value_syntax: "div { break-before: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "break-inside": {
    default_value_description: "By default, breaks are allowed inside an element when content flows across columns or pages.",
    default_value_syntax: "div { break-inside: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "caption-side": {
    default_value_description: "By default, a table caption is placed above the table.",
    default_value_syntax: "caption { caption-side: top; }",
    default_value_applies_to: ["table-caption elements"]
  },

  "caret-color": {
    default_value_description: "By default, the text input cursor color is automatically determined by the browser, typically matching the text color of the element.",
    default_value_syntax: "input { caret-color: auto; }",
    default_value_applies_to: ["input", "textarea", "contenteditable elements"]
  },

  "clear": {
    default_value_description: "By default, an element does not clear any floats. It will sit beside floated elements rather than dropping below them.",
    default_value_syntax: "div { clear: none; }",
    default_value_applies_to: ["block-level elements"]
  },

  "clip": {
    default_value_description: "By default, no clipping is applied to an element. The element renders its full content area without any masking.",
    default_value_syntax: "div { clip: auto; }",
    default_value_applies_to: ["absolutely positioned elements"]
  },

  "clip-path": {
    default_value_description: "By default, no clipping path is applied. The full visible area of the element is shown without any shape masking.",
    default_value_syntax: "div { clip-path: none; }",
    default_value_applies_to: ["all elements"]
  },

  "color": {
    default_value_description: "By default, text color is inherited from the parent element or set by the browser's default stylesheet. For most browsers, the default text color for body content is black.",
    default_value_syntax: "body { color: black; }",
    default_value_applies_to: ["all elements"]
  },

  "color-scheme": {
    default_value_description: "By default, an element supports the browser's normal color scheme without explicitly declaring light or dark mode support.",
    default_value_syntax: ":root { color-scheme: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "column-count": {
    default_value_description: "By default, no multi-column layout is applied. Content flows in a single column unless an explicit column count is set.",
    default_value_syntax: "div { column-count: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "column-fill": {
    default_value_description: "By default, column content is balanced so each column has roughly equal height.",
    default_value_syntax: "div { column-fill: balance; }",
    default_value_applies_to: ["multi-column elements"]
  },

  "column-gap": {
    default_value_description: "By default, the gap between columns is determined by the browser, typically around 1em in multi-column layouts and 0 in flex and grid layouts.",
    default_value_syntax: "div { column-gap: normal; }",
    default_value_applies_to: ["multi-column, flex, and grid containers"]
  },

  "column-rule": {
    default_value_description: "By default, no rule line is drawn between columns. A column rule only appears when a column-rule-style other than none is set.",
    default_value_syntax: "div { column-rule: medium none currentColor; }",
    default_value_applies_to: ["multi-column elements"]
  },

  "column-rule-color": {
    default_value_description: "By default, the column rule color matches the element's current text color.",
    default_value_syntax: "div { column-rule-color: currentColor; }",
    default_value_applies_to: ["multi-column elements"]
  },

  "column-rule-style": {
    default_value_description: "By default, no column rule style is set, so no dividing line appears between columns.",
    default_value_syntax: "div { column-rule-style: none; }",
    default_value_applies_to: ["multi-column elements"]
  },

  "column-rule-width": {
    default_value_description: "By default, the column rule width is medium, but it only renders if a column-rule-style is also specified.",
    default_value_syntax: "div { column-rule-width: medium; }",
    default_value_applies_to: ["multi-column elements"]
  },

  "column-span": {
    default_value_description: "By default, an element does not span across multiple columns. It stays within its own column.",
    default_value_syntax: "div { column-span: none; }",
    default_value_applies_to: ["in-flow block-level elements"]
  },

  "column-width": {
    default_value_description: "By default, no specific column width is set. The browser determines column widths based on the column-count and available space.",
    default_value_syntax: "div { column-width: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "columns": {
    default_value_description: "By default, no multi-column layout is applied. Both column-width and column-count are auto.",
    default_value_syntax: "div { columns: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "content": {
    default_value_description: "By default, no generated content is inserted. The content property only produces output when used with ::before or ::after pseudo-elements.",
    default_value_syntax: "p::before { content: normal; }",
    default_value_applies_to: ["::before and ::after pseudo-elements"]
  },

  "counter-increment": {
    default_value_description: "By default, no counter is incremented. Counters must be explicitly named and incremented to be used.",
    default_value_syntax: "div { counter-increment: none; }",
    default_value_applies_to: ["all elements"]
  },

  "counter-reset": {
    default_value_description: "By default, no counter is reset. A counter must be explicitly named and reset before it can be incremented and displayed.",
    default_value_syntax: "div { counter-reset: none; }",
    default_value_applies_to: ["all elements"]
  },

  "counter-set": {
    default_value_description: "By default, no counter value is set. Counters must be explicitly named to be assigned a value.",
    default_value_syntax: "div { counter-set: none; }",
    default_value_applies_to: ["all elements"]
  },

  "cursor": {
    default_value_description: "By default, the cursor appearance is determined automatically by the browser based on the context, such as a pointer over links or a text cursor over text.",
    default_value_syntax: "div { cursor: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "direction": {
    default_value_description: "By default, text flows from left to right, which is the standard direction for most Western languages.",
    default_value_syntax: "body { direction: ltr; }",
    default_value_applies_to: ["all elements"]
  },

  "display": {
    default_value_description: "By default, most HTML elements are either block-level or inline depending on their element type. Block-level elements like div, p, and h1 take up the full width of their container and start on a new line. Inline elements like span and a only take up as much width as their content.",
    default_value_syntax: "div { display: block; }",
    default_value_applies_to: ["all elements"]
  },

  "empty-cells": {
    default_value_description: "By default, borders and backgrounds are shown on empty table cells, making them visible even when they contain no content.",
    default_value_syntax: "table { empty-cells: show; }",
    default_value_applies_to: ["table-cell elements"]
  },

  "filter": {
    default_value_description: "By default, no filter effects are applied to an element. The element renders normally without any blur, brightness, or color adjustments.",
    default_value_syntax: "div { filter: none; }",
    default_value_applies_to: ["all elements"]
  },

  "flex": {
    default_value_description: "By default, flex items do not grow or shrink, and their base size is determined automatically by their content.",
    default_value_syntax: ".item { flex: 0 1 auto; }",
    default_value_applies_to: ["flex items"]
  },

  "flex-basis": {
    default_value_description: "By default, the initial size of a flex item is determined automatically based on its content size.",
    default_value_syntax: ".item { flex-basis: auto; }",
    default_value_applies_to: ["flex items"]
  },

  "flex-direction": {
    default_value_description: "By default, flex items are arranged in a horizontal row from left to right, following the main axis.",
    default_value_syntax: ".container { display: flex; flex-direction: row; }",
    default_value_applies_to: ["flex containers"]
  },

  "flex-flow": {
    default_value_description: "By default, flex items flow in a single horizontal row and do not wrap to the next line.",
    default_value_syntax: ".container { display: flex; flex-flow: row nowrap; }",
    default_value_applies_to: ["flex containers"]
  },

  "flex-grow": {
    default_value_description: "By default, flex items do not grow to fill available space. Each item only takes up as much space as its content requires.",
    default_value_syntax: ".item { flex-grow: 0; }",
    default_value_applies_to: ["flex items"]
  },

  "flex-shrink": {
    default_value_description: "By default, flex items are allowed to shrink if necessary to fit within the container. Each item shrinks proportionally when space is limited.",
    default_value_syntax: ".item { flex-shrink: 1; }",
    default_value_applies_to: ["flex items"]
  },

  "flex-wrap": {
    default_value_description: "By default, flex items are forced into a single line and do not wrap to the next row or column, even if they overflow the container.",
    default_value_syntax: ".container { display: flex; flex-wrap: nowrap; }",
    default_value_applies_to: ["flex containers"]
  },

  "float": {
    default_value_description: "By default, elements are not floated. They remain in the normal document flow and do not allow other content to wrap around them.",
    default_value_syntax: "div { float: none; }",
    default_value_applies_to: ["all elements except absolutely positioned elements"]
  },

  "font": {
    default_value_description: "By default, the font is determined by the browser's default stylesheet, typically a serif or sans-serif font at 16px.",
    default_value_syntax: "body { font: normal normal normal 16px/1.2 serif; }",
    default_value_applies_to: ["all elements"]
  },

  "font-family": {
    default_value_description: "By default, the font family is determined by the browser's default stylesheet. Most browsers use a serif or sans-serif generic font family.",
    default_value_syntax: "body { font-family: serif; }",
    default_value_applies_to: ["all elements"]
  },

  "font-feature-settings": {
    default_value_description: "By default, no OpenType font features are explicitly enabled or disabled. The font renders using its standard default feature set.",
    default_value_syntax: "body { font-feature-settings: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "font-kerning": {
    default_value_description: "By default, kerning is applied automatically based on font information stored in the font file itself.",
    default_value_syntax: "body { font-kerning: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "font-size": {
    default_value_description: "By default, the font size is medium, which most browsers render as 16px for body text. Heading elements have larger default sizes set by the browser stylesheet.",
    default_value_syntax: "body { font-size: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "font-size-adjust": {
    default_value_description: "By default, no font size adjustment is applied. The font renders at its specified size without compensation for x-height differences.",
    default_value_syntax: "body { font-size-adjust: none; }",
    default_value_applies_to: ["all elements"]
  },

  "font-stretch": {
    default_value_description: "By default, the font renders at its normal width without any condensing or expanding.",
    default_value_syntax: "body { font-stretch: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "font-style": {
    default_value_description: "By default, text is rendered upright in its normal style without any italic or oblique slant.",
    default_value_syntax: "body { font-style: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "font-variant": {
    default_value_description: "By default, text is rendered in the standard lowercase and uppercase letterforms without any small-caps substitution.",
    default_value_syntax: "body { font-variant: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "font-variant-caps": {
    default_value_description: "By default, no special capital letter variants are applied. Text renders in normal uppercase and lowercase forms.",
    default_value_syntax: "body { font-variant-caps: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "font-weight": {
    default_value_description: "By default, text is rendered at normal weight, equivalent to a numeric value of 400. Bold elements like strong and h1-h6 have heavier weights set by the browser stylesheet.",
    default_value_syntax: "body { font-weight: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "gap": {
    default_value_description: "By default, no gap is applied between flex or grid items. Items sit directly adjacent to one another with no spacing.",
    default_value_syntax: ".container { display: grid; gap: normal; }",
    default_value_applies_to: ["flex containers", "grid containers", "multi-column elements"]
  },

  "grid": {
    default_value_description: "By default, no grid layout is applied. The element behaves as a block element. Grid properties only take effect when display is set to grid.",
    default_value_syntax: ".container { display: grid; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-area": {
    default_value_description: "By default, a grid item is placed automatically according to the grid auto-placement algorithm without being assigned to a named area.",
    default_value_syntax: ".item { grid-area: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-auto-columns": {
    default_value_description: "By default, automatically created grid columns are sized to fit their content.",
    default_value_syntax: ".container { display: grid; grid-auto-columns: auto; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-auto-flow": {
    default_value_description: "By default, grid items are placed row by row, filling each row from left to right before moving to the next row.",
    default_value_syntax: ".container { display: grid; grid-auto-flow: row; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-auto-rows": {
    default_value_description: "By default, automatically created grid rows are sized to fit their content.",
    default_value_syntax: ".container { display: grid; grid-auto-rows: auto; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-column": {
    default_value_description: "By default, a grid item is placed automatically by the grid auto-placement algorithm without spanning specific columns.",
    default_value_syntax: ".item { grid-column: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-column-end": {
    default_value_description: "By default, a grid item's column end position is determined automatically by the grid layout algorithm.",
    default_value_syntax: ".item { grid-column-end: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-column-start": {
    default_value_description: "By default, a grid item's column start position is determined automatically by the grid layout algorithm.",
    default_value_syntax: ".item { grid-column-start: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-row": {
    default_value_description: "By default, a grid item is placed automatically by the grid layout algorithm without spanning specific rows.",
    default_value_syntax: ".item { grid-row: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-row-end": {
    default_value_description: "By default, a grid item's row end position is determined automatically by the grid layout algorithm.",
    default_value_syntax: ".item { grid-row-end: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-row-start": {
    default_value_description: "By default, a grid item's row start position is determined automatically by the grid layout algorithm.",
    default_value_syntax: ".item { grid-row-start: auto; }",
    default_value_applies_to: ["grid items"]
  },

  "grid-template": {
    default_value_description: "By default, no explicit grid template is defined. Grid tracks are created implicitly as items are placed.",
    default_value_syntax: ".container { display: grid; grid-template: none; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-template-areas": {
    default_value_description: "By default, no named grid areas are defined. Items must be placed using line numbers or auto-placement.",
    default_value_syntax: ".container { display: grid; grid-template-areas: none; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-template-columns": {
    default_value_description: "By default, no explicit column tracks are defined. Columns are created implicitly based on the number of items placed in the grid.",
    default_value_syntax: ".container { display: grid; grid-template-columns: none; }",
    default_value_applies_to: ["grid containers"]
  },

  "grid-template-rows": {
    default_value_description: "By default, no explicit row tracks are defined. Rows are created implicitly as items are placed in the grid.",
    default_value_syntax: ".container { display: grid; grid-template-rows: none; }",
    default_value_applies_to: ["grid containers"]
  },

  "hanging-punctuation": {
    default_value_description: "By default, punctuation marks are placed inside the text box and do not hang outside the line box.",
    default_value_syntax: "p { hanging-punctuation: none; }",
    default_value_applies_to: ["block-level elements"]
  },

  "height": {
    default_value_description: "By default, the height of a block element is determined automatically by its content. The element expands vertically to fit whatever content is placed inside it.",
    default_value_syntax: "div { height: auto; }",
    default_value_applies_to: ["all elements except inline elements and table columns"]
  },

  "hyphens": {
    default_value_description: "By default, hyphenation is not applied. Words break only at natural break points such as spaces or hyphens already present in the text.",
    default_value_syntax: "p { hyphens: manual; }",
    default_value_applies_to: ["all elements"]
  },

  "hyphenate-character": {
    default_value_description: "By default, the browser uses the appropriate hyphen character for the document's language, typically a standard hyphen-minus.",
    default_value_syntax: "p { hyphenate-character: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "image-rendering": {
    default_value_description: "By default, the browser uses its own algorithm to scale images, typically a smooth interpolation method.",
    default_value_syntax: "img { image-rendering: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "initial-letter": {
    default_value_description: "By default, no initial letter styling is applied. The first letter renders at normal size in the normal text flow.",
    default_value_syntax: "p::first-letter { initial-letter: normal; }",
    default_value_applies_to: ["::first-letter pseudo-elements and inline-level first children"]
  },

  "inline-size": {
    default_value_description: "By default, the inline size of an element is determined automatically by its content. In a horizontal writing mode, inline-size corresponds to width.",
    default_value_syntax: "div { inline-size: auto; }",
    default_value_applies_to: ["all elements except inline elements"]
  },

  "inset": {
    default_value_description: "By default, all inset offsets are auto, meaning the browser calculates position based on normal document flow.",
    default_value_syntax: "div { position: absolute; inset: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "inset-block": {
    default_value_description: "By default, the block-start and block-end offsets are auto. In horizontal writing modes, these correspond to top and bottom.",
    default_value_syntax: "div { position: absolute; inset-block: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "inset-block-end": {
    default_value_description: "By default, the block-end offset is auto. In a horizontal writing mode, this corresponds to the bottom offset.",
    default_value_syntax: "div { position: absolute; inset-block-end: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "inset-block-start": {
    default_value_description: "By default, the block-start offset is auto. In a horizontal writing mode, this corresponds to the top offset.",
    default_value_syntax: "div { position: absolute; inset-block-start: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "inset-inline": {
    default_value_description: "By default, the inline-start and inline-end offsets are auto. In a left-to-right horizontal writing mode, these correspond to left and right.",
    default_value_syntax: "div { position: absolute; inset-inline: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "inset-inline-end": {
    default_value_description: "By default, the inline-end offset is auto. In a left-to-right writing mode, this corresponds to the right offset.",
    default_value_syntax: "div { position: absolute; inset-inline-end: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "inset-inline-start": {
    default_value_description: "By default, the inline-start offset is auto. In a left-to-right writing mode, this corresponds to the left offset.",
    default_value_syntax: "div { position: absolute; inset-inline-start: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "isolation": {
    default_value_description: "By default, an element does not create a new stacking context for blending. It blends with content below it in the normal stacking order.",
    default_value_syntax: "div { isolation: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "justify-content": {
    default_value_description: "By default, flex and grid items are packed toward the start of the main axis with no extra space distributed between them.",
    default_value_syntax: ".container { display: flex; justify-content: normal; }",
    default_value_applies_to: ["flex containers", "grid containers"]
  },

  "justify-items": {
    default_value_description: "By default, grid items are justified according to the browser's default behavior, typically stretching to fill their grid area along the inline axis.",
    default_value_syntax: ".container { display: grid; justify-items: legacy; }",
    default_value_applies_to: ["grid containers"]
  },

  "justify-self": {
    default_value_description: "By default, a grid item's inline-axis alignment is inherited from the justify-items value of its container.",
    default_value_syntax: ".item { justify-self: auto; }",
    default_value_applies_to: ["grid items", "absolutely positioned elements"]
  },

  "left": {
    default_value_description: "By default, the left offset is auto, meaning the browser calculates the horizontal position based on normal document flow. This only takes effect when position is set to relative, absolute, fixed, or sticky.",
    default_value_syntax: "div { position: absolute; left: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "letter-spacing": {
    default_value_description: "By default, no extra spacing is added between characters. The browser uses the font's built-in character spacing.",
    default_value_syntax: "p { letter-spacing: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "line-height": {
    default_value_description: "By default, the line height is determined automatically by the browser based on the font size, typically resulting in a line height of about 1.2 times the font size.",
    default_value_syntax: "body { line-height: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "list-style": {
    default_value_description: "By default, list items use a disc bullet marker positioned outside the content area. This applies to ul elements in the browser's default stylesheet.",
    default_value_syntax: "ul { list-style: disc outside none; }",
    default_value_applies_to: ["list items"]
  },

  "list-style-image": {
    default_value_description: "By default, no image is used as a list marker. The list uses whatever list-style-type is specified instead.",
    default_value_syntax: "ul { list-style-image: none; }",
    default_value_applies_to: ["list items"]
  },

  "list-style-position": {
    default_value_description: "By default, list markers are placed outside the content area of the list item, to the left of the text block.",
    default_value_syntax: "ul { list-style-position: outside; }",
    default_value_applies_to: ["list items"]
  },

  "list-style-type": {
    default_value_description: "By default, unordered lists use a filled disc as the marker. Ordered lists use decimal numbers. This is set by the browser's default stylesheet.",
    default_value_syntax: "ul { list-style-type: disc; }",
    default_value_applies_to: ["list items"]
  },

  "margin": {
    default_value_description: "By default, most elements have zero margin on all sides. However, the browser's default stylesheet adds margins to elements like p, h1-h6, ul, and ol.",
    default_value_syntax: "div { margin: 0; }",
    default_value_applies_to: ["all elements except elements with table display types"]
  },

  "margin-block": {
    default_value_description: "By default, no block-direction margin is applied. In horizontal writing modes, block-start and block-end correspond to top and bottom margins.",
    default_value_syntax: "div { margin-block: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-block-end": {
    default_value_description: "By default, no block-end margin is applied. In a horizontal writing mode, this corresponds to the bottom margin.",
    default_value_syntax: "div { margin-block-end: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-block-start": {
    default_value_description: "By default, no block-start margin is applied. In a horizontal writing mode, this corresponds to the top margin.",
    default_value_syntax: "div { margin-block-start: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-bottom": {
    default_value_description: "By default, no bottom margin is applied to most elements. The browser stylesheet adds bottom margins to block elements like p and headings.",
    default_value_syntax: "div { margin-bottom: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-inline": {
    default_value_description: "By default, no inline-direction margin is applied. In a horizontal writing mode, inline-start and inline-end correspond to left and right margins.",
    default_value_syntax: "div { margin-inline: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-inline-end": {
    default_value_description: "By default, no inline-end margin is applied. In a left-to-right writing mode, this corresponds to the right margin.",
    default_value_syntax: "div { margin-inline-end: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-inline-start": {
    default_value_description: "By default, no inline-start margin is applied. In a left-to-right writing mode, this corresponds to the left margin.",
    default_value_syntax: "div { margin-inline-start: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-left": {
    default_value_description: "By default, no left margin is applied to most elements. The browser stylesheet may add left margins to list elements.",
    default_value_syntax: "div { margin-left: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-right": {
    default_value_description: "By default, no right margin is applied to most elements.",
    default_value_syntax: "div { margin-right: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "margin-top": {
    default_value_description: "By default, no top margin is applied to most elements. The browser stylesheet adds top margins to block elements like p and headings.",
    default_value_syntax: "div { margin-top: 0; }",
    default_value_applies_to: ["all elements except table display types"]
  },

  "mask": {
    default_value_description: "By default, no mask is applied to an element. The element renders its full visible area without any transparency masking.",
    default_value_syntax: "div { mask: none; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-clip": {
    default_value_description: "By default, the mask painting area extends to the border-box of the element.",
    default_value_syntax: "div { mask-clip: border-box; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-composite": {
    default_value_description: "By default, multiple mask layers are added together to produce the final mask.",
    default_value_syntax: "div { mask-composite: add; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-image": {
    default_value_description: "By default, no mask image is applied. The element renders fully without any image-based masking.",
    default_value_syntax: "div { mask-image: none; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-mode": {
    default_value_description: "By default, the mask mode is determined automatically based on whether the mask image is a luminance or alpha source.",
    default_value_syntax: "div { mask-mode: match-source; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-origin": {
    default_value_description: "By default, the mask positioning area starts at the border-box edge of the element.",
    default_value_syntax: "div { mask-origin: border-box; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-position": {
    default_value_description: "By default, a mask image is positioned at the center of the element.",
    default_value_syntax: "div { mask-position: center; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-repeat": {
    default_value_description: "By default, mask images do not repeat. The mask image is rendered once without tiling.",
    default_value_syntax: "div { mask-repeat: no-repeat; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-size": {
    default_value_description: "By default, a mask image is displayed at its intrinsic size without scaling.",
    default_value_syntax: "div { mask-size: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "mask-type": {
    default_value_description: "By default, SVG mask elements use luminance values to determine mask transparency.",
    default_value_syntax: "mask { mask-type: luminance; }",
    default_value_applies_to: ["SVG mask elements"]
  },

  "max-block-size": {
    default_value_description: "By default, no maximum block size is enforced. In horizontal writing modes, this corresponds to max-height.",
    default_value_syntax: "div { max-block-size: none; }",
    default_value_applies_to: ["all elements except inline elements and table columns"]
  },

  "max-height": {
    default_value_description: "By default, no maximum height is set. An element can grow as tall as its content requires without restriction.",
    default_value_syntax: "div { max-height: none; }",
    default_value_applies_to: ["all elements except inline elements and table columns"]
  },

  "max-inline-size": {
    default_value_description: "By default, no maximum inline size is enforced. In horizontal writing modes, this corresponds to max-width.",
    default_value_syntax: "div { max-inline-size: none; }",
    default_value_applies_to: ["all elements except inline elements and table rows"]
  },

  "max-width": {
    default_value_description: "By default, no maximum width is set. An element can grow as wide as its container allows without restriction.",
    default_value_syntax: "div { max-width: none; }",
    default_value_applies_to: ["all elements except inline elements and table rows"]
  },

  "min-block-size": {
    default_value_description: "By default, no minimum block size is enforced. In horizontal writing modes, this corresponds to min-height.",
    default_value_syntax: "div { min-block-size: 0; }",
    default_value_applies_to: ["all elements except inline elements and table columns"]
  },

  "min-height": {
    default_value_description: "By default, no minimum height is set. An element can be as short as its content requires, including collapsing to zero height if empty.",
    default_value_syntax: "div { min-height: 0; }",
    default_value_applies_to: ["all elements except inline elements and table columns"]
  },

  "min-inline-size": {
    default_value_description: "By default, no minimum inline size is enforced. In horizontal writing modes, this corresponds to min-width.",
    default_value_syntax: "div { min-inline-size: 0; }",
    default_value_applies_to: ["all elements except inline elements and table rows"]
  },

  "min-width": {
    default_value_description: "By default, no minimum width is set. An element can shrink as narrow as its content requires.",
    default_value_syntax: "div { min-width: 0; }",
    default_value_applies_to: ["all elements except inline elements and table rows"]
  },

  "mix-blend-mode": {
    default_value_description: "By default, an element's content renders normally on top of content below it without any color blending.",
    default_value_syntax: "div { mix-blend-mode: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "object-fit": {
    default_value_description: "By default, replaced elements like images and videos are stretched to fill their containing box, which may distort the aspect ratio.",
    default_value_syntax: "img { object-fit: fill; }",
    default_value_applies_to: ["replaced elements like img and video"]
  },

  "object-position": {
    default_value_description: "By default, replaced elements are positioned at the center of their containing box.",
    default_value_syntax: "img { object-position: 50% 50%; }",
    default_value_applies_to: ["replaced elements like img and video"]
  },

  "opacity": {
    default_value_description: "By default, elements are fully opaque. No transparency is applied and the element is completely visible.",
    default_value_syntax: "div { opacity: 1; }",
    default_value_applies_to: ["all elements"]
  },

  "order": {
    default_value_description: "By default, flex and grid items appear in the order they are written in the HTML source. No reordering is applied.",
    default_value_syntax: ".item { order: 0; }",
    default_value_applies_to: ["flex items", "grid items"]
  },

  "orphans": {
    default_value_description: "By default, at least two lines of a block must remain at the bottom of a page or column before a page break.",
    default_value_syntax: "p { orphans: 2; }",
    default_value_applies_to: ["block-level elements"]
  },

  "outline": {
    default_value_description: "By default, no outline is drawn around an element. Browsers may apply a default outline to focused elements for accessibility.",
    default_value_syntax: "div { outline: medium none invert; }",
    default_value_applies_to: ["all elements"]
  },

  "outline-color": {
    default_value_description: "By default, the outline color inverts the colors of the pixels it covers, ensuring it is always visible regardless of background color.",
    default_value_syntax: "div { outline-color: invert; }",
    default_value_applies_to: ["all elements"]
  },

  "outline-offset": {
    default_value_description: "By default, the outline is drawn directly adjacent to the border edge with no gap between them.",
    default_value_syntax: "div { outline-offset: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "outline-style": {
    default_value_description: "By default, no outline style is set, so no outline is visible even if an outline-width or outline-color is specified.",
    default_value_syntax: "div { outline-style: none; }",
    default_value_applies_to: ["all elements"]
  },

  "outline-width": {
    default_value_description: "By default, the outline width is medium, but it only renders when an outline-style is also specified.",
    default_value_syntax: "div { outline-width: medium; }",
    default_value_applies_to: ["all elements"]
  },

  "overflow": {
    default_value_description: "By default, content that overflows an element's box is fully visible and extends beyond the element's boundaries.",
    default_value_syntax: "div { overflow: visible; }",
    default_value_applies_to: ["block-level elements", "inline-block elements", "flex containers", "grid containers"]
  },

  "overflow-anchor": {
    default_value_description: "By default, the browser automatically adjusts scroll position to prevent content from jumping when new content is added above the visible area.",
    default_value_syntax: "div { overflow-anchor: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "overflow-wrap": {
    default_value_description: "By default, words only break at normal break points such as spaces. Long unbroken words can cause horizontal overflow.",
    default_value_syntax: "p { overflow-wrap: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "overflow-x": {
    default_value_description: "By default, content that overflows horizontally is visible and extends beyond the element's left and right edges.",
    default_value_syntax: "div { overflow-x: visible; }",
    default_value_applies_to: ["block-level elements", "inline-block elements"]
  },

  "overflow-y": {
    default_value_description: "By default, content that overflows vertically is visible and extends beyond the element's top and bottom edges.",
    default_value_syntax: "div { overflow-y: visible; }",
    default_value_applies_to: ["block-level elements", "inline-block elements"]
  },

  "overscroll-behavior": {
    default_value_description: "By default, when scrolling reaches the end of a scrollable element, the scroll event propagates to the parent element, which may cause the page to scroll.",
    default_value_syntax: "div { overscroll-behavior: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "overscroll-behavior-block": {
    default_value_description: "By default, overscroll in the block direction propagates to the parent scroll container.",
    default_value_syntax: "div { overscroll-behavior-block: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "overscroll-behavior-inline": {
    default_value_description: "By default, overscroll in the inline direction propagates to the parent scroll container.",
    default_value_syntax: "div { overscroll-behavior-inline: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "overscroll-behavior-x": {
    default_value_description: "By default, horizontal overscroll propagates to the parent scroll container.",
    default_value_syntax: "div { overscroll-behavior-x: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "overscroll-behavior-y": {
    default_value_description: "By default, vertical overscroll propagates to the parent scroll container.",
    default_value_syntax: "div { overscroll-behavior-y: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "padding": {
    default_value_description: "By default, elements have zero padding on all sides. Content sits directly against the element's border with no internal spacing.",
    default_value_syntax: "div { padding: 0; }",
    default_value_applies_to: ["all elements except table row groups, table rows, and table column groups"]
  },

  "padding-block": {
    default_value_description: "By default, no block-direction padding is applied. In horizontal writing modes, block-start and block-end correspond to top and bottom padding.",
    default_value_syntax: "div { padding-block: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "padding-block-end": {
    default_value_description: "By default, no block-end padding is applied. In a horizontal writing mode, this corresponds to bottom padding.",
    default_value_syntax: "div { padding-block-end: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "padding-block-start": {
    default_value_description: "By default, no block-start padding is applied. In a horizontal writing mode, this corresponds to top padding.",
    default_value_syntax: "div { padding-block-start: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "padding-bottom": {
    default_value_description: "By default, no bottom padding is applied. Content sits directly against the bottom border of the element.",
    default_value_syntax: "div { padding-bottom: 0; }",
    default_value_applies_to: ["all elements except table row groups and table rows"]
  },

  "padding-inline": {
    default_value_description: "By default, no inline-direction padding is applied. In a horizontal writing mode, inline-start and inline-end correspond to left and right padding.",
    default_value_syntax: "div { padding-inline: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "padding-inline-end": {
    default_value_description: "By default, no inline-end padding is applied. In a left-to-right writing mode, this corresponds to right padding.",
    default_value_syntax: "div { padding-inline-end: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "padding-inline-start": {
    default_value_description: "By default, no inline-start padding is applied. In a left-to-right writing mode, this corresponds to left padding.",
    default_value_syntax: "div { padding-inline-start: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "padding-left": {
    default_value_description: "By default, no left padding is applied. Content sits directly against the left border of the element.",
    default_value_syntax: "div { padding-left: 0; }",
    default_value_applies_to: ["all elements except table row groups and table rows"]
  },

  "padding-right": {
    default_value_description: "By default, no right padding is applied. Content sits directly against the right border of the element.",
    default_value_syntax: "div { padding-right: 0; }",
    default_value_applies_to: ["all elements except table row groups and table rows"]
  },

  "padding-top": {
    default_value_description: "By default, no top padding is applied. Content sits directly against the top border of the element.",
    default_value_syntax: "div { padding-top: 0; }",
    default_value_applies_to: ["all elements except table row groups and table rows"]
  },

  "page-break-after": {
    default_value_description: "By default, no page break is forced after an element. The browser decides where to break content when printing.",
    default_value_syntax: "div { page-break-after: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "page-break-before": {
    default_value_description: "By default, no page break is forced before an element when printing.",
    default_value_syntax: "div { page-break-before: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "page-break-inside": {
    default_value_description: "By default, page breaks are allowed inside an element when printing.",
    default_value_syntax: "div { page-break-inside: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "paint-order": {
    default_value_description: "By default, SVG elements are painted in the standard order: fill first, then stroke, then markers.",
    default_value_syntax: "text { paint-order: normal; }",
    default_value_applies_to: ["SVG elements"]
  },

  "perspective": {
    default_value_description: "By default, no perspective is applied to 3D-transformed child elements. All children render as flat without any depth effect.",
    default_value_syntax: ".container { perspective: none; }",
    default_value_applies_to: ["transformable elements"]
  },

  "perspective-origin": {
    default_value_description: "By default, the perspective vanishing point is centered horizontally and vertically on the element.",
    default_value_syntax: ".container { perspective-origin: 50% 50%; }",
    default_value_applies_to: ["transformable elements"]
  },

  "place-content": {
    default_value_description: "By default, content is packed at the start of both axes with stretching applied in grid contexts.",
    default_value_syntax: ".container { display: grid; place-content: normal; }",
    default_value_applies_to: ["flex containers", "grid containers"]
  },

  "place-items": {
    default_value_description: "By default, items stretch to fill their grid area in both the block and inline axes.",
    default_value_syntax: ".container { display: grid; place-items: legacy; }",
    default_value_applies_to: ["flex containers", "grid containers"]
  },

  "place-self": {
    default_value_description: "By default, a grid item's placement defers to the align-items and justify-items values of its container.",
    default_value_syntax: ".item { place-self: auto; }",
    default_value_applies_to: ["grid items", "absolutely positioned elements"]
  },

  "pointer-events": {
    default_value_description: "By default, all elements respond to pointer events such as clicks, hovers, and touches in the normal way.",
    default_value_syntax: "div { pointer-events: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "position": {
    default_value_description: "By default, elements are positioned according to the normal document flow. They are laid out one after another in the order they appear in the HTML, without any offset properties taking effect.",
    default_value_syntax: "div { position: static; }",
    default_value_applies_to: ["all elements"]
  },

  "quotes": {
    default_value_description: "By default, the browser uses the appropriate quotation marks for the document's language, such as double curly quotes for English.",
    default_value_syntax: "body { quotes: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "resize": {
    default_value_description: "By default, elements cannot be resized by the user. Only textarea elements are resizable by default in most browsers.",
    default_value_syntax: "div { resize: none; }",
    default_value_applies_to: ["elements with overflow other than visible"]
  },

  "right": {
    default_value_description: "By default, the right offset is auto. This only takes effect when position is set to relative, absolute, fixed, or sticky.",
    default_value_syntax: "div { position: absolute; right: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "rotate": {
    default_value_description: "By default, no rotation is applied to an element. The element renders at its original orientation.",
    default_value_syntax: "div { rotate: none; }",
    default_value_applies_to: ["transformable elements"]
  },

  "row-gap": {
    default_value_description: "By default, no gap is applied between rows in a flex or grid container.",
    default_value_syntax: ".container { display: grid; row-gap: normal; }",
    default_value_applies_to: ["flex containers", "grid containers", "multi-column elements"]
  },

  "scale": {
    default_value_description: "By default, no scaling is applied. The element renders at its natural size.",
    default_value_syntax: "div { scale: none; }",
    default_value_applies_to: ["transformable elements"]
  },

  "scroll-behavior": {
    default_value_description: "By default, scrolling jumps instantly to the target position without any smooth animation.",
    default_value_syntax: "html { scroll-behavior: auto; }",
    default_value_applies_to: ["scrolling boxes"]
  },

  "scroll-margin": {
    default_value_description: "By default, no scroll margin is added around an element when it is scrolled into view.",
    default_value_syntax: "section { scroll-margin: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "scroll-margin-top": {
    default_value_description: "By default, no top scroll margin offset is applied when an element is scrolled into view.",
    default_value_syntax: "section { scroll-margin-top: 0; }",
    default_value_applies_to: ["all elements"]
  },

  "scroll-padding": {
    default_value_description: "By default, no scroll padding is applied to a scroll container. Scroll-snapping targets align with the container's edge.",
    default_value_syntax: "html { scroll-padding: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "scroll-snap-align": {
    default_value_description: "By default, no scroll snap alignment is applied. The element does not participate in scroll snapping.",
    default_value_syntax: ".item { scroll-snap-align: none; }",
    default_value_applies_to: ["all elements"]
  },

  "scroll-snap-stop": {
    default_value_description: "By default, a scroll container may pass over snap points during fast scrolling without stopping at each one.",
    default_value_syntax: ".item { scroll-snap-stop: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "scroll-snap-type": {
    default_value_description: "By default, no scroll snapping is applied to a scroll container. Content scrolls freely without snapping to defined positions.",
    default_value_syntax: ".container { scroll-snap-type: none; }",
    default_value_applies_to: ["scroll containers"]
  },

  "scrollbar-color": {
    default_value_description: "By default, the scrollbar uses the browser's default colors, which vary by operating system and browser.",
    default_value_syntax: "body { scrollbar-color: auto; }",
    default_value_applies_to: ["scroll containers"]
  },

  "shape-outside": {
    default_value_description: "By default, no shape is applied to a floated element. Inline content wraps around the element's rectangular margin box.",
    default_value_syntax: ".float { float: left; shape-outside: none; }",
    default_value_applies_to: ["floats"]
  },

  "tab-size": {
    default_value_description: "By default, tab characters in preformatted text are rendered as 8 spaces wide.",
    default_value_syntax: "pre { tab-size: 8; }",
    default_value_applies_to: ["block-level elements"]
  },

  "table-layout": {
    default_value_description: "By default, the table layout algorithm sizes columns based on their content. The browser analyzes all cell content before determining column widths.",
    default_value_syntax: "table { table-layout: auto; }",
    default_value_applies_to: ["table elements"]
  },

  "text-align": {
    default_value_description: "By default, text alignment is inherited or determined by the writing direction. In left-to-right documents, text aligns to the left.",
    default_value_syntax: "p { text-align: left; }",
    default_value_applies_to: ["block-level elements"]
  },

  "text-align-last": {
    default_value_description: "By default, the last line of a justified text block is aligned to the start edge, not justified.",
    default_value_syntax: "p { text-align-last: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "text-decoration": {
    default_value_description: "By default, most elements have no text decoration. Anchor elements have an underline applied by the browser's default stylesheet.",
    default_value_syntax: "p { text-decoration: none; }",
    default_value_applies_to: ["all elements"]
  },

  "text-decoration-color": {
    default_value_description: "By default, the text decoration color matches the element's current text color.",
    default_value_syntax: "p { text-decoration-color: currentColor; }",
    default_value_applies_to: ["all elements"]
  },

  "text-decoration-line": {
    default_value_description: "By default, no text decoration line is applied. No underline, overline, or line-through is drawn.",
    default_value_syntax: "p { text-decoration-line: none; }",
    default_value_applies_to: ["all elements"]
  },

  "text-decoration-style": {
    default_value_description: "By default, text decorations are drawn as a single solid line.",
    default_value_syntax: "p { text-decoration-style: solid; }",
    default_value_applies_to: ["all elements"]
  },

  "text-decoration-thickness": {
    default_value_description: "By default, the thickness of text decoration lines is determined automatically by the font and browser.",
    default_value_syntax: "p { text-decoration-thickness: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "text-emphasis": {
    default_value_description: "By default, no emphasis marks are applied to text. Emphasis marks are used primarily in East Asian typography.",
    default_value_syntax: "p { text-emphasis: none currentColor; }",
    default_value_applies_to: ["all elements except pseudo-elements"]
  },

  "text-indent": {
    default_value_description: "By default, no indentation is applied to the first line of a text block.",
    default_value_syntax: "p { text-indent: 0; }",
    default_value_applies_to: ["block-level elements"]
  },

  "text-justify": {
    default_value_description: "By default, the browser selects the most appropriate justification algorithm for the text's language and script.",
    default_value_syntax: "p { text-justify: auto; }",
    default_value_applies_to: ["block-level elements"]
  },

  "text-orientation": {
    default_value_description: "By default, characters in vertical writing modes are rotated 90 degrees clockwise from their normal horizontal orientation.",
    default_value_syntax: "div { text-orientation: mixed; }",
    default_value_applies_to: ["all elements except table row groups, rows, column groups, and columns"]
  },

  "text-overflow": {
    default_value_description: "By default, text that overflows its container is simply clipped at the container's edge with no ellipsis or other indicator.",
    default_value_syntax: "div { text-overflow: clip; }",
    default_value_applies_to: ["block-level elements"]
  },

  "text-shadow": {
    default_value_description: "By default, no shadow is applied to text. Text renders without any shadow effect.",
    default_value_syntax: "p { text-shadow: none; }",
    default_value_applies_to: ["all elements"]
  },

  "text-transform": {
    default_value_description: "By default, text renders exactly as typed in the HTML source without any capitalization transformation.",
    default_value_syntax: "p { text-transform: none; }",
    default_value_applies_to: ["all elements"]
  },

  "text-underline-offset": {
    default_value_description: "By default, the underline position is determined automatically by the browser based on font metrics.",
    default_value_syntax: "p { text-underline-offset: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "text-underline-position": {
    default_value_description: "By default, the underline position is determined automatically based on the font and writing mode.",
    default_value_syntax: "p { text-underline-position: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "top": {
    default_value_description: "By default, the top offset is auto. This only takes effect when position is set to relative, absolute, fixed, or sticky.",
    default_value_syntax: "div { position: absolute; top: auto; }",
    default_value_applies_to: ["positioned elements"]
  },

  "transform": {
    default_value_description: "By default, no transformation is applied. The element renders in its natural position and size without any rotation, scale, skew, or translation.",
    default_value_syntax: "div { transform: none; }",
    default_value_applies_to: ["transformable elements"]
  },

  "transform-origin": {
    default_value_description: "By default, transformations originate from the center of the element horizontally and vertically.",
    default_value_syntax: "div { transform-origin: 50% 50% 0; }",
    default_value_applies_to: ["transformable elements"]
  },

  "transform-style": {
    default_value_description: "By default, child elements of a transformed element are rendered flat in the plane of the parent, not in 3D space.",
    default_value_syntax: "div { transform-style: flat; }",
    default_value_applies_to: ["transformable elements"]
  },

  "transition": {
    default_value_description: "By default, no transition is applied. Property changes take effect instantly without any animated interpolation.",
    default_value_syntax: "div { transition: none; }",
    default_value_applies_to: ["all elements"]
  },

  "transition-delay": {
    default_value_description: "By default, transitions begin immediately when a property value changes with no delay.",
    default_value_syntax: "div { transition-delay: 0s; }",
    default_value_applies_to: ["all elements"]
  },

  "transition-duration": {
    default_value_description: "By default, transitions have zero duration and complete instantly, producing no visible animation.",
    default_value_syntax: "div { transition-duration: 0s; }",
    default_value_applies_to: ["all elements"]
  },

  "transition-property": {
    default_value_description: "By default, all animatable properties are included in the transition when a transition-duration is set.",
    default_value_syntax: "div { transition-property: all; }",
    default_value_applies_to: ["all elements"]
  },

  "transition-timing-function": {
    default_value_description: "By default, transitions use an ease timing function, which starts slow, accelerates through the middle, and slows at the end.",
    default_value_syntax: "div { transition-timing-function: ease; }",
    default_value_applies_to: ["all elements"]
  },

  "translate": {
    default_value_description: "By default, no translation is applied. The element renders at its natural position in the document flow.",
    default_value_syntax: "div { translate: none; }",
    default_value_applies_to: ["transformable elements"]
  },

  "unicode-bidi": {
    default_value_description: "By default, the element does not create an additional embedding level for bidirectional text. Text direction is controlled by the direction property alone.",
    default_value_syntax: "p { unicode-bidi: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "user-select": {
    default_value_description: "By default, text selection behavior follows the browser's default rules. Most text content is selectable by the user.",
    default_value_syntax: "div { user-select: auto; }",
    default_value_applies_to: ["all elements"]
  },

  "vertical-align": {
    default_value_description: "By default, inline and inline-block elements are aligned to the baseline of the parent element's line box.",
    default_value_syntax: "span { vertical-align: baseline; }",
    default_value_applies_to: ["inline elements", "inline-block elements", "table-cell elements"]
  },

  "visibility": {
    default_value_description: "By default, all elements are visible. An element takes up its normal space in the layout and its content is displayed.",
    default_value_syntax: "div { visibility: visible; }",
    default_value_applies_to: ["all elements"]
  },

  "white-space": {
    default_value_description: "By default, sequences of whitespace are collapsed into a single space, and text wraps naturally at the edge of its container.",
    default_value_syntax: "p { white-space: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "widows": {
    default_value_description: "By default, at least two lines of a block must appear at the top of a page or column after a page break.",
    default_value_syntax: "p { widows: 2; }",
    default_value_applies_to: ["block-level elements"]
  },

  "width": {
    default_value_description: "By default, block-level elements stretch to fill the full width of their containing block. Inline elements only take up as much width as their content requires.",
    default_value_syntax: "div { width: auto; }",
    default_value_applies_to: ["all elements except inline elements and table rows"]
  },

  "word-break": {
    default_value_description: "By default, word breaking follows standard rules for the text's language. Words break at spaces or hyphens, not in the middle of a word.",
    default_value_syntax: "p { word-break: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "word-spacing": {
    default_value_description: "By default, no extra spacing is added between words. The font's natural word spacing is used.",
    default_value_syntax: "p { word-spacing: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "word-wrap": {
    default_value_description: "By default, long words only break at normal break points. Unbreakable strings can cause horizontal overflow.",
    default_value_syntax: "p { word-wrap: normal; }",
    default_value_applies_to: ["all elements"]
  },

  "writing-mode": {
    default_value_description: "By default, text flows horizontally from left to right and lines stack from top to bottom.",
    default_value_syntax: "body { writing-mode: horizontal-tb; }",
    default_value_applies_to: ["all elements except table row groups, table column groups, table rows, and table columns"]
  },

  "z-index": {
    default_value_description: "By default, elements are stacked in the order they appear in the HTML source. Elements later in the source appear on top of earlier ones when they overlap. Z-index only takes effect on positioned elements.",
    default_value_syntax: "div { position: relative; z-index: auto; }",
    default_value_applies_to: ["positioned elements"]
  }

};
