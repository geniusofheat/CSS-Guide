// css1_lessons.js
// CSS1 lesson data object
// Paste each property object beneath its comment banner
// Rename: lesson → property | Remove: group, category, browser_support

const css1_lessons = {
  version: "CSS1",
  released: "1996",
  definition: "The first version of CSS, introducing basic styling for HTML documents.",
  what_it_introduced: "CSS1 introduced fundamental styling properties including fonts, colors, text formatting, margins, padding, borders, and basic positioning.",
  note: "",
  tip: "",
  topics: [

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Backgrounds",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // background
          {
    property: "background(shorthand-property)",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_background.php",
    definition: "The (shorthand) property allows the user to specify all the background values, separated by commas, in one declaration.",
    default_value: "Transparent, no image, repeat, scroll, 0% 0% / auto, padding-box, border-box.",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "When using the shorthand, background-size must come immediately after background-position, separated by a slash: 50% 50% / cover.",
    note: `Order of values in shorthand:
background: color image position/size repeat attachment origin clip;
Example:
background: #fff url(img.png) center/cover no-repeat;`,
    syntax: "background: color | image | position | size | repeat | attachment | origin | clip | initial | inherit;",
    values: [
      {
        value: "background-color",
        description: "Sets the background color. Accepts any valid CSS color value.",
        syntax_example: "div { background: #c8a96e; }"
      },
      {
        value: "background-image",
        description: "Sets a background image using url() or a gradient function.",
        syntax_example: "div { background: url('img.png'); }"
      },
      {
        value: "background-position",
        description: "Sets the starting position of the background image.",
        syntax_example: "div { background: url('img.png') center top; }"
      },
      {
        value: "background-size",
        description: "Sets the size of the background image (after position, separated by /).",
        syntax_example: "div { background: url('img.png') center/cover; }"
      },
      {
        value: "background-repeat",
        description: "Controls how the background image repeats.",
        syntax_example: "div { background: url('img.png') no-repeat; }"
      },
      {
        value: "background-attachment",
        description: "Sets whether the background image scrolls with the page or is fixed.",
        syntax_example: "div { background: url('img.png') fixed; }"
      },
      {
        value: "initial",
        description: "Resets all background sub-properties to their defaults.",
        syntax_example: "div { background: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits all background sub-properties from the parent element.",
        syntax_example: "div { background: inherit; }"
      }
    ],
    examples: [
      {
        label: "Full shorthand example",
        code: `body {
  background: #000 url('bg.jpg') no-repeat center/cover fixed;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "1",
      safari: "1",
      opera: "3.5"
    }
  },

        // background-attachment
          {
    property: "background-attachment",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_background-attachment.php",
    definition: "Sets whether a background image scrolls with the rest of the page or is fixed relative to the viewport.",
    default_value: "scroll",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "background-attachment: scroll | fixed | local | initial | inherit;",
    values: [
      {
        value: "scroll",
        description: "Default. The background image scrolls with the page.",
        syntax_example: "body { background-attachment: scroll; }"
      },
      {
        value: "fixed",
        description: "The background image is fixed relative to the viewport — it does not scroll with the page. Creates a parallax effect.",
        syntax_example: "body { background-attachment: fixed; }"
      },
      {
        value: "local",
        description: "The background image scrolls with the element's content.",
        syntax_example: "div { background-attachment: local; }"
      },
      {
        value: "initial",
        description: "Resets to default value (scroll).",
        syntax_example: "body { background-attachment: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "body { background-attachment: inherit; }"
      }
    ],
    examples: [
      {
        label: "Fixed background (parallax effect)",
        code: `body {
  background-image: url('bg.jpg');
  background-attachment: fixed;
  background-size: cover;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "1",
      safari: "1",
      opera: "3.5"
    }
  },

        // background-color
          {
    property: "background-color",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_background-color.php",
    definition: "Sets the background color of an element.",
    default_value: "transparent",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    note: `Do not add a space between the value and any unit or function:
Correct:   background-color: rgba(0,0,0,0.5);
Incorrect: background-color: rgba(0, 0, 0, .5) — spaces inside rgba() are fine, but the property declaration must not have extra spaces.`,
    syntax: "background-color: color | transparent | initial | inherit;",
    values: [
      {
        value: "color",
        description: "Any valid CSS color — named, hex, rgb(), rgba(), hsl(), hsla().",
        syntax_example: "div { background-color: #1a1a2e; }",
        units_note: "Accepts: named colors (red), hex (#fff), rgb(255,255,255), rgba(0,0,0,0.5), hsl(0,100%,50%), hsla(0,100%,50%,0.5)"
      },
      {
        value: "transparent",
        description: "Default. The background is fully transparent — the parent's background shows through.",
        syntax_example: "div { background-color: transparent; }"
      },
      {
        value: "initial",
        description: "Resets to default value (transparent).",
        syntax_example: "div { background-color: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-color: inherit; }"
      }
    ],
    examples: [
      {
        label: "Set background color using different formats",
        code: `div.a { background-color: red; }
div.b { background-color: #00ff00; }
div.c { background-color: rgb(0, 0, 255); }
div.d { background-color: rgba(0, 0, 0, 0.5); }`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "1",
      safari: "1",
      opera: "3.5"
    }
  },
        
        // background-blend-mode
          {
    property: "background-blend-mode",
    category: "CSS3",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_background-blend-mode.php",
    definition: "Defines how an element's background image should blend with its background color.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "background-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | saturation | color | luminosity | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. No blending. The background image displays normally over the background color.",
        syntax_example: "div { background-blend-mode: normal; }"
      },
      {
        value: "multiply",
        description: "Multiplies the background image colors with the background color. Result is always darker.",
        syntax_example: "div { background-blend-mode: multiply; }"
      },
      {
        value: "screen",
        description: "Inverts, multiplies, then inverts. Result is always brighter.",
        syntax_example: "div { background-blend-mode: screen; }"
      },
      {
        value: "overlay",
        description: "Combines multiply and screen — dark areas get darker, light areas get lighter.",
        syntax_example: "div { background-blend-mode: overlay; }"
      },
      {
        value: "darken",
        description: "Keeps the darkest values from both layers.",
        syntax_example: "div { background-blend-mode: darken; }"
      },
      {
        value: "lighten",
        description: "Keeps the lightest values from both layers.",
        syntax_example: "div { background-blend-mode: lighten; }"
      },
      {
        value: "color-dodge",
        description: "Brightens the background color to reflect the image.",
        syntax_example: "div { background-blend-mode: color-dodge; }"
      },
      {
        value: "saturation",
        description: "Creates a color with the saturation of the image and the hue/luminosity of the background color.",
        syntax_example: "div { background-blend-mode: saturation; }"
      },
      {
        value: "color",
        description: "Preserves the hue and saturation of the image while using the luminosity of the background color.",
        syntax_example: "div { background-blend-mode: color; }"
      },
      {
        value: "luminosity",
        description: "Creates a color with the luminosity of the image and the hue/saturation of the background color.",
        syntax_example: "div { background-blend-mode: luminosity; }"
      }
    ],
    examples: [
      {
        label: "Blend image with background color",
        code: `div {
  background-image: url('photo.jpg');
  background-color: #c8a96e;
  background-blend-mode: multiply;
}`
      }
    ],
    browser_support: {
      chrome: "35",
      edge: "79",
      firefox: "30",
      safari: "8",
      opera: "22"
    }
  },

        // background-image
          {
    property: "background-image",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_background-image.php",
    definition: "Sets one or more background images for an element. Images are drawn on top of each other, with the first image closest to the viewer.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Always also set a background-color as a fallback in case the image fails to load.",
    note: "Multiple background images can be stacked by separating url() values with commas. The first listed image appears on top.",
    syntax: "background-image: none | url(path) | linear-gradient() | radial-gradient() | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No background image is displayed.",
        syntax_example: "div { background-image: none; }"
      },
      {
        value: "url(path)",
        description: "The path to the image file. Can be relative or absolute.",
        syntax_example: "div { background-image: url('images/bg.jpg'); }"
      },
      {
        value: "linear-gradient()",
        description: "Creates a linear gradient as the background instead of an image.",
        syntax_example: "div { background-image: linear-gradient(to right, #000, #c8a96e); }"
      },
      {
        value: "radial-gradient()",
        description: "Creates a radial (circular/elliptical) gradient as the background.",
        syntax_example: "div { background-image: radial-gradient(circle, #c8a96e, #000); }"
      },
      {
        value: "initial",
        description: "Resets to default value (none).",
        syntax_example: "div { background-image: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-image: inherit; }"
      }
    ],
    examples: [
      {
        label: "Background image with fallback color",
        code: `body {
  background-image: url('bg.jpg');
  background-color: #1a1a2e;
}`
      },
      {
        label: "Multiple stacked background images",
        code: `div {
  background-image: url('top.png'), url('bottom.jpg');
  background-position: center top, center bottom;
  background-repeat: no-repeat;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "1",
      safari: "1",
      opera: "3.5"
    }
  },


        // background-position
          {
    property: "background-position",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_background-position.php",
    definition: "Sets the starting position of a background image within its element.",
    default_value: "0% 0%",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "You can use keywords (top, center, bottom, left, right), percentages, or length values. When using two values, the first is horizontal and the second is vertical.",
    syntax: "background-position: value | initial | inherit;",
    values: [
      {
        value: "left top / left center / left bottom / right top / center top / center center / etc.",
        description: "Keyword positions. Two keywords define horizontal then vertical position.",
        syntax_example: "div { background-position: center center; }"
      },
      {
        value: "x% y%",
        description: "Percentage values. 0% 0% = top left, 50% 50% = center, 100% 100% = bottom right.",
        syntax_example: "div { background-position: 50% 50%; }"
      },
      {
        value: "xpos ypos",
        description: "Length values (px, em, rem, etc.) from the top-left corner.",
        syntax_example: "div { background-position: 20px 40px; }",
        units_note: "Accepts px, em, rem, %, and other CSS length units."
      },
      {
        value: "initial",
        description: "Resets to default value (0% 0%).",
        syntax_example: "div { background-position: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-position: inherit; }"
      }
    ],
    examples: [
      {
        label: "Center a background image",
        code: `div {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position: center center;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "1",
      safari: "1",
      opera: "3.5"
    }
  },



        // background-repeat
          {
    property: "background-repeat",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_background-repeat.php",
    definition: "Sets how a background image is repeated. The image can repeat along the horizontal axis, vertical axis, both, or not at all.",
    default_value: "repeat",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "background-repeat: repeat | repeat-x | repeat-y | no-repeat | space | round | initial | inherit;",
    values: [
      {
        value: "repeat",
        description: "Default. The background image is repeated both horizontally and vertically.",
        syntax_example: "div { background-repeat: repeat; }"
      },
      {
        value: "repeat-x",
        description: "The background image is repeated only horizontally.",
        syntax_example: "div { background-repeat: repeat-x; }"
      },
      {
        value: "repeat-y",
        description: "The background image is repeated only vertically.",
        syntax_example: "div { background-repeat: repeat-y; }"
      },
      {
        value: "no-repeat",
        description: "The background image is not repeated. It is shown only once.",
        syntax_example: "div { background-repeat: no-repeat; }"
      },
      {
        value: "space",
        description: "The image is repeated as many times as possible without clipping. Space is distributed evenly between images.",
        syntax_example: "div { background-repeat: space; }"
      },
      {
        value: "round",
        description: "The image is repeated and scaled so it fits a whole number of times without clipping.",
        syntax_example: "div { background-repeat: round; }"
      },
      {
        value: "initial",
        description: "Resets to default value (repeat).",
        syntax_example: "div { background-repeat: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-repeat: inherit; }"
      }
    ],
    examples: [
      {
        label: "Show background image once, no repeat",
        code: `div {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position: center;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "1",
      safari: "1",
      opera: "3.5"
    }
  },
  
    	// background-size
    	  {
    property: "background-size",
    category: "CSS3",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_background-size.php",
    definition: "Specifies the size of a background image.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use 'cover' to fill the entire element without distortion. Use 'contain' to fit the image fully inside the element.",
    note: `cover may crop the image. contain may leave empty space on the sides.
Do not add a space between value and unit:
Incorrect: background-size: 100 px;
Correct:   background-size: 100px;`,
    syntax: "background-size: auto | length | percentage | cover | contain | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The background image retains its original size.",
        syntax_example: "div { background-size: auto; }"
      },
      {
        value: "cover",
        description: "Scales the image to cover the entire element. May crop the image.",
        syntax_example: "div { background-size: cover; }"
      },
      {
        value: "contain",
        description: "Scales the image to fit inside the element. The full image is always visible.",
        syntax_example: "div { background-size: contain; }"
      },
      {
        value: "length",
        description: "Sets explicit width and height. One value sets width, auto sets height proportionally.",
        syntax_example: "div { background-size: 200px 100px; }",
        units_note: "Accepts px, em, rem. Example: 200px 100px. Single value sets width; height is auto."
      },
      {
        value: "percentage",
        description: "Sets size as a percentage of the background positioning area.",
        syntax_example: "div { background-size: 50% auto; }"
      },
      {
        value: "initial",
        description: "Resets to default value (auto).",
        syntax_example: "div { background-size: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-size: inherit; }"
      }
    ],
    examples: [
      {
        label: "Full cover background image",
        code: `body {
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`
      }
    ],
    browser_support: {
      chrome: "4",
      edge: "12",
      firefox: "4",
      safari: "4.1",
      opera: "10.5"
    }
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

        

		// border-left
  {
    property: "border-left",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-left.php",
    definition: "Shorthand for setting the width, style, and color of the left border.",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-left: width style color | initial | inherit;",
    values: [
      { value: "border-left-width", description: "Thickness of the left border.", syntax_example: "div { border-left: 4px solid #c8a96e; }" },
      { value: "border-left-style", description: "Style of the left border. Required for border to show.", syntax_example: "div { border-left: 1px dashed #333; }" },
      { value: "border-left-color", description: "Color of the left border.", syntax_example: "div { border-left: 2px solid red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { border-left: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-left: inherit; }" }
    ],
    examples: [{ label: "Accent left border", code: `div {\n  border-left: 4px solid #c8a96e;\n  padding-left: 12px;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

		// border-left-color
  {
    property: "border-left-color",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-left_color.php",
    definition: "Sets the color of the left border.",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-left-color: color | transparent | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { border-left-color: #c8a96e; }" },
      { value: "transparent", description: "Makes the left border transparent.", syntax_example: "div { border-left-color: transparent; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-left-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-left-color: inherit; }" }
    ],
    examples: [{ label: "Gold left border", code: `div {\n  border-left-style: solid;\n  border-left-width: 3px;\n  border-left-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-left-style
  {
    property: "border-left-style",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-left_style.php",
    definition: "Sets the style of the left border.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-left-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | hidden | initial | inherit;",
    values: [
      { value: "none", description: "Default. No border.", syntax_example: "div { border-left-style: none; }" },
      { value: "solid", description: "Solid line.", syntax_example: "div { border-left-style: solid; }" },
      { value: "dashed", description: "Dashed line.", syntax_example: "div { border-left-style: dashed; }" },
      { value: "dotted", description: "Dotted line.", syntax_example: "div { border-left-style: dotted; }" },
      { value: "double", description: "Double line.", syntax_example: "div { border-left-style: double; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-left-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-left-style: inherit; }" }
    ],
    examples: [{ label: "Dashed left border", code: `div {\n  border-left-style: dashed;\n  border-left-width: 2px;\n  border-left-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-left-width
  {
    property: "border-left-width",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-left_width.php",
    definition: "Sets the width of the left border.",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-left-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin.", syntax_example: "div { border-left-width: thin; }" },
      { value: "medium", description: "Default.", syntax_example: "div { border-left-width: medium; }" },
      { value: "thick", description: "Thick.", syntax_example: "div { border-left-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "div { border-left-width: 4px; }", units_note: "No space between value and unit." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-left-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-left-width: inherit; }" }
    ],
    examples: [{ label: "4px left border", code: `div {\n  border-left-style: solid;\n  border-left-width: 4px;\n  border-left-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-right
  {
    property: "border-right",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-right.php",
    definition: "Shorthand for setting the width, style, and color of the right border.",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-right: width style color | initial | inherit;",
    values: [
      { value: "border-right-width", description: "Thickness.", syntax_example: "div { border-right: 2px solid #c8a96e; }" },
      { value: "border-right-style", description: "Style. Required.", syntax_example: "div { border-right: 1px dashed; }" },
      { value: "border-right-color", description: "Color.", syntax_example: "div { border-right: 2px solid red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { border-right: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-right: inherit; }" }
    ],
    examples: [{ label: "Right border only", code: `div {\n  border-right: 2px solid #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-right-color
  {
    property: "border-right-color",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-right_color.php",
    definition: "Sets the color of the right border.",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-right-color: color | transparent | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { border-right-color: #c8a96e; }" },
      { value: "transparent", description: "Transparent right border.", syntax_example: "div { border-right-color: transparent; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-right-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-right-color: inherit; }" }
    ],
    examples: [{ label: "Gold right border", code: `div {\n  border-right-style: solid;\n  border-right-width: 2px;\n  border-right-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-right-style
  {
    property: "border-right-style",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-right_style.php",
    definition: "Sets the style of the right border.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-right-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | hidden | initial | inherit;",
    values: [
      { value: "none", description: "Default.", syntax_example: "div { border-right-style: none; }" },
      { value: "solid", description: "Solid.", syntax_example: "div { border-right-style: solid; }" },
      { value: "dashed", description: "Dashed.", syntax_example: "div { border-right-style: dashed; }" },
      { value: "dotted", description: "Dotted.", syntax_example: "div { border-right-style: dotted; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-right-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-right-style: inherit; }" }
    ],
    examples: [{ label: "Dotted right border", code: `div {\n  border-right-style: dotted;\n  border-right-width: 2px;\n  border-right-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-right-width
  {
    property: "border-right-width",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-right_width.php",
    definition: "Sets the width of the right border.",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-right-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin.", syntax_example: "div { border-right-width: thin; }" },
      { value: "medium", description: "Default.", syntax_example: "div { border-right-width: medium; }" },
      { value: "thick", description: "Thick.", syntax_example: "div { border-right-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "div { border-right-width: 3px; }", units_note: "No space between value and unit." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-right-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-right-width: inherit; }" }
    ],
    examples: [{ label: "3px right border", code: `div {\n  border-right-style: solid;\n  border-right-width: 3px;\n  border-right-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-top
  {
    property: "border-top",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-top.php",
    definition: "Shorthand for setting the width, style, and color of the top border.",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-top: width style color | initial | inherit;",
    values: [
      { value: "border-top-width", description: "Thickness.", syntax_example: "div { border-top: 2px solid #c8a96e; }" },
      { value: "border-top-style", description: "Style. Required.", syntax_example: "div { border-top: 1px dashed; }" },
      { value: "border-top-color", description: "Color.", syntax_example: "div { border-top: 2px solid red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { border-top: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-top: inherit; }" }
    ],
    examples: [{ label: "Top border only", code: `div {\n  border-top: 2px solid #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-top-color
  {
    property: "border-top-color",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-top_color.php",
    definition: "Sets the color of the top border.",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-top-color: color | transparent | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { border-top-color: #c8a96e; }" },
      { value: "transparent", description: "Transparent top border.", syntax_example: "div { border-top-color: transparent; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-top-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-top-color: inherit; }" }
    ],
    examples: [{ label: "Gold top border", code: `div {\n  border-top-style: solid;\n  border-top-width: 2px;\n  border-top-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // border-top-style
  {
    property: "border-top-style",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-top_style.php",
    definition: "Sets the style of the top border.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-top-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | hidden | initial | inherit;",
    values: [
      { value: "none", description: "Default. No border.", syntax_example: "div { border-top-style: none; }" },
      { value: "solid", description: "Solid.", syntax_example: "div { border-top-style: solid; }" },
      { value: "dashed", description: "Dashed.", syntax_example: "div { border-top-style: dashed; }" },
      { value: "dotted", description: "Dotted.", syntax_example: "div { border-top-style: dotted; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-top-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-top-style: inherit; }" }
    ],
    examples: [{ label: "Solid top border", code: `div {\n  border-top-style: solid;\n  border-top-width: 2px;\n  border-top-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },
       

        // border-top-width
  {
    property: "border-top-width",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_border-top_width.php",
    definition: "Sets the width of the top border.",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-top-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin.", syntax_example: "div { border-top-width: thin; }" },
      { value: "medium", description: "Default.", syntax_example: "div { border-top-width: medium; }" },
      { value: "thick", description: "Thick.", syntax_example: "div { border-top-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "div { border-top-width: 3px; }", units_note: "No space between value and unit." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-top-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-top-width: inherit; }" }
    ],
    examples: [{ label: "3px top border", code: `div {\n  border-top-style: solid;\n  border-top-width: 3px;\n  border-top-color: #c8a96e;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
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

        // height
          {
    property: "height",
    
    group: "H",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_height.php",
    definition: "Sets the height of an element's content area. Does not include padding, border, or margin unless box-sizing: border-box is set.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table columns, and column groups"],
    tip: "Use min-height and max-height alongside height for flexible layouts that adapt to content. Use height: 100vh to make an element fill the full viewport height.",
    note: `By default (box-sizing: content-box), height applies to the content area only:
Total rendered height = height + padding-top + padding-bottom + border-top + border-bottom

With box-sizing: border-box:
Total rendered height = height (padding and border are included)

Do not add a space between the value and the unit:
Incorrect: height: 200 px;
Correct:   height: 200px;`,
    syntax: "height: auto | length | % | max-content | min-content | fit-content | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the height based on the element's content.",
        syntax_example: "div { height: auto; }"
      },
      {
        value: "length",
        description: "A fixed height in any CSS length unit.",
        syntax_example: "div { height: 200px; }",
        units_note: "Accepts px, em, rem, vh, etc. Do not add a space between value and unit: height: 200px (correct), height: 200 px (incorrect)."
      },
      {
        value: "%",
        description: "A percentage of the containing block's height. The parent must have a defined height for % to work.",
        syntax_example: "div { height: 50%; }"
      },
      {
        value: "100vh",
        description: "100% of the viewport height — makes the element fill the full screen height.",
        syntax_example: ".hero { height: 100vh; }",
        units_note: "vh = viewport height unit. 1vh = 1% of the viewport height."
      },
      {
        value: "max-content",
        description: "The element's height is the intrinsic maximum height of its content.",
        syntax_example: "div { height: max-content; }"
      },
      {
        value: "min-content",
        description: "The element's height is the intrinsic minimum height of its content.",
        syntax_example: "div { height: min-content; }"
      },
      {
        value: "fit-content",
        description: "The element uses available space up to max-content, no more.",
        syntax_example: "div { height: fit-content; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { height: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { height: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "min-height",
        condition: "Use min-height to set a minimum height that the element will never shrink below, regardless of content size.",
        css_version: "CSS2",
        path: "CSS2 > Box Model > min-height",
        syntax_example: "div { min-height: 100px; }",
        section_id: "css2-box-min-height"
      },
      {
        name: "max-height",
        condition: "Use max-height to prevent an element from growing taller than a set value. Content may overflow if it exceeds max-height.",
        css_version: "CSS2",
        path: "CSS2 > Box Model > max-height",
        syntax_example: "div { max-height: 400px; overflow: auto; }",
        section_id: "css2-box-max-height"
      },
      {
        name: "box-sizing",
        condition: "By default height only applies to the content area. Set box-sizing: border-box to include padding and border in the height value.",
        css_version: "CSS3",
        path: "CSS3 > Box Model > box-sizing",
        syntax_example: "div { box-sizing: border-box; height: 200px; padding: 20px; }",
        section_id: "css3-box-box-sizing"
      }
    ],
    examples: [
      {
        label: "Fixed height box",
        code: `div {\n  height: 200px;\n  width: 200px;\n  background: #1a1a2e;\n  border: 2px solid #c8a96e;\n}`
      },
      {
        label: "Full viewport height hero section",
        code: `.hero {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}`
      },
      {
        label: "Minimum height with flexible growth",
        code: `.card {\n  min-height: 200px;\n  height: auto;\n  padding: 24px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // margin
          {
    property: "margin",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_margin.php",
    definition: "Shorthand for setting the top, right, bottom, and left margins of an element in one declaration. Margin is the transparent space outside the element's border.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except table elements with display: table-column or table-column-group"],
    tip: "Use margin: 0 auto on a block element with a defined width to center it horizontally inside its container.",
    note: `Shorthand order (same as padding):
1 value  = all four sides
2 values = top+bottom, left+right
3 values = top, left+right, bottom
4 values = top, right, bottom, left

Margin collapsing: vertical margins between adjacent block elements collapse — the larger value is used, not the sum.

Do not add a space between value and unit:
Incorrect: margin: 20 px;
Correct:   margin: 20px;`,
    syntax: "margin: length | auto | % | initial | inherit;",
    values: [
      {
        value: "length",
        description: "A fixed margin in any CSS length unit.",
        syntax_example: "div { margin: 20px; }",
        units_note: "Accepts px, em, rem, %, vw, vh."
      },
      {
        value: "auto",
        description: "The browser calculates the margin. Use margin: 0 auto to center block elements horizontally.",
        syntax_example: ".container { width: 800px; margin: 0 auto; }"
      },
      {
        value: "%",
        description: "A percentage of the containing block's width (applies to all four sides including top and bottom).",
        syntax_example: "div { margin: 5%; }"
      },
      {
        value: "negative values",
        description: "Negative margins pull the element toward or past its neighbors.",
        syntax_example: "div { margin-top: -10px; }"
      },
      {
        value: "initial",
        description: "Resets to default (0).",
        syntax_example: "div { margin: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { margin: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "padding",
        condition: "Margin is space outside the border. Padding is space inside the border between the content and the border edge. Both affect spacing but margin does not have a background color.",
        css_version: "CSS1",
        path: "CSS1 > Box Model > padding",
        syntax_example: "div { margin: 20px; padding: 16px; }",
        section_id: "css1-box-padding"
      }
    ],
    examples: [
      {
        label: "Center a container",
        code: `.container {\n  width: 960px;\n  max-width: 100%;\n  margin: 0 auto;\n}`
      },
      {
        label: "Different margins per side",
        code: `div {\n  margin: 10px 20px 30px 40px; /* top right bottom left */\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // margin-bottom
  {
    property: "margin-bottom",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_margin-bottom.php",
    definition: "Sets the bottom margin of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "Bottom margins collapse with the top margin of the next sibling element. Only the larger value is used.",
    syntax: "margin-bottom: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed bottom margin.", syntax_example: "p { margin-bottom: 16px; }", units_note: "Accepts px, em, rem, %." },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-bottom: auto; }" },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { margin-bottom: 5%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "p { margin-bottom: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { margin-bottom: inherit; }" }
    ],
    examples: [{ label: "Space between paragraphs", code: `p {\n  margin-bottom: 1.5em;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // margin-left
  {
    property: "margin-left",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_margin-left.php",
    definition: "Sets the left margin of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "margin-left: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed left margin.", syntax_example: "div { margin-left: 20px; }", units_note: "Accepts px, em, rem, %." },
      { value: "auto", description: "Browser calculates. Combined with margin-right: auto it centers the element.", syntax_example: "div { margin-left: auto; }" },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { margin-left: 10%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { margin-left: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-left: inherit; }" }
    ],
    examples: [{ label: "Indent content", code: `blockquote {\n  margin-left: 40px;\n  border-left: 4px solid #c8a96e;\n  padding-left: 16px;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // margin-right
  {
    property: "margin-right",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_margin-right.php",
    definition: "Sets the right margin of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "margin-right: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed right margin.", syntax_example: "div { margin-right: 20px; }", units_note: "Accepts px, em, rem, %." },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-right: auto; }" },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { margin-right: 10%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { margin-right: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-right: inherit; }" }
    ],
    examples: [{ label: "Space after floated image", code: `img.float-left {\n  float: left;\n  margin-right: 16px;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // margin-top
  {
    property: "margin-top",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_margin-top.php",
    definition: "Sets the top margin of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "Top margins collapse with the bottom margin of the previous sibling. Only the larger of the two values is applied.",
    syntax: "margin-top: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed top margin.", syntax_example: "h2 { margin-top: 32px; }", units_note: "Accepts px, em, rem, %." },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-top: auto; }" },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { margin-top: 5%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { margin-top: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-top: inherit; }" }
    ],
    examples: [{ label: "Space above headings", code: `h2 {\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },





        // max-height
          {
    property: "max-height",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_max-height.php",
    definition: "Sets the maximum height an element can grow to. If content exceeds max-height, it overflows (controlled by the overflow property).",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table columns, and column groups"],
    tip: "Use max-height with overflow: auto or overflow: hidden to create scrollable containers with a height limit.",
    syntax: "max-height: none | length | % | initial | inherit;",
    values: [
      { value: "none", description: "Default. No maximum height limit.", syntax_example: "div { max-height: none; }" },
      { value: "length", description: "The maximum height.", syntax_example: "div { max-height: 400px; }", units_note: "Accepts px, em, rem, vh, %." },
      { value: "%", description: "Percentage of containing block's height.", syntax_example: "div { max-height: 80%; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { max-height: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { max-height: inherit; }" }
    ],
    examples: [{ label: "Scrollable content panel", code: `.panel {\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 16px;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1.3", opera: "7" }
  },

        // max-width
          {
    property: "max-width",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_max-width.php",
    definition: "Sets the maximum width an element can grow to. Overrides the width property if the element would exceed max-width.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    tip: "max-width: 100% on images prevents them from overflowing their container on small screens — a fundamental responsive design technique.",
    syntax: "max-width: none | length | % | initial | inherit;",
    values: [
      { value: "none", description: "Default. No maximum width.", syntax_example: "div { max-width: none; }" },
      { value: "length", description: "Maximum width value.", syntax_example: ".container { max-width: 1200px; }", units_note: "Accepts px, em, rem, %, ch, vw." },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "img { max-width: 100%; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { max-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { max-width: inherit; }" }
    ],
    examples: [
      { label: "Responsive image", code: `img {\n  max-width: 100%;\n  height: auto;\n}` },
      { label: "Constrained readable content", code: `.content {\n  max-width: 65ch;\n  margin: 0 auto;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  },


        // min-height  
 {
    property: "min-height",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_min-height.php",
    definition: "Sets the minimum height an element can shrink to. The element will never be shorter than this value, even if its content is smaller.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table columns, and column groups"],
    tip: "Use min-height: 100vh on the body or a main container to ensure the page fills the full viewport even on sparse content pages.",
    syntax: "min-height: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Minimum height value.", syntax_example: ".card { min-height: 200px; }", units_note: "Accepts px, em, rem, vh, %." },
      { value: "%", description: "Percentage of containing block height.", syntax_example: "div { min-height: 50%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { min-height: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { min-height: inherit; }" }
    ],
    examples: [
      { label: "Full viewport minimum height", code: `body {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}` },
      { label: "Card minimum height", code: `.card {\n  min-height: 200px;\n  padding: 24px;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1.3", opera: "4" }
  },

        // min-width
  {
    property: "min-width",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_min-width.php",
    definition: "Sets the minimum width an element can shrink to. The element will never be narrower than this value.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    tip: "Use min-width on buttons to prevent them from becoming too narrow when their label is short.",
    syntax: "min-width: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Minimum width value.", syntax_example: "button { min-width: 120px; }", units_note: "Accepts px, em, rem, %, ch." },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { min-width: 50%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { min-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { min-width: inherit; }" }
    ],
    examples: [
      { label: "Button minimum width", code: `.btn {\n  min-width: 120px;\n  padding: 10px 20px;\n  text-align: center;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  },




        // padding  
 {
    property: "padding",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/pr_padding.php",
    definition: "Shorthand for setting the top, right, bottom, and left padding of an element in one declaration. Padding is the space between the content and the border.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except table row groups, rows, and columns"],
    tip: "Unlike margin, padding cannot be negative. Padding background takes on the element's background color.",
    note: `Shorthand order (same as margin):
1 value  = all four sides
2 values = top+bottom, left+right
3 values = top, left+right, bottom
4 values = top, right, bottom, left

Do not add a space between value and unit:
Incorrect: padding: 20 px;
Correct:   padding: 20px;`,
    syntax: "padding: length | % | initial | inherit;",
    values: [
      {
        value: "length",
        description: "A fixed padding value.",
        syntax_example: "div { padding: 16px; }",
        units_note: "Accepts px, em, rem, %. Cannot be negative."
      },
      {
        value: "%",
        description: "A percentage of the containing block's width (applies to all four sides).",
        syntax_example: "div { padding: 5%; }"
      },
      {
        value: "initial",
        description: "Resets to default (0).",
        syntax_example: "div { padding: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { padding: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "box-sizing",
        condition: "By default padding is added on top of the declared width/height. Set box-sizing: border-box to include padding inside the declared dimensions.",
        css_version: "CSS3",
        path: "CSS3 > Box Model > box-sizing",
        syntax_example: "div { box-sizing: border-box; width: 200px; padding: 20px; } /* total width stays 200px */",
        section_id: "css3-box-box-sizing"
      }
    ],
    examples: [
      {
        label: "Card padding",
        code: `.card {\n  padding: 24px;\n  background: #1a1a2e;\n  border: 1px solid #c8a96e;\n  border-radius: 8px;\n}`
      },
      {
        label: "Different padding per side",
        code: `.btn {\n  padding: 10px 24px; /* 10px top/bottom, 24px left/right */\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // padding-bottom
  {
    property: "padding-bottom",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/pr_padding-bottom.php",
    definition: "Sets the bottom padding of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-bottom: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed bottom padding.", syntax_example: "p { padding-bottom: 16px; }", units_note: "Accepts px, em, rem, %." },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { padding-bottom: 5%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "p { padding-bottom: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { padding-bottom: inherit; }" }
    ],
    examples: [{ label: "Bottom padding on section", code: `section { padding-bottom: 48px; }` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // padding-left

  {
    property: "padding-left",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/pr_padding-left.php",
    definition: "Sets the left padding of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-left: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed left padding.", syntax_example: "div { padding-left: 24px; }", units_note: "Accepts px, em, rem, %." },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { padding-left: 5%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { padding-left: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-left: inherit; }" }
    ],
    examples: [{ label: "Indent content with left padding", code: `blockquote { padding-left: 24px; border-left: 4px solid #c8a96e; }` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // padding-right
  {
    property: "padding-right",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/pr_padding-right.php",
    definition: "Sets the right padding of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-right: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed right padding.", syntax_example: "div { padding-right: 24px; }" },
      { value: "%", description: "Percentage.", syntax_example: "div { padding-right: 5%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-right: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-right: inherit; }" }
    ],
    examples: [{ label: "Right padding on button", code: `.btn { padding-right: 24px; }` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // padding-top
  {
    property: "padding-top",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/pr_padding-top.php",
    definition: "Sets the top padding of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-top: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed top padding.", syntax_example: "div { padding-top: 16px; }" },
      { value: "%", description: "Percentage.", syntax_example: "div { padding-top: 5%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-top: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-top: inherit; }" }
    ],
    examples: [{ label: "Top padding on section", code: `section { padding-top: 48px; }` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },




        // width
 {
    property: "width",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_width.php",
    definition: "Sets the width of an element's content area. Does not include padding, border, or margin unless box-sizing: border-box is set.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    tip: "Use width: 100% to make an element fill its parent container. Use max-width: 100% on images to make them responsive without distortion.",
    note: `By default (box-sizing: content-box), width applies to the content area only:
Total rendered width = width + padding-left + padding-right + border-left + border-right

With box-sizing: border-box:
Total rendered width = width (padding and border are included inside the declared width)

Do not add a space between the value and the unit:
Incorrect: width: 200 px;
Correct:   width: 200px;`,
    syntax: "width: auto | length | % | max-content | min-content | fit-content | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the width. Block elements fill their parent; inline elements shrink to content.",
        syntax_example: "div { width: auto; }"
      },
      {
        value: "length",
        description: "A fixed width in any CSS length unit.",
        syntax_example: "div { width: 300px; }",
        units_note: "Accepts px, em, rem, vw, ch, etc. Do not add a space between value and unit."
      },
      {
        value: "%",
        description: "A percentage of the containing block's width.",
        syntax_example: "div { width: 50%; }"
      },
      {
        value: "100vw",
        description: "100% of the viewport width — makes the element span the full screen width.",
        syntax_example: ".hero { width: 100vw; }",
        units_note: "vw = viewport width unit. 1vw = 1% of the viewport width."
      },
      {
        value: "max-content",
        description: "The element's width is the intrinsic maximum width of its content.",
        syntax_example: "div { width: max-content; }"
      },
      {
        value: "min-content",
        description: "The element's width is the smallest possible width without overflowing.",
        syntax_example: "div { width: min-content; }"
      },
      {
        value: "fit-content",
        description: "Uses available space up to max-content, no more.",
        syntax_example: "div { width: fit-content; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { width: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { width: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "min-width",
        condition: "Use min-width to prevent an element from shrinking below a certain width.",
        css_version: "CSS2",
        path: "CSS2 > Box Model > min-width",
        syntax_example: "button { min-width: 120px; }",
        section_id: "css2-box-min-width"
      },
      {
        name: "max-width",
        condition: "Use max-width to prevent an element from growing beyond a certain width. Use max-width: 100% on images for responsive behavior.",
        css_version: "CSS2",
        path: "CSS2 > Box Model > max-width",
        syntax_example: "img { max-width: 100%; height: auto; }",
        section_id: "css2-box-max-width"
      },
      {
        name: "box-sizing",
        condition: "By default width only applies to the content area. Set box-sizing: border-box to include padding and border inside the declared width.",
        css_version: "CSS3",
        path: "CSS3 > Box Model > box-sizing",
        syntax_example: "div { box-sizing: border-box; width: 300px; padding: 20px; }",
        section_id: "css3-box-box-sizing"
      }
    ],
    examples: [
      {
        label: "Full-width container",
        code: `.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}`
      },
      {
        label: "Responsive image",
        code: `img {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n}`
      },
      {
        label: "Fixed width card",
        code: `.card {\n  width: 320px;\n  padding: 24px;\n  box-sizing: border-box;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Color",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // color
        
  {
    property: "color",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_color.php",
    definition: "Sets the foreground color of an element's text and text decorations. Also sets the value of the currentColor keyword.",
    default_value: "browser default (typically black)",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Because color is inherited, setting it on a parent element applies it to all child text unless overridden.",
    note: "The color property also sets the currentColor value, which is used as the default for border-color, outline-color, box-shadow color, and SVG fill/stroke when no color is specified.",
    syntax: "color: color | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color — named, hex, rgb(), rgba(), hsl(), hsla().", syntax_example: "p { color: #c8a96e; }", units_note: "Accepts: named (red), hex (#fff), rgb(255,255,255), rgba(0,0,0,0.5), hsl(39,51%,61%), hsla(39,51%,61%,0.8)" },
      { value: "initial", description: "Resets to browser default color.", syntax_example: "p { color: initial; }" },
      { value: "inherit", description: "Inherits the color from the parent element.", syntax_example: "span { color: inherit; }" }
    ],
    examples: [
      { label: "Set text color using different formats", code: `h1 { color: #c8a96e; }\np  { color: rgb(200, 169, 110); }\na  { color: hsl(39, 51%, 61%); }` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },



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

        // quotes
          {
    property: "quotes",
    
    group: "Q",
    w3schools_url: "https://www.w3schools.com/cssref/pr_gen_quotes.php",
    definition: "Sets the type of quotation marks to use for the CSS open-quote and close-quote values of the content property.",
    default_value: "depends on browser/language",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Define nested quotation marks by providing multiple pairs — the first pair is for the outermost level, the second for the first nested level, and so on.",
    note: `Quotation mark values are strings in pairs (open close):
quotes: '"' '"' "'" "'";
This sets: outer quotes = " " and inner (nested) quotes = ' '`,
    syntax: "quotes: none | auto | string string | initial | inherit;",
    values: [
      {
        value: "none",
        description: "The open-quote and close-quote values in content produce no quotation marks.",
        syntax_example: "q { quotes: none; }"
      },
      {
        value: "auto",
        description: "Appropriate quotation marks are used based on the language of the document.",
        syntax_example: "q { quotes: auto; }"
      },
      {
        value: "string string",
        description: "One or more pairs of opening and closing quotation mark strings.",
        syntax_example: 'q { quotes: \'\\201C\' \'\\201D\' \'\\2018\' \'\\2019\'; }'
      },
      {
        value: "initial",
        description: "Resets to browser default.",
        syntax_example: "q { quotes: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "q { quotes: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "content: open-quote / close-quote",
        condition: "The quotes property only has an effect when used with content: open-quote or content: close-quote on ::before and ::after pseudo-elements.",
        css_version: "CSS2",
        path: "CSS2 > Generated Content > content",
        syntax_example: "q::before { content: open-quote; }\nq::after  { content: close-quote; }",
        section_id: "css2-generated-content"
      }
    ],
    examples: [
      {
        label: "Custom quotation marks",
        code: `q {\n  quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n}\n\nq::before { content: open-quote; }\nq::after  { content: close-quote; }`
      }
    ],
    browser_support: { chrome: "11", edge: "12", firefox: "1.5", safari: "9", opera: "4" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Display & Visibility",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // display
        {
    property: "display",
    
    group: "D",
    w3schools_url: "https://www.w3schools.com/cssref/pr_class_display.php",
    definition: "Specifies the display behavior (the type of rendering box) of an element. It is one of the most fundamental CSS properties — it controls whether an element is treated as a block, inline, flex container, grid container, or hidden entirely.",
    default_value: "inline",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Setting display: none removes the element from the document flow entirely — no space is reserved. To hide an element while keeping its space, use visibility: hidden instead.",
    note: `The display property controls two things: the outer display type (how the element participates in the page flow — block or inline) and the inner display type (how its children are laid out — flow, flex, grid, etc.).

Key display values grouped by purpose:
- Flow layout:  block, inline, inline-block
- Flex layout:  flex, inline-flex
- Grid layout:  grid, inline-grid
- Table layout: table, inline-table, table-row, table-cell, table-caption
- List:         list-item
- Hidden:       none
- Ghost:        contents`,
    syntax: "display: value | initial | inherit;",
    values: [
      {
        value: "block",
        description: "The element generates a block box. It takes up the full width available and always starts on a new line. Naturally block elements include: div, p, h1–h6, section, article, header, footer.",
        syntax_example: "span { display: block; }"
      },
      {
        value: "inline",
        description: "Default for most text-level elements. The element sits within the flow of text, only as wide as its content. Does not accept width or height. Naturally inline elements include: span, a, strong, em.",
        syntax_example: "div { display: inline; }"
      },
      {
        value: "inline-block",
        description: "Flows inline like text but accepts width, height, padding, and margin like a block. Useful for buttons, badges, and icon+text combinations.",
        syntax_example: "span { display: inline-block; width: 120px; height: 40px; }"
      },
      {
        value: "flex",
        description: "Makes the element a flex container. All direct children become flex items laid out using the flexbox model. Controls alignment, direction, wrapping, and spacing of children.",
        syntax_example: ".container { display: flex; justify-content: center; align-items: center; }"
      },
      {
        value: "inline-flex",
        description: "Same as flex but the container itself is inline — it does not start on a new line.",
        syntax_example: ".badge { display: inline-flex; align-items: center; gap: 4px; }"
      },
      {
        value: "grid",
        description: "Makes the element a grid container. All direct children become grid items laid out using the CSS Grid model. Enables two-dimensional layout with rows and columns.",
        syntax_example: ".layout { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }"
      },
      {
        value: "inline-grid",
        description: "Same as grid but the container itself is inline.",
        syntax_example: ".widget { display: inline-grid; grid-template-columns: auto auto; }"
      },
      {
        value: "none",
        description: "The element is completely removed from the document flow. It takes up no space and is invisible. All child elements are also hidden. The element still exists in the DOM.",
        syntax_example: ".hidden { display: none; }"
      },
      {
        value: "contents",
        description: "The element itself generates no box and takes up no space in the layout, but its children render normally. Useful for removing a wrapper div from layout without changing the HTML.",
        syntax_example: ".wrapper { display: contents; }"
      },
      {
        value: "list-item",
        description: "The element generates a block box and a list-item marker (bullet or number). This is the default behavior for li elements.",
        syntax_example: "div { display: list-item; list-style-type: disc; margin-left: 20px; }"
      },
      {
        value: "table",
        description: "The element behaves like a block-level table element (like the HTML table tag).",
        syntax_example: "div { display: table; width: 100%; }"
      },
      {
        value: "inline-table",
        description: "The element behaves like an inline-level table.",
        syntax_example: "div { display: inline-table; }"
      },
      {
        value: "table-row",
        description: "The element behaves like a tr (table row) element.",
        syntax_example: "div { display: table-row; }"
      },
      {
        value: "table-cell",
        description: "The element behaves like a td (table cell) element. Accepts vertical-align.",
        syntax_example: "div { display: table-cell; vertical-align: middle; }"
      },
      {
        value: "table-caption",
        description: "The element behaves like a caption element in a table.",
        syntax_example: "div { display: table-caption; }"
      },
      {
        value: "table-column",
        description: "The element behaves like a col element.",
        syntax_example: "div { display: table-column; }"
      },
      {
        value: "table-column-group",
        description: "The element behaves like a colgroup element.",
        syntax_example: "div { display: table-column-group; }"
      },
      {
        value: "table-header-group",
        description: "The element behaves like a thead element.",
        syntax_example: "div { display: table-header-group; }"
      },
      {
        value: "table-footer-group",
        description: "The element behaves like a tfoot element.",
        syntax_example: "div { display: table-footer-group; }"
      },
      {
        value: "table-row-group",
        description: "The element behaves like a tbody element.",
        syntax_example: "div { display: table-row-group; }"
      },
      {
        value: "flow-root",
        description: "Creates a new block formatting context. Useful for containing floats without a clearfix hack.",
        syntax_example: ".container { display: flow-root; }"
      },
      {
        value: "initial",
        description: "Resets to default value (inline).",
        syntax_example: "div { display: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { display: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "visibility",
        condition: "Use visibility: hidden to hide an element while keeping its space in the layout. Unlike display: none, the element still occupies space.",
        css_version: "CSS2",
        path: "CSS2 > Visual Formatting > visibility",
        syntax_example: ".ghost { visibility: hidden; }",
        section_id: "css2-visual-visibility"
      },
      {
        name: "opacity",
        condition: "Use opacity: 0 to make an element fully transparent while keeping it in the layout and still interactive. Unlike display: none or visibility: hidden, opacity: 0 elements still receive pointer events.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > opacity",
        syntax_example: ".faded { opacity: 0; }",
        section_id: "css3-visual-opacity"
      }
    ],
    examples: [
      {
        label: "Block vs inline vs inline-block comparison",
        code: `span.block        { display: block; width: 200px; background: #c8a96e; }\nspan.inline       { display: inline; }\nspan.inlineblock  { display: inline-block; width: 100px; height: 50px; background: #1a1a2e; }`
      },
      {
        label: "Flex container",
        code: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}`
      },
      {
        label: "Grid container",
        code: `.layout {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`
      },
      {
        label: "Hide and show with display none",
        code: `.menu {\n  display: none;\n}\n\n.menu.open {\n  display: block;\n}`
      }
    ],
    browser_support: { chrome: "4", edge: "12", firefox: "3", safari: "3.1", opera: "7" }
  },


        // visibility
          {
    property: "visibility",
    
    group: "V",
    w3schools_url: "https://www.w3schools.com/cssref/pr_class_visibility.php",
    definition: "Sets whether an element is visible or hidden. Unlike display: none, a hidden element still occupies its space in the layout.",
    default_value: "visible",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use visibility: hidden when you want to hide an element but keep its space — for example, hiding a cell in a table without collapsing the row.",
    note: `visibility vs display vs opacity:
visibility: hidden  — invisible, space preserved, no pointer events
display: none       — invisible, no space, no pointer events, removed from flow
opacity: 0          — invisible, space preserved, still receives pointer events

visibility is inherited — setting visibility: hidden on a parent hides all children.
You can make a child visible again with visibility: visible even if the parent is hidden.`,
    syntax: "visibility: visible | hidden | collapse | initial | inherit;",
    values: [
      { value: "visible", description: "Default. The element is visible.", syntax_example: "div { visibility: visible; }" },
      { value: "hidden", description: "The element is invisible but still occupies space in the layout.", syntax_example: "div { visibility: hidden; }" },
      { value: "collapse", description: "For table rows, columns, and groups — removes them like display: none without affecting the table layout. For other elements, same as hidden.", syntax_example: "tr { visibility: collapse; }" },
      { value: "initial", description: "Resets to default (visible).", syntax_example: "div { visibility: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { visibility: inherit; }" }
    ],
    additional_properties: [
      {
        name: "display: none",
        condition: "Use display: none to completely remove an element from the layout — no space is reserved. Use visibility: hidden when the space must be preserved.",
        css_version: "CSS1",
        path: "CSS1 > Display > display: none",
        syntax_example: ".hidden { display: none; }",
        section_id: "css1-display-none"
      },
      {
        name: "opacity",
        condition: "Use opacity: 0 to make an element transparent while keeping it interactive (receives pointer events). visibility: hidden disables pointer events.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > opacity",
        syntax_example: ".ghost { opacity: 0; }",
        section_id: "css3-visual-opacity"
      }
    ],
    examples: [
      { label: "Toggle visibility while preserving space", code: `.placeholder {\n  visibility: hidden;\n}\n\n.placeholder.active {\n  visibility: visible;\n}` },
      { label: "Show child while parent is hidden", code: `.parent { visibility: hidden; }\n.parent .always-visible { visibility: visible; }` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Float & Clear",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // clear
          {
    property: "clear",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_class_clear.php",
    definition: "Specifies what happens with an element that is next to a floating element — whether it should be moved below (cleared) the float.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    tip: "The clearfix technique uses clear: both on a pseudo-element to force a container to contain its floated children.",
    note: "clear only works on block-level elements. It has no effect on inline elements.",
    syntax: "clear: none | left | right | both | initial | inherit;",
    values: [
      { value: "none", description: "Default. The element is not moved below floated elements.", syntax_example: "div { clear: none; }" },
      { value: "left", description: "The element is moved below any left-floated elements.", syntax_example: "div { clear: left; }" },
      { value: "right", description: "The element is moved below any right-floated elements.", syntax_example: "div { clear: right; }" },
      { value: "both", description: "The element is moved below both left and right floated elements.", syntax_example: "div { clear: both; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { clear: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { clear: inherit; }" }
    ],
    examples: [
      { label: "Clear floats with a clearfix", code: `.clearfix::after {\n  content: "";\n  display: block;\n  clear: both;\n}` },
      { label: "Move element below a left float", code: `.sidebar { float: left; width: 200px; }\n.main { clear: left; }` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // float
          {
    property: "float",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_class_float.php",
    definition: "Specifies how an element should float — placing it to the left or right of its container and allowing text and inline elements to wrap around it.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements except absolutely positioned elements"],
    tip: "Floated elements are removed from the normal document flow. Always clear floats on the parent container using a clearfix or overflow: hidden to prevent layout collapse.",
    note: `A floated element is taken out of the normal flow. Its parent container will collapse in height unless you clear the float.

Clearfix technique (recommended):
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}`,
    syntax: "float: none | left | right | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. The element does not float.",
        syntax_example: "div { float: none; }"
      },
      {
        value: "left",
        description: "The element floats to the left of its container. Text and inline elements wrap to its right.",
        syntax_example: "img { float: left; margin-right: 16px; }"
      },
      {
        value: "right",
        description: "The element floats to the right of its container. Text and inline elements wrap to its left.",
        syntax_example: "img { float: right; margin-left: 16px; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "div { float: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { float: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "clear",
        condition: "Use clear on elements that should appear below a floated element rather than wrapping beside it.",
        css_version: "CSS1",
        path: "CSS1 > Layout > clear",
        syntax_example: ".footer { clear: both; }",
        section_id: "css1-layout-clear"
      },
      {
        name: "overflow: hidden",
        condition: "Setting overflow: hidden on a parent container is a quick way to contain floated children without a clearfix.",
        css_version: "CSS1",
        path: "CSS1 > Box Model > overflow",
        syntax_example: ".container { overflow: hidden; }",
        section_id: "css1-box-overflow"
      }
    ],
    examples: [
      {
        label: "Image floated left with text wrapping",
        code: `img {\n  float: left;\n  margin: 0 16px 8px 0;\n}\n\n.clearfix::after {\n  content: "";\n  display: block;\n  clear: both;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
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

        // font
          {
    property: "font",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_font_font.php",
    definition: "Shorthand for setting font-style, font-variant, font-weight, font-size, line-height, and font-family in one declaration.",
    default_value: "Browser default",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "font-size and font-family are required in the shorthand — all other values are optional. If omitted, they reset to their defaults.",
    note: `Shorthand order:
font: style variant weight size/line-height family;

The slash between font-size and line-height is required when both are included:
Correct:   font: italic bold 16px/1.5 'Georgia', serif;
Incorrect: font: italic bold 16px 1.5 'Georgia', serif;

font-size and font-family are the only required values.`,
    syntax: "font: font-style font-variant font-weight font-size/line-height font-family | initial | inherit;",
    values: [
      {
        value: "font-style",
        description: "Optional. normal, italic, or oblique.",
        syntax_example: "p { font: italic 16px Georgia, serif; }"
      },
      {
        value: "font-variant",
        description: "Optional. normal or small-caps.",
        syntax_example: "p { font: small-caps 16px Georgia, serif; }"
      },
      {
        value: "font-weight",
        description: "Optional. normal, bold, bolder, lighter, or a numeric value 100–900.",
        syntax_example: "p { font: bold 16px Georgia, serif; }"
      },
      {
        value: "font-size",
        description: "Required. Sets the size of the font.",
        syntax_example: "p { font: 18px Georgia, serif; }",
        units_note: "Accepts px, em, rem, %, vw, and keyword sizes (small, medium, large, etc.)."
      },
      {
        value: "line-height",
        description: "Optional. Follows font-size after a slash.",
        syntax_example: "p { font: 18px/1.6 Georgia, serif; }"
      },
      {
        value: "font-family",
        description: "Required. One or more font names, separated by commas, ending with a generic family.",
        syntax_example: "p { font: 18px 'Playfair Display', Georgia, serif; }"
      },
      {
        value: "initial",
        description: "Resets all font sub-properties to browser defaults.",
        syntax_example: "p { font: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits all font sub-properties from the parent element.",
        syntax_example: "p { font: inherit; }"
      }
    ],
    examples: [
      {
        label: "Full font shorthand",
        code: `p {\n  font: italic bold 18px/1.6 'Playfair Display', Georgia, serif;\n}`
      },
      {
        label: "Minimum required values",
        code: `p {\n  font: 16px Arial, sans-serif;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // font-family
          {
    property: "font-family",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_font_font-family.php",
    definition: "Specifies one or more font names for the text of an element. The browser uses the first font in the list that is available, and falls back to the next if not found.",
    default_value: "Browser default",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Always end your font stack with a generic family name (serif, sans-serif, monospace, cursive, fantasy) as a final fallback in case all listed fonts fail to load.",
    note: `Font names that contain spaces must be wrapped in quotes:
Correct:   font-family: 'Playfair Display', Georgia, serif;
Incorrect: font-family: Playfair Display, Georgia, serif;

Single-word font names do not need quotes but quotes are still acceptable:
font-family: Arial, sans-serif;
font-family: 'Arial', sans-serif; /* also valid */`,
    syntax: "font-family: family-name | generic-family | initial | inherit;",
    values: [
      {
        value: "family-name",
        description: "The name of a specific font. Multi-word names must be quoted. Multiple names are separated by commas.",
        syntax_example: "p { font-family: 'Playfair Display', Georgia, serif; }"
      },
      {
        value: "serif",
        description: "Generic family. Fonts with small strokes at the ends of letters. Examples: Georgia, Times New Roman.",
        syntax_example: "p { font-family: serif; }"
      },
      {
        value: "sans-serif",
        description: "Generic family. Fonts without decorative strokes. Examples: Arial, Helvetica, Verdana.",
        syntax_example: "p { font-family: sans-serif; }"
      },
      {
        value: "monospace",
        description: "Generic family. All characters have equal width. Examples: Courier New, Consolas, 'Space Mono'.",
        syntax_example: "code { font-family: 'Space Mono', Consolas, monospace; }"
      },
      {
        value: "cursive",
        description: "Generic family. Fonts that imitate handwriting. Examples: Brush Script MT, Pacifico.",
        syntax_example: "h1 { font-family: cursive; }"
      },
      {
        value: "fantasy",
        description: "Generic family. Decorative fonts. Examples: Impact, Papyrus.",
        syntax_example: "h1 { font-family: fantasy; }"
      },
      {
        value: "initial",
        description: "Resets to browser default.",
        syntax_example: "p { font-family: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent element.",
        syntax_example: "p { font-family: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "@font-face",
        condition: "To use a custom font that is not installed on the user's device, you must first define it with @font-face before referencing it in font-family.",
        css_version: "CSS3",
        path: "CSS3 > Fonts > @font-face",
        syntax_example: "@font-face { font-family: 'MyFont'; src: url('myfont.woff2') format('woff2'); }\np { font-family: 'MyFont', sans-serif; }",
        section_id: "css3-fonts-font-face"
      }
    ],
    examples: [
      {
        label: "Font stack with fallbacks",
        code: `body {\n  font-family: 'Crimson Pro', Georgia, 'Times New Roman', serif;\n}\n\ncode {\n  font-family: 'Space Mono', Consolas, 'Courier New', monospace;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },



        // font-size
          {
    property: "font-size",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_font_font-size.php",
    definition: "Sets the size of the font for an element's text.",
    default_value: "medium (typically 16px in browsers)",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use rem units for font sizes to ensure they scale consistently with the user's browser font preference. em units are relative to the parent element's font size, which can compound in nested elements.",
    note: `Pixel is a static measurement, while percent and em are relative.
- percent: relative to the parent element's font size. 150% of a 16px parent = 24px.
- em: relative to the current element's font size. 2em of a 16px element = 32px.
- rem: relative to the root (html) element's font size. Always consistent regardless of nesting.

Do not add a space between the value and the unit:
Incorrect: font-size: 16 px;
Correct:   font-size: 16px;`,
    syntax: "font-size: medium | xx-small | x-small | small | large | x-large | xx-large | smaller | larger | length | % | initial | inherit;",
    values: [
      {
        value: "medium",
        description: "Default. Browser default size, typically 16px.",
        syntax_example: "p { font-size: medium; }"
      },
      {
        value: "xx-small / x-small / small / large / x-large / xx-large",
        description: "Absolute keyword sizes relative to the browser's default.",
        syntax_example: "p { font-size: small; }"
      },
      {
        value: "smaller / larger",
        description: "Relative keyword sizes. Makes the font one size smaller or larger than the parent element.",
        syntax_example: "span { font-size: smaller; }"
      },
      {
        value: "length (px)",
        description: "A fixed pixel size. Does not scale with user browser settings.",
        syntax_example: "p { font-size: 16px; }",
        units_note: "px = fixed pixels. Not recommended for accessibility."
      },
      {
        value: "em",
        description: "Relative to the parent element's font size. 1em = parent's current font size.",
        syntax_example: "p { font-size: 1.125em; }",
        units_note: "1em = parent font size. Compounds when nested: a 1.2em element inside another 1.2em = 1.44x the root."
      },
      {
        value: "rem",
        description: "Relative to the root (html) element's font size. Does not compound with nesting.",
        syntax_example: "p { font-size: 1rem; }",
        units_note: "1rem = root html font size (typically 16px). Recommended for most font-size declarations."
      },
      {
        value: "%",
        description: "Percentage of the parent element's font size.",
        syntax_example: "p { font-size: 112.5%; } /* 112.5% of 16px = 18px */"
      },
      {
        value: "vw",
        description: "Relative to 1% of the viewport width. Useful for fluid typography.",
        syntax_example: "h1 { font-size: 5vw; }",
        units_note: "1vw = 1% of viewport width. Use clamp() to set min/max bounds."
      },
      {
        value: "initial",
        description: "Resets to default (medium).",
        syntax_example: "p { font-size: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-size: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "clamp()",
        condition: "Use clamp() to create fluid font sizes that scale between a minimum and maximum value based on viewport width, without media queries.",
        css_version: "CSS3",
        path: "CSS3 > Functions > clamp()",
        syntax_example: "h1 { font-size: clamp(1.5rem, 4vw, 3rem); }",
        section_id: "css3-functions-clamp"
      }
    ],
    examples: [
      {
        label: "Fluid font size with clamp",
        code: `h1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}\n\np {\n  font-size: 1rem;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // font-style
  {
    property: "font-style",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_font_font-style.php",
    definition: "Sets whether the font is displayed in a normal, italic, or oblique style.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    note: "italic uses the font's true italic variant if available. oblique artificially slants the normal face if no italic variant exists. For most use cases they look similar, but italic is preferred when available.",
    syntax: "font-style: normal | italic | oblique | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Text is displayed in a normal, upright style.",
        syntax_example: "p { font-style: normal; }"
      },
      {
        value: "italic",
        description: "Text is displayed in an italic style. Uses the font's dedicated italic variant.",
        syntax_example: "em { font-style: italic; }"
      },
      {
        value: "oblique",
        description: "Text is displayed leaning at an angle. Artificially slants the normal font face if no oblique variant exists.",
        syntax_example: "p { font-style: oblique; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { font-style: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-style: inherit; }"
      }
    ],
    examples: [
      {
        label: "Italic blockquote",
        code: `blockquote {\n  font-style: italic;\n  color: #c8a96e;\n  border-left: 3px solid #c8a96e;\n  padding-left: 16px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // font-variant
  {
    property: "font-variant",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_font_font-variant.php",
    definition: "Controls whether text is displayed in a small-caps font variant, where lowercase letters are displayed as smaller uppercase letters.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    note: "font-variant is a shorthand in CSS3 for a larger set of variant properties. In CSS1/CSS2 it only controls small-caps. For full control over OpenType variants, use font-variant-caps, font-variant-ligatures, font-variant-numeric, etc.",
    syntax: "font-variant: normal | small-caps | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Text is displayed normally.",
        syntax_example: "p { font-variant: normal; }"
      },
      {
        value: "small-caps",
        description: "Lowercase letters are displayed as smaller versions of uppercase letters.",
        syntax_example: "p { font-variant: small-caps; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { font-variant: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-variant: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "font-variant-caps",
        condition: "Use font-variant-caps for more granular control over capitalization variants including small-caps, all-small-caps, petite-caps, unicase, and titling-caps.",
        css_version: "CSS3",
        path: "CSS3 > Fonts > font-variant-caps",
        syntax_example: "p { font-variant-caps: small-caps; }",
        section_id: "css3-fonts-font-variant-caps"
      }
    ],
    examples: [
      {
        label: "Small caps heading style",
        code: `h2 {\n  font-variant: small-caps;\n  letter-spacing: 0.05em;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // font-weight

  {
    property: "font-weight",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/pr_font_weight.php",
    definition: "Sets the weight (thickness/boldness) of the font.",
    default_value: "normal",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Not all fonts support every weight value. If a specific numeric weight is not available, the browser uses the closest available weight.",
    note: `Numeric weight values:
100 = Thin
200 = Extra Light
300 = Light
400 = Normal (same as 'normal' keyword)
500 = Medium
600 = Semi Bold
700 = Bold (same as 'bold' keyword)
800 = Extra Bold
900 = Black / Heavy`,
    syntax: "font-weight: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Same as 400.",
        syntax_example: "p { font-weight: normal; }"
      },
      {
        value: "bold",
        description: "Bold text. Same as 700.",
        syntax_example: "strong { font-weight: bold; }"
      },
      {
        value: "bolder",
        description: "One weight heavier than the parent element's weight.",
        syntax_example: "span { font-weight: bolder; }"
      },
      {
        value: "lighter",
        description: "One weight lighter than the parent element's weight.",
        syntax_example: "span { font-weight: lighter; }"
      },
      {
        value: "100–900",
        description: "Numeric values in increments of 100. 400 = normal, 700 = bold.",
        syntax_example: "h1 { font-weight: 700; }\np  { font-weight: 400; }\n.light { font-weight: 300; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal / 400).",
        syntax_example: "p { font-weight: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-weight: inherit; }"
      }
    ],
    examples: [
      {
        label: "Typography weight scale",
        code: `.thin       { font-weight: 100; }\n.light      { font-weight: 300; }\n.regular    { font-weight: 400; }\n.medium     { font-weight: 500; }\n.semibold   { font-weight: 600; }\n.bold       { font-weight: 700; }\n.black      { font-weight: 900; }`
      }
    ],
    browser_support: { chrome: "2", edge: "12", firefox: "1", safari: "1.3", opera: "3.5" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Lists",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // list-style
          {
    property: "list-style",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_list-style.php",
    definition: "Shorthand for setting list-style-type, list-style-position, and list-style-image in one declaration.",
    default_value: "disc outside none",
    inherited: "yes",
    animatable: "no",
    applies_to: ["list items (li elements and elements with display: list-item)"],
    tip: "Use list-style: none to remove default bullets or numbers from a list — commonly needed when styling nav menus or custom lists.",
    syntax: "list-style: list-style-type list-style-position list-style-image | none | initial | inherit;",
    values: [
      {
        value: "list-style-type",
        description: "The type of list marker: disc, circle, square, decimal, lower-alpha, upper-roman, none, etc.",
        syntax_example: "ul { list-style: square; }"
      },
      {
        value: "list-style-position",
        description: "Whether the marker is inside or outside the list item's content box.",
        syntax_example: "ul { list-style: disc inside; }"
      },
      {
        value: "list-style-image",
        description: "A custom image to use as the list marker.",
        syntax_example: "ul { list-style: url('bullet.png'); }"
      },
      {
        value: "none",
        description: "Removes the list marker entirely.",
        syntax_example: "ul { list-style: none; }"
      },
      {
        value: "initial",
        description: "Resets to defaults.",
        syntax_example: "ul { list-style: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "ul { list-style: inherit; }"
      }
    ],
    examples: [
      {
        label: "Remove bullets for nav menu",
        code: `nav ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  gap: 24px;\n}`
      },
      {
        label: "Square inside markers",
        code: `ul {\n  list-style: square inside;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // list-style-image
  {
    property: "list-style-image",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_list-style-image.php",
    definition: "Replaces the default list marker with a custom image.",
    default_value: "none",
    inherited: "yes",
    animatable: "no",
    applies_to: ["list items"],
    note: "For more control over custom list markers (size, position, color), use the content property with ::before pseudo-element or list-style-type with @counter-style instead.",
    syntax: "list-style-image: none | url('path') | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No image is used — falls back to list-style-type.",
        syntax_example: "ul { list-style-image: none; }"
      },
      {
        value: "url('path')",
        description: "The path to the image to use as the list marker.",
        syntax_example: "ul { list-style-image: url('bullet-gold.png'); }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "ul { list-style-image: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "ul { list-style-image: inherit; }"
      }
    ],
    examples: [
      {
        label: "Custom image bullet",
        code: `ul {\n  list-style-image: url('gold-bullet.png');\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },



        // list-style-position

  {
    property: "list-style-position",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_list-style-position.php",
    definition: "Specifies whether the list marker (bullet or number) appears inside or outside the list item's content box.",
    default_value: "outside",
    inherited: "yes",
    animatable: "no",
    applies_to: ["list items"],
    note: `outside (default): The marker hangs to the left of the content box. Text wraps under the first line, not under the marker.
inside: The marker is part of the content flow. Wrapped text aligns under the marker.`,
    syntax: "list-style-position: outside | inside | initial | inherit;",
    values: [
      {
        value: "outside",
        description: "Default. The marker is outside the content box — text wraps without going under the bullet.",
        syntax_example: "ul { list-style-position: outside; }"
      },
      {
        value: "inside",
        description: "The marker is inside the content box — wrapped text aligns under the bullet.",
        syntax_example: "ul { list-style-position: inside; }"
      },
      {
        value: "initial",
        description: "Resets to default (outside).",
        syntax_example: "ul { list-style-position: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "ul { list-style-position: inherit; }"
      }
    ],
    examples: [
      {
        label: "Inside vs outside comparison",
        code: `ul.outside { list-style-position: outside; }\nul.inside  { list-style-position: inside; }`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // list-style-type
  {
    property: "list-style-type",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_list-style-type.php",
    definition: "Sets the type of list item marker — bullet style for unordered lists or numbering style for ordered lists.",
    default_value: "disc (ul) / decimal (ol)",
    inherited: "yes",
    animatable: "no",
    applies_to: ["list items"],
    syntax: "list-style-type: disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-alpha | upper-alpha | lower-greek | none | initial | inherit;",
    values: [
      {
        value: "disc",
        description: "Default for ul. A filled circle bullet.",
        syntax_example: "ul { list-style-type: disc; }"
      },
      {
        value: "circle",
        description: "An empty circle bullet.",
        syntax_example: "ul { list-style-type: circle; }"
      },
      {
        value: "square",
        description: "A filled square bullet.",
        syntax_example: "ul { list-style-type: square; }"
      },
      {
        value: "decimal",
        description: "Default for ol. Standard numbers (1, 2, 3...).",
        syntax_example: "ol { list-style-type: decimal; }"
      },
      {
        value: "decimal-leading-zero",
        description: "Numbers with leading zero (01, 02, 03...).",
        syntax_example: "ol { list-style-type: decimal-leading-zero; }"
      },
      {
        value: "lower-roman",
        description: "Lowercase Roman numerals (i, ii, iii...).",
        syntax_example: "ol { list-style-type: lower-roman; }"
      },
      {
        value: "upper-roman",
        description: "Uppercase Roman numerals (I, II, III...).",
        syntax_example: "ol { list-style-type: upper-roman; }"
      },
      {
        value: "lower-alpha",
        description: "Lowercase letters (a, b, c...).",
        syntax_example: "ol { list-style-type: lower-alpha; }"
      },
      {
        value: "upper-alpha",
        description: "Uppercase letters (A, B, C...).",
        syntax_example: "ol { list-style-type: upper-alpha; }"
      },
      {
        value: "lower-greek",
        description: "Lowercase Greek letters (α, β, γ...).",
        syntax_example: "ol { list-style-type: lower-greek; }"
      },
      {
        value: "none",
        description: "No marker is displayed.",
        syntax_example: "ul { list-style-type: none; }"
      },
      {
        value: "initial",
        description: "Resets to default.",
        syntax_example: "ul { list-style-type: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "ul { list-style-type: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "@counter-style",
        condition: "Use @counter-style to define completely custom marker styles beyond the built-in options, including emoji, symbols, or any Unicode character.",
        css_version: "CSS3",
        path: "CSS3 > At-Rules > @counter-style",
        syntax_example: "@counter-style stars { system: cyclic; symbols: ★ ☆; suffix: ' '; }\nol { list-style-type: stars; }",
        section_id: "css3-atrules-counter-style"
      }
    ],
    examples: [
      {
        label: "Roman numeral ordered list",
        code: `ol {\n  list-style-type: upper-roman;\n}`
      },
      {
        label: "No bullets for nav",
        code: `nav ul {\n  list-style-type: none;\n  padding: 0;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
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

        // bottom
          {
    property: "bottom",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_bottom.php",
    definition: "Sets the distance between the bottom edge of a positioned element and the bottom edge of its containing block.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements (position: relative, absolute, fixed, sticky)"],
    note: "bottom has no effect on elements with position: static (the default).",
    syntax: "bottom: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser calculates the bottom position.", syntax_example: "div { bottom: auto; }" },
      { value: "length", description: "Distance from the bottom edge of the containing block.", syntax_example: "div { position: fixed; bottom: 20px; }", units_note: "Accepts px, em, rem, vh, etc. Negative values move element below the containing block." },
      { value: "%", description: "Percentage of the containing block's height.", syntax_example: "div { position: absolute; bottom: 10%; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { bottom: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { bottom: inherit; }" }
    ],
    examples: [{ label: "Fixed element 20px from bottom of viewport", code: `.toast {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "6" }
  },


        // left
          {
    property: "left",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_left.php",
    definition: "Sets the distance between the left edge of a positioned element and the left edge of its containing block.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements (position: relative, absolute, fixed, sticky)"],
    note: "left has no effect on elements with position: static (the default). Negative values move the element to the left of its containing block.",
    syntax: "left: auto | length | % | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the left position.",
        syntax_example: "div { left: auto; }"
      },
      {
        value: "length",
        description: "Distance from the left edge of the containing block. Negative values move the element further left.",
        syntax_example: "div { position: absolute; left: 20px; }",
        units_note: "Accepts px, em, rem, vw, etc."
      },
      {
        value: "%",
        description: "Percentage of the containing block's width.",
        syntax_example: "div { position: absolute; left: 50%; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { left: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { left: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "transform: translateX(-50%)",
        condition: "To horizontally center an absolutely positioned element, use left: 50% combined with transform: translateX(-50%). This accounts for the element's own width.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform",
        syntax_example: ".centered {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}",
        section_id: "css3-transforms-transform"
      }
    ],
    examples: [
      {
        label: "Position element 20px from left",
        code: `.tooltip {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n}`
      },
      {
        label: "Horizontally centered absolute element",
        code: `.centered {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "5" }
  },


        // position
          {
    property: "position",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/pr_class_position.php",
    definition: "Specifies the positioning method of an element — how it is placed in the document flow and how the top, right, bottom, and left properties affect it.",
    default_value: "static",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "An element must have a position value other than static for top, right, bottom, and left to have any effect.",
    note: `Position values and their behavior:
static   — default, follows normal document flow, top/right/bottom/left have no effect
relative — offset from its normal position, still occupies original space
absolute — removed from flow, positioned relative to nearest non-static ancestor
fixed    — removed from flow, positioned relative to the viewport, stays on screen while scrolling
sticky   — hybrid of relative and fixed, sticks at a threshold while scrolling`,
    syntax: "position: static | relative | absolute | fixed | sticky | initial | inherit;",
    values: [
      {
        value: "static",
        description: "Default. Element follows normal document flow. top/right/bottom/left have no effect.",
        syntax_example: "div { position: static; }"
      },
      {
        value: "relative",
        description: "Element is offset from its normal position using top/right/bottom/left. Original space is preserved.",
        syntax_example: "div { position: relative; top: 10px; left: 20px; }"
      },
      {
        value: "absolute",
        description: "Element is removed from the document flow and positioned relative to its nearest non-static ancestor. If none exists, it positions relative to the initial containing block.",
        syntax_example: ".parent { position: relative; }\n.child  { position: absolute; top: 0; right: 0; }"
      },
      {
        value: "fixed",
        description: "Element is removed from the document flow and positioned relative to the viewport. Stays in place while the page scrolls.",
        syntax_example: ".navbar { position: fixed; top: 0; left: 0; width: 100%; }"
      },
      {
        value: "sticky",
        description: "Hybrid of relative and fixed. Acts as relative until a scroll threshold is reached, then sticks like fixed.",
        syntax_example: ".sticky-header { position: sticky; top: 0; }"
      },
      {
        value: "initial",
        description: "Resets to default (static).",
        syntax_example: "div { position: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { position: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "top, right, bottom, left",
        condition: "These offset properties only work when position is set to relative, absolute, fixed, or sticky. They have no effect on position: static.",
        css_version: "CSS2",
        path: "CSS2 > Positioning > top",
        syntax_example: "div { position: absolute; top: 20px; left: 20px; }",
        section_id: "css2-positioning-top"
      },
      {
        name: "z-index",
        condition: "z-index only works on positioned elements (anything except position: static). Use it to control stacking order when elements overlap.",
        css_version: "CSS2",
        path: "CSS2 > Positioning > z-index",
        syntax_example: ".modal { position: fixed; z-index: 1000; }",
        section_id: "css2-positioning-z-index"
      },
      {
        name: "inset",
        condition: "Use inset as a shorthand for setting top, right, bottom, and left in one declaration. inset: 0 fills the containing block completely.",
        css_version: "CSS3",
        path: "CSS3 > Logical Properties > inset",
        syntax_example: ".overlay { position: absolute; inset: 0; }",
        section_id: "css3-logical-inset"
      }
    ],
    examples: [
      {
        label: "Fixed navigation bar",
        code: `.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  background: #1a1a2e;\n}`
      },
      {
        label: "Absolutely positioned badge",
        code: `.card {\n  position: relative;\n}\n\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #c8a96e;\n}`
      },
      {
        label: "Sticky section header",
        code: `.section-header {\n  position: sticky;\n  top: 60px;\n  background: #1a1a2e;\n  z-index: 10;\n  padding: 8px 0;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  },


        // right
          {
    property: "right",
    
    group: "R",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_right.php",
    definition: "Sets the distance between the right edge of a positioned element and the right edge of its containing block.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements (position: relative, absolute, fixed, sticky)"],
    note: "right has no effect on elements with position: static (the default). Negative values move the element to the right beyond its containing block.",
    syntax: "right: auto | length | % | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the right position.",
        syntax_example: "div { right: auto; }"
      },
      {
        value: "length",
        description: "Distance from the right edge of the containing block.",
        syntax_example: "div { position: fixed; right: 20px; }",
        units_note: "Accepts px, em, rem, vw, etc. Negative values allowed."
      },
      {
        value: "%",
        description: "Percentage of the containing block's width.",
        syntax_example: "div { position: absolute; right: 10%; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { right: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { right: inherit; }"
      }
    ],
    examples: [
      {
        label: "Fixed button in bottom-right corner",
        code: `.fab {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #c8a96e;\n}`
      },
      {
        label: "Badge positioned at top-right of card",
        code: `.card {\n  position: relative;\n}\n\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "5" }
  },

        // top
          {
    property: "top",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_top.php",
    definition: "Sets the distance between the top edge of a positioned element and the top edge of its containing block.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements (position: relative, absolute, fixed, sticky)"],
    note: "top has no effect on elements with position: static. For sticky elements, top defines the threshold at which the element becomes stuck.",
    syntax: "top: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser calculates the top position.", syntax_example: "div { top: auto; }" },
      { value: "length", description: "Distance from the top edge of the containing block.", syntax_example: "div { position: fixed; top: 0; }", units_note: "Accepts px, em, rem, vh, etc. Negative values move element above the containing block." },
      { value: "%", description: "Percentage of the containing block's height.", syntax_example: "div { position: absolute; top: 50%; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { top: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { top: inherit; }" }
    ],
    additional_properties: [
      {
        name: "transform: translateY(-50%)",
        condition: "To vertically center an absolutely positioned element, use top: 50% combined with transform: translateY(-50%) to account for the element's own height.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform",
        syntax_example: ".centered {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}",
        section_id: "css3-transforms-transform"
      }
    ],
    examples: [
      { label: "Fixed navbar at top", code: `.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}` },
      { label: "Sticky header", code: `.section-title {\n  position: sticky;\n  top: 72px;\n  background: #1a1a2e;\n  z-index: 10;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "5" }
  },


        // z-index
          {
    property: "z-index",
    
    group: "Z",
    w3schools_url: "https://www.w3schools.com/cssref/pr_pos_z-index.php",
    definition: "Sets the stack order of a positioned element. Elements with a higher z-index appear in front of elements with a lower z-index when they overlap.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements (position: relative, absolute, fixed, sticky) and flex/grid items"],
    tip: "Use a consistent z-index scale across your project to avoid conflicts. A common convention: 10 = dropdowns, 100 = sticky headers, 1000 = modals, 9999 = tooltips.",
    note: `z-index only works on positioned elements (anything except position: static) and flex/grid items.

z-index creates a stacking context. Elements inside a stacking context are stacked relative to each other, not relative to the whole page.

A new stacking context is created by:
- position + z-index other than auto
- opacity less than 1
- transform, filter, or clip-path
- isolation: isolate

This means a child with z-index: 9999 inside a parent with z-index: 1 will always be behind elements outside the parent with z-index: 2.`,
    syntax: "z-index: auto | number | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The element's stack order is the same as its parent. Does not create a new stacking context.",
        syntax_example: "div { z-index: auto; }"
      },
      {
        value: "number",
        description: "An integer (positive, negative, or zero). Higher numbers appear in front. Negative values place elements behind the default stack.",
        syntax_example: ".modal   { z-index: 1000; }\n.overlay { z-index: 999; }\n.navbar  { z-index: 100; }",
        units_note: "Unitless integer. No px or other units."
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { z-index: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { z-index: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "isolation: isolate",
        condition: "Use isolation: isolate to create a new stacking context without setting a specific z-index value — useful for containing z-index values within a component.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > isolation",
        syntax_example: ".component { isolation: isolate; }",
        section_id: "css3-visual-isolation"
      },
      {
        name: "position",
        condition: "z-index only works on positioned elements. The element must have position: relative, absolute, fixed, or sticky — or be a flex/grid item.",
        css_version: "CSS2",
        path: "CSS2 > Positioning > position",
        syntax_example: "div { position: relative; z-index: 10; }",
        section_id: "css2-positioning-position"
      }
    ],
    examples: [
      {
        label: "Z-index scale for a full UI",
        code: `/* Recommended z-index scale */\n.backdrop  { position: fixed;    z-index: 900; }\n.modal     { position: fixed;    z-index: 1000; }\n.navbar    { position: sticky;   z-index: 100; }\n.dropdown  { position: absolute; z-index: 200; }\n.tooltip   { position: absolute; z-index: 500; }`
      },
      {
        label: "Overlay behind modal",
        code: `.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.6);\n  z-index: 999;\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n  background: #1a1a2e;\n  border: 1px solid #c8a96e;\n  padding: 32px;\n  border-radius: 8px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
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

        // direction
          {
    property: "direction",
    
    group: "D",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_direction.php",
    definition: "Sets the text direction of block-level elements — left-to-right (LTR) for most Western languages, or right-to-left (RTL) for languages such as Arabic and Hebrew.",
    default_value: "ltr",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "For web content it is better practice to use the HTML dir attribute on the <html> or <body> element rather than CSS direction, since the HTML attribute affects document structure as well as presentation.",
    note: "The direction property works together with the unicode-bidi property. Setting direction alone may not be sufficient for complex bidirectional text — combine with unicode-bidi: embed or unicode-bidi: bidi-override for full RTL control.",
    syntax: "direction: ltr | rtl | initial | inherit;",
    values: [
      {
        value: "ltr",
        description: "Default. Text and elements flow from left to right.",
        syntax_example: "body { direction: ltr; }"
      },
      {
        value: "rtl",
        description: "Text and elements flow from right to left. Used for Arabic, Hebrew, and other RTL languages.",
        syntax_example: "body { direction: rtl; }"
      },
      {
        value: "initial",
        description: "Resets to default value (ltr).",
        syntax_example: "p { direction: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits the direction value from the parent element.",
        syntax_example: "p { direction: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "unicode-bidi",
        condition: "Must be used alongside direction: rtl to properly handle bidirectional text in mixed-language content.",
        css_version: "CSS2",
        path: "CSS2 > Text Properties > unicode-bidi",
        syntax_example: ".rtl { direction: rtl; unicode-bidi: embed; }",
        section_id: "css2-text-unicode-bidi"
      }
    ],
    examples: [
      {
        label: "Right-to-left text layout",
        code: `.arabic {\n  direction: rtl;\n  unicode-bidi: embed;\n}`
      }
    ],
    browser_support: { chrome: "2", edge: "12", firefox: "1", safari: "1", opera: "9.2" }
  },


        // letter-spacing
          {
    property: "letter-spacing",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_letter-spacing.php",
    definition: "Sets the spacing between characters in a text element. Positive values increase spacing; negative values bring characters closer together.",
    default_value: "normal",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use letter-spacing with text-transform: uppercase for polished heading styles. A small positive value (0.05em–0.1em) on uppercase text greatly improves readability.",
    note: `Do not add a space between the value and the unit:
Incorrect: letter-spacing: 2 px;
Correct:   letter-spacing: 2px;

Using em units is preferred over px — it scales with the font size.`,
    syntax: "letter-spacing: normal | length | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. No extra spacing is added between characters.",
        syntax_example: "p { letter-spacing: normal; }"
      },
      {
        value: "length",
        description: "A positive or negative length added between each character.",
        syntax_example: "h1 { letter-spacing: 0.1em; }",
        units_note: "Accepts px, em, rem. em is recommended for proportional scaling. Example: 0.05em tightens slightly, 0.2em spreads noticeably."
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { letter-spacing: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { letter-spacing: inherit; }"
      }
    ],
    examples: [
      {
        label: "Spaced uppercase heading",
        code: `h2 {\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  font-weight: 600;\n}`
      },
      {
        label: "Tight tracking for display text",
        code: `.display-text {\n  font-size: 4rem;\n  letter-spacing: -0.02em;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // line-height
  {
    property: "line-height",
    
    group: "L",
    w3schools_url: "https://www.w3schools.com/cssref/pr_dim_line-height.php",
    definition: "Sets the height of a line of text. Controls the vertical space between lines within a block of text.",
    default_value: "normal",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "A unitless number (like 1.5) is the recommended way to set line-height — it scales proportionally with font-size in child elements. Avoid using px for line-height.",
    note: `line-height: normal is typically 1.2 in most browsers.
Recommended values for readability:
- Body text:    1.5 – 1.6
- Headings:     1.1 – 1.3
- Dense UI:     1.2 – 1.4

Using unitless numbers is best practice:
line-height: 1.5  = 1.5 × font-size (inherits proportionally)
line-height: 24px = fixed, does not scale with font size`,
    syntax: "line-height: normal | number | length | % | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Browser default line height, typically around 1.2.",
        syntax_example: "p { line-height: normal; }"
      },
      {
        value: "number",
        description: "A unitless multiplier of the element's font-size. Recommended approach.",
        syntax_example: "p { line-height: 1.6; }"
      },
      {
        value: "length",
        description: "A fixed line height. Not recommended — does not scale with font-size.",
        syntax_example: "p { line-height: 24px; }",
        units_note: "Accepts px, em, rem. Unitless number is preferred."
      },
      {
        value: "%",
        description: "A percentage of the element's font-size.",
        syntax_example: "p { line-height: 150%; } /* same as 1.5 */"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { line-height: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { line-height: inherit; }"
      }
    ],
    examples: [
      {
        label: "Readable body text",
        code: `p {\n  font-size: 1rem;\n  line-height: 1.6;\n}`
      },
      {
        label: "Tight heading line height",
        code: `h1 {\n  font-size: 3rem;\n  line-height: 1.1;\n}`
      },
      {
        label: "Vertically center single line of text",
        code: `.btn {\n  height: 48px;\n  line-height: 48px;\n  padding: 0 24px;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


        // text-align
          {
    property: "text-align",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_text-align.php",
    definition: "Sets the horizontal alignment of text and inline content within a block element.",
    default_value: "left (ltr) or right (rtl)",
    inherited: "yes",
    animatable: "no",
    applies_to: ["block containers"],
    tip: "Use text-align: justify carefully — it can create awkward spacing between words, especially on narrow columns. Pair it with hyphens: auto for better results.",
    syntax: "text-align: left | right | center | justify | start | end | initial | inherit;",
    values: [
      { value: "left", description: "Text is aligned to the left edge.", syntax_example: "p { text-align: left; }" },
      { value: "right", description: "Text is aligned to the right edge.", syntax_example: "p { text-align: right; }" },
      { value: "center", description: "Text is centered.", syntax_example: "h1 { text-align: center; }" },
      { value: "justify", description: "Text is stretched so each line has equal width. Last line is left-aligned.", syntax_example: "p { text-align: justify; }" },
      { value: "start", description: "Aligns to the start of the text direction (left in LTR, right in RTL).", syntax_example: "p { text-align: start; }" },
      { value: "end", description: "Aligns to the end of the text direction.", syntax_example: "p { text-align: end; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "p { text-align: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-align: inherit; }" }
    ],
    examples: [
      { label: "Centered heading", code: `h1 { text-align: center; }` },
      { label: "Justified body text", code: `p {\n  text-align: justify;\n  hyphens: auto;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // text-decoration
  {
    property: "text-decoration",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_text-decoration.php",
    definition: "Shorthand for setting text-decoration-line, text-decoration-color, text-decoration-style, and text-decoration-thickness in one declaration.",
    default_value: "none currentColor solid auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use text-decoration: none on anchor tags to remove underlines for navigation links, then add a custom underline with border-bottom for more styling control.",
    syntax: "text-decoration: text-decoration-line text-decoration-color text-decoration-style text-decoration-thickness | none | initial | inherit;",
    values: [
      { value: "none", description: "No text decoration.", syntax_example: "a { text-decoration: none; }" },
      { value: "underline", description: "A line beneath the text.", syntax_example: "a { text-decoration: underline; }" },
      { value: "overline", description: "A line above the text.", syntax_example: "p { text-decoration: overline; }" },
      { value: "line-through", description: "A line through the middle of the text.", syntax_example: "del { text-decoration: line-through; }" },
      { value: "underline dotted red", description: "Shorthand combining line, style, and color.", syntax_example: "a { text-decoration: underline dotted red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "p { text-decoration: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-decoration: inherit; }" }
    ],
    examples: [
      { label: "Remove link underline", code: `a { text-decoration: none; }\na:hover { text-decoration: underline; }` },
      { label: "Styled underline", code: `a {\n  text-decoration: underline wavy #c8a96e;\n  text-underline-offset: 4px;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // text-indent
  {
    property: "text-indent",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_text-indent.php",
    definition: "Sets the indentation of the first line of a block of text.",
    default_value: "0",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["block containers"],
    tip: "Use a negative text-indent with matching left padding to create a hanging indent — where the first line hangs to the left of the rest of the paragraph.",
    syntax: "text-indent: length | % | initial | inherit;",
    values: [
      { value: "length", description: "A fixed indentation. Negative values create a hanging indent.", syntax_example: "p { text-indent: 2em; }", units_note: "Accepts px, em, rem, %." },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "p { text-indent: 5%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "p { text-indent: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-indent: inherit; }" }
    ],
    examples: [
      { label: "Traditional paragraph indent", code: `p { text-indent: 2em; }` },
      { label: "Hanging indent", code: `p {\n  padding-left: 2em;\n  text-indent: -2em;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // text-transform

  {
    property: "text-transform",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_text-transform.php",
    definition: "Controls the capitalization of text — converting it to uppercase, lowercase, or capitalizing the first letter of each word.",
    default_value: "none",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Always use text-transform: uppercase for labels and headings in CSS rather than typing them in uppercase in the HTML — this keeps the content semantic and accessible.",
    syntax: "text-transform: none | uppercase | lowercase | capitalize | initial | inherit;",
    values: [
      { value: "none", description: "Default. No transformation.", syntax_example: "p { text-transform: none; }" },
      { value: "uppercase", description: "All characters are converted to uppercase.", syntax_example: "h2 { text-transform: uppercase; }" },
      { value: "lowercase", description: "All characters are converted to lowercase.", syntax_example: "p { text-transform: lowercase; }" },
      { value: "capitalize", description: "The first character of each word is capitalized.", syntax_example: "h1 { text-transform: capitalize; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "p { text-transform: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-transform: inherit; }" }
    ],
    examples: [
      { label: "Uppercase nav links", code: `nav a {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-size: 0.85rem;\n}` }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },

        // white-space
          {
    property: "white-space",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_white-space.php",
    definition: "Sets how white space (spaces, tabs, line breaks) inside an element is handled — whether it collapses, wraps, or is preserved.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use white-space: nowrap to prevent text from wrapping to a new line — essential for single-line truncation with text-overflow: ellipsis.",
    note: `White space handling summary:
normal      — collapses whitespace, wraps text
nowrap      — collapses whitespace, no wrapping
pre         — preserves whitespace and line breaks, no wrapping
pre-wrap    — preserves whitespace and line breaks, wraps text
pre-line    — collapses spaces, preserves line breaks, wraps text
break-spaces — like pre-wrap but spaces at end of line also wrap`,
    syntax: "white-space: normal | nowrap | pre | pre-wrap | pre-line | break-spaces | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Whitespace is collapsed. Text wraps when necessary.",
        syntax_example: "p { white-space: normal; }"
      },
      {
        value: "nowrap",
        description: "Whitespace is collapsed. Text does not wrap — it continues on one line.",
        syntax_example: ".truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }"
      },
      {
        value: "pre",
        description: "Whitespace and line breaks are preserved exactly as in the source. Text does not wrap.",
        syntax_example: "pre { white-space: pre; }"
      },
      {
        value: "pre-wrap",
        description: "Whitespace and line breaks are preserved. Text wraps when necessary.",
        syntax_example: "textarea { white-space: pre-wrap; }"
      },
      {
        value: "pre-line",
        description: "Multiple spaces are collapsed but line breaks are preserved. Text wraps when necessary.",
        syntax_example: "p { white-space: pre-line; }"
      },
      {
        value: "break-spaces",
        description: "Like pre-wrap but spaces at the end of a line wrap to the next line.",
        syntax_example: "p { white-space: break-spaces; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { white-space: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { white-space: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "text-overflow",
        condition: "white-space: nowrap is required for text-overflow: ellipsis to work. Both must be set together along with overflow: hidden.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > text-overflow",
        syntax_example: ".truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }",
        section_id: "css3-text-text-overflow"
      },
      {
        name: "word-break",
        condition: "Use word-break to control how long words break at line boundaries. Works alongside white-space for fine-grained text wrapping control.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > word-break",
        syntax_example: "p { white-space: pre-wrap; word-break: break-all; }",
        section_id: "css3-text-word-break"
      }
    ],
    examples: [
      {
        label: "Single-line truncation",
        code: `.card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}`
      },
      {
        label: "Preserve code formatting",
        code: `code {\n  white-space: pre;\n  font-family: 'Space Mono', monospace;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "4" }
  },


        // word-spacing
          {
    property: "word-spacing",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/pr_text_word-spacing.php",
    definition: "Sets the spacing between words in a text element.",
    default_value: "normal",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "word-spacing adds to the existing space between words. Use em units so spacing scales with the font size.",
    note: `Do not add a space between the value and the unit:
Incorrect: word-spacing: 4 px;
Correct:   word-spacing: 4px;

Negative values bring words closer together.`,
    syntax: "word-spacing: normal | length | % | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Normal spacing between words as defined by the font.",
        syntax_example: "p { word-spacing: normal; }"
      },
      {
        value: "length",
        description: "Additional spacing added between words. Negative values reduce spacing.",
        syntax_example: "p { word-spacing: 0.2em; }",
        units_note: "Accepts px, em, rem. em is recommended for proportional scaling."
      },
      {
        value: "%",
        description: "Percentage of the affected character advance width.",
        syntax_example: "p { word-spacing: 10%; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { word-spacing: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { word-spacing: inherit; }"
      }
    ],
    examples: [
      {
        label: "Increased word spacing for headings",
        code: `h1 {\n  word-spacing: 0.1em;\n  letter-spacing: 0.05em;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "1", opera: "3.5" }
  },


      ]
    }

  ] // end topics
}; // end css1_lessons
