// css3_lessons.js
// CSS3 lesson data object
// Paste each property object beneath its comment banner
// Rename: lesson → property | Remove: group, category, browser_support

const css3_lessons = {
  version: "CSS3",
  released: "1999",
  definition: "CSS3 introduced modular specifications, adding powerful new layout systems, animations, transitions, and visual effects.",
  what_it_introduced: "CSS3 introduced flexbox, grid layout, animations, transitions, transforms, border-radius, box-shadow, gradients, media queries, and many new text and background properties.",
  note: "",
  tip: "",
  topics: [

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Animation",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // animation
        
          {
    property: "animation",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation.php",
    definition: "Shorthand property for setting all animation sub-properties in a single declaration: name, duration, timing-function, delay, iteration-count, direction, fill-mode, and play-state.",
    default_value: "none 0s ease 0s 1 normal none running",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    tip: "Always define the @keyframes rule with the animation name to specify what the animation actually does.",
    note: "The order of values matters. The first time value is the duration; the second time value (if present) is the delay.",
    syntax: "animation: name duration timing-function delay iteration-count direction fill-mode play-state;",
    values: [
      {
        value: "animation-name",
        description: "The name of the @keyframes animation to apply.",
        syntax_example: "div { animation: slidein 2s; }"
      },
      {
        value: "animation-duration",
        description: "How long the animation takes to complete one cycle. Uses time units (s or ms).",
        syntax_example: "div { animation: slidein 2s; }",
        units_note: "Unit required. Example: 2s, 500ms. Do not omit the unit: animation-duration: 2 is invalid."
      },
      {
        value: "animation-timing-function",
        description: "The speed curve of the animation (ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier).",
        syntax_example: "div { animation: slidein 2s ease-in-out; }"
      },
      {
        value: "animation-delay",
        description: "How long to wait before the animation starts. Uses time units (s or ms).",
        syntax_example: "div { animation: slidein 2s 1s; }"
      },
      {
        value: "animation-iteration-count",
        description: "How many times the animation should repeat. Use 'infinite' for endless looping.",
        syntax_example: "div { animation: slidein 2s infinite; }"
      },
      {
        value: "animation-direction",
        description: "Whether the animation should play forward, backward, or alternate.",
        syntax_example: "div { animation: slidein 2s alternate; }"
      },
      {
        value: "animation-fill-mode",
        description: "What styles apply to the element before and after the animation runs.",
        syntax_example: "div { animation: slidein 2s forwards; }"
      },
      {
        value: "animation-play-state",
        description: "Whether the animation is running or paused.",
        syntax_example: "div { animation: slidein 2s; animation-play-state: paused; }"
      },
      {
        value: "initial",
        description: "Resets all animation sub-properties to their default values.",
        syntax_example: "div { animation: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits all animation sub-properties from the parent element.",
        syntax_example: "div { animation: inherit; }"
      }
    ],
    examples: [
      {
        label: "Basic animation shorthand",
        code: `div {
  animation: mymove 5s infinite;
}

@keyframes mymove {
  from { left: 0px; }
  to   { left: 200px; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },

        // animation-delay
  {
    property: "animation-delay",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-delay.php",
    definition: "Specifies a delay before the animation starts. A negative value causes the animation to begin immediately but partway through its cycle.",
    default_value: "0s",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    note: `Do not omit the unit on time values.
Incorrect: animation-delay: 2
Correct:   animation-delay: 2s`,
    syntax: "animation-delay: <time> | initial | inherit;",
    values: [
      {
        value: "<time>",
        description: "A time value in seconds (s) or milliseconds (ms). Negative values start the animation immediately, as if it had already been playing for that amount of time.",
        syntax_example: "div { animation-delay: 1s; }",
        units_note: "Use s (seconds) or ms (milliseconds). Example: 2s, 500ms, -1s."
      },
      {
        value: "initial",
        description: "Resets to default value (0s).",
        syntax_example: "div { animation-delay: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-delay: inherit; }"
      }
    ],
    examples: [
      {
        label: "Delay animation by 2 seconds",
        code: `div {
  animation-name: mymove;
  animation-duration: 3s;
  animation-delay: 2s;
}

@keyframes mymove {
  from { left: 0px; }
  to   { left: 300px; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-direction
  {
    property: "animation-direction",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-direction.php",
    definition: "Defines whether an animation should play forward, backward, or alternate between forward and backward on each cycle.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    syntax: "animation-direction: normal | reverse | alternate | alternate-reverse | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. The animation plays forward each cycle.",
        syntax_example: "div { animation-direction: normal; }"
      },
      {
        value: "reverse",
        description: "The animation plays backward each cycle.",
        syntax_example: "div { animation-direction: reverse; }"
      },
      {
        value: "alternate",
        description: "The animation plays forward on odd cycles and backward on even cycles.",
        syntax_example: "div { animation-direction: alternate; }"
      },
      {
        value: "alternate-reverse",
        description: "The animation plays backward on odd cycles and forward on even cycles.",
        syntax_example: "div { animation-direction: alternate-reverse; }"
      },
      {
        value: "initial",
        description: "Resets to default value (normal).",
        syntax_example: "div { animation-direction: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-direction: inherit; }"
      }
    ],
    examples: [
      {
        label: "Alternate animation direction",
        code: `div {
  animation-name: mymove;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes mymove {
  from { left: 0px; }
  to   { left: 300px; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-duration
  {
    property: "animation-duration",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-duration.php",
    definition: "Specifies how long one full cycle of the animation takes to complete.",
    default_value: "0s",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    note: `A value of 0s means the animation runs but produces no visible effect (it completes instantly).
Do not add a space between the number and unit:
Incorrect: animation-duration: 3 s;
Correct:   animation-duration: 3s;`,
    syntax: "animation-duration: <time> | initial | inherit;",
    values: [
      {
        value: "<time>",
        description: "Duration in seconds (s) or milliseconds (ms). Default is 0s — no visible animation.",
        syntax_example: "div { animation-duration: 3s; }",
        units_note: "Use s or ms. Example: 3s, 300ms. Negative values are treated as 0s."
      },
      {
        value: "initial",
        description: "Resets to default value (0s).",
        syntax_example: "div { animation-duration: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-duration: inherit; }"
      }
    ],
    examples: [
      {
        label: "Set animation to run for 3 seconds",
        code: `div {
  animation-name: mymove;
  animation-duration: 3s;
}

@keyframes mymove {
  from { top: 0px; }
  to   { top: 200px; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-fill-mode
  {
    property: "animation-fill-mode",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.php",
    definition: "Specifies the style applied to the element when the animation is not actively running — that is, before it starts (during the delay) and after it finishes.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    syntax: "animation-fill-mode: none | forwards | backwards | both | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. The element returns to its normal styles before and after the animation.",
        syntax_example: "div { animation-fill-mode: none; }"
      },
      {
        value: "forwards",
        description: "The element retains the styles from the last keyframe after the animation ends.",
        syntax_example: "div { animation-fill-mode: forwards; }"
      },
      {
        value: "backwards",
        description: "The element gets the styles from the first keyframe during the animation-delay period.",
        syntax_example: "div { animation-fill-mode: backwards; }"
      },
      {
        value: "both",
        description: "The element follows both forwards and backwards rules.",
        syntax_example: "div { animation-fill-mode: both; }"
      },
      {
        value: "initial",
        description: "Resets to default value (none).",
        syntax_example: "div { animation-fill-mode: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-fill-mode: inherit; }"
      }
    ],
    examples: [
      {
        label: "Hold final animation position after it ends",
        code: `div {
  animation-name: mymove;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes mymove {
  from { left: 0px; }
  to   { left: 200px; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-iteration-count
  {
    property: "animation-iteration-count",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.php",
    definition: "Specifies the number of times an animation cycle should be played. Use 'infinite' for a continuously looping animation.",
    default_value: "1",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    syntax: "animation-iteration-count: <number> | infinite | initial | inherit;",
    values: [
      {
        value: "<number>",
        description: "A positive number specifying how many times the animation plays. Fractional values are allowed (e.g., 0.5 plays half a cycle).",
        syntax_example: "div { animation-iteration-count: 3; }"
      },
      {
        value: "infinite",
        description: "The animation repeats forever.",
        syntax_example: "div { animation-iteration-count: infinite; }"
      },
      {
        value: "initial",
        description: "Resets to default value (1).",
        syntax_example: "div { animation-iteration-count: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-iteration-count: inherit; }"
      }
    ],
    examples: [
      {
        label: "Loop animation 3 times then stop",
        code: `div {
  animation-name: mymove;
  animation-duration: 2s;
  animation-iteration-count: 3;
}

@keyframes mymove {
  from { left: 0px; }
  to   { left: 300px; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-name
  {
    property: "animation-name",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-name.php",
    definition: "Specifies the name of the @keyframes rule that describes the animation's keyframes.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    note: "The name must match the identifier used in the @keyframes rule exactly. If no matching @keyframes is found, no animation is applied.",
    syntax: "animation-name: keyframename | none | initial | inherit;",
    values: [
      {
        value: "keyframename",
        description: "The name of the @keyframes animation to bind to this element.",
        syntax_example: "div { animation-name: slidein; }"
      },
      {
        value: "none",
        description: "Default. No animation is applied.",
        syntax_example: "div { animation-name: none; }"
      },
      {
        value: "initial",
        description: "Resets to default value (none).",
        syntax_example: "div { animation-name: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-name: inherit; }"
      }
    ],
    examples: [
      {
        label: "Name and define a keyframe animation",
        code: `div {
  animation-name: colorchange;
  animation-duration: 4s;
}

@keyframes colorchange {
  from { background-color: red; }
  to   { background-color: blue; }
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-play-state
  {
    property: "animation-play-state",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-play-state.php",
    definition: "Specifies whether an animation is currently running or paused. Useful for pausing animations via JavaScript or :hover.",
    default_value: "running",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    tip: "Toggling animation-play-state between 'running' and 'paused' via JavaScript is the standard way to pause/resume CSS animations without resetting them.",
    syntax: "animation-play-state: paused | running | initial | inherit;",
    values: [
      {
        value: "running",
        description: "Default. The animation is currently playing.",
        syntax_example: "div { animation-play-state: running; }"
      },
      {
        value: "paused",
        description: "The animation is paused at its current position.",
        syntax_example: "div:hover { animation-play-state: paused; }"
      },
      {
        value: "initial",
        description: "Resets to default value (running).",
        syntax_example: "div { animation-play-state: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-play-state: inherit; }"
      }
    ],
    examples: [
      {
        label: "Pause animation on hover",
        code: `div {
  animation-name: mymove;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

div:hover {
  animation-play-state: paused;
}`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },



        // animation-timing-function
  {
    property: "animation-timing-function",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_animation-timing-function.php",
    definition: "Defines the speed curve (acceleration pattern) of the animation, controlling how it progresses through its keyframes over time.",
    default_value: "ease",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements", "::before", "::after"],
    tip: "The timing function applies between keyframes, not over the full animation. You can set a different timing function inside each @keyframes step.",
    syntax: "animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end | steps(n, start|end) | cubic-bezier(n,n,n,n) | initial | inherit;",
    values: [
      {
        value: "ease",
        description: "Default. Starts slowly, speeds up in the middle, then slows again at the end.",
        syntax_example: "div { animation-timing-function: ease; }"
      },
      {
        value: "linear",
        description: "Constant speed from start to finish.",
        syntax_example: "div { animation-timing-function: linear; }"
      },
      {
        value: "ease-in",
        description: "Starts slowly, then accelerates.",
        syntax_example: "div { animation-timing-function: ease-in; }"
      },
      {
        value: "ease-out",
        description: "Starts fast, then decelerates to a stop.",
        syntax_example: "div { animation-timing-function: ease-out; }"
      },
      {
        value: "ease-in-out",
        description: "Slow start and slow end, faster in the middle — similar to ease but more symmetrical.",
        syntax_example: "div { animation-timing-function: ease-in-out; }"
      },
      {
        value: "step-start",
        description: "Jumps immediately to the end state at the start of each interval.",
        syntax_example: "div { animation-timing-function: step-start; }"
      },
      {
        value: "step-end",
        description: "Stays at the start state until the end of each interval, then jumps.",
        syntax_example: "div { animation-timing-function: step-end; }"
      },
      {
        value: "steps(n, start|end)",
        description: "Divides the animation into n equal steps. 'start' jumps at the beginning of each step; 'end' jumps at the end.",
        syntax_example: "div { animation-timing-function: steps(4, end); }"
      },
      {
        value: "cubic-bezier(n,n,n,n)",
        description: "Custom speed curve defined by four control points (values 0–1).",
        syntax_example: "div { animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); }"
      },
      {
        value: "initial",
        description: "Resets to default value (ease).",
        syntax_example: "div { animation-timing-function: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { animation-timing-function: inherit; }"
      }
    ],
    examples: [
      {
        label: "Compare different timing functions",
        code: `#d1 { animation-timing-function: linear; }
#d2 { animation-timing-function: ease; }
#d3 { animation-timing-function: ease-in; }
#d4 { animation-timing-function: ease-out; }
#d5 { animation-timing-function: ease-in-out; }`
      }
    ],
    browser_support: {
      chrome: "43",
      edge: "12",
      firefox: "16",
      safari: "9",
      opera: "30"
    }
  },




      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Backgrounds",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // background-blend-mode

        // background-clip

          {
    property: "background-clip",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_background-clip.php",
    definition: "Defines how far the background (color or image) extends within the element — to the border, padding, or content box.",
    default_value: "border-box",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "background-clip: border-box | padding-box | content-box | text | initial | inherit;",
    values: [
      {
        value: "border-box",
        description: "Default. The background extends to the outside edge of the border.",
        syntax_example: "div { background-clip: border-box; }"
      },
      {
        value: "padding-box",
        description: "The background extends to the outside edge of the padding. No background under the border.",
        syntax_example: "div { background-clip: padding-box; }"
      },
      {
        value: "content-box",
        description: "The background is clipped to the content box only.",
        syntax_example: "div { background-clip: content-box; }"
      },
      {
        value: "text",
        description: "The background is clipped to the foreground text. Use with transparent text color to show background through the text.",
        syntax_example: `h1 {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url('gradient.jpg');
}`
      },
      {
        value: "initial",
        description: "Resets to default value (border-box).",
        syntax_example: "div { background-clip: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-clip: inherit; }"
      }
    ],
    examples: [
      {
        label: "Background clipped to content area only",
        code: `div {
  background-color: #c8a96e;
  padding: 20px;
  border: 5px dashed #333;
  background-clip: content-box;
}`
      }
    ],
    browser_support: {
      chrome: "4",
      edge: "12",
      firefox: "4",
      safari: "3",
      opera: "10.5"
    }
  },

        // background-origin
      
		  {
    property: "background-origin",
   
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_background-origin.php",
    definition: "Specifies the origin position of a background image — where its coordinate system starts relative to the element's box.",
    default_value: "padding-box",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "background-origin is ignored when background-attachment is set to fixed.",
    syntax: "background-origin: padding-box | border-box | content-box | initial | inherit;",
    values: [
      {
        value: "padding-box",
        description: "Default. The background image starts from the upper left corner of the padding edge.",
        syntax_example: "div { background-origin: padding-box; }"
      },
      {
        value: "border-box",
        description: "The background image starts from the upper left corner of the border.",
        syntax_example: "div { background-origin: border-box; }"
      },
      {
        value: "content-box",
        description: "The background image starts from the upper left corner of the content.",
        syntax_example: "div { background-origin: content-box; }"
      },
      {
        value: "initial",
        description: "Resets to default value (padding-box).",
        syntax_example: "div { background-origin: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-origin: inherit; }"
      }
    ],
    examples: [
      {
        label: "Place background image starting at content edge",
        code: `div {
  border: 20px dashed #c8a96e;
  padding: 20px;
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-origin: content-box;
}`
      }
    ],
    browser_support: {
      chrome: "4",
      edge: "12",
      firefox: "4",
      safari: "3",
      opera: "10.5"
    }
  },


        // background-position-x
   
 {
    property: "background-position-x",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_background-position-x.php",
    definition: "Sets the horizontal position of a background image.",
    default_value: "0%",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "background-position-x: left | center | right | length | % | initial | inherit;",
    values: [
      {
        value: "left",
        description: "Positions the background image at the left edge.",
        syntax_example: "div { background-position-x: left; }"
      },
      {
        value: "center",
        description: "Centers the background image horizontally.",
        syntax_example: "div { background-position-x: center; }"
      },
      {
        value: "right",
        description: "Positions the background image at the right edge.",
        syntax_example: "div { background-position-x: right; }"
      },
      {
        value: "length",
        description: "A specific length value from the left edge.",
        syntax_example: "div { background-position-x: 50px; }",
        units_note: "Accepts px, em, rem, %, and other CSS length units."
      },
      {
        value: "initial",
        description: "Resets to default value (0%).",
        syntax_example: "div { background-position-x: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-position-x: inherit; }"
      }
    ],
    examples: [
      {
        label: "Position background image 100px from left",
        code: `div {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position-x: 100px;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "49",
      safari: "1",
      opera: "15"
    }
  },

		// background-position-y
		  {
    property: "background-position-y",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_background-position-y.php",
    definition: "Sets the vertical position of a background image.",
    default_value: "0%",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "background-position-y: top | center | bottom | length | % | initial | inherit;",
    values: [
      {
        value: "top",
        description: "Positions the background image at the top edge.",
        syntax_example: "div { background-position-y: top; }"
      },
      {
        value: "center",
        description: "Centers the background image vertically.",
        syntax_example: "div { background-position-y: center; }"
      },
      {
        value: "bottom",
        description: "Positions the background image at the bottom edge.",
        syntax_example: "div { background-position-y: bottom; }"
      },
      {
        value: "length",
        description: "A specific length value from the top edge.",
        syntax_example: "div { background-position-y: 50px; }",
        units_note: "Accepts px, em, rem, %, and other CSS length units."
      },
      {
        value: "initial",
        description: "Resets to default value (0%).",
        syntax_example: "div { background-position-y: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { background-position-y: inherit; }"
      }
    ],
    examples: [
      {
        label: "Position background image 50px from top",
        code: `div {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position-y: 50px;
}`
      }
    ],
    browser_support: {
      chrome: "1",
      edge: "12",
      firefox: "49",
      safari: "1",
      opera: "15"
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



        // border-image-outset
 {
    property: "border-image-outset",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-image-outset.php",
    definition: "Specifies how far the border image area extends beyond the border box.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except table rows, row groups when border-collapse is collapse"],
    syntax: "border-image-outset: length | number | initial | inherit;",
    values: [
      { value: "length", description: "A fixed outset amount.", syntax_example: "div { border-image-outset: 10px; }", units_note: "Accepts px, em, rem." },
      { value: "number", description: "A multiplier of the border-width value.", syntax_example: "div { border-image-outset: 1.5; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { border-image-outset: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-image-outset: inherit; }" }
    ],
    examples: [{ label: "Extend border image 10px outside border box", code: `div {\n  border-image-source: url('border.png');\n  border-image-outset: 10px;\n}` }],
    browser_support: { chrome: "15", edge: "12", firefox: "15", safari: "6", opera: "15" }
  },

        // border-image-repeat
  {
    property: "border-image-repeat",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-image-repeat.php",
    definition: "Specifies how the middle sections of a border image are scaled and tiled.",
    default_value: "stretch",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements except table rows, row groups when border-collapse is collapse"],
    syntax: "border-image-repeat: stretch | repeat | round | space | initial | inherit;",
    values: [
      { value: "stretch", description: "Default. The image is stretched to fill the border area.", syntax_example: "div { border-image-repeat: stretch; }" },
      { value: "repeat", description: "The image is tiled (repeated) to fill the border area.", syntax_example: "div { border-image-repeat: repeat; }" },
      { value: "round", description: "The image is tiled and scaled so it fits a whole number of times.", syntax_example: "div { border-image-repeat: round; }" },
      { value: "space", description: "The image is tiled and spaced evenly without scaling.", syntax_example: "div { border-image-repeat: space; }" },
      { value: "initial", description: "Resets to default (stretch).", syntax_example: "div { border-image-repeat: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-image-repeat: inherit; }" }
    ],
    examples: [{ label: "Round-tile border image", code: `div {\n  border-image-source: url('border.png');\n  border-image-slice: 30;\n  border-image-repeat: round;\n}` }],
    browser_support: { chrome: "15", edge: "12", firefox: "15", safari: "6", opera: "15" }
  },



        // border-image-slice
  {
    property: "border-image-slice",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-image-slice.php",
    definition: "Divides the border image into nine regions: four corners, four edges, and a middle. Specifies how far from each edge the slices are made.",
    default_value: "100%",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements except table rows, row groups when border-collapse is collapse"],
    note: "Add the fill keyword to include the middle region of the image as the element's background.",
    syntax: "border-image-slice: number | % | fill | initial | inherit;",
    values: [
      { value: "number", description: "Pixel distance from each edge (without units — unitless in border-image-slice).", syntax_example: "div { border-image-slice: 30; }" },
      { value: "%", description: "Percentage of the image dimensions.", syntax_example: "div { border-image-slice: 20%; }" },
      { value: "fill", description: "Includes the middle region of the image as the element's background.", syntax_example: "div { border-image-slice: 30 fill; }" },
      { value: "initial", description: "Resets to default (100%).", syntax_example: "div { border-image-slice: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-image-slice: inherit; }" }
    ],
    examples: [{ label: "Slice border image 30px from each edge", code: `div {\n  border-image-source: url('border.png');\n  border-image-slice: 30;\n  border-image-repeat: round;\n}` }],
    browser_support: { chrome: "15", edge: "12", firefox: "15", safari: "6", opera: "15" }
  },

        // border-image-source
  {
    property: "border-image-source",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-image-source.php",
    definition: "Specifies the image to use as the border. Can be a URL or a CSS gradient.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements except table rows, row groups when border-collapse is collapse"],
    syntax: "border-image-source: none | url(path) | gradient | initial | inherit;",
    values: [
      { value: "none", description: "Default. No border image. Falls back to border-style.", syntax_example: "div { border-image-source: none; }" },
      { value: "url(path)", description: "The path to the border image file.", syntax_example: "div { border-image-source: url('border.png'); }" },
      { value: "gradient", description: "A CSS gradient used as the border image.", syntax_example: "div { border-image-source: linear-gradient(red, blue); }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { border-image-source: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-image-source: inherit; }" }
    ],
    examples: [{ label: "Gradient as border image", code: `div {\n  border: 10px solid transparent;\n  border-image-source: linear-gradient(to right, #c8a96e, #1a1a2e);\n  border-image-slice: 1;\n}` }],
    browser_support: { chrome: "15", edge: "12", firefox: "15", safari: "6", opera: "15" }
  },

        // border-image-width
  {
    property: "border-image-width",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-image-width.php",
    definition: "Sets the width of the border image. This may differ from the border-width value.",
    default_value: "1",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except table rows, row groups when border-collapse is collapse"],
    syntax: "border-image-width: number | length | % | auto | initial | inherit;",
    values: [
      { value: "number", description: "Multiplier of the border-width value.", syntax_example: "div { border-image-width: 2; }" },
      { value: "length", description: "A fixed width.", syntax_example: "div { border-image-width: 20px; }", units_note: "Accepts px, em, rem." },
      { value: "%", description: "Percentage of the border image area.", syntax_example: "div { border-image-width: 10%; }" },
      { value: "auto", description: "Uses the intrinsic width of the image.", syntax_example: "div { border-image-width: auto; }" },
      { value: "initial", description: "Resets to default (1).", syntax_example: "div { border-image-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-image-width: inherit; }" }
    ],
    examples: [{ label: "Set border image width to 20px", code: `div {\n  border-image-source: url('border.png');\n  border-image-slice: 30;\n  border-image-width: 20px;\n}` }],
    browser_support: { chrome: "15", edge: "12", firefox: "13", safari: "6", opera: "15" }
  },


        // border-end-end-radius
          {
    property: "border-end-end-radius",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-end-end-radius.php",
    definition: "Sets the radius of the corner at the block-end and inline-end intersection. In a standard LTR horizontal layout this is the bottom-right corner.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "Part of CSS Logical Properties. The physical corner this maps to depends on writing-mode and direction.",
    syntax: "border-end-end-radius: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed radius.", syntax_example: "div { border-end-end-radius: 10px; }" },
      { value: "%", description: "Percentage radius.", syntax_example: "div { border-end-end-radius: 50%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-end-end-radius: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-end-end-radius: inherit; }" }
    ],
    examples: [{ label: "Round bottom-right corner logically", code: `div {\n  border: 2px solid #c8a96e;\n  border-end-end-radius: 20px;\n}` }],
    browser_support: { chrome: "89", edge: "89", firefox: "66", safari: "15", opera: "75" }
  },

        // border-end-start-radius
        
  {
    property: "border-end-start-radius",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-end-start-radius.php",
    definition: "Sets the radius of the corner at the block-end and inline-start intersection. In a standard LTR horizontal layout this is the bottom-left corner.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-end-start-radius: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed radius.", syntax_example: "div { border-end-start-radius: 10px; }" },
      { value: "%", description: "Percentage radius.", syntax_example: "div { border-end-start-radius: 50%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-end-start-radius: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-end-start-radius: inherit; }" }
    ],
    examples: [{ label: "Round bottom-left corner logically", code: `div {\n  border: 2px solid #c8a96e;\n  border-end-start-radius: 20px;\n}` }],
    browser_support: { chrome: "89", edge: "89", firefox: "66", safari: "15", opera: "75" }
  },

        // border-start-end-radius
  {
    property: "border-start-end-radius",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-start-end-radius.php",
    definition: "Sets the radius of the corner at the block-start and inline-end intersection. In a standard LTR horizontal layout this is the top-right corner.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-start-end-radius: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed radius.", syntax_example: "div { border-start-end-radius: 10px; }" },
      { value: "%", description: "Percentage radius.", syntax_example: "div { border-start-end-radius: 50%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-start-end-radius: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-start-end-radius: inherit; }" }
    ],
    examples: [{ label: "Round top-right corner logically", code: `div {\n  border: 2px solid #c8a96e;\n  border-start-end-radius: 20px;\n}` }],
    browser_support: { chrome: "89", edge: "89", firefox: "66", safari: "15", opera: "75" }
  },

        // border-start-start-radius
  {
    property: "border-start-start-radius",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-start-start-radius.php",
    definition: "Sets the radius of the corner at the block-start and inline-start intersection. In a standard LTR horizontal layout this is the top-left corner.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-start-start-radius: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed radius.", syntax_example: "div { border-start-start-radius: 10px; }" },
      { value: "%", description: "Percentage radius.", syntax_example: "div { border-start-start-radius: 50%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-start-start-radius: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-start-start-radius: inherit; }" }
    ],
    examples: [{ label: "Round top-left corner logically", code: `div {\n  border: 2px solid #c8a96e;\n  border-start-start-radius: 20px;\n}` }],
    browser_support: { chrome: "89", edge: "89", firefox: "66", safari: "15", opera: "75" }
  },

        // box-decoration-break
          {
    property: "box-decoration-break",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_box-decoration-break.php",
    definition: "Specifies how an element's box decorations (background, border, padding, margin, box-shadow) behave when the element is fragmented across multiple lines, columns, or pages.",
    default_value: "slice",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "Requires the -webkit- prefix in some browsers: -webkit-box-decoration-break.",
    syntax: "box-decoration-break: slice | clone | initial | inherit;",
    values: [
      { value: "slice", description: "Default. Box decorations are applied to the element as a whole, then sliced at fragment boundaries.", syntax_example: "span { box-decoration-break: slice; }" },
      { value: "clone", description: "Box decorations are applied independently to each fragment, giving each its own complete box.", syntax_example: "span { -webkit-box-decoration-break: clone; box-decoration-break: clone; }" },
      { value: "initial", description: "Resets to default (slice).", syntax_example: "span { box-decoration-break: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "span { box-decoration-break: inherit; }" }
    ],
    examples: [{ label: "Clone border radius on wrapped inline element", code: `span {\n  border-radius: 8px;\n  padding: 4px 8px;\n  background: #c8a96e;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}` }],
    browser_support: { chrome: "22 (-webkit-)", edge: "79", firefox: "32", safari: "7 (-webkit-)", opera: "15" }
  },

  // box-reflect  *** NON-STANDARD — WebKit only (Chrome, Edge, Safari) ***
  // *** Not supported in Firefox ***
  {
    property: "box-reflect",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_box-reflect.php",
    definition: "Creates a reflection of an element below, above, to the left, or to the right of it.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "box-reflect is not part of the official CSS specification. It is a WebKit extension supported in Chrome, Edge, and Safari but NOT in Firefox. Always use the -webkit- prefix.",
    syntax: "-webkit-box-reflect: below | above | left | right <offset> <mask-image>;",
    values: [
      { value: "below", description: "Reflection appears below the element.", syntax_example: "img { -webkit-box-reflect: below; }" },
      { value: "above", description: "Reflection appears above the element.", syntax_example: "img { -webkit-box-reflect: above; }" },
      { value: "left", description: "Reflection appears to the left of the element.", syntax_example: "img { -webkit-box-reflect: left; }" },
      { value: "right", description: "Reflection appears to the right of the element.", syntax_example: "img { -webkit-box-reflect: right; }" },
      { value: "<offset>", description: "A length or percentage defining the gap between the element and its reflection.", syntax_example: "img { -webkit-box-reflect: below 10px; }" },
      { value: "<mask-image>", description: "An optional gradient or image mask to fade the reflection.", syntax_example: "img { -webkit-box-reflect: below 0 linear-gradient(transparent, white); }" }
    ],
    examples: [
      { label: "Faded reflection below an image", code: "img {\n  -webkit-box-reflect: below 4px linear-gradient(transparent, rgba(0,0,0,0.4));\n}" }
    ]
  },


        // box-shadow
          {
    property: "box-shadow",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_box-shadow.php",
    definition: "Adds one or more shadow effects to an element's frame. Multiple shadows can be stacked by separating them with commas.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Add inset before the other values to create an inner shadow instead of an outer shadow.",
    note: `Shadow syntax order: h-offset v-offset blur spread color
Incorrect: box-shadow: 5 5 10 #000; (missing units on offsets)
Correct:   box-shadow: 5px 5px 10px #000;`,
    syntax: "box-shadow: none | h-offset v-offset blur spread color | inset | initial | inherit;",
    values: [
      { value: "none", description: "Default. No shadow.", syntax_example: "div { box-shadow: none; }" },
      { value: "h-offset", description: "Required. Horizontal offset. Positive = right, negative = left.", syntax_example: "div { box-shadow: 5px 5px #888; }", units_note: "Accepts px, em, rem." },
      { value: "v-offset", description: "Required. Vertical offset. Positive = down, negative = up.", syntax_example: "div { box-shadow: 5px 5px #888; }" },
      { value: "blur", description: "Optional. Blur radius. 0 = sharp edges. Higher = more blur.", syntax_example: "div { box-shadow: 5px 5px 10px #888; }" },
      { value: "spread", description: "Optional. Positive = expand shadow, negative = shrink shadow.", syntax_example: "div { box-shadow: 5px 5px 10px 2px #888; }" },
      { value: "color", description: "Optional. Color of the shadow. Defaults to text color.", syntax_example: "div { box-shadow: 5px 5px 10px rgba(0,0,0,0.5); }" },
      { value: "inset", description: "Optional. Changes shadow from outer to inner shadow.", syntax_example: "div { box-shadow: inset 5px 5px 10px #888; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { box-shadow: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { box-shadow: inherit; }" }
    ],
    examples: [
      { label: "Standard card shadow", code: `.card {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}` },
      { label: "Multiple shadows", code: `div {\n  box-shadow: 5px 5px 10px #888, -5px -5px 10px #ccc;\n}` },
      { label: "Inset shadow", code: `div {\n  box-shadow: inset 0 2px 6px rgba(0,0,0,0.4);\n}` }
    ],
    browser_support: { chrome: "10", edge: "12", firefox: "4", safari: "5.1", opera: "10.5" }
  },

			// boz-sizing
  {
    property: "box-sizing",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_box-sizing.php",
    definition: "Defines how the total width and height of an element is calculated — whether padding and border are included in the declared width/height or added on top of it.",
    default_value: "content-box",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Most developers set box-sizing: border-box on all elements using * { box-sizing: border-box; } to make layout math more predictable.",
    note: `content-box (default): width = content only. Padding and border are ADDED on top.
border-box:           width = content + padding + border. Nothing is added on top.

Example with a 200px wide element and 20px padding:
content-box: total rendered width = 200px + 40px padding = 240px
border-box:  total rendered width = 200px (padding is included)`,
    syntax: "box-sizing: content-box | border-box | initial | inherit;",
    values: [
      { value: "content-box", description: "Default. Width and height apply to content only. Padding and border are added on top.", syntax_example: "div { box-sizing: content-box; width: 200px; padding: 20px; } /* total width = 240px */" },
      { value: "border-box", description: "Width and height include content, padding, and border. Nothing is added on top.", syntax_example: "div { box-sizing: border-box; width: 200px; padding: 20px; } /* total width = 200px */" },
      { value: "initial", description: "Resets to default (content-box).", syntax_example: "div { box-sizing: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { box-sizing: inherit; }" }
    ],
    examples: [
      { label: "Apply border-box globally (recommended practice)", code: `*, *::before, *::after {\n  box-sizing: border-box;\n}` }
    ],
    browser_support: { chrome: "10", edge: "12", firefox: "29", safari: "5.1", opera: "9.5" }
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

        // aspect-ratio
          {
    property: "aspect-ratio",
    category: "CSS",
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_aspect-ratio.php",
    definition: "Sets a preferred aspect ratio for the element, which is used to calculate the missing dimension when only one of width or height is set.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except inline elements and table rows/row groups"],
    tip: "Commonly used for responsive images, video embeds, and UI components where you want a fixed width-to-height ratio without explicitly setting both dimensions.",
    note: "If both width and height are explicitly set, aspect-ratio is ignored.",
    syntax: "aspect-ratio: auto | <width> / <height> | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. No preferred aspect ratio; behaves normally.",
        syntax_example: "div { aspect-ratio: auto; }"
      },
      {
        value: "<width> / <height>",
        description: "A ratio expressed as two numbers separated by a slash. The element maintains this proportional relationship between width and height.",
        syntax_example: "div { aspect-ratio: 16 / 9; }",
        units_note: "Values are unitless numbers, not lengths. Example: 16/9, 4/3, 1/1 (square)."
      },
      {
        value: "initial",
        description: "Resets to default value (auto).",
        syntax_example: "div { aspect-ratio: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { aspect-ratio: inherit; }"
      }
    ],
    examples: [
      {
        label: "16:9 responsive video container",
        code: `.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}`
      },
      {
        label: "Square element",
        code: `.avatar {
  width: 100px;
  aspect-ratio: 1 / 1;
}`
      }
    ],
    browser_support: {
      chrome: "88",
      edge: "88",
      firefox: "89",
      safari: "15",
      opera: "74"
    }
  },


        // overflow-anchor
          {
    property: "overflow-anchor",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_overflow-anchor.php",
    definition: "Controls scroll anchoring behavior — whether the browser should automatically adjust the scroll position to prevent visible content jumps when content is inserted above the viewport.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "Scroll anchoring is a browser feature that prevents the page from jumping when content loads above the current scroll position. overflow-anchor: none disables this behavior for an element.",
    syntax: "overflow-anchor: auto | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default. The element may be selected as a scroll anchor.", syntax_example: "div { overflow-anchor: auto; }" },
      { value: "none", description: "The element is excluded from scroll anchor selection.", syntax_example: "div { overflow-anchor: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overflow-anchor: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overflow-anchor: inherit; }" }
    ],
    examples: [{ label: "Disable scroll anchoring on an element", code: `.dynamic-content {\n  overflow-anchor: none;\n}` }],
    browser_support: { chrome: "56", edge: "79", firefox: "66", safari: "Not supported", opera: "43" }
  },

        // overflow-wrap
    
  {
    property: "overflow-wrap",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_overflow-wrap.php",
    definition: "Specifies whether the browser should insert line breaks within words to prevent content from overflowing its container.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use overflow-wrap: break-word on containers with user-generated content or URLs to prevent long strings from breaking the layout.",
    note: "overflow-wrap was previously known as word-wrap. Both names are supported but overflow-wrap is the standard.",
    syntax: "overflow-wrap: normal | break-word | anywhere | initial | inherit;",
    values: [
      { value: "normal", description: "Default. Lines only break at normal word break opportunities.", syntax_example: "p { overflow-wrap: normal; }" },
      { value: "break-word", description: "Long words may be broken at arbitrary points to prevent overflow.", syntax_example: "p { overflow-wrap: break-word; }" },
      { value: "anywhere", description: "Like break-word but also affects min-content size calculations.", syntax_example: "p { overflow-wrap: anywhere; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "p { overflow-wrap: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { overflow-wrap: inherit; }" }
    ],
    examples: [{ label: "Prevent long URLs from overflowing", code: `.comment {\n  overflow-wrap: break-word;\n  word-break: break-word;\n}` }],
    browser_support: { chrome: "23", edge: "18", firefox: "49", safari: "6.1", opera: "12.1" }
  },

        // overflow-x
          {
    property: "overflow-x",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_overflow-x.php",
    definition: "Specifies what happens when content overflows the element's box horizontally.",
    default_value: "visible",
    inherited: "no",
    animatable: "no",
    applies_to: ["block containers, flex containers, grid containers"],
    syntax: "overflow-x: visible | hidden | scroll | auto | initial | inherit;",
    values: [
      { value: "visible", description: "Default. Content overflows and is visible.", syntax_example: "div { overflow-x: visible; }" },
      { value: "hidden", description: "Horizontal overflow is clipped.", syntax_example: "div { overflow-x: hidden; }" },
      { value: "scroll", description: "Horizontal scrollbar always shown.", syntax_example: "div { overflow-x: scroll; }" },
      { value: "auto", description: "Horizontal scrollbar shown only when needed.", syntax_example: "div { overflow-x: auto; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overflow-x: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overflow-x: inherit; }" }
    ],
    examples: [{ label: "Horizontal scroll for wide table", code: `.table-wrapper {\n  overflow-x: auto;\n  width: 100%;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "3.5", safari: "3", opera: "9.5" }
  },

// overflow-y
  {
    property: "overflow-y",
    category: "CSS2",
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_overflow-y.php",
    definition: "Specifies what happens when content overflows the element's box vertically.",
    default_value: "visible",
    inherited: "no",
    animatable: "no",
    applies_to: ["block containers, flex containers, grid containers"],
    syntax: "overflow-y: visible | hidden | scroll | auto | initial | inherit;",
    values: [
      { value: "visible", description: "Default. Content overflows and is visible.", syntax_example: "div { overflow-y: visible; }" },
      { value: "hidden", description: "Vertical overflow is clipped.", syntax_example: "div { overflow-y: hidden; }" },
      { value: "scroll", description: "Vertical scrollbar always shown.", syntax_example: "div { overflow-y: scroll; }" },
      { value: "auto", description: "Vertical scrollbar shown only when needed.", syntax_example: "div { overflow-y: auto; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overflow-y: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overflow-y: inherit; }" }
    ],
    examples: [{ label: "Scrollable sidebar", code: `.sidebar {\n  height: 100vh;\n  overflow-y: auto;\n  padding: 16px;\n}` }],
    browser_support: { chrome: "1", edge: "12", firefox: "3.5", safari: "3", opera: "9.5" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Clipping & Shape",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // clip-path
          {
    property: "clip-path",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_clip-path.php",
    definition: "Clips an element to a defined shape, hiding the parts outside the shape. Replaces the deprecated clip property with far more flexible options.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use clip-path with CSS transitions or animations to create shape-morph effects.",
    syntax: "clip-path: none | url(svg) | inset() | circle() | ellipse() | polygon() | path() | initial | inherit;",
    values: [
      { value: "none", description: "Default. No clipping applied.", syntax_example: "div { clip-path: none; }" },
      { value: "inset(top right bottom left)", description: "Clips to a rectangle inset from the element's edges.", syntax_example: "div { clip-path: inset(10px 20px 30px 20px); }" },
      { value: "circle(radius at x y)", description: "Clips to a circle shape.", syntax_example: "div { clip-path: circle(50% at 50% 50%); }" },
      { value: "ellipse(rx ry at x y)", description: "Clips to an ellipse shape.", syntax_example: "div { clip-path: ellipse(50% 30% at 50% 50%); }" },
      { value: "polygon(x1 y1, x2 y2, ...)", description: "Clips to a polygon defined by a list of x/y coordinate pairs.", syntax_example: "div { clip-path: polygon(50% 0%, 100% 100%, 0% 100%); }" },
      { value: "url(svg-clippath)", description: "References an SVG clipPath element.", syntax_example: "div { clip-path: url(#myClip); }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { clip-path: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { clip-path: inherit; }" }
    ],
    examples: [
      { label: "Triangle clip", code: `div {\n  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n}` },
      { label: "Circle clip on image", code: `img {\n  clip-path: circle(50%);\n}` }
    ],
    browser_support: { chrome: "55", edge: "79", firefox: "54", safari: "9.1", opera: "42" }
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


// color scheme
    {
    property: "color-scheme",
    category: "CSS3",
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_color-scheme.php",
    definition: "Indicates which color schemes the element can be rendered in, allowing the browser to use OS-level light or dark mode styling for form controls and scrollbars.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Set color-scheme: light dark on the root element to tell the browser your page supports both modes.",
    syntax: "color-scheme: normal | light | dark | light dark | only light | only dark | initial | inherit;",
    values: [
      { value: "normal", description: "Default. The element renders in the browser's default color scheme.", syntax_example: ":root { color-scheme: normal; }" },
      { value: "light", description: "The element supports only the light color scheme.", syntax_example: ":root { color-scheme: light; }" },
      { value: "dark", description: "The element supports only the dark color scheme.", syntax_example: ":root { color-scheme: dark; }" },
      { value: "light dark", description: "The element supports both light and dark. The browser picks based on user preference.", syntax_example: ":root { color-scheme: light dark; }" },
      { value: "only light", description: "Forces light scheme only, ignoring user's dark mode preference.", syntax_example: ":root { color-scheme: only light; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ":root { color-scheme: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { color-scheme: inherit; }" }
    ],
    examples: [{ label: "Support both light and dark mode", code: `:root {\n  color-scheme: light dark;\n}` }],
    browser_support: { chrome: "81", edge: "81", firefox: "96", safari: "13", opera: "68" }
  },

        

        // isolation
          {
    property: "isolation",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_isolation.php",
    definition: "Defines whether an element must create a new stacking context, which isolates it from mix-blend-mode effects applied to elements below it.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use isolation: isolate on a parent element to prevent its children's mix-blend-mode from blending with elements outside the parent.",
    note: "isolation: isolate creates a new stacking context just like opacity, transform, and filter do — but without any visible side effect. It purely controls blend mode containment.",
    syntax: "isolation: auto | isolate | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. A new stacking context is only created if required by one of the element's properties.",
        syntax_example: "div { isolation: auto; }"
      },
      {
        value: "isolate",
        description: "Forces a new stacking context, preventing mix-blend-mode from blending with content behind the element.",
        syntax_example: "div { isolation: isolate; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { isolation: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { isolation: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "mix-blend-mode",
        condition: "isolation: isolate is most useful when working with mix-blend-mode. It stops blend modes on child elements from affecting content outside the isolated container.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > mix-blend-mode",
        syntax_example: ".container { isolation: isolate; }\n.child { mix-blend-mode: multiply; }",
        section_id: "css3-visual-mix-blend-mode"
      }
    ],
    examples: [
      {
        label: "Isolate blend mode to container",
        code: `.container {\n  isolation: isolate;\n  background: #fff;\n}\n\n.container img {\n  mix-blend-mode: multiply;\n}`
      }
    ],
    browser_support: { chrome: "41", edge: "79", firefox: "36", safari: "8", opera: "30" }
  },


        // mix-blend-mode
          {
    property: "mix-blend-mode",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/pr_mix-blend-mode.php",
    definition: "Sets how an element's content should blend with the content of the element's parent and the elements behind it.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use mix-blend-mode: multiply on a dark overlay div to blend it with the image behind it without completely hiding the image.",
    note: "To prevent mix-blend-mode from affecting content outside a container, set isolation: isolate on the parent element.",
    syntax: "mix-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity | initial | inherit;",
    values: [
      { value: "normal", description: "Default. No blending — element displays on top of what's behind it.", syntax_example: "div { mix-blend-mode: normal; }" },
      { value: "multiply", description: "Multiplies colors — result is always darker.", syntax_example: "div { mix-blend-mode: multiply; }" },
      { value: "screen", description: "Inverts, multiplies, inverts again — result is always brighter.", syntax_example: "div { mix-blend-mode: screen; }" },
      { value: "overlay", description: "Combines multiply and screen — dark areas get darker, light areas get lighter.", syntax_example: "div { mix-blend-mode: overlay; }" },
      { value: "darken", description: "Keeps the darkest values from both layers.", syntax_example: "div { mix-blend-mode: darken; }" },
      { value: "lighten", description: "Keeps the lightest values from both layers.", syntax_example: "div { mix-blend-mode: lighten; }" },
      { value: "color-dodge", description: "Brightens the background to reflect the blend color.", syntax_example: "div { mix-blend-mode: color-dodge; }" },
      { value: "color-burn", description: "Darkens the background to reflect the blend color.", syntax_example: "div { mix-blend-mode: color-burn; }" },
      { value: "hard-light", description: "Multiply or screen depending on the blend color.", syntax_example: "div { mix-blend-mode: hard-light; }" },
      { value: "soft-light", description: "Softer version of hard-light.", syntax_example: "div { mix-blend-mode: soft-light; }" },
      { value: "difference", description: "Subtracts the darker from the lighter color.", syntax_example: "div { mix-blend-mode: difference; }" },
      { value: "exclusion", description: "Similar to difference but lower contrast.", syntax_example: "div { mix-blend-mode: exclusion; }" },
      { value: "hue", description: "Hue of blend color with saturation and luminosity of background.", syntax_example: "div { mix-blend-mode: hue; }" },
      { value: "saturation", description: "Saturation of blend color with hue and luminosity of background.", syntax_example: "div { mix-blend-mode: saturation; }" },
      { value: "color", description: "Hue and saturation of blend color with luminosity of background.", syntax_example: "div { mix-blend-mode: color; }" },
      { value: "luminosity", description: "Luminosity of blend color with hue and saturation of background.", syntax_example: "div { mix-blend-mode: luminosity; }" },
      { value: "initial", description: "Resets to default (normal).", syntax_example: "div { mix-blend-mode: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mix-blend-mode: inherit; }" }
    ],
    additional_properties: [
      {
        name: "isolation",
        condition: "Use isolation: isolate on a parent container to prevent mix-blend-mode on child elements from blending with content outside the container.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > isolation",
        syntax_example: ".container { isolation: isolate; }\n.overlay { mix-blend-mode: multiply; }",
        section_id: "css3-visual-isolation"
      },
      {
        name: "background-blend-mode",
        condition: "background-blend-mode blends an element's background layers with each other. mix-blend-mode blends the element with what is behind it in the stacking context.",
        css_version: "CSS3",
        path: "CSS3 > Backgrounds > background-blend-mode",
        syntax_example: "div { background-blend-mode: multiply; }",
        section_id: "css3-backgrounds-background-blend-mode"
      }
    ],
    examples: [
      {
        label: "Text blending over image",
        code: `.hero {\n  position: relative;\n}\n\n.hero-title {\n  mix-blend-mode: overlay;\n  color: white;\n  font-size: 4rem;\n}`
      },
      {
        label: "Color overlay on photo",
        code: `.overlay {\n  position: absolute;\n  inset: 0;\n  background: #c8a96e;\n  mix-blend-mode: multiply;\n  opacity: 0.7;\n}`
      }
    ],
    browser_support: { chrome: "41", edge: "79", firefox: "32", safari: "8", opera: "28" }
  },
  

        // opacity
          {
    property: "opacity",
    category: "CSS3",
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_opacity.php",
    definition: "Sets the transparency level of an element. A value of 1 is fully opaque; 0 is fully transparent. The element and all its children are affected.",
    default_value: "1",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "opacity affects the entire element including its children. To make only the background transparent, use rgba() or hsla() color values on background-color instead.",
    note: `opacity: 0 makes an element invisible but it still occupies space and receives pointer events.
To hide an element completely (no space, no events): use display: none.
To hide visually but keep space: use visibility: hidden.
To make transparent but keep interactive: use opacity: 0.`,
    syntax: "opacity: number | initial | inherit;",
    values: [
      {
        value: "1",
        description: "Default. Fully opaque — no transparency.",
        syntax_example: "div { opacity: 1; }"
      },
      {
        value: "0",
        description: "Fully transparent — the element is invisible but still in the layout.",
        syntax_example: "div { opacity: 0; }"
      },
      {
        value: "number (0 to 1)",
        description: "Any decimal between 0 and 1. 0.5 = 50% transparent.",
        syntax_example: "div { opacity: 0.5; }"
      },
      {
        value: "initial",
        description: "Resets to default (1).",
        syntax_example: "div { opacity: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { opacity: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "rgba() / hsla()",
        condition: "Use rgba() or hsla() color values to make only an element's background transparent without affecting the element's children or text.",
        css_version: "CSS3",
        path: "CSS3 > Functions > rgba()",
        syntax_example: "div { background-color: rgba(0, 0, 0, 0.5); } /* 50% transparent background only */",
        section_id: "css3-functions-rgba"
      },
      {
        name: "visibility",
        condition: "Use visibility: hidden to hide an element while keeping its space. Unlike opacity: 0, visibility: hidden also disables pointer events.",
        css_version: "CSS2",
        path: "CSS2 > Visual Formatting > visibility",
        syntax_example: "div { visibility: hidden; }",
        section_id: "css2-visual-visibility"
      }
    ],
    examples: [
      {
        label: "Fade in on hover",
        code: `.btn {\n  opacity: 0.7;\n  transition: opacity 0.3s ease;\n}\n\n.btn:hover {\n  opacity: 1;\n}`
      },
      {
        label: "Disabled state",
        code: `.btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "1", safari: "2", opera: "9" }
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

        // counter-set
          {
    property: "counter-set",
    category: "CSS3",
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/pr_gen_counter-set.php",
    definition: "Sets a CSS counter to a specific value. Unlike counter-reset, it sets (not resets) the counter — it won't create a new counter if one already exists.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "counter-set differs from counter-reset in that it sets an existing counter's value without creating a new scope. Use counter-reset to initialize, counter-set to update.",
    syntax: "counter-set: none | name <number> | initial | inherit;",
    values: [
      { value: "none", description: "Default. No counter is set.", syntax_example: "li { counter-set: none; }" },
      { value: "name", description: "Sets the named counter to 0.", syntax_example: "li { counter-set: section; }" },
      { value: "name number", description: "Sets the named counter to the specified value.", syntax_example: "li { counter-set: section 10; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "li { counter-set: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "li { counter-set: inherit; }" }
    ],
    examples: [{ label: "Set a counter to a specific value", code: `li.special {\n  counter-set: section 10;\n}` }],
    browser_support: { chrome: "85", edge: "85", firefox: "68", safari: "17.2", opera: "71" }
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

        // all
          {
    property: "all",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_all.php",
    definition: "Resets all CSS properties (except direction and unicode-bidi) to their initial, inherited, or unset state in one declaration.",
    default_value: "Not specified",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "The all property does not reset the direction or unicode-bidi properties. Use it to quickly wipe all styling from an element.",
    syntax: "all: initial | inherit | unset | revert;",
    values: [
      {
        value: "initial",
        description: "Resets all properties to their browser default (initial) values.",
        syntax_example: "div { all: initial; }"
      },
      {
        value: "inherit",
        description: "Sets all properties to inherit from the parent element.",
        syntax_example: "div { all: inherit; }"
      },
      {
        value: "unset",
        description: "Resets all properties: inherited properties act as 'inherit', non-inherited act as 'initial'.",
        syntax_example: "div { all: unset; }"
      },
      {
        value: "revert",
        description: "Rolls back all properties to the browser's default stylesheet values.",
        syntax_example: "div { all: revert; }"
      }
    ],
    examples: [
      {
        label: "Strip all styles from an element",
        code: `div {
  all: unset;
}`
      }
    ],
    browser_support: {
      chrome: "37",
      edge: "79",
      firefox: "27",
      safari: "9.1",
      opera: "24"
    }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Effects & Filters",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // backdrop-filter
          {
    property: "backdrop-filter",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_backdrop-filter.php",
    definition: "Applies one or more graphical filter effects to the area behind an element, visible through any transparency in the element or its background.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "To see the effect, the element or its background must be at least partially transparent.",
    note: "Safari requires the -webkit- prefix: -webkit-backdrop-filter. Always include both the prefixed and unprefixed declarations.",
    syntax: "backdrop-filter: none | <filter-function> | url(svg-filter) | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No filter is applied to the backdrop.",
        syntax_example: "div { backdrop-filter: none; }"
      },
      {
        value: "blur(px)",
        description: "Applies a Gaussian blur to the backdrop. Higher values = more blur.",
        syntax_example: "div { backdrop-filter: blur(5px); }"
      },
      {
        value: "brightness(%)",
        description: "Adjusts brightness of the backdrop. 0% = black, 100% = original, 200% = twice as bright.",
        syntax_example: "div { backdrop-filter: brightness(150%); }"
      },
      {
        value: "contrast(%)",
        description: "Adjusts contrast of the backdrop. 0% = gray, 100% = original.",
        syntax_example: "div { backdrop-filter: contrast(200%); }"
      },
      {
        value: "grayscale(%)",
        description: "Converts the backdrop to grayscale. 100% = fully gray.",
        syntax_example: "div { backdrop-filter: grayscale(100%); }"
      },
      {
        value: "hue-rotate(deg)",
        description: "Rotates the hue of the backdrop by a given angle.",
        syntax_example: "div { backdrop-filter: hue-rotate(90deg); }"
      },
      {
        value: "invert(%)",
        description: "Inverts the colors of the backdrop. 100% = fully inverted.",
        syntax_example: "div { backdrop-filter: invert(100%); }"
      },
      {
        value: "opacity(%)",
        description: "Applies transparency to the backdrop. 0% = fully transparent.",
        syntax_example: "div { backdrop-filter: opacity(50%); }"
      },
      {
        value: "saturate(%)",
        description: "Adjusts color saturation of the backdrop. 0% = unsaturated, 100% = original.",
        syntax_example: "div { backdrop-filter: saturate(200%); }"
      },
      {
        value: "sepia(%)",
        description: "Converts the backdrop to sepia tone. 100% = fully sepia.",
        syntax_example: "div { backdrop-filter: sepia(100%); }"
      },
      {
        value: "initial",
        description: "Resets to default value (none).",
        syntax_example: "div { backdrop-filter: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { backdrop-filter: inherit; }"
      }
    ],
    examples: [
      {
        label: "Frosted glass effect",
        code: `div.glass {
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}`
      }
    ],
    browser_support: {
      chrome: "76",
      edge: "79",
      firefox: "103",
      safari: "9 (-webkit-)",
      opera: "63"
    }
  },
  
        // filter
          {
    property: "filter",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_filter.php",
    definition: "Applies one or more visual effect functions to an element — most commonly images — such as blur, brightness, contrast, grayscale, and drop-shadow.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "To stack multiple filters, separate each function with a space. The order matters — filter: grayscale(100%) sepia(100%) produces a different result than the reverse.",
    note: "filter affects the entire element including its children. For background-only effects, use backdrop-filter instead. The drop-shadow() filter function follows the shape of the element's alpha channel, unlike box-shadow which always follows the rectangular box.",
    syntax: "filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url() | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No filter effects are applied.",
        syntax_example: "img { filter: none; }"
      },
      {
        value: "blur(px)",
        description: "Applies a Gaussian blur. Higher values produce more blur. 0 = no blur.",
        syntax_example: "img { filter: blur(5px); }",
        units_note: "Accepts px values only. Example: blur(4px). No percentage values."
      },
      {
        value: "brightness(%)",
        description: "Adjusts brightness. 0% = completely black. 100% = original. Values over 100% increase brightness.",
        syntax_example: "img { filter: brightness(150%); }"
      },
      {
        value: "contrast(%)",
        description: "Adjusts contrast. 0% = completely gray. 100% = original. Values over 100% increase contrast.",
        syntax_example: "img { filter: contrast(200%); }"
      },
      {
        value: "drop-shadow(h-offset v-offset blur color)",
        description: "Applies a shadow that follows the element's shape (not its bounding box). Similar to box-shadow but respects transparency.",
        syntax_example: "img { filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.5)); }",
        units_note: "h-offset and v-offset are required in px. blur is optional in px. spread is not supported in all browsers."
      },
      {
        value: "grayscale(%)",
        description: "Converts the element to grayscale. 0% = original. 100% = fully grayscale.",
        syntax_example: "img { filter: grayscale(100%); }"
      },
      {
        value: "hue-rotate(deg)",
        description: "Rotates the hue of all colors by the given angle. 0deg = original. Max useful range is 0–360deg.",
        syntax_example: "img { filter: hue-rotate(90deg); }",
        units_note: "Accepts deg values. Example: hue-rotate(180deg)."
      },
      {
        value: "invert(%)",
        description: "Inverts the colors. 0% = original. 100% = fully inverted (negative).",
        syntax_example: "img { filter: invert(100%); }"
      },
      {
        value: "opacity(%)",
        description: "Sets transparency. 0% = fully transparent. 100% = fully opaque. Similar to the opacity property but composited differently.",
        syntax_example: "img { filter: opacity(50%); }"
      },
      {
        value: "saturate(%)",
        description: "Adjusts color saturation. 0% = no color (grayscale). 100% = original. Values over 100% super-saturate.",
        syntax_example: "img { filter: saturate(200%); }"
      },
      {
        value: "sepia(%)",
        description: "Converts the element to a warm sepia tone. 0% = original. 100% = fully sepia.",
        syntax_example: "img { filter: sepia(100%); }"
      },
      {
        value: "url(svg-filter)",
        description: "References an SVG filter element by URL or anchor ID.",
        syntax_example: "img { filter: url('#myFilter'); }"
      },
      {
        value: "initial",
        description: "Resets to default value (none).",
        syntax_example: "img { filter: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "img { filter: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "backdrop-filter",
        condition: "Use backdrop-filter instead of filter when you want to apply visual effects only to what is behind an element, not to the element itself. Requires partial transparency on the element.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > backdrop-filter",
        syntax_example: ".glass { backdrop-filter: blur(8px); background: rgba(255,255,255,0.2); }",
        section_id: "css3-visual-backdrop-filter"
      }
    ],
    examples: [
      {
        label: "Grayscale image on hover",
        code: `img {\n  filter: grayscale(100%);\n  transition: filter 0.3s ease;\n}\n\nimg:hover {\n  filter: grayscale(0%);\n}`
      },
      {
        label: "Stack multiple filters",
        code: `img {\n  filter: contrast(150%) brightness(110%) saturate(120%);\n}`
      },
      {
        label: "Drop shadow following shape",
        code: `.logo {\n  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.4));\n}`
      }
    ],
    browser_support: { chrome: "53", edge: "13", firefox: "35", safari: "9.1", opera: "40" }
  },


        // image-rendering
        {
            property: "image-rendering",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_image-rendering.php",
    definition: "Specifies the algorithm the browser should use when scaling images up or down. Useful for pixel art or high-quality photo scaling.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use image-rendering: pixelated for pixel art games or retro-style graphics to preserve the crisp, blocky appearance when scaled up.",
    syntax: "image-rendering: auto | smooth | high-quality | crisp-edges | pixelated | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser chooses the scaling algorithm — typically bilinear interpolation for smooth results.",
        syntax_example: "img { image-rendering: auto; }"
      },
      {
        value: "smooth",
        description: "The image is scaled with an algorithm that maximizes appearance smoothness.",
        syntax_example: "img { image-rendering: smooth; }"
      },
      {
        value: "high-quality",
        description: "Like smooth, but signals that higher quality is preferred even if it takes more processing.",
        syntax_example: "img { image-rendering: high-quality; }"
      },
      {
        value: "crisp-edges",
        description: "Preserves contrast and edges without smoothing. Useful for pixel art and diagrams with sharp lines.",
        syntax_example: "img { image-rendering: crisp-edges; }"
      },
      {
        value: "pixelated",
        description: "Uses nearest-neighbor scaling — each pixel is scaled to a block of pixels, preserving the pixelated look.",
        syntax_example: "canvas { image-rendering: pixelated; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "img { image-rendering: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "img { image-rendering: inherit; }"
      }
    ],
    examples: [
      {
        label: "Pixel art scaled up without blurring",
        code: `.pixel-art {\n  image-rendering: pixelated;\n  width: 256px;\n  height: 256px;\n}`
      }
    ],
    browser_support: { chrome: "13", edge: "79", firefox: "93", safari: "6", opera: "15" }
  },

        // paint-order
          {
    property: "paint-order",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_paint-order.php",
    definition: "Controls the order in which fill and stroke are painted on SVG shapes and text. By default fill is painted first, then stroke on top.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["SVG shapes and text elements"],
    tip: "Use paint-order: stroke fill to paint the stroke beneath the fill — useful for text with outlines where you want the stroke to expand outward without overlapping the fill.",
    syntax: "paint-order: normal | fill stroke markers | stroke fill markers | initial | inherit;",
    values: [
      { value: "normal", description: "Default. Fill, then stroke, then markers.", syntax_example: "text { paint-order: normal; }" },
      { value: "stroke fill", description: "Stroke is painted first, then fill on top. Stroke expands outward.", syntax_example: "text { paint-order: stroke fill; }" },
      { value: "fill stroke", description: "Fill is painted first, then stroke on top (default behavior).", syntax_example: "text { paint-order: fill stroke; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "text { paint-order: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "text { paint-order: inherit; }" }
    ],
    examples: [{ label: "SVG text with outward stroke", code: `text {\n  fill: #1a1a2e;\n  stroke: #c8a96e;\n  stroke-width: 4px;\n  paint-order: stroke fill;\n}` }],
    browser_support: { chrome: "35", edge: "17", firefox: "60", safari: "8", opera: "22" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Flexbox",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // align-content

          {
    property: "align-content",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_align-content.php",
    definition: "Specifies how flex lines are distributed along the cross axis in a flexbox container, or how grid rows are distributed in the block direction in a grid container.",
    default_value: "stretch",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers", "grid containers"],
    tip: "Use the justify-content property to align items on the main axis (horizontally in a default row flex container).",
    note: "In a flexbox, the main axis follows flex-direction (default: row/horizontal) and the cross axis is perpendicular (default: column/vertical). This property controls the cross axis when there are multiple lines.",
    syntax: "align-content: stretch | center | flex-start | flex-end | space-between | space-around | space-evenly | initial | inherit;",
    values: [
      {
        value: "stretch",
        description: "Default. Lines stretch to fill the remaining space in the container.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: stretch; }"
      },
      {
        value: "center",
        description: "Lines are packed toward the center of the container.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: center; }"
      },
      {
        value: "flex-start",
        description: "Lines are packed toward the start of the container.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: flex-start; }"
      },
      {
        value: "flex-end",
        description: "Lines are packed toward the end of the container.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: flex-end; }"
      },
      {
        value: "space-between",
        description: "Lines are evenly distributed; first line at start, last line at end.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: space-between; }"
      },
      {
        value: "space-around",
        description: "Lines are evenly distributed with half-size spaces on either end.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: space-around; }"
      },
      {
        value: "space-evenly",
        description: "Lines are evenly distributed with equal space around each line.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; align-content: space-evenly; }"
      },
      {
        value: "initial",
        description: "Resets the property to its default value (stretch).",
        syntax_example: ".container { align-content: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: ".container { align-content: inherit; }"
      }
    ],
    examples: [
      {
        label: "Pack flex lines toward center",
        code: `div {
  width: 70px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}`
      },
      {
        label: "Align grid items to end (block direction)",
        code: `#container {
  display: grid;
  align-content: end;
}`
      }
    ],
    browser_support: {
      chrome: "57",
      edge: "16",
      firefox: "52",
      safari: "10.1",
      opera: "44"
    }
  },

// align-items
  {
    property: "align-items",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_align-items.php",
    definition: "Sets the default alignment for all items inside a flexbox or grid container along the cross axis (flex) or block direction (grid).",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers", "grid containers"],
    tip: "Use the align-self property on individual items to override the align-items setting for that specific item.",
    note: "For this property to have effect, items need available space in the alignment direction. In a flexbox the cross axis is perpendicular to flex-direction (vertical by default).",
    syntax: "align-items: normal | stretch | center | flex-start | flex-end | start | end | baseline | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Behaves like 'stretch' for flex and grid items, or 'start' for grid items that have a defined block size.",
        syntax_example: ".container { display: flex; align-items: normal; }"
      },
      {
        value: "stretch",
        description: "Items are stretched to fill the container along the cross axis.",
        syntax_example: ".container { display: flex; align-items: stretch; }"
      },
      {
        value: "center",
        description: "Items are centered in the container along the cross axis.",
        syntax_example: ".container { display: flex; align-items: center; }"
      },
      {
        value: "flex-start",
        description: "Items are aligned at the start of the container's cross axis.",
        syntax_example: ".container { display: flex; align-items: flex-start; }"
      },
      {
        value: "flex-end",
        description: "Items are aligned at the end of the container's cross axis.",
        syntax_example: ".container { display: flex; align-items: flex-end; }"
      },
      {
        value: "start",
        description: "Grid items are positioned at the beginning of their individual grid cells in the block direction.",
        syntax_example: "#grid { display: grid; align-items: start; }"
      },
      {
        value: "end",
        description: "Grid items are positioned at the end of their individual grid cells in the block direction.",
        syntax_example: "#grid { display: grid; align-items: end; }"
      },
      {
        value: "baseline",
        description: "Items are aligned along their text baseline.",
        syntax_example: ".container { display: flex; align-items: baseline; }"
      },
      {
        value: "initial",
        description: "Resets the property to its default value (normal).",
        syntax_example: ".container { align-items: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: ".container { align-items: inherit; }"
      }
    ],
    examples: [
      {
        label: "Center all items vertically in a flex container",
        code: `div {
  display: flex;
  align-items: center;
}`
      },
      {
        label: "Align grid items to start of each cell",
        code: `#container {
  display: grid;
  align-items: start;
}`
      }
    ],
    browser_support: {
      chrome: "57",
      edge: "16",
      firefox: "52",
      safari: "10.1",
      opera: "44"
    }
  },

// align-self
  {
    property: "align-self",
    
    group: "A",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_align-self.php",
    definition: "Overrides the align-items value for a specific flex or grid item, controlling its alignment along the cross axis (flex) or block direction (grid).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex items", "grid items"],
    note: "Setting align-self: auto on a flex item causes it to inherit the container's align-items value. This property has no effect on block-level boxes or table cells.",
    syntax: "align-self: auto | normal | stretch | center | flex-start | flex-end | baseline | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Inherits the align-items value from the parent container.",
        syntax_example: ".item { align-self: auto; }"
      },
      {
        value: "normal",
        description: "Behaves like stretch in most contexts.",
        syntax_example: ".item { align-self: normal; }"
      },
      {
        value: "stretch",
        description: "The item is stretched to fill the container along the cross axis.",
        syntax_example: ".item { align-self: stretch; }"
      },
      {
        value: "center",
        description: "The item is centered along the cross axis.",
        syntax_example: ".item { align-self: center; }"
      },
      {
        value: "flex-start",
        description: "The item is aligned at the start of the cross axis.",
        syntax_example: ".item { align-self: flex-start; }"
      },
      {
        value: "flex-end",
        description: "The item is aligned at the end of the cross axis.",
        syntax_example: ".item { align-self: flex-end; }"
      },
      {
        value: "baseline",
        description: "The item is aligned along its text baseline.",
        syntax_example: ".item { align-self: baseline; }"
      },
      {
        value: "initial",
        description: "Resets the property to its default value (auto).",
        syntax_example: ".item { align-self: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: ".item { align-self: inherit; }"
      }
    ],
    examples: [
      {
        label: "Override container alignment for one item",
        code: `#myContainer {
  display: flex;
  align-items: flex-start;
}

#myContainer div:nth-child(2) {
  align-self: center;
}`
      }
    ],
    browser_support: {
      chrome: "57",
      edge: "16",
      firefox: "52",
      safari: "10.1",
      opera: "44"
    }
  },

        // flex
          {
    property: "flex",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex.php",
    definition: "Shorthand property for setting flex-grow, flex-shrink, and flex-basis on a flex item in one declaration.",
    default_value: "0 1 auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["flex items (direct children of a flex container)"],
    tip: "Use flex: 1 as a shorthand for flex: 1 1 0% — it makes all flex items grow equally to fill available space.",
    note: `The three values in order are: flex-grow flex-shrink flex-basis.
flex: 1       = flex: 1 1 0%     (grow, shrink, start from 0)
flex: auto    = flex: 1 1 auto   (grow, shrink, use natural size)
flex: none    = flex: 0 0 auto   (no grow, no shrink, use natural size)
flex: initial = flex: 0 1 auto   (default — no grow, can shrink)`,
    syntax: "flex: flex-grow flex-shrink flex-basis | auto | none | initial | inherit;",
    values: [
      {
        value: "flex-grow",
        description: "A number defining how much the item grows relative to other items. 0 = no growth. 1 = grow proportionally.",
        syntax_example: ".item { flex: 1 1 auto; }"
      },
      {
        value: "flex-shrink",
        description: "A number defining how much the item shrinks relative to others. 0 = no shrink. 1 = shrink proportionally.",
        syntax_example: ".item { flex: 1 0 auto; } /* will not shrink */"
      },
      {
        value: "flex-basis",
        description: "The initial main size of the item before space is distributed. Can be a length, percentage, or auto.",
        syntax_example: ".item { flex: 0 0 200px; } /* fixed 200px, no grow or shrink */",
        units_note: "Accepts px, em, rem, %, or auto."
      },
      {
        value: "auto",
        description: "Equivalent to flex: 1 1 auto. The item can grow and shrink, starting from its natural size.",
        syntax_example: ".item { flex: auto; }"
      },
      {
        value: "none",
        description: "Equivalent to flex: 0 0 auto. The item cannot grow or shrink.",
        syntax_example: ".item { flex: none; }"
      },
      {
        value: "initial",
        description: "Resets to default (0 1 auto).",
        syntax_example: ".item { flex: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { flex: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "display: flex",
        condition: "The flex property only works on flex items — direct children of an element with display: flex or display: inline-flex. Without a flex container parent, this property has no effect.",
        css_version: "CSS3",
        path: "CSS3 > Display > display: flex",
        syntax_example: ".container { display: flex; }\n.item { flex: 1; }",
        section_id: "css3-display-flex"
      }
    ],
    examples: [
      {
        label: "Equal-width flex items",
        code: `.container {\n  display: flex;\n}\n\n.item {\n  flex: 1;\n}`
      },
      {
        label: "Fixed sidebar, flexible main content",
        code: `.sidebar { flex: 0 0 250px; }\n.main    { flex: 1; }`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // flex-basis
  {
    property: "flex-basis",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex-basis.php",
    definition: "Sets the initial main size of a flex item before free space is distributed among flex items by flex-grow and flex-shrink.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["flex items"],
    note: "When flex-basis is set to 0, the item's size is determined entirely by flex-grow. When set to auto, the item uses its content size as the starting point.",
    syntax: "flex-basis: auto | length | % | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The item's size is based on its content or its width/height property.",
        syntax_example: ".item { flex-basis: auto; }"
      },
      {
        value: "length",
        description: "A specific size before flexing.",
        syntax_example: ".item { flex-basis: 200px; }",
        units_note: "Accepts px, em, rem, %, etc."
      },
      {
        value: "0",
        description: "The item has no initial size — all space is distributed by flex-grow.",
        syntax_example: ".item { flex-basis: 0; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { flex-basis: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { flex-basis: inherit; }"
      }
    ],
    examples: [
      {
        label: "Fixed starting size of 200px",
        code: `.item {\n  flex-grow: 1;\n  flex-basis: 200px;\n}`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // flex-direction
  {
    property: "flex-direction",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex-direction.php",
    definition: "Sets the direction of the main axis along which flex items are placed inside a flex container.",
    default_value: "row",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers"],
    tip: "Changing flex-direction also changes what justify-content and align-items control — they always follow the main axis and cross axis respectively.",
    note: "row = horizontal left-to-right. column = vertical top-to-bottom. The -reverse variants flip the order of items and the start/end directions.",
    syntax: "flex-direction: row | row-reverse | column | column-reverse | initial | inherit;",
    values: [
      {
        value: "row",
        description: "Default. Items are placed left to right (in LTR layouts) along the horizontal axis.",
        syntax_example: ".container { display: flex; flex-direction: row; }"
      },
      {
        value: "row-reverse",
        description: "Items are placed right to left — the order is reversed.",
        syntax_example: ".container { display: flex; flex-direction: row-reverse; }"
      },
      {
        value: "column",
        description: "Items are stacked top to bottom along the vertical axis.",
        syntax_example: ".container { display: flex; flex-direction: column; }"
      },
      {
        value: "column-reverse",
        description: "Items are stacked bottom to top — the order is reversed.",
        syntax_example: ".container { display: flex; flex-direction: column-reverse; }"
      },
      {
        value: "initial",
        description: "Resets to default (row).",
        syntax_example: ".container { flex-direction: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { flex-direction: inherit; }"
      }
    ],
    examples: [
      {
        label: "Vertical card stack",
        code: `.container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // flex-flow
  {
    property: "flex-flow",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex-flow.php",
    definition: "Shorthand for setting flex-direction and flex-wrap in one declaration.",
    default_value: "row nowrap",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers"],
    syntax: "flex-flow: flex-direction flex-wrap | initial | inherit;",
    values: [
      {
        value: "flex-direction",
        description: "Sets the main axis direction. Values: row, row-reverse, column, column-reverse.",
        syntax_example: ".container { flex-flow: row wrap; }"
      },
      {
        value: "flex-wrap",
        description: "Sets whether items wrap to a new line. Values: nowrap, wrap, wrap-reverse.",
        syntax_example: ".container { flex-flow: column nowrap; }"
      },
      {
        value: "initial",
        description: "Resets to defaults (row nowrap).",
        syntax_example: ".container { flex-flow: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { flex-flow: inherit; }"
      }
    ],
    examples: [
      {
        label: "Row that wraps onto multiple lines",
        code: `.container {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 12px;\n}`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // flex-grow
  {
    property: "flex-grow",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex-grow.php",
    definition: "Sets how much a flex item will grow relative to the other flex items in the container when there is extra space available.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["flex items"],
    tip: "If all items have flex-grow: 1, they share space equally. If one item has flex-grow: 2, it takes twice the available space compared to items with flex-grow: 1.",
    note: "flex-grow: 0 (default) means the item will not grow beyond its natural size. Negative values are not valid.",
    syntax: "flex-grow: number | initial | inherit;",
    values: [
      {
        value: "number",
        description: "A positive unitless number. 0 = no growth. The higher the number relative to siblings, the more space the item takes.",
        syntax_example: ".item { flex-grow: 1; }"
      },
      {
        value: "initial",
        description: "Resets to default (0).",
        syntax_example: ".item { flex-grow: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { flex-grow: inherit; }"
      }
    ],
    examples: [
      {
        label: "Main content grows, sidebar stays fixed",
        code: `.sidebar { flex-grow: 0; width: 250px; }\n.main    { flex-grow: 1; }`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // flex-shrink
  {
    property: "flex-shrink",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex-shrink.php",
    definition: "Sets how much a flex item will shrink relative to other flex items when there is not enough space in the container.",
    default_value: "1",
    inherited: "no",
    animatable: "yes",
    applies_to: ["flex items"],
    tip: "Set flex-shrink: 0 on an item to prevent it from shrinking below its natural or set size — useful for logos, icons, or fixed-width sidebars.",
    note: "flex-shrink: 1 (default) means the item will shrink proportionally if needed. flex-shrink: 0 means it will never shrink. Negative values are not valid.",
    syntax: "flex-shrink: number | initial | inherit;",
    values: [
      {
        value: "number",
        description: "A positive unitless number. 1 = shrink proportionally. 0 = do not shrink.",
        syntax_example: ".item { flex-shrink: 0; } /* item will never shrink */"
      },
      {
        value: "initial",
        description: "Resets to default (1).",
        syntax_example: ".item { flex-shrink: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { flex-shrink: inherit; }"
      }
    ],
    examples: [
      {
        label: "Prevent logo from shrinking",
        code: `.logo {\n  flex-shrink: 0;\n  width: 120px;\n}`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // flex-wrap
  {
    property: "flex-wrap",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_flex-wrap.php",
    definition: "Controls whether flex items are forced onto one line or can wrap onto multiple lines.",
    default_value: "nowrap",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers"],
    tip: "Use flex-wrap: wrap for responsive card grids — items naturally flow to the next line when they run out of space.",
    syntax: "flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit;",
    values: [
      {
        value: "nowrap",
        description: "Default. All flex items are on one line. They may overflow the container if there isn't enough space.",
        syntax_example: ".container { display: flex; flex-wrap: nowrap; }"
      },
      {
        value: "wrap",
        description: "Flex items wrap onto multiple lines from top to bottom.",
        syntax_example: ".container { display: flex; flex-wrap: wrap; }"
      },
      {
        value: "wrap-reverse",
        description: "Flex items wrap onto multiple lines from bottom to top.",
        syntax_example: ".container { display: flex; flex-wrap: wrap-reverse; }"
      },
      {
        value: "initial",
        description: "Resets to default (nowrap).",
        syntax_example: ".container { flex-wrap: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { flex-wrap: inherit; }"
      }
    ],
    examples: [
      {
        label: "Responsive wrapping card grid",
        code: `.container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.card {\n  flex: 0 0 calc(33% - 16px);\n}`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // gap
          {
    property: "gap",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_gap.php",
    definition: "Shorthand for setting row-gap and column-gap in one declaration. Sets the spacing between rows and columns in grid, flex, and multi-column layouts.",
    default_value: "normal",
    inherited: "no",
    animatable: "yes",
    applies_to: ["grid containers", "flex containers", "multi-column containers"],
    tip: "One value sets both row and column gap equally. Two values set row gap first, then column gap.",
    note: `gap: 20px        = row-gap: 20px AND column-gap: 20px
gap: 20px 10px   = row-gap: 20px AND column-gap: 10px

Previously named grid-gap — gap is the modern standard that works in flex, grid, and multi-column.`,
    syntax: "gap: row-gap column-gap | initial | inherit;",
    values: [
      {
        value: "length",
        description: "One value sets both row and column gaps equally.",
        syntax_example: ".container { display: grid; gap: 20px; }",
        units_note: "Accepts px, em, rem, %, etc."
      },
      {
        value: "row-gap column-gap",
        description: "Two values set row gap and column gap independently.",
        syntax_example: ".container { display: grid; gap: 20px 10px; }"
      },
      {
        value: "normal",
        description: "Default. Behaves like 0 in flex/grid. In multi-column, it is 1em.",
        syntax_example: ".container { gap: normal; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: ".container { gap: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { gap: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "row-gap",
        condition: "Use row-gap to set only the vertical spacing between rows without affecting column spacing.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > row-gap",
        syntax_example: ".container { display: grid; row-gap: 20px; }",
        section_id: "css3-grid-row-gap"
      },
      {
        name: "column-gap",
        condition: "Use column-gap to set only the horizontal spacing between columns without affecting row spacing.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > column-gap",
        syntax_example: ".container { display: grid; column-gap: 10px; }",
        section_id: "css3-grid-column-gap"
      }
    ],
    examples: [
      {
        label: "Grid with equal gap",
        code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`
      },
      {
        label: "Flex container with gap",
        code: `.flex {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px 8px;\n}`
      }
    ],
    browser_support: { chrome: "66", edge: "16", firefox: "61", safari: "12", opera: "53" }
  },


        // justify-content
          {
    property: "justify-content",
    
    group: "J",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_justify-content.php",
    definition: "Aligns flex or grid items along the main axis (horizontal by default in flexbox) when there is extra space in the container.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers", "grid containers"],
    tip: "In a flex row (default), justify-content controls horizontal alignment. In a flex column, it controls vertical alignment. It always follows the main axis.",
    note: "justify-content only has an effect when there is extra space in the container along the main axis. If items fill the container completely, justify-content has no visible effect.",
    syntax: "justify-content: normal | flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Items are packed in their default position as if no justify-content was set.",
        syntax_example: ".container { display: flex; justify-content: normal; }"
      },
      {
        value: "flex-start",
        description: "Items are packed toward the start of the main axis.",
        syntax_example: ".container { display: flex; justify-content: flex-start; }"
      },
      {
        value: "flex-end",
        description: "Items are packed toward the end of the main axis.",
        syntax_example: ".container { display: flex; justify-content: flex-end; }"
      },
      {
        value: "center",
        description: "Items are centered along the main axis.",
        syntax_example: ".container { display: flex; justify-content: center; }"
      },
      {
        value: "space-between",
        description: "Items are evenly distributed. First item at start, last item at end, equal space between.",
        syntax_example: ".container { display: flex; justify-content: space-between; }"
      },
      {
        value: "space-around",
        description: "Items are evenly distributed with equal space around each item. End spaces are half the size of middle spaces.",
        syntax_example: ".container { display: flex; justify-content: space-around; }"
      },
      {
        value: "space-evenly",
        description: "Items are distributed so the space between any two items (and the edges) is equal.",
        syntax_example: ".container { display: flex; justify-content: space-evenly; }"
      },
      {
        value: "start",
        description: "Items are packed toward the start of the writing direction.",
        syntax_example: ".container { display: grid; justify-content: start; }"
      },
      {
        value: "end",
        description: "Items are packed toward the end of the writing direction.",
        syntax_example: ".container { display: grid; justify-content: end; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: ".container { justify-content: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { justify-content: inherit; }"
      }
    ],
    examples: [
      {
        label: "Center items horizontally",
        code: `.container {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}`
      },
      {
        label: "Spread nav items",
        code: `nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },

        // justify-items
  {
    property: "justify-items",
    
    group: "J",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_justify-items.php",
    definition: "Sets the default justify-self alignment for all items in a grid container along the inline (horizontal) axis.",
    default_value: "legacy",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid containers"],
    note: "justify-items has no effect on flex containers. For flex, use justify-content to align items on the main axis.",
    syntax: "justify-items: auto | normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | left | right | baseline | initial | inherit;",
    values: [
      {
        value: "stretch",
        description: "Default for grid. Items stretch to fill their grid cell along the inline axis.",
        syntax_example: ".container { display: grid; justify-items: stretch; }"
      },
      {
        value: "center",
        description: "Items are centered in their grid cell along the inline axis.",
        syntax_example: ".container { display: grid; justify-items: center; }"
      },
      {
        value: "start",
        description: "Items are aligned to the start of their grid cell.",
        syntax_example: ".container { display: grid; justify-items: start; }"
      },
      {
        value: "end",
        description: "Items are aligned to the end of their grid cell.",
        syntax_example: ".container { display: grid; justify-items: end; }"
      },
      {
        value: "initial",
        description: "Resets to default.",
        syntax_example: ".container { justify-items: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { justify-items: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "justify-self",
        condition: "Use justify-self on an individual grid item to override the justify-items setting for that specific item.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > justify-self",
        syntax_example: ".item { justify-self: center; }",
        section_id: "css3-grid-justify-self"
      }
    ],
    examples: [
      {
        label: "Center all grid items horizontally in their cells",
        code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },

        // justify-self
  {
    property: "justify-self",
    
    group: "J",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_justify-self.php",
    definition: "Overrides the justify-items value for a specific grid item, aligning it individually along the inline (horizontal) axis within its grid cell.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    note: "justify-self has no effect on flex items. For flex, use the align-self property instead (which controls the cross axis).",
    syntax: "justify-self: auto | normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | left | right | baseline | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Inherits the justify-items value from the parent grid container.",
        syntax_example: ".item { justify-self: auto; }"
      },
      {
        value: "stretch",
        description: "The item stretches to fill its grid cell along the inline axis.",
        syntax_example: ".item { justify-self: stretch; }"
      },
      {
        value: "center",
        description: "The item is centered in its grid cell.",
        syntax_example: ".item { justify-self: center; }"
      },
      {
        value: "start",
        description: "The item is aligned to the start of its grid cell.",
        syntax_example: ".item { justify-self: start; }"
      },
      {
        value: "end",
        description: "The item is aligned to the end of its grid cell.",
        syntax_example: ".item { justify-self: end; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { justify-self: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { justify-self: inherit; }"
      }
    ],
    examples: [
      {
        label: "Override alignment for one grid item",
        code: `.container {\n  display: grid;\n  justify-items: stretch;\n}\n\n.special-item {\n  justify-self: center;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },




        // order
          {
    property: "order",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_order.php",
    definition: "Sets the order of a flex or grid item relative to its siblings. Items with lower order values appear first regardless of their position in the HTML.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["flex items", "grid items"],
    tip: "Use order to visually rearrange items without changing the HTML structure — useful for responsive layouts where item order changes on mobile.",
    note: "order only affects visual rendering, not DOM order. Screen readers and keyboard navigation still follow the HTML source order. Do not use order for meaningful content reordering.",
    syntax: "order: number | initial | inherit;",
    values: [
      {
        value: "0",
        description: "Default. Items appear in their source order.",
        syntax_example: ".item { order: 0; }"
      },
      {
        value: "number",
        description: "A positive or negative integer. Lower numbers appear first. Items with the same order value follow source order.",
        syntax_example: ".item-first { order: -1; }\n.item-last  { order: 1; }"
      },
      {
        value: "initial",
        description: "Resets to default (0).",
        syntax_example: ".item { order: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { order: inherit; }"
      }
    ],
    examples: [
      {
        label: "Move sidebar before main on mobile",
        code: `@media (max-width: 768px) {\n  .sidebar { order: -1; }\n  .main    { order: 0; }\n}`
      }
    ],
    browser_support: { chrome: "29", edge: "12", firefox: "28", safari: "9", opera: "17" }
  },

        // place-content
          {
    property: "place-content",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_place-content.php",
    definition: "Shorthand for align-content and justify-content in one declaration.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers", "grid containers"],
    tip: "Use place-content: center to center all content both horizontally and vertically in a flex or grid container.",
    syntax: "place-content: align-content justify-content | initial | inherit;",
    values: [
      { value: "center", description: "Centers content on both axes.", syntax_example: ".container { display: grid; place-content: center; }" },
      { value: "start", description: "Aligns to start on both axes.", syntax_example: ".container { place-content: start; }" },
      { value: "end", description: "Aligns to end on both axes.", syntax_example: ".container { place-content: end; }" },
      { value: "space-between", description: "Space between on both axes.", syntax_example: ".container { place-content: space-between; }" },
      { value: "align-content justify-content", description: "Two values: first is align-content (block axis), second is justify-content (inline axis).", syntax_example: ".container { place-content: center space-between; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ".container { place-content: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".container { place-content: inherit; }" }
    ],
    examples: [{ label: "Center all content in grid cell", code: `.container {\n  display: grid;\n  place-content: center;\n  height: 100vh;\n}` }],
    browser_support: { chrome: "59", edge: "79", firefox: "53", safari: "9", opera: "46" }
  },

        // place-items
  {
    property: "place-items",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_place-items.php",
    definition: "Shorthand for align-items and justify-items in one declaration.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex containers", "grid containers"],
    tip: "Use place-items: center to center all items within their cells in a grid.",
    syntax: "place-items: align-items justify-items | initial | inherit;",
    values: [
      { value: "center", description: "Centers items on both axes within their cell.", syntax_example: ".container { display: grid; place-items: center; }" },
      { value: "start", description: "Aligns items to start on both axes.", syntax_example: ".container { place-items: start; }" },
      { value: "end", description: "Aligns items to end on both axes.", syntax_example: ".container { place-items: end; }" },
      { value: "stretch", description: "Stretches items on both axes.", syntax_example: ".container { place-items: stretch; }" },
      { value: "align-items justify-items", description: "Two values: first is align-items, second is justify-items.", syntax_example: ".container { place-items: center start; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ".container { place-items: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".container { place-items: inherit; }" }
    ],
    examples: [{ label: "Center items in grid cells", code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  place-items: center;\n}` }],
    browser_support: { chrome: "59", edge: "79", firefox: "53", safari: "11", opera: "46" }
  },



        // place-self
  {
    property: "place-self",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_place-self.php",
    definition: "Shorthand for align-self and justify-self on a flex or grid item.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["flex items", "grid items"],
    syntax: "place-self: align-self justify-self | auto | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Inherits from parent container.", syntax_example: ".item { place-self: auto; }" },
      { value: "center", description: "Centers the item on both axes.", syntax_example: ".item { place-self: center; }" },
      { value: "start", description: "Aligns to start on both axes.", syntax_example: ".item { place-self: start; }" },
      { value: "end", description: "Aligns to end on both axes.", syntax_example: ".item { place-self: end; }" },
      { value: "align-self justify-self", description: "Two values: first is align-self, second is justify-self.", syntax_example: ".item { place-self: center end; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ".item { place-self: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".item { place-self: inherit; }" }
    ],
    examples: [{ label: "Center one grid item", code: `.special {\n  place-self: center;\n}` }],
    browser_support: { chrome: "59", edge: "79", firefox: "53", safari: "11", opera: "46" }
  },

        // row-gap
          {
    property: "row-gap",
    
    group: "R",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_row-gap.php",
    definition: "Sets the size of the gap between rows in a grid, flex, or multi-column layout.",
    default_value: "normal",
    inherited: "no",
    animatable: "yes",
    applies_to: ["grid containers", "flex containers", "multi-column containers"],
    tip: "Use the gap shorthand to set both row-gap and column-gap at once. Use row-gap alone when you need different vertical and horizontal spacing.",
    note: "row-gap was previously named grid-row-gap. The modern name row-gap works in flex, grid, and multi-column layouts.",
    syntax: "row-gap: normal | length | % | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. In multi-column layouts, this is 1em. In flex and grid, it is 0.",
        syntax_example: ".container { row-gap: normal; }"
      },
      {
        value: "length",
        description: "A fixed gap between rows.",
        syntax_example: ".container { display: grid; row-gap: 20px; }",
        units_note: "Accepts px, em, rem, %, etc."
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: ".container { row-gap: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { row-gap: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "gap",
        condition: "Use the gap shorthand to set row-gap and column-gap in one declaration. gap: 20px sets both equally. gap: 20px 10px sets row then column.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > gap",
        syntax_example: ".container { display: grid; gap: 20px 10px; }",
        section_id: "css3-grid-gap"
      },
      {
        name: "column-gap",
        condition: "Use column-gap to control the horizontal spacing between columns independently from row-gap.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > column-gap",
        syntax_example: ".container { row-gap: 20px; column-gap: 10px; }",
        section_id: "css3-grid-column-gap"
      }
    ],
    examples: [
      {
        label: "Grid with different row and column gaps",
        code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 24px;\n  column-gap: 16px;\n}`
      },
      {
        label: "Flex column with row gap",
        code: `.stack {\n  display: flex;\n  flex-direction: column;\n  row-gap: 16px;\n}`
      }
    ],
    browser_support: { chrome: "66", edge: "16", firefox: "61", safari: "12", opera: "53" }
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

        // shape-outside
          {
    property: "shape-outside",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_shape-outside.php",
    definition: "Defines a shape around which adjacent inline content wraps. Used with floated elements to create non-rectangular text wrapping.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["floated elements"],
    tip: "Combine shape-outside with clip-path using the same shape value to both clip the element's visible area and wrap text around the same shape.",
    note: "shape-outside only works on floated elements. The element must have a defined width and height.",
    syntax: "shape-outside: none | circle() | ellipse() | polygon() | inset() | url() | margin-box | border-box | padding-box | content-box | initial | inherit;",
    values: [
      { value: "none", description: "Default. No shape — text wraps around the element's margin box.", syntax_example: "img { shape-outside: none; }" },
      { value: "circle()", description: "Text wraps around a circle shape.", syntax_example: "img { float: left; shape-outside: circle(50%); }" },
      { value: "ellipse()", description: "Text wraps around an ellipse shape.", syntax_example: "img { float: left; shape-outside: ellipse(50% 40%); }" },
      { value: "polygon()", description: "Text wraps around a custom polygon.", syntax_example: "img { float: left; shape-outside: polygon(0 0, 100% 0, 50% 100%); }" },
      { value: "inset()", description: "Text wraps around a rectangle inset from the element's edges.", syntax_example: "img { float: left; shape-outside: inset(20px); }" },
      { value: "url(image)", description: "Text wraps around the alpha channel of an image.", syntax_example: "img { float: left; shape-outside: url('shape.png'); }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "img { shape-outside: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "img { shape-outside: inherit; }" }
    ],
    additional_properties: [
      {
        name: "clip-path",
        condition: "Use clip-path with the same shape value as shape-outside to visually clip the element to the shape while text wraps around it.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > clip-path",
        syntax_example: "img { float: left; shape-outside: circle(50%); clip-path: circle(50%); }",
        section_id: "css3-visual-clip-path"
      }
    ],
    examples: [
      {
        label: "Circular image with text wrapping",
        code: `.portrait {\n  float: left;\n  width: 200px;\n  height: 200px;\n  shape-outside: circle(50%);\n  clip-path: circle(50%);\n  margin-right: 20px;\n}`
      }
    ],
    browser_support: { chrome: "37", edge: "79", firefox: "62", safari: "10.1", opera: "24" }
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

	  // font-feature-settings
          {
    property: "font-feature-settings",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_font-feature-settings.php",
    definition: "Provides low-level control over OpenType font features such as ligatures, kerning, alternate characters, and small caps.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use font-variant and its sub-properties (font-variant-ligatures, font-variant-caps) for high-level font feature control. Use font-feature-settings only when no high-level equivalent exists.",
    note: "OpenType feature tags are 4-character codes. Common features: 'liga' (ligatures), 'kern' (kerning), 'smcp' (small caps), 'onum' (oldstyle numerals), 'tnum' (tabular numbers).",
    syntax: "font-feature-settings: normal | 'feature-tag' on|off | 'feature-tag' number | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. No font features are explicitly enabled or disabled.",
        syntax_example: "p { font-feature-settings: normal; }"
      },
      {
        value: "'liga' 1",
        description: "Enables standard ligatures (e.g., fi, fl combinations).",
        syntax_example: "p { font-feature-settings: 'liga' 1; }"
      },
      {
        value: "'smcp' 1",
        description: "Enables small capitals.",
        syntax_example: "p { font-feature-settings: 'smcp' 1; }"
      },
      {
        value: "'onum' 1",
        description: "Enables old-style (proportional) numerals.",
        syntax_example: "p { font-feature-settings: 'onum' 1; }"
      },
      {
        value: "'tnum' 1",
        description: "Enables tabular (monospaced) numerals — useful for financial tables.",
        syntax_example: "td { font-feature-settings: 'tnum' 1; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { font-feature-settings: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-feature-settings: inherit; }"
      }
    ],
    examples: [
      {
        label: "Enable ligatures and old-style numerals",
        code: `p {\n  font-feature-settings: 'liga' 1, 'onum' 1;\n}`
      }
    ],
    browser_support: { chrome: "48", edge: "15", firefox: "34", safari: "9.1", opera: "35" }
  },

        // font-kerning
  {
    property: "font-kerning",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_font-kerning.php",
    definition: "Controls the use of kerning information stored in the font — the spacing between specific character pairs to make text appear more evenly spaced.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    note: "Kerning is most noticeable at large sizes (headings). At small font sizes, the visual difference is minimal.",
    syntax: "font-kerning: auto | normal | none | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser decides whether to use kerning based on font size and rendering context.",
        syntax_example: "h1 { font-kerning: auto; }"
      },
      {
        value: "normal",
        description: "Kerning is always applied.",
        syntax_example: "h1 { font-kerning: normal; }"
      },
      {
        value: "none",
        description: "Kerning is disabled.",
        syntax_example: "h1 { font-kerning: none; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "h1 { font-kerning: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "h1 { font-kerning: inherit; }"
      }
    ],
    examples: [
      {
        label: "Enable kerning for headings",
        code: `h1, h2, h3 {\n  font-kerning: normal;\n}`
      }
    ],
    browser_support: { chrome: "33", edge: "79", firefox: "32", safari: "9.1", opera: "20" }
  },
  
          // font-variant-caps
  {
    property: "font-variant-caps",
    
    group: "F",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_font-variant-caps.php",
    definition: "Controls which capitalization variant is used for the text — offering more options than the basic font-variant: small-caps.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "font-variant-caps: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. No capitalization variant applied.",
        syntax_example: "p { font-variant-caps: normal; }"
      },
      {
        value: "small-caps",
        description: "Lowercase letters display as smaller uppercase letters.",
        syntax_example: "p { font-variant-caps: small-caps; }"
      },
      {
        value: "all-small-caps",
        description: "Both uppercase and lowercase letters display as small caps.",
        syntax_example: "p { font-variant-caps: all-small-caps; }"
      },
      {
        value: "petite-caps",
        description: "Like small-caps but even smaller — matching the x-height of lowercase letters.",
        syntax_example: "p { font-variant-caps: petite-caps; }"
      },
      {
        value: "unicase",
        description: "A mix of small-caps for uppercase letters and normal lowercase.",
        syntax_example: "p { font-variant-caps: unicase; }"
      },
      {
        value: "titling-caps",
        description: "Uses uppercase letters designed specifically for large titling use.",
        syntax_example: "h1 { font-variant-caps: titling-caps; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { font-variant-caps: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { font-variant-caps: inherit; }"
      }
    ],
    examples: [
      {
        label: "All small caps for a subheading",
        code: `h3 {\n  font-variant-caps: all-small-caps;\n  letter-spacing: 0.1em;\n}`
      }
    ],
    browser_support: { chrome: "52", edge: "79", firefox: "34", safari: "9.1", opera: "39" }
  },

        // initial-letter
          {
    property: "initial-letter",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_initial-letter.php",
    definition: "Sets the size and sink (drop) of a drop cap — the large initial letter at the start of a paragraph used in editorial and book typography.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["::first-letter pseudo-element and inline-level first child of a block container"],
    tip: "initial-letter is applied to the ::first-letter pseudo-element for drop cap effects without any JavaScript or extra markup.",
    note: "Browser support is still growing. Safari has supported it longest. Always provide a fallback font-size for the ::first-letter if initial-letter is not supported.",
    syntax: "initial-letter: normal | <number> | <number> <integer> | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. No special sizing is applied to the first letter.",
        syntax_example: "p::first-letter { initial-letter: normal; }"
      },
      {
        value: "<number>",
        description: "The size of the initial letter in terms of how many lines it occupies. A value of 3 makes the letter span 3 lines tall.",
        syntax_example: "p::first-letter { initial-letter: 3; }"
      },
      {
        value: "<number> <integer>",
        description: "First value is the size (line height span), second is the sink (how many lines the letter drops into). Allows raised caps and sunken caps.",
        syntax_example: "p::first-letter { initial-letter: 3 2; } /* 3 lines tall, sinks 2 lines */"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p::first-letter { initial-letter: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p::first-letter { initial-letter: inherit; }"
      }
    ],
    examples: [
      {
        label: "3-line drop cap",
        code: `p::first-letter {\n  initial-letter: 3;\n  font-family: 'Playfair Display', serif;\n  font-weight: bold;\n  color: #c8a96e;\n  margin-right: 8px;\n}`
      }
    ],
    browser_support: { chrome: "110", edge: "110", firefox: "Not supported", safari: "9 (-webkit-)", opera: "96" }
  }

        
        

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Grid Layout",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // grid
          {
    property: "grid",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid.php",
    definition: "Shorthand property for defining all grid properties in one declaration: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and grid-auto-flow.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid containers"],
    tip: "For complex grids, use the individual sub-properties instead of the shorthand for better readability and maintainability.",
    note: "Setting grid resets all sub-properties to their initial values. Only use the shorthand when you are defining all the grid dimensions at once.",
    syntax: "grid: none | grid-template | grid-template-rows / grid-auto-flow grid-auto-columns | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No grid is defined.",
        syntax_example: "div { grid: none; }"
      },
      {
        value: "grid-template",
        description: "Defines a grid using template rows and columns.",
        syntax_example: "div { display: grid; grid: 100px 200px / auto auto auto; }"
      },
      {
        value: "initial",
        description: "Resets all grid sub-properties to defaults.",
        syntax_example: "div { grid: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { grid: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "display: grid",
        condition: "The grid property and all grid sub-properties only work on an element with display: grid or display: inline-grid.",
        css_version: "CSS3",
        path: "CSS3 > Display > display: grid",
        syntax_example: ".container { display: grid; grid: 100px / 1fr 1fr; }",
        section_id: "css3-display-grid"
      }
    ],
    examples: [
      {
        label: "Define rows and columns with shorthand",
        code: `.container {\n  display: grid;\n  grid: 100px 200px / auto auto auto;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },

        // grid-area
  {
    property: "grid-area",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-area.php",
    definition: "Either names a grid item so it can be referenced in a grid-template-areas declaration, or serves as a shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    tip: "When using grid-template-areas, assign each item a name with grid-area and then arrange them visually using quoted strings in the container.",
    note: `Two usages:
1. Name a grid item: grid-area: header;
   Then in the container: grid-template-areas: "header header" "sidebar main";

2. Shorthand for placement: grid-area: row-start / col-start / row-end / col-end;
   Example: grid-area: 1 / 2 / 3 / 4;`,
    syntax: "grid-area: itemname | row-start / col-start / row-end / col-end | initial | inherit;",
    values: [
      {
        value: "itemname",
        description: "A custom name for the grid item used with grid-template-areas.",
        syntax_example: ".header { grid-area: header; }"
      },
      {
        value: "row-start / col-start / row-end / col-end",
        description: "Shorthand for grid-row-start, grid-column-start, grid-row-end, grid-column-end.",
        syntax_example: ".item { grid-area: 1 / 1 / 3 / 3; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { grid-area: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-area: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "grid-template-areas",
        condition: "grid-area names only work when the parent container uses grid-template-areas to define the visual layout. The named areas in both properties must match exactly.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > grid-template-areas",
        syntax_example: `.container {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main";\n}\n.header { grid-area: header; }`,
        section_id: "css3-grid-grid-template-areas"
      }
    ],
    examples: [
      {
        label: "Named areas layout",
        code: `.container {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 80px 1fr 60px;\n}\n\n.header  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },



        // grid-auto-columns

  {
    property: "grid-auto-columns",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-auto-columns.php",
    definition: "Sets the size of implicitly created grid columns — columns that are automatically generated when a grid item is placed outside the explicitly defined grid.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["grid containers"],
    note: "Explicit columns are those defined by grid-template-columns. If an item is placed in a column beyond that definition, the browser creates an implicit column. grid-auto-columns controls the size of those implicit columns.",
    syntax: "grid-auto-columns: auto | length | % | fr | min-content | max-content | minmax() | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser determines the size of implicit columns.",
        syntax_example: ".container { grid-auto-columns: auto; }"
      },
      {
        value: "length",
        description: "A fixed size for implicit columns.",
        syntax_example: ".container { grid-auto-columns: 200px; }",
        units_note: "Accepts px, em, rem, %, fr."
      },
      {
        value: "fr",
        description: "A fractional unit of available space.",
        syntax_example: ".container { grid-auto-columns: 1fr; }"
      },
      {
        value: "minmax(min, max)",
        description: "Sets a size range for implicit columns.",
        syntax_example: ".container { grid-auto-columns: minmax(100px, auto); }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".container { grid-auto-columns: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-auto-columns: inherit; }"
      }
    ],
    examples: [
      {
        label: "Fixed size implicit columns",
        code: `.container {\n  display: grid;\n  grid-template-columns: 100px 100px;\n  grid-auto-columns: 50px;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-auto-flow

  {
    property: "grid-auto-flow",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-auto-flow.php",
    definition: "Controls how auto-placed grid items are inserted in the grid — whether they fill in row by row or column by column, and whether the dense packing algorithm is used.",
    default_value: "row",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid containers"],
    tip: "Use grid-auto-flow: dense to fill in gaps left by larger items. Use grid-auto-flow: column when you want items to stack vertically first.",
    syntax: "grid-auto-flow: row | column | row dense | column dense | initial | inherit;",
    values: [
      {
        value: "row",
        description: "Default. Items are placed filling each row from left to right, adding new rows as needed.",
        syntax_example: ".container { display: grid; grid-auto-flow: row; }"
      },
      {
        value: "column",
        description: "Items are placed filling each column from top to bottom, adding new columns as needed.",
        syntax_example: ".container { display: grid; grid-auto-flow: column; }"
      },
      {
        value: "dense",
        description: "The dense packing algorithm attempts to fill in gaps earlier in the grid if smaller items come later.",
        syntax_example: ".container { display: grid; grid-auto-flow: row dense; }"
      },
      {
        value: "row dense",
        description: "Row-first placement with dense packing.",
        syntax_example: ".container { display: grid; grid-auto-flow: row dense; }"
      },
      {
        value: "column dense",
        description: "Column-first placement with dense packing.",
        syntax_example: ".container { display: grid; grid-auto-flow: column dense; }"
      },
      {
        value: "initial",
        description: "Resets to default (row).",
        syntax_example: ".container { grid-auto-flow: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-auto-flow: inherit; }"
      }
    ],
    examples: [
      {
        label: "Column-first auto flow",
        code: `.container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: repeat(3, 100px);\n}`
      },
      {
        label: "Dense packing to fill gaps",
        code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-flow: dense;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-auto-rows

  {
    property: "grid-auto-rows",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-auto-rows.php",
    definition: "Sets the size of implicitly created grid rows — rows that are automatically generated when items are placed beyond the explicitly defined grid rows.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["grid containers"],
    note: "Explicit rows are those defined by grid-template-rows. When items overflow into additional rows, grid-auto-rows controls how tall those rows are.",
    syntax: "grid-auto-rows: auto | length | % | fr | min-content | max-content | minmax() | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Implicit rows are sized to fit their content.",
        syntax_example: ".container { grid-auto-rows: auto; }"
      },
      {
        value: "length",
        description: "A fixed height for implicit rows.",
        syntax_example: ".container { grid-auto-rows: 150px; }",
        units_note: "Accepts px, em, rem, %, fr."
      },
      {
        value: "minmax(min, max)",
        description: "A size range for implicit rows.",
        syntax_example: ".container { grid-auto-rows: minmax(100px, auto); }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".container { grid-auto-rows: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-auto-rows: inherit; }"
      }
    ],
    examples: [
      {
        label: "Minimum 150px rows with flexible max",
        code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(150px, auto);\n  gap: 16px;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-column

  {
    property: "grid-column",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-column.php",
    definition: "Shorthand for grid-column-start and grid-column-end. Defines where a grid item starts and ends along the column axis.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    tip: "Use span to make an item span multiple columns: grid-column: 1 / span 3 places it starting at column 1 and spanning 3 columns.",
    note: `Syntax: grid-column: start / end;
The / separates start and end values.
Negative values count from the end: grid-column: 1 / -1 spans the full width.`,
    syntax: "grid-column: col-start / col-end | initial | inherit;",
    values: [
      {
        value: "col-start / col-end",
        description: "The start and end column lines. Integer line numbers, named lines, or span keywords.",
        syntax_example: ".item { grid-column: 1 / 3; } /* starts at line 1, ends at line 3 */"
      },
      {
        value: "span n",
        description: "Makes the item span n columns.",
        syntax_example: ".item { grid-column: 2 / span 3; } /* starts at column 2, spans 3 columns */"
      },
      {
        value: "auto",
        description: "Default. The item is auto-placed.",
        syntax_example: ".item { grid-column: auto; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { grid-column: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-column: inherit; }"
      }
    ],
    examples: [
      {
        label: "Span item across full grid width",
        code: `.header {\n  grid-column: 1 / -1;\n}`
      },
      {
        label: "Place item in specific columns",
        code: `.sidebar {\n  grid-column: 1 / 2;\n}\n\n.main {\n  grid-column: 2 / 4;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-column-end

  {
    property: "grid-column-end",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-column-end.php",
    definition: "Specifies where a grid item ends along the column axis (the column line it ends before).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    syntax: "grid-column-end: auto | line-number | span n | col-name | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The item ends at the next available column line.",
        syntax_example: ".item { grid-column-end: auto; }"
      },
      {
        value: "line-number",
        description: "The column line number where the item ends.",
        syntax_example: ".item { grid-column-end: 4; }"
      },
      {
        value: "span n",
        description: "The item spans n columns from its start.",
        syntax_example: ".item { grid-column-end: span 2; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { grid-column-end: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-column-end: inherit; }"
      }
    ],
    examples: [
      {
        label: "End item at column line 4",
        code: `.item {\n  grid-column-start: 1;\n  grid-column-end: 4;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-column-start

  {
    property: "grid-column-start",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-column-start.php",
    definition: "Specifies where a grid item starts along the column axis (the column line it begins at).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    syntax: "grid-column-start: auto | line-number | span n | col-name | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The item is auto-placed at the next available column.",
        syntax_example: ".item { grid-column-start: auto; }"
      },
      {
        value: "line-number",
        description: "The column line number where the item starts.",
        syntax_example: ".item { grid-column-start: 2; }"
      },
      {
        value: "span n",
        description: "The item spans n columns.",
        syntax_example: ".item { grid-column-start: span 2; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { grid-column-start: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-column-start: inherit; }"
      }
    ],
    examples: [
      {
        label: "Start item at column 2",
        code: `.item {\n  grid-column-start: 2;\n  grid-column-end: 4;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-row

  {
    property: "grid-row",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-row.php",
    definition: "Shorthand for grid-row-start and grid-row-end. Defines where a grid item starts and ends along the row axis.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    tip: "Use grid-row: 1 / -1 to make an item span the full height of the grid.",
    syntax: "grid-row: row-start / row-end | initial | inherit;",
    values: [
      {
        value: "row-start / row-end",
        description: "The start and end row lines.",
        syntax_example: ".item { grid-row: 1 / 3; }"
      },
      {
        value: "span n",
        description: "The item spans n rows.",
        syntax_example: ".item { grid-row: 1 / span 2; }"
      },
      {
        value: "auto",
        description: "Default. Auto-placed.",
        syntax_example: ".item { grid-row: auto; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: ".item { grid-row: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-row: inherit; }"
      }
    ],
    examples: [
      {
        label: "Span item across 2 rows",
        code: `.featured {\n  grid-row: 1 / span 2;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-row-end

  {
    property: "grid-row-end",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-row-end.php",
    definition: "Specifies where a grid item ends along the row axis (the row line it ends before).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    syntax: "grid-row-end: auto | line-number | span n | row-name | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Ends at next available row line.",
        syntax_example: ".item { grid-row-end: auto; }"
      },
      {
        value: "line-number",
        description: "The row line where the item ends.",
        syntax_example: ".item { grid-row-end: 3; }"
      },
      {
        value: "span n",
        description: "Span n rows from start.",
        syntax_example: ".item { grid-row-end: span 2; }"
      },
      {
        value: "initial",
        description: "Resets to default.",
        syntax_example: ".item { grid-row-end: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-row-end: inherit; }"
      }
    ],
    examples: [
      {
        label: "End at row line 3",
        code: `.item {\n  grid-row-start: 1;\n  grid-row-end: 3;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-row-start

  {
    property: "grid-row-start",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-row-start.php",
    definition: "Specifies where a grid item starts along the row axis (the row line it begins at).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid items"],
    syntax: "grid-row-start: auto | line-number | span n | row-name | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Auto-placed at next available row.",
        syntax_example: ".item { grid-row-start: auto; }"
      },
      {
        value: "line-number",
        description: "The row line where the item starts.",
        syntax_example: ".item { grid-row-start: 2; }"
      },
      {
        value: "span n",
        description: "Span n rows.",
        syntax_example: ".item { grid-row-start: span 2; }"
      },
      {
        value: "initial",
        description: "Resets to default.",
        syntax_example: ".item { grid-row-start: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".item { grid-row-start: inherit; }"
      }
    ],
    examples: [
      {
        label: "Start at row 2",
        code: `.item {\n  grid-row-start: 2;\n  grid-row-end: 4;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-template

  {
    property: "grid-template",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-template.php",
    definition: "Shorthand for defining grid-template-rows, grid-template-columns, and grid-template-areas in one declaration.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid containers"],
    tip: "Use the individual properties (grid-template-rows, grid-template-columns, grid-template-areas) for better readability when building complex layouts.",
    syntax: "grid-template: none | grid-template-rows / grid-template-columns | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No explicit grid is defined.",
        syntax_example: ".container { grid-template: none; }"
      },
      {
        value: "rows / columns",
        description: "Defines row sizes and column sizes separated by a slash.",
        syntax_example: ".container { display: grid; grid-template: 100px 200px / auto auto; }"
      },
      {
        value: "areas rows / columns",
        description: "Defines named areas along with row and column sizes.",
        syntax_example: `.container {\n  grid-template:\n    "header header" 80px\n    "sidebar main" 1fr\n    / 200px 1fr;\n}`
      },
      {
        value: "initial",
        description: "Resets to defaults.",
        syntax_example: ".container { grid-template: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-template: inherit; }"
      }
    ],
    examples: [
      {
        label: "Named areas with row/column sizes",
        code: `.container {\n  display: grid;\n  grid-template:\n    "header header" 80px\n    "sidebar main" 1fr\n    "footer footer" 60px\n    / 200px 1fr;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-template-areas

  {
    property: "grid-template-areas",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-template-areas.php",
    definition: "Defines named grid areas using quoted strings — providing a visual map of the layout directly in CSS. Each string represents a row, and each word in the string represents a cell.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["grid containers"],
    tip: "Use a period (.) to represent an empty cell in the template. All rows must have the same number of cells.",
    note: `Each quoted string = one row.
Each word in the string = one column cell.
Words must form rectangular areas — no L-shapes allowed.
Use a period for an empty cell: "header ."`,
    syntax: 'grid-template-areas: none | "area-names" | initial | inherit;',
    values: [
      {
        value: "none",
        description: "Default. No named areas are defined.",
        syntax_example: ".container { grid-template-areas: none; }"
      },
      {
        value: '"area row1" "area row2"',
        description: "Each quoted string defines a row. Words in each string define the area names for each column cell.",
        syntax_example: '.container { grid-template-areas: "header header" "sidebar main" "footer footer"; }'
      },
      {
        value: '"header ." (period = empty cell)',
        description: "A period represents an empty cell that belongs to no named area.",
        syntax_example: '.container { grid-template-areas: "header header" "sidebar ." "footer footer"; }'
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: ".container { grid-template-areas: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-template-areas: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "grid-area",
        condition: "grid-template-areas works in conjunction with grid-area on child items. Each item must have a grid-area name that matches one of the names defined in grid-template-areas.",
        css_version: "CSS3",
        path: "CSS3 > Grid Layout > grid-area",
        syntax_example: ".header { grid-area: header; }",
        section_id: "css3-grid-grid-area"
      }
    ],
    examples: [
      {
        label: "Classic page layout with named areas",
        code: `.container {\n  display: grid;\n  grid-template-areas:\n    "header  header"\n    "sidebar main  "\n    "footer  footer";\n  grid-template-columns: 220px 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  gap: 16px;\n  min-height: 100vh;\n}\n\n.header  { grid-area: header;  background: #1a1a2e; }\n.sidebar { grid-area: sidebar; background: #16213e; }\n.main    { grid-area: main;    background: #0f3460; }\n.footer  { grid-area: footer;  background: #1a1a2e; }`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-template-columns

{
    property: "grid-template-columns",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-template-columns.php",
    definition: "Defines the number and size of columns in a CSS Grid layout. Each value in the list defines one column track.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["grid containers"],
    tip: "Use the repeat() function to avoid repetitive values. Use fr units to distribute space proportionally. Combine minmax() with fr for flexible columns that have a minimum size.",
    note: `Common patterns:
repeat(3, 1fr)              = 3 equal columns
repeat(auto-fill, 200px)    = as many 200px columns as fit
repeat(auto-fit, minmax(200px, 1fr)) = responsive columns that stretch to fill space`,
    syntax: "grid-template-columns: none | auto | length | % | fr | repeat() | minmax() | fit-content() | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No explicit columns are defined. Grid items are placed in a single column.",
        syntax_example: ".container { grid-template-columns: none; }"
      },
      {
        value: "auto",
        description: "Column width is determined by the content size.",
        syntax_example: ".container { grid-template-columns: auto auto auto; }"
      },
      {
        value: "length",
        description: "A fixed column width.",
        syntax_example: ".container { grid-template-columns: 200px 200px 200px; }",
        units_note: "Accepts px, em, rem, %."
      },
      {
        value: "fr",
        description: "A fractional unit of available space after fixed columns are placed.",
        syntax_example: ".container { grid-template-columns: 200px 1fr 1fr; } /* fixed sidebar, two equal columns */"
      },
      {
        value: "repeat(n, size)",
        description: "Repeats a column definition n times. Use auto-fill or auto-fit instead of n for responsive layouts.",
        syntax_example: ".container { grid-template-columns: repeat(3, 1fr); }"
      },
      {
        value: "minmax(min, max)",
        description: "Creates a column that is at least min wide and at most max wide.",
        syntax_example: ".container { grid-template-columns: repeat(3, minmax(100px, 1fr)); }"
      },
      {
        value: "fit-content(value)",
        description: "Clamps a column to a maximum size while shrinking to fit content if smaller.",
        syntax_example: ".container { grid-template-columns: fit-content(300px) 1fr; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: ".container { grid-template-columns: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-template-columns: inherit; }"
      }
    ],
    examples: [
      {
        label: "3 equal columns",
        code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`
      },
      {
        label: "Responsive auto-fit columns",
        code: `.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}`
      },
      {
        label: "Fixed sidebar + flexible main",
        code: `.layout {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  },


        // grid-template-rows
  {
    property: "grid-template-rows",
    
    group: "G",
    w3schools_url: "https://www.w3schools.com/cssref/pr_grid-template-rows.php",
    definition: "Defines the number and size of rows in a CSS Grid layout. Each value in the list defines one row track.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["grid containers"],
    tip: "Combine grid-template-rows with grid-template-columns to build full two-dimensional page layouts.",
    note: "If there are more items than defined rows, the browser creates implicit rows. Control implicit row sizing with grid-auto-rows.",
    syntax: "grid-template-rows: none | auto | length | % | fr | repeat() | minmax() | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No explicit rows are defined. Rows are created automatically.",
        syntax_example: ".container { grid-template-rows: none; }"
      },
      {
        value: "auto",
        description: "Row height is determined by the tallest content in that row.",
        syntax_example: ".container { grid-template-rows: auto auto auto; }"
      },
      {
        value: "length",
        description: "A fixed row height.",
        syntax_example: ".container { grid-template-rows: 80px 1fr 60px; }",
        units_note: "Accepts px, em, rem, %, fr."
      },
      {
        value: "fr",
        description: "A fractional unit of available height.",
        syntax_example: ".container { grid-template-rows: 80px 1fr 60px; } /* header, flexible main, footer */"
      },
      {
        value: "repeat(n, size)",
        description: "Repeats a row definition n times.",
        syntax_example: ".container { grid-template-rows: repeat(4, 100px); }"
      },
      {
        value: "minmax(min, max)",
        description: "Creates a row that is at least min tall and at most max tall.",
        syntax_example: ".container { grid-template-rows: repeat(3, minmax(80px, auto)); }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: ".container { grid-template-rows: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".container { grid-template-rows: inherit; }"
      }
    ],
    examples: [
      {
        label: "Full-page layout rows",
        code: `.page {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  min-height: 100vh;\n}`
      },
      {
        label: "Minimum height rows",
        code: `.container {\n  display: grid;\n  grid-template-rows: repeat(3, minmax(120px, auto));\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "16", firefox: "52", safari: "10.1", opera: "44" }
  }




      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Images & Objects",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

          // object-fit
  {
    property: "object-fit",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_object-fit.php",
    definition: "Specifies how a replaced element (img, video, canvas) should be resized to fit its container while preserving or ignoring its aspect ratio.",
    default_value: "fill",
    inherited: "no",
    animatable: "no",
    applies_to: ["replaced elements (img, video, canvas, iframe, embed)"],
    tip: "Use object-fit: cover on images in card components to fill the image area without distortion — the image crops to fit rather than stretching.",
    note: "object-fit only works on replaced elements — elements whose content is outside the CSS formatting model, like img and video.",
    syntax: "object-fit: fill | contain | cover | scale-down | none | initial | inherit;",
    values: [
      { value: "fill", description: "Default. The content is stretched to fill the container. Aspect ratio is NOT preserved — the image may appear distorted.", syntax_example: "img { object-fit: fill; }" },
      { value: "contain", description: "The content is scaled to fit inside the container while preserving aspect ratio. May leave empty space (letterboxing).", syntax_example: "img { object-fit: contain; }" },
      { value: "cover", description: "The content is scaled to cover the entire container while preserving aspect ratio. May be cropped.", syntax_example: "img { object-fit: cover; }" },
      { value: "scale-down", description: "The content is sized as if none or contain was specified, whichever results in the smaller size.", syntax_example: "img { object-fit: scale-down; }" },
      { value: "none", description: "The content is not resized — displayed at its natural size.", syntax_example: "img { object-fit: none; }" },
      { value: "initial", description: "Resets to default (fill).", syntax_example: "img { object-fit: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "img { object-fit: inherit; }" }
    ],
    examples: [
      { label: "Card image that fills without distortion", code: ".card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  object-position: center;\n}" }
    ]
  },

  // object-position
  {
    property: "object-position",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_object-position.php",
    definition: "Sets the alignment of the replaced element's content within its box when using object-fit.",
    default_value: "50% 50%",
    inherited: "no",
    animatable: "yes",
    applies_to: ["replaced elements (img, video, canvas, iframe, embed)"],
    tip: "Use object-position: top to ensure faces in portrait photos are always visible when the image is cropped with object-fit: cover.",
    syntax: "object-position: x y | keyword | % | length | initial | inherit;",
    values: [
      { value: "50% 50%", description: "Default. The content is centered both horizontally and vertically.", syntax_example: "img { object-position: 50% 50%; }" },
      { value: "keyword", description: "Position keywords: top, right, bottom, left, center — used alone or in combination.", syntax_example: "img { object-position: top center; }" },
      { value: "length", description: "Fixed position from the top-left corner.", syntax_example: "img { object-position: 20px 40px; }" },
      { value: "initial", description: "Resets to default (50% 50%).", syntax_example: "img { object-position: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "img { object-position: inherit; }" }
    ],
    examples: [
      { label: "Show top of portrait photo", code: ".avatar {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  object-position: top center;\n  border-radius: 50%;\n}" }
    ]
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Logical Properties",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // block-size
          {
    property: "block-size",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_block-size.php",
    definition: "Sets the size of an element in the block direction — equivalent to height in horizontal writing modes (like English), or width in vertical writing modes.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    note: "In a standard left-to-right horizontal writing mode, block-size behaves identically to height. It is part of the CSS Logical Properties specification for writing-mode-agnostic layouts.",
    syntax: "block-size: auto | length | % | max-content | min-content | fit-content | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the block size.",
        syntax_example: "div { block-size: auto; }"
      },
      {
        value: "length",
        description: "A fixed size in any CSS length unit.",
        syntax_example: "div { block-size: 200px; }",
        units_note: "Accepts px, em, rem, vh, etc."
      },
      {
        value: "%",
        description: "A percentage of the containing block's block size.",
        syntax_example: "div { block-size: 50%; }"
      },
      {
        value: "initial",
        description: "Resets to default value (auto).",
        syntax_example: "div { block-size: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { block-size: inherit; }"
      }
    ],
    examples: [
      {
        label: "Set block size equivalent to height",
        code: `div {
  block-size: 300px;
  inline-size: 200px;
}`
      }
    ],
    browser_support: {
      chrome: "57",
      edge: "79",
      firefox: "41",
      safari: "12.1",
      opera: "44"
    }
  },




        // border-inline
          {
    property: "border-inline",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline.php",
    definition: "Shorthand for setting the width, style, and color of the inline-direction borders (left and right in horizontal writing modes).",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "Part of CSS Logical Properties. In horizontal writing modes, border-inline sets left and right borders. In vertical writing modes, it sets top and bottom.",
    syntax: "border-inline: width style color | initial | inherit;",
    values: [
      { value: "border-width", description: "Thickness of the inline-direction borders.", syntax_example: "div { border-inline: 2px solid #c8a96e; }" },
      { value: "border-style", description: "Style of the inline-direction borders.", syntax_example: "div { border-inline: 1px dashed #333; }" },
      { value: "border-color", description: "Color of the inline-direction borders.", syntax_example: "div { border-inline: 2px solid red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { border-inline: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline: inherit; }" }
    ],
    examples: [{ label: "Set left and right borders logically", code: `div {\n  border-inline: 2px solid #c8a96e;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // border-inline-color
  {
    property: "border-inline-color",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-color.php",
    definition: "Sets the color of the inline-direction borders (left and right in horizontal writing modes).",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-inline-color: color | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { border-inline-color: #c8a96e; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-color: inherit; }" }
    ],
    examples: [{ label: "Color left and right borders logically", code: `div {\n  border-inline-style: solid;\n  border-inline-width: 2px;\n  border-inline-color: gold;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },



        // border-inline-end
  {
    property: "border-inline-end",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-end.php",
    definition: "Shorthand for setting the width, style, and color of the inline-end border (right border in left-to-right horizontal writing modes).",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-inline-end: width style color | initial | inherit;",
    values: [
      { value: "border-width", description: "Thickness.", syntax_example: "div { border-inline-end: 2px solid #c8a96e; }" },
      { value: "border-style", description: "Style.", syntax_example: "div { border-inline-end: 1px dashed; }" },
      { value: "border-color", description: "Color.", syntax_example: "div { border-inline-end: 2px solid red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { border-inline-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-end: inherit; }" }
    ],
    examples: [{ label: "Right border logically", code: `div {\n  border-inline-end: 2px solid #c8a96e;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },



        // border-inline-end-color
  {
    property: "border-inline-end-color",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-end-color.php",
    definition: "Sets the color of the inline-end border (right border in LTR horizontal writing modes).",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-inline-end-color: color | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { border-inline-end-color: #c8a96e; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-end-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-end-color: inherit; }" }
    ],
    examples: [{ label: "Color right border logically", code: `div {\n  border-inline-end-style: solid;\n  border-inline-end-width: 2px;\n  border-inline-end-color: gold;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },



        // border-inline-end-style
  {
    property: "border-inline-end-style",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-end-style.php",
    definition: "Sets the style of the inline-end border (right border in LTR horizontal writing modes).",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-inline-end-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | initial | inherit;",
    values: [
      { value: "none", description: "Default. No border.", syntax_example: "div { border-inline-end-style: none; }" },
      { value: "solid", description: "Solid line.", syntax_example: "div { border-inline-end-style: solid; }" },
      { value: "dashed", description: "Dashed line.", syntax_example: "div { border-inline-end-style: dashed; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-end-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-end-style: inherit; }" }
    ],
    examples: [{ label: "Solid right border logically", code: `div {\n  border-inline-end-style: solid;\n  border-inline-end-width: 2px;\n  border-inline-end-color: #c8a96e;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },



        // border-inline-end-width

  {
    property: "border-inline-end-width",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-end-width.php",
    definition: "Sets the width of the inline-end border (right border in LTR horizontal writing modes).",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-inline-end-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin border.", syntax_example: "div { border-inline-end-width: thin; }" },
      { value: "medium", description: "Default.", syntax_example: "div { border-inline-end-width: medium; }" },
      { value: "thick", description: "Thick border.", syntax_example: "div { border-inline-end-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "div { border-inline-end-width: 3px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-end-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-end-width: inherit; }" }
    ],
    examples: [{ label: "3px right border logically", code: `div {\n  border-inline-end-style: solid;\n  border-inline-end-width: 3px;\n  border-inline-end-color: #c8a96e;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },


        // border-inline-start

  {
    property: "border-inline-start",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-start.php",
    definition: "Shorthand for the inline-start border (left border in LTR horizontal writing modes).",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-inline-start: width style color | initial | inherit;",
    values: [
      { value: "border-width", description: "Thickness.", syntax_example: "div { border-inline-start: 2px solid #c8a96e; }" },
      { value: "border-style", description: "Style.", syntax_example: "div { border-inline-start: 1px dashed; }" },
      { value: "border-color", description: "Color.", syntax_example: "div { border-inline-start: 2px solid red; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { border-inline-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-start: inherit; }" }
    ],
    examples: [{ label: "Left border logically", code: `div {\n  border-inline-start: 4px solid #c8a96e;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },


        // border-inline-start-color

  {
    property: "border-inline-start-color",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-start-color.php",
    definition: "Sets the color of the inline-start border (left border in LTR horizontal writing modes).",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-inline-start-color: color | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { border-inline-start-color: #c8a96e; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-start-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-start-color: inherit; }" }
    ],
    examples: [{ label: "Color left border logically", code: `div {\n  border-inline-start-style: solid;\n  border-inline-start-width: 2px;\n  border-inline-start-color: gold;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },


        // border-inline-start-style

  {
    property: "border-inline-start-style",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-start-style.php",
    definition: "Sets the style of the inline-start border (left border in LTR horizontal writing modes).",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-inline-start-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | initial | inherit;",
    values: [
      { value: "none", description: "Default. No border.", syntax_example: "div { border-inline-start-style: none; }" },
      { value: "solid", description: "Solid line.", syntax_example: "div { border-inline-start-style: solid; }" },
      { value: "dashed", description: "Dashed line.", syntax_example: "div { border-inline-start-style: dashed; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-start-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-start-style: inherit; }" }
    ],
    examples: [{ label: "Dashed left border logically", code: `div {\n  border-inline-start-style: dashed;\n  border-inline-start-width: 2px;\n  border-inline-start-color: #c8a96e;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },


        // border-inline-start-width

  {
    property: "border-inline-start-width",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-start-width.php",
    definition: "Sets the width of the inline-start border (left border in LTR horizontal writing modes).",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-inline-start-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin.", syntax_example: "div { border-inline-start-width: thin; }" },
      { value: "medium", description: "Default.", syntax_example: "div { border-inline-start-width: medium; }" },
      { value: "thick", description: "Thick.", syntax_example: "div { border-inline-start-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "div { border-inline-start-width: 3px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-start-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-start-width: inherit; }" }
    ],
    examples: [{ label: "3px left border logically", code: `div {\n  border-inline-start-style: solid;\n  border-inline-start-width: 3px;\n  border-inline-start-color: #c8a96e;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "41", safari: "12.1", opera: "56" }
  },

        // border-inline-style
  {
    property: "border-inline-style",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-style.php",
    definition: "Sets the style for both inline-direction borders (left and right in horizontal writing modes).",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "border-inline-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | initial | inherit;",
    values: [
      { value: "none", description: "Default. No borders.", syntax_example: "div { border-inline-style: none; }" },
      { value: "solid", description: "Solid left and right borders.", syntax_example: "div { border-inline-style: solid; }" },
      { value: "dashed", description: "Dashed left and right borders.", syntax_example: "div { border-inline-style: dashed; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-style: inherit; }" }
    ],
    examples: [{ label: "Solid left and right borders logically", code: `div {\n  border-inline-style: solid;\n  border-inline-width: 2px;\n  border-inline-color: #c8a96e;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // border-inline-width
  {
    property: "border-inline-width",
    category: "CSS",
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_border-inline-width.php",
    definition: "Sets the width for both inline-direction borders (left and right in horizontal writing modes).",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "border-inline-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "Thin.", syntax_example: "div { border-inline-width: thin; }" },
      { value: "medium", description: "Default.", syntax_example: "div { border-inline-width: medium; }" },
      { value: "thick", description: "Thick.", syntax_example: "div { border-inline-width: thick; }" },
      { value: "length", description: "Specific width.", syntax_example: "div { border-inline-width: 2px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { border-inline-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-inline-width: inherit; }" }
    ],
    examples: [{ label: "2px left and right borders logically", code: `div {\n  border-inline-style: solid;\n  border-inline-width: 2px;\n  border-inline-color: #c8a96e;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // border-top-left-radius
          {
    property: "border-top-left-radius",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.php",
    definition: "Defines the radius of the top-left corner of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except table rows, row groups, columns, and column groups"],
    syntax: "border-top-left-radius: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed radius.", syntax_example: "div { border-top-left-radius: 10px; }", units_note: "Accepts px, em, rem." },
      { value: "%", description: "Percentage radius.", syntax_example: "div { border-top-left-radius: 50%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { border-top-left-radius: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-top-left-radius: inherit; }" }
    ],
    examples: [{ label: "Round top-left corner only", code: `div {\n  border: 2px solid #c8a96e;\n  border-top-left-radius: 20px;\n}` }],
    browser_support: { chrome: "4", edge: "12", firefox: "4", safari: "5", opera: "10.5" }
  },
  
  

        // border-top-right-radius
  {
    property: "border-top-right-radius",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.php",
    definition: "Defines the radius of the top-right corner of an element.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except table rows, row groups, columns, and column groups"],
    syntax: "border-top-right-radius: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed radius.", syntax_example: "div { border-top-right-radius: 10px; }", units_note: "Accepts px, em, rem." },
      { value: "%", description: "Percentage radius.", syntax_example: "div { border-top-right-radius: 50%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { border-top-right-radius: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { border-top-right-radius: inherit; }" }
    ],
    examples: [{ label: "Round top-right corner only", code: `div {\n  border: 2px solid #c8a96e;\n  border-top-right-radius: 20px;\n}` }],
    browser_support: { chrome: "4", edge: "12", firefox: "4", safari: "5", opera: "10.5" }
  },


        // inline-size
          {
    property: "inline-size",
    category: "CSS",
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inline-size.php",
    definition: "Sets the size of an element in the inline direction — equivalent to width in horizontal writing modes, or height in vertical writing modes.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    note: "Part of CSS Logical Properties. In standard left-to-right horizontal writing mode, inline-size behaves identically to width.",
    syntax: "inline-size: auto | length | % | max-content | min-content | fit-content | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the inline size.",
        syntax_example: "div { inline-size: auto; }"
      },
      {
        value: "length",
        description: "A fixed inline size.",
        syntax_example: "div { inline-size: 300px; }",
        units_note: "Accepts px, em, rem, %, vw, etc."
      },
      {
        value: "%",
        description: "A percentage of the containing block's inline size.",
        syntax_example: "div { inline-size: 50%; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { inline-size: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { inline-size: inherit; }"
      }
    ],
    examples: [
      {
        label: "Set width logically",
        code: `div {\n  inline-size: 300px;\n  block-size: 200px;\n}`
      }
    ],
    browser_support: { chrome: "57", edge: "79", firefox: "41", safari: "12.1", opera: "44" }
  },


        // inset
          {
    property: "inset",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset.php",
    definition: "Shorthand for setting top, right, bottom, and left offset properties in one declaration for positioned elements.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements (position: relative, absolute, fixed, sticky)"],
    tip: "inset: 0 is a common pattern for making an absolutely positioned element fill its containing block entirely.",
    note: `inset follows the same shorthand pattern as margin and padding:
1 value  = all four sides
2 values = top+bottom, left+right
3 values = top, left+right, bottom
4 values = top, right, bottom, left`,
    syntax: "inset: auto | length | % | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser calculates the position.",
        syntax_example: "div { position: absolute; inset: auto; }"
      },
      {
        value: "length",
        description: "A fixed offset from each edge.",
        syntax_example: "div { position: absolute; inset: 0; } /* fills container */",
        units_note: "Accepts px, em, rem, %, etc."
      },
      {
        value: "% ",
        description: "A percentage offset relative to the containing block.",
        syntax_example: "div { position: absolute; inset: 10%; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { inset: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { inset: inherit; }"
      }
    ],
    examples: [
      {
        label: "Fill parent container",
        code: `.overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n}`
      },
      {
        label: "Offset from all sides",
        code: `.modal {\n  position: fixed;\n  inset: 20px;\n}`
      }
    ],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // inset-block
  {
    property: "inset-block",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset-block.php",
    definition: "Shorthand for inset-block-start and inset-block-end. Sets the top and bottom offsets (in horizontal writing modes) for positioned elements.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements"],
    syntax: "inset-block: auto | length | % | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Browser calculates the position.",
        syntax_example: "div { position: absolute; inset-block: auto; }"
      },
      {
        value: "length",
        description: "One value sets both block-start and block-end. Two values set them independently.",
        syntax_example: "div { position: absolute; inset-block: 10px 20px; }",
        units_note: "Accepts px, em, rem, %."
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "div { inset-block: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { inset-block: inherit; }"
      }
    ],
    examples: [
      {
        label: "Set top and bottom offsets logically",
        code: `.item {\n  position: absolute;\n  inset-block: 10px 20px;\n}`
      }
    ],
    browser_support: { chrome: "87", edge: "87", firefox: "63", safari: "14.1", opera: "73" }
  },



        // inset-block-end
  {
    property: "inset-block-end",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset-block-end.php",
    definition: "Sets the offset from the block-end edge (bottom in horizontal writing modes) of a positioned element.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements"],
    syntax: "inset-block-end: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { inset-block-end: auto; }" },
      { value: "length", description: "Fixed offset from block-end edge.", syntax_example: "div { position: absolute; inset-block-end: 20px; }", units_note: "Accepts px, em, rem, %." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { inset-block-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { inset-block-end: inherit; }" }
    ],
    examples: [{ label: "Bottom offset logically", code: `div {\n  position: absolute;\n  inset-block-end: 20px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "63", safari: "14.1", opera: "73" }
  },



        // inset-block-start
  {
    property: "inset-block-start",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset-block-start.php",
    definition: "Sets the offset from the block-start edge (top in horizontal writing modes) of a positioned element.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements"],
    syntax: "inset-block-start: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { inset-block-start: auto; }" },
      { value: "length", description: "Fixed offset from block-start edge.", syntax_example: "div { position: absolute; inset-block-start: 10px; }", units_note: "Accepts px, em, rem, %." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { inset-block-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { inset-block-start: inherit; }" }
    ],
    examples: [{ label: "Top offset logically", code: `div {\n  position: absolute;\n  inset-block-start: 10px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "63", safari: "14.1", opera: "73" }
  },



        // inset-inline
  {
    property: "inset-inline",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset-inline.php",
    definition: "Shorthand for inset-inline-start and inset-inline-end. Sets the left and right offsets (in horizontal writing modes) for positioned elements.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements"],
    syntax: "inset-inline: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { inset-inline: auto; }" },
      { value: "length", description: "One value sets both inline-start and inline-end. Two values set them independently.", syntax_example: "div { position: absolute; inset-inline: 10px 20px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { inset-inline: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { inset-inline: inherit; }" }
    ],
    examples: [{ label: "Set left and right offsets logically", code: `div {\n  position: absolute;\n  inset-inline: 10px 20px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "63", safari: "14.1", opera: "73" }
  },



        // inset-inline-end
  {
    property: "inset-inline-end",
    
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset-inline-end.php",
    definition: "Sets the offset from the inline-end edge (right in LTR horizontal writing modes) of a positioned element.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements"],
    syntax: "inset-inline-end: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { inset-inline-end: auto; }" },
      { value: "length", description: "Offset from inline-end edge.", syntax_example: "div { position: absolute; inset-inline-end: 20px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { inset-inline-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { inset-inline-end: inherit; }" }
    ],
    examples: [{ label: "Right offset logically", code: `div {\n  position: absolute;\n  inset-inline-end: 20px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "63", safari: "14.1", opera: "73" }
  },



        // inset-inline-start
  {
    property: "inset-inline-start",
    category: "CSS",
    group: "I",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_inset-inline-start.php",
    definition: "Sets the offset from the inline-start edge (left in LTR horizontal writing modes) of a positioned element.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["positioned elements"],
    syntax: "inset-inline-start: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { inset-inline-start: auto; }" },
      { value: "length", description: "Offset from inline-start edge.", syntax_example: "div { position: absolute; inset-inline-start: 10px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { inset-inline-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { inset-inline-start: inherit; }" }
    ],
    examples: [{ label: "Left offset logically", code: `div {\n  position: absolute;\n  inset-inline-start: 10px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "63", safari: "14.1", opera: "73" }
  },

        // margin-block
          {
    property: "margin-block",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_margin-block.php",
    definition: "Shorthand for margin-block-start and margin-block-end. Sets the top and bottom margins (in horizontal writing modes) in one declaration.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    note: "Part of CSS Logical Properties. In horizontal writing modes, margin-block sets top and bottom margins.",
    syntax: "margin-block: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "One value sets both block margins equally. Two values set start then end.", syntax_example: "div { margin-block: 20px; }", units_note: "Accepts px, em, rem, %." },
      { value: "auto", description: "Browser calculates the margin.", syntax_example: "div { margin-block: auto; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { margin-block: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-block: inherit; }" }
    ],
    examples: [{ label: "Set top and bottom margins logically", code: `div {\n  margin-block: 20px 40px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // margin-block-end
  {
    property: "margin-block-end",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_margin-block-end.php",
    definition: "Sets the margin at the block-end side (bottom in horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "margin-block-end: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed margin.", syntax_example: "div { margin-block-end: 20px; }" },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-block-end: auto; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { margin-block-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-block-end: inherit; }" }
    ],
    examples: [{ label: "Bottom margin logically", code: `div { margin-block-end: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },

        // margin-block-start
  {
    property: "margin-block-start",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_margin-block-start.php",
    definition: "Sets the margin at the block-start side (top in horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "margin-block-start: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed margin.", syntax_example: "div { margin-block-start: 20px; }" },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-block-start: auto; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { margin-block-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-block-start: inherit; }" }
    ],
    examples: [{ label: "Top margin logically", code: `div { margin-block-start: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },



        // margin-inline
          {
    property: "margin-inline",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_margin-inline.php",
    definition: "Shorthand for margin-inline-start and margin-inline-end. Sets the left and right margins (in horizontal writing modes) in one declaration.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use margin-inline: auto to horizontally center a block element — the logical equivalent of margin: 0 auto.",
    syntax: "margin-inline: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "One value sets both inline margins. Two values set start then end.", syntax_example: "div { margin-inline: 20px; }" },
      { value: "auto", description: "Centers the element horizontally.", syntax_example: ".container { margin-inline: auto; width: 800px; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { margin-inline: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-inline: inherit; }" }
    ],
    examples: [{ label: "Center element logically", code: `.container {\n  width: 800px;\n  margin-inline: auto;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // margin-inline-end
  {
    property: "margin-inline-end",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_margin-inline-end.php",
    definition: "Sets the margin at the inline-end side (right in LTR horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "margin-inline-end: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed right margin logically.", syntax_example: "div { margin-inline-end: 16px; }" },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-inline-end: auto; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { margin-inline-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-inline-end: inherit; }" }
    ],
    examples: [{ label: "Right margin logically", code: `img { margin-inline-end: 16px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },

        // margin-inline-start
  {
    property: "margin-inline-start",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_margin-inline-start.php",
    definition: "Sets the margin at the inline-start side (left in LTR horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "margin-inline-start: length | auto | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed left margin logically.", syntax_example: "div { margin-inline-start: 16px; }" },
      { value: "auto", description: "Browser calculates.", syntax_example: "div { margin-inline-start: auto; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { margin-inline-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { margin-inline-start: inherit; }" }
    ],
    examples: [{ label: "Left margin logically", code: `div { margin-inline-start: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },

        // max-block-size
          {
    property: "max-block-size",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_max-block-size.php",
    definition: "Sets the maximum size of an element in the block direction — equivalent to max-height in horizontal writing modes.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    syntax: "max-block-size: none | length | % | initial | inherit;",
    values: [
      { value: "none", description: "Default. No maximum block size.", syntax_example: "div { max-block-size: none; }" },
      { value: "length", description: "Maximum block size.", syntax_example: "div { max-block-size: 400px; }", units_note: "Accepts px, em, rem, %." },
      { value: "initial", description: "Resets to default.", syntax_example: "div { max-block-size: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { max-block-size: inherit; }" }
    ],
    examples: [{ label: "Max height logically", code: `div {\n  max-block-size: 400px;\n  overflow: auto;\n}` }],
    browser_support: { chrome: "57", edge: "79", firefox: "41", safari: "12.1", opera: "44" }
  },


        // max-inline-size
  {
    property: "max-inline-size",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_max-inline-size.php",
    definition: "Sets the maximum size of an element in the inline direction — equivalent to max-width in horizontal writing modes.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    syntax: "max-inline-size: none | length | % | initial | inherit;",
    values: [
      { value: "none", description: "Default. No maximum inline size.", syntax_example: "div { max-inline-size: none; }" },
      { value: "length", description: "Maximum inline size.", syntax_example: "div { max-inline-size: 800px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { max-inline-size: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { max-inline-size: inherit; }" }
    ],
    examples: [{ label: "Max width logically", code: `.content {\n  max-inline-size: 65ch;\n  margin-inline: auto;\n}` }],
    browser_support: { chrome: "57", edge: "79", firefox: "41", safari: "12.1", opera: "44" }
  },

        // min-block-size
          {
    property: "min-block-size",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_min-block-size.php",
    definition: "Sets the minimum size of an element in the block direction — equivalent to min-height in horizontal writing modes.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    syntax: "min-block-size: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Minimum block size.", syntax_example: "div { min-block-size: 100px; }" },
      { value: "%", description: "Percentage of containing block.", syntax_example: "div { min-block-size: 50%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { min-block-size: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { min-block-size: inherit; }" }
    ],
    examples: [{ label: "Min height logically", code: `.card { min-block-size: 200px; }` }],
    browser_support: { chrome: "57", edge: "79", firefox: "41", safari: "12.1", opera: "44" }
  },

        // min-inline-size
          {
    property: "min-inline-size",
    category: "CSS",
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_min-inline-size.php",
    definition: "Sets the minimum size of an element in the inline direction — equivalent to min-width in horizontal writing modes.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements except non-replaced inline elements, table rows, and row groups"],
    syntax: "min-inline-size: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Minimum inline size.", syntax_example: "div { min-inline-size: 200px; }" },
      { value: "%", description: "Percentage.", syntax_example: "div { min-inline-size: 30%; }" },
      { value: "initial", description: "Resets to default (0).", syntax_example: "div { min-inline-size: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { min-inline-size: inherit; }" }
    ],
    examples: [{ label: "Min width logically", code: `button { min-inline-size: 120px; }` }],
    browser_support: { chrome: "57", edge: "79", firefox: "41", safari: "12.1", opera: "44" }
  },


        // padding-block
 {
    property: "padding-block",
    category: "CSS",
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_padding-block.php",
    definition: "Shorthand for padding-block-start and padding-block-end. Sets the top and bottom padding (in horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-block: length | % | initial | inherit;",
    values: [
      { value: "length", description: "One value sets both. Two values set start then end.", syntax_example: "div { padding-block: 16px; }" },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { padding-block: 5%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-block: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-block: inherit; }" }
    ],
    examples: [{ label: "Top and bottom padding logically", code: `div { padding-block: 16px 32px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // padding-block-end
  {
    property: "padding-block-end",
    category: "CSS",
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_padding-block-end.php",
    definition: "Sets the padding at the block-end side (bottom in horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-block-end: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed padding.", syntax_example: "div { padding-block-end: 16px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-block-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-block-end: inherit; }" }
    ],
    examples: [{ label: "Bottom padding logically", code: `div { padding-block-end: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },



        // padding-block-start

  {
    property: "padding-block-start",
    category: "CSS",
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_padding-block-start.php",
    definition: "Sets the padding at the block-start side (top in horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-block-start: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed padding.", syntax_example: "div { padding-block-start: 16px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-block-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-block-start: inherit; }" }
    ],
    examples: [{ label: "Top padding logically", code: `div { padding-block-start: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },



        // padding-inline  
 {
    property: "padding-inline",
    category: "CSS",
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_padding-inline.php",
    definition: "Shorthand for padding-inline-start and padding-inline-end. Sets the left and right padding (in horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-inline: length | % | initial | inherit;",
    values: [
      { value: "length", description: "One value sets both. Two values set start then end.", syntax_example: "div { padding-inline: 24px; }" },
      { value: "%", description: "Percentage of containing block width.", syntax_example: "div { padding-inline: 5%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-inline: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-inline: inherit; }" }
    ],
    examples: [{ label: "Left and right padding logically", code: `.btn { padding-inline: 24px; padding-block: 10px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "66", safari: "14.1", opera: "73" }
  },

        // padding-inline-end
  {
    property: "padding-inline-end",
    category: "CSS",
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_padding-inline-end.php",
    definition: "Sets the padding at the inline-end side (right in LTR horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-inline-end: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed right padding logically.", syntax_example: "div { padding-inline-end: 16px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-inline-end: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-inline-end: inherit; }" }
    ],
    examples: [{ label: "Right padding logically", code: `div { padding-inline-end: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  },



        // padding-inline-start
  {
    property: "padding-inline-start",
    category: "CSS",
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_padding-inline-start.php",
    definition: "Sets the padding at the inline-start side (left in LTR horizontal writing modes).",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "padding-inline-start: length | % | initial | inherit;",
    values: [
      { value: "length", description: "Fixed left padding logically.", syntax_example: "div { padding-inline-start: 16px; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { padding-inline-start: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { padding-inline-start: inherit; }" }
    ],
    examples: [{ label: "Left padding logically", code: `div { padding-inline-start: 24px; }` }],
    browser_support: { chrome: "87", edge: "87", firefox: "41", safari: "12.1", opera: "73" }
  }




      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Masking",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // mask
          {
    property: "mask",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask.php",
    definition: "Shorthand for applying a mask to an element using an image or gradient. Areas of the mask that are fully opaque show the element; transparent areas hide it.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use a black-to-transparent gradient as a mask to fade an element's edge smoothly.",
    note: "Safari requires the -webkit- prefix for mask properties. Always include both prefixed and unprefixed versions.",
    syntax: "mask: none | mask-image mask-mode mask-position mask-size mask-repeat mask-origin mask-clip mask-composite | initial | inherit;",
    values: [
      { value: "none", description: "Default. No mask is applied.", syntax_example: "div { mask: none; }" },
      { value: "url(path)", description: "An image file used as the mask.", syntax_example: "div { mask: url('mask.png'); }" },
      { value: "linear-gradient()", description: "A gradient used as the mask.", syntax_example: "div { mask: linear-gradient(to bottom, black, transparent); }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask: inherit; }" }
    ],
    additional_properties: [
      {
        name: "mask-image",
        condition: "mask-image is the sub-property that defines the image or gradient used as the mask. The mask shorthand sets all mask sub-properties at once.",
        css_version: "CSS3",
        path: "CSS3 > Visual Effects > mask-image",
        syntax_example: "div { mask-image: linear-gradient(to bottom, black, transparent); }",
        section_id: "css3-visual-mask-image"
      }
    ],
    examples: [
      {
        label: "Fade element bottom edge with gradient mask",
        code: `div {\n  -webkit-mask: linear-gradient(to bottom, black 60%, transparent 100%);\n  mask: linear-gradient(to bottom, black 60%, transparent 100%);\n}`
      }
    ],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },
         
          // mask-clip
 {
    property: "mask-clip",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-clip.php",
    definition: "Specifies the area that is affected by the mask — similar to background-clip but for masks.",
    default_value: "border-box",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "mask-clip: border-box | padding-box | content-box | fill-box | stroke-box | view-box | no-clip | initial | inherit;",
    values: [
      { value: "border-box", description: "Default. The mask covers the border box area.", syntax_example: "div { mask-clip: border-box; }" },
      { value: "padding-box", description: "The mask covers the padding box area.", syntax_example: "div { mask-clip: padding-box; }" },
      { value: "content-box", description: "The mask covers the content box only.", syntax_example: "div { mask-clip: content-box; }" },
      { value: "no-clip", description: "The mask is not clipped to any box.", syntax_example: "div { mask-clip: no-clip; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-clip: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-clip: inherit; }" }
    ],
    examples: [{ label: "Mask clipped to content box", code: `div {\n  mask-image: url('mask.svg');\n  mask-clip: content-box;\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },



        // mask-composite
  {
    property: "mask-composite",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-composite.php",
    definition: "Specifies how multiple mask layers are composited together when more than one mask-image is applied.",
    default_value: "add",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "mask-composite: add | subtract | intersect | exclude | initial | inherit;",
    values: [
      { value: "add", description: "Default. Masks are combined — both show the element.", syntax_example: "div { mask-composite: add; }" },
      { value: "subtract", description: "The area covered by the lower mask is removed from the upper mask.", syntax_example: "div { mask-composite: subtract; }" },
      { value: "intersect", description: "Only the area covered by both masks shows the element.", syntax_example: "div { mask-composite: intersect; }" },
      { value: "exclude", description: "The area covered by both masks is excluded.", syntax_example: "div { mask-composite: exclude; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-composite: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-composite: inherit; }" }
    ],
    examples: [{ label: "Intersect two mask layers", code: `div {\n  mask-image: url('mask1.svg'), url('mask2.svg');\n  mask-composite: intersect;\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },



        // mask-image
  {
    property: "mask-image",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-image.php",
    definition: "Specifies the image or gradient used as the mask layer for an element.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "mask-image: none | url(path) | linear-gradient() | radial-gradient() | initial | inherit;",
    values: [
      { value: "none", description: "Default. No mask image.", syntax_example: "div { mask-image: none; }" },
      { value: "url(path)", description: "An image file as the mask. Black = show, white = hide, transparent = hide.", syntax_example: "div { mask-image: url('mask.png'); }" },
      { value: "linear-gradient()", description: "A gradient used as the mask.", syntax_example: "div { mask-image: linear-gradient(to right, black, transparent); }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-image: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-image: inherit; }" }
    ],
    examples: [{ label: "Fade right edge", code: `div {\n  -webkit-mask-image: linear-gradient(to right, black 70%, transparent);\n  mask-image: linear-gradient(to right, black 70%, transparent);\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },


        // mask-mode
  {
    property: "mask-mode",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-mode.php",
    definition: "Specifies whether the mask image is treated as a luminance mask or an alpha mask.",
    default_value: "match-source",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "mask-mode: match-source | luminance | alpha | initial | inherit;",
    values: [
      { value: "match-source", description: "Default. SVG masks use luminance; other images use alpha.", syntax_example: "div { mask-mode: match-source; }" },
      { value: "luminance", description: "The brightness values of the mask determine visibility.", syntax_example: "div { mask-mode: luminance; }" },
      { value: "alpha", description: "The alpha (transparency) values of the mask determine visibility.", syntax_example: "div { mask-mode: alpha; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-mode: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-mode: inherit; }" }
    ],
    examples: [{ label: "Alpha mask mode", code: `div {\n  mask-image: url('mask.png');\n  mask-mode: alpha;\n}` }],
    browser_support: { chrome: "Not supported", edge: "Not supported", firefox: "53", safari: "Not supported", opera: "Not supported" }
  },



        // mask-origin

  {
    property: "mask-origin",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-origin.php",
    definition: "Specifies the origin position of the mask — where its coordinate system starts relative to the element's box.",
    default_value: "border-box",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "mask-origin: border-box | padding-box | content-box | fill-box | stroke-box | view-box | initial | inherit;",
    values: [
      { value: "border-box", description: "Default. Mask origin is at the border edge.", syntax_example: "div { mask-origin: border-box; }" },
      { value: "padding-box", description: "Mask origin is at the padding edge.", syntax_example: "div { mask-origin: padding-box; }" },
      { value: "content-box", description: "Mask origin is at the content edge.", syntax_example: "div { mask-origin: content-box; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-origin: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-origin: inherit; }" }
    ],
    examples: [{ label: "Mask from content box origin", code: `div {\n  mask-image: url('mask.svg');\n  mask-origin: content-box;\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },


        // mask-position

  {
    property: "mask-position",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-position.php",
    definition: "Sets the starting position of the mask image — works identically to background-position.",
    default_value: "center",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "mask-position: x y | keyword | % | length | initial | inherit;",
    values: [
      { value: "center", description: "Default. Mask is centered.", syntax_example: "div { mask-position: center; }" },
      { value: "keyword", description: "top, right, bottom, left, or combinations.", syntax_example: "div { mask-position: top left; }" },
      { value: "length", description: "Fixed position.", syntax_example: "div { mask-position: 20px 40px; }" },
      { value: "%", description: "Percentage position.", syntax_example: "div { mask-position: 50% 50%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-position: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-position: inherit; }" }
    ],
    examples: [{ label: "Position mask at top left", code: `div {\n  mask-image: url('mask.png');\n  mask-position: top left;\n  mask-repeat: no-repeat;\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },


        // mask-repeat

  {
    property: "mask-repeat",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-repeat.php",
    definition: "Sets how a mask image is repeated — works identically to background-repeat.",
    default_value: "repeat",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "mask-repeat: repeat | no-repeat | repeat-x | repeat-y | space | round | initial | inherit;",
    values: [
      { value: "repeat", description: "Default. Mask repeats in both directions.", syntax_example: "div { mask-repeat: repeat; }" },
      { value: "no-repeat", description: "Mask is shown once only.", syntax_example: "div { mask-repeat: no-repeat; }" },
      { value: "repeat-x", description: "Repeats horizontally only.", syntax_example: "div { mask-repeat: repeat-x; }" },
      { value: "repeat-y", description: "Repeats vertically only.", syntax_example: "div { mask-repeat: repeat-y; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-repeat: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-repeat: inherit; }" }
    ],
    examples: [{ label: "No-repeat mask", code: `div {\n  mask-image: url('mask.png');\n  mask-repeat: no-repeat;\n  mask-position: center;\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },


        // mask-size

  {
    property: "mask-size",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-size.php",
    definition: "Specifies the size of the mask image — works identically to background-size.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "mask-size: auto | cover | contain | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default. The mask image retains its original size.", syntax_example: "div { mask-size: auto; }" },
      { value: "cover", description: "Scales the mask to cover the entire element.", syntax_example: "div { mask-size: cover; }" },
      { value: "contain", description: "Scales the mask to fit fully inside the element.", syntax_example: "div { mask-size: contain; }" },
      { value: "length", description: "Explicit width and height.", syntax_example: "div { mask-size: 200px 100px; }" },
      { value: "%", description: "Percentage of the element's size.", syntax_example: "div { mask-size: 100% 100%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { mask-size: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { mask-size: inherit; }" }
    ],
    examples: [{ label: "Full cover mask", code: `div {\n  mask-image: url('mask.png');\n  mask-size: cover;\n  mask-repeat: no-repeat;\n}` }],
    browser_support: { chrome: "1 (-webkit-)", edge: "79", firefox: "53", safari: "4 (-webkit-)", opera: "15" }
  },


        // mask-type
  {
    property: "mask-type",
    
    group: "M",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_mask-type.php",
    definition: "Specifies whether an SVG mask element is used as a luminance or alpha mask. Applied to the SVG mask element itself, not the masked element.",
    default_value: "luminance",
    inherited: "no",
    animatable: "no",
    applies_to: ["SVG mask elements"],
    note: "mask-type is set on the SVG <mask> element. mask-mode is set on the HTML element being masked. They serve similar purposes but apply to different elements.",
    syntax: "mask-type: luminance | alpha | initial | inherit;",
    values: [
      { value: "luminance", description: "Default. The brightness values of the SVG mask determine visibility.", syntax_example: "mask { mask-type: luminance; }" },
      { value: "alpha", description: "The alpha channel of the SVG mask determines visibility.", syntax_example: "mask { mask-type: alpha; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "mask { mask-type: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "mask { mask-type: inherit; }" }
    ],
    examples: [{ label: "Alpha SVG mask", code: `<!-- In SVG -->\n<mask id="myMask" style="mask-type: alpha;">\n  <circle cx="50" cy="50" r="50" fill="white" />\n</mask>` }],
    browser_support: { chrome: "24", edge: "79", firefox: "35", safari: "7", opera: "15" }
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

        // break-after
          {
    property: "break-after",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_break-after.php",
    definition: "Specifies whether a page break, column break, or region break should occur after the element when printing or in multi-column layouts.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    syntax: "break-after: auto | all | always | avoid | avoid-column | avoid-page | column | left | page | right | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser decides automatically.", syntax_example: "div { break-after: auto; }" },
      { value: "always", description: "Always insert a page break after the element.", syntax_example: "div { break-after: always; }" },
      { value: "avoid", description: "Avoid a break after the element if possible.", syntax_example: "div { break-after: avoid; }" },
      { value: "column", description: "Force a column break after the element in multi-column layouts.", syntax_example: "div { break-after: column; }" },
      { value: "page", description: "Force a page break after the element.", syntax_example: "div { break-after: page; }" },
      { value: "left", description: "Force page break so next page is a left page.", syntax_example: "div { break-after: left; }" },
      { value: "right", description: "Force page break so next page is a right page.", syntax_example: "div { break-after: right; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { break-after: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { break-after: inherit; }" }
    ],
    examples: [{ label: "Force page break after section for printing", code: `.section {\n  break-after: page;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "65", safari: "10", opera: "37" }
  },

        // break-before
  {
    property: "break-before",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_break-before.php",
    definition: "Specifies whether a page break, column break, or region break should occur before the element.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    syntax: "break-before: auto | all | always | avoid | avoid-column | avoid-page | column | left | page | right | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser decides automatically.", syntax_example: "div { break-before: auto; }" },
      { value: "always", description: "Always insert a break before the element.", syntax_example: "div { break-before: always; }" },
      { value: "avoid", description: "Avoid a break before the element.", syntax_example: "div { break-before: avoid; }" },
      { value: "column", description: "Force a column break before the element.", syntax_example: "div { break-before: column; }" },
      { value: "page", description: "Force a page break before the element.", syntax_example: "div { break-before: page; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { break-before: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { break-before: inherit; }" }
    ],
    examples: [{ label: "Force new page before chapter heading", code: `h1.chapter {\n  break-before: page;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "65", safari: "10", opera: "37" }
  },



        // break-inside
  {
    property: "break-inside",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/pr_break-inside.php",
    definition: "Specifies whether a page break, column break, or region break should occur inside an element.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements"],
    tip: "Use break-inside: avoid on cards or figures in multi-column layouts to prevent them from being split across columns.",
    syntax: "break-inside: auto | avoid | avoid-column | avoid-page | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser decides automatically.", syntax_example: "div { break-inside: auto; }" },
      { value: "avoid", description: "Avoid any break inside the element.", syntax_example: "div { break-inside: avoid; }" },
      { value: "avoid-column", description: "Avoid a column break inside the element.", syntax_example: "div { break-inside: avoid-column; }" },
      { value: "avoid-page", description: "Avoid a page break inside the element.", syntax_example: "div { break-inside: avoid-page; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { break-inside: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { break-inside: inherit; }" }
    ],
    examples: [{ label: "Keep card intact in multi-column layout", code: `.card {\n  break-inside: avoid;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "65", safari: "10", opera: "37" }
  },



        // column-count
          {
    property: "column-count",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-count.php",
    definition: "Specifies the number of columns an element should be divided into in a multi-column layout.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["block containers"],
    tip: "Use column-count together with column-gap to control spacing between columns.",
    syntax: "column-count: number | auto | initial | inherit;",
    values: [
      { value: "number", description: "A positive integer specifying the number of columns.", syntax_example: "div { column-count: 3; }" },
      { value: "auto", description: "Default. The number of columns is determined by other properties like column-width.", syntax_example: "div { column-count: auto; }" },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { column-count: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-count: inherit; }" }
    ],
    examples: [{ label: "3-column text layout", code: `div {\n  column-count: 3;\n  column-gap: 20px;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },

        // column-fill
  {
    property: "column-fill",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-fill.php",
    definition: "Specifies how content is distributed between columns — whether columns are filled sequentially or balanced so they are roughly equal in height.",
    default_value: "balance",
    inherited: "no",
    animatable: "no",
    applies_to: ["multi-column containers"],
    syntax: "column-fill: balance | auto | initial | inherit;",
    values: [
      { value: "balance", description: "Default. Content is balanced across columns so they are roughly equal in height.", syntax_example: "div { column-fill: balance; }" },
      { value: "auto", description: "Columns are filled sequentially. Content fills the first column before moving to the next.", syntax_example: "div { column-fill: auto; }" },
      { value: "initial", description: "Resets to default (balance).", syntax_example: "div { column-fill: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-fill: inherit; }" }
    ],
    examples: [{ label: "Fill columns sequentially", code: `div {\n  column-count: 3;\n  column-fill: auto;\n  height: 300px;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },



        // column-gap
  {
    property: "column-gap",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-gap.php",
    definition: "Sets the size of the gap between columns in a multi-column, flexbox, or grid layout.",
    default_value: "normal",
    inherited: "no",
    animatable: "yes",
    applies_to: ["multi-column containers, flex containers, grid containers"],
    note: "In multi-column layouts the browser default gap is typically 1em. In flex and grid, 'normal' is treated as 0.",
    syntax: "column-gap: normal | length | % | initial | inherit;",
    values: [
      { value: "normal", description: "Default. Browser-defined gap (typically 1em in multi-column, 0 in flex/grid).", syntax_example: "div { column-gap: normal; }" },
      { value: "length", description: "A fixed gap size.", syntax_example: "div { column-gap: 20px; }", units_note: "Accepts px, em, rem, %, etc." },
      { value: "initial", description: "Resets to default (normal).", syntax_example: "div { column-gap: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-gap: inherit; }" }
    ],
    examples: [{ label: "20px gap between columns", code: `div {\n  column-count: 3;\n  column-gap: 20px;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "10.1", opera: "37" }
  },



        // column-rule
  {
    property: "column-rule",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-rule.php",
    definition: "Shorthand for setting the width, style, and color of the rule (line) drawn between columns in a multi-column layout.",
    default_value: "medium none currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["multi-column containers"],
    tip: "The column-rule takes up no space — it is drawn in the middle of the column-gap.",
    syntax: "column-rule: width style color | initial | inherit;",
    values: [
      { value: "column-rule-width", description: "Thickness of the rule line.", syntax_example: "div { column-rule: 2px solid #c8a96e; }" },
      { value: "column-rule-style", description: "Style of the rule line. Required for rule to display.", syntax_example: "div { column-rule: 1px dashed #333; }" },
      { value: "column-rule-color", description: "Color of the rule line.", syntax_example: "div { column-rule: 2px solid #c8a96e; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { column-rule: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-rule: inherit; }" }
    ],
    examples: [{ label: "Gold dashed rule between columns", code: `div {\n  column-count: 3;\n  column-gap: 30px;\n  column-rule: 1px dashed #c8a96e;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },



        // column-rule-color
  {
    property: "column-rule-color",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-rule-color.php",
    definition: "Sets the color of the rule drawn between columns.",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["multi-column containers"],
    syntax: "column-rule-color: color | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "div { column-rule-color: #c8a96e; }" },
      { value: "initial", description: "Resets to default (currentColor).", syntax_example: "div { column-rule-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-rule-color: inherit; }" }
    ],
    examples: [{ label: "Gold column rule", code: `div {\n  column-count: 3;\n  column-rule-style: solid;\n  column-rule-width: 2px;\n  column-rule-color: #c8a96e;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },



        // column-rule-style
  {
    property: "column-rule-style",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-rule-style.php",
    definition: "Sets the style of the rule drawn between columns.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["multi-column containers"],
    syntax: "column-rule-style: none | solid | dashed | dotted | double | groove | ridge | inset | outset | hidden | initial | inherit;",
    values: [
      { value: "none", description: "Default. No rule is drawn.", syntax_example: "div { column-rule-style: none; }" },
      { value: "solid", description: "A solid rule.", syntax_example: "div { column-rule-style: solid; }" },
      { value: "dashed", description: "A dashed rule.", syntax_example: "div { column-rule-style: dashed; }" },
      { value: "dotted", description: "A dotted rule.", syntax_example: "div { column-rule-style: dotted; }" },
      { value: "double", description: "A double rule.", syntax_example: "div { column-rule-style: double; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { column-rule-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-rule-style: inherit; }" }
    ],
    examples: [{ label: "Dashed column rule", code: `div {\n  column-count: 3;\n  column-rule-style: dashed;\n  column-rule-width: 1px;\n  column-rule-color: #c8a96e;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },



        // column-rule-width

  {
    property: "column-rule-width",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-rule-width.php",
    definition: "Sets the width of the rule drawn between columns.",
    default_value: "medium",
    inherited: "no",
    animatable: "yes",
    applies_to: ["multi-column containers"],
    syntax: "column-rule-width: thin | medium | thick | length | initial | inherit;",
    values: [
      { value: "thin", description: "A thin rule.", syntax_example: "div { column-rule-width: thin; }" },
      { value: "medium", description: "Default. A medium rule.", syntax_example: "div { column-rule-width: medium; }" },
      { value: "thick", description: "A thick rule.", syntax_example: "div { column-rule-width: thick; }" },
      { value: "length", description: "A specific width.", syntax_example: "div { column-rule-width: 2px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default (medium).", syntax_example: "div { column-rule-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-rule-width: inherit; }" }
    ],
    examples: [{ label: "3px column rule", code: `div {\n  column-count: 3;\n  column-rule-style: solid;\n  column-rule-width: 3px;\n  column-rule-color: #c8a96e;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },


        // column-span

  {
    property: "column-span",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-span.php",
    definition: "Specifies whether an element should span across all columns in a multi-column layout.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["block-level elements inside a multi-column container"],
    tip: "Use column-span: all on headings to make them span the full width of a multi-column article.",
    syntax: "column-span: none | all | initial | inherit;",
    values: [
      { value: "none", description: "Default. The element does not span multiple columns.", syntax_example: "h2 { column-span: none; }" },
      { value: "all", description: "The element spans across all columns.", syntax_example: "h2 { column-span: all; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "h2 { column-span: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "h2 { column-span: inherit; }" }
    ],
    examples: [{ label: "Heading spans all columns", code: `div {\n  column-count: 3;\n}\n\nh2 {\n  column-span: all;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "71", safari: "9", opera: "37" }
  },


        // column-width
  {
    property: "column-width",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_column-width.php",
    definition: "Specifies a suggested optimal width for columns in a multi-column layout. The browser creates as many columns of that width as will fit.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["block containers"],
    tip: "Use column-width instead of column-count for a responsive multi-column layout that automatically adjusts the number of columns based on available space.",
    syntax: "column-width: auto | length | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Column width is determined by the number of columns.", syntax_example: "div { column-width: auto; }" },
      { value: "length", description: "Suggested width for each column. Browser will create as many columns of this width as fit.", syntax_example: "div { column-width: 200px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default (auto).", syntax_example: "div { column-width: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { column-width: inherit; }" }
    ],
    examples: [{ label: "Responsive columns at 200px each", code: `div {\n  column-width: 200px;\n  column-gap: 20px;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  },



        // columns
  {
    property: "columns",
    
    group: "C",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_columns.php",
    definition: "Shorthand for setting column-width and column-count in one declaration.",
    default_value: "auto auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["block containers"],
    syntax: "columns: column-width column-count | auto | initial | inherit;",
    values: [
      { value: "column-width", description: "Suggested column width.", syntax_example: "div { columns: 200px 3; }" },
      { value: "column-count", description: "Number of columns.", syntax_example: "div { columns: auto 3; }" },
      { value: "auto", description: "Both width and count are automatically determined.", syntax_example: "div { columns: auto; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { columns: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { columns: inherit; }" }
    ],
    examples: [{ label: "3 columns each 200px wide", code: `div {\n  columns: 200px 3;\n  column-gap: 20px;\n}` }],
    browser_support: { chrome: "50", edge: "12", firefox: "52", safari: "9", opera: "37" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Outline",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // outline-offset
          {
    property: "outline-offset",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_outline-offset.php",
    definition: "Sets the space between an element's outline and the edge of its border. Does not affect layout.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "A positive outline-offset creates a gap between the border and outline. A negative value moves the outline inside the border.",
    syntax: "outline-offset: length | initial | inherit;",
    values: [
      { value: "length", description: "Space between the border and the outline.", syntax_example: "button:focus { outline: 2px solid #c8a96e; outline-offset: 4px; }", units_note: "Accepts px, em, rem. Negative values move outline inside the border." },
      { value: "initial", description: "Resets to default (0).", syntax_example: "button { outline-offset: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "button { outline-offset: inherit; }" }
    ],
    examples: [{ label: "Gap between element and focus ring", code: `button:focus-visible {\n  outline: 2px solid #c8a96e;\n  outline-offset: 4px;\n}` }],
    browser_support: { chrome: "4", edge: "15", firefox: "3.5", safari: "3.1", opera: "10.5" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Scroll & Snap",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // overscroll-behavior
          {
    property: "overscroll-behavior",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_overscroll-behavior.php",
    definition: "Controls what happens when the user scrolls beyond the boundary of a scrollable element — whether the scroll chains to the parent or stops.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    tip: "Use overscroll-behavior: contain on modals and sidebars to prevent the page behind them from scrolling when the user reaches the end of the modal's scroll.",
    syntax: "overscroll-behavior: auto | contain | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Scroll chains to parent when boundary is reached.", syntax_example: "div { overscroll-behavior: auto; }" },
      { value: "contain", description: "Scroll does not chain to parent. Bounce effects still happen within the element.", syntax_example: ".modal { overscroll-behavior: contain; }" },
      { value: "none", description: "No scroll chaining and no bounce effects.", syntax_example: ".modal { overscroll-behavior: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overscroll-behavior: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overscroll-behavior: inherit; }" }
    ],
    examples: [{ label: "Prevent page scroll behind modal", code: `.modal {\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}` }],
    browser_support: { chrome: "63", edge: "18", firefox: "59", safari: "16", opera: "50" }
  },

        // overscroll-behavior-block
  {
    property: "overscroll-behavior-block",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_overscroll-behavior-block.php",
    definition: "Sets the overscroll behavior in the block direction (vertical in horizontal writing modes).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    syntax: "overscroll-behavior-block: auto | contain | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Scroll chains to parent.", syntax_example: "div { overscroll-behavior-block: auto; }" },
      { value: "contain", description: "Scroll does not chain.", syntax_example: "div { overscroll-behavior-block: contain; }" },
      { value: "none", description: "No chaining, no bounce.", syntax_example: "div { overscroll-behavior-block: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overscroll-behavior-block: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overscroll-behavior-block: inherit; }" }
    ],
    examples: [{ label: "Contain vertical overscroll", code: `.panel { overscroll-behavior-block: contain; }` }],
    browser_support: { chrome: "77", edge: "79", firefox: "73", safari: "16", opera: "64" }
  },



        // overscroll-behavior-inline
  {
    property: "overscroll-behavior-inline",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_overscroll-behavior-inline.php",
    definition: "Sets the overscroll behavior in the inline direction (horizontal in horizontal writing modes).",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    syntax: "overscroll-behavior-inline: auto | contain | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { overscroll-behavior-inline: auto; }" },
      { value: "contain", description: "No scroll chaining.", syntax_example: "div { overscroll-behavior-inline: contain; }" },
      { value: "none", description: "No chaining, no bounce.", syntax_example: "div { overscroll-behavior-inline: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overscroll-behavior-inline: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overscroll-behavior-inline: inherit; }" }
    ],
    examples: [{ label: "Contain horizontal overscroll", code: `.carousel { overscroll-behavior-inline: contain; }` }],
    browser_support: { chrome: "77", edge: "79", firefox: "73", safari: "16", opera: "64" }
  },



        // overscroll-behavior-x
  {
    property: "overscroll-behavior-x",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_overscroll-behavior-x.php",
    definition: "Sets the overscroll behavior for the horizontal axis.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    syntax: "overscroll-behavior-x: auto | contain | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { overscroll-behavior-x: auto; }" },
      { value: "contain", description: "No horizontal scroll chaining.", syntax_example: "div { overscroll-behavior-x: contain; }" },
      { value: "none", description: "No chaining, no bounce.", syntax_example: "div { overscroll-behavior-x: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overscroll-behavior-x: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overscroll-behavior-x: inherit; }" }
    ],
    examples: [{ label: "Contain horizontal overscroll", code: `.slider { overscroll-behavior-x: contain; }` }],
    browser_support: { chrome: "63", edge: "18", firefox: "59", safari: "16", opera: "50" }
  },



        // overscroll-behavior-y
  {
    property: "overscroll-behavior-y",
    
    group: "O",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_overscroll-behavior-y.php",
    definition: "Sets the overscroll behavior for the vertical axis.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    syntax: "overscroll-behavior-y: auto | contain | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default.", syntax_example: "div { overscroll-behavior-y: auto; }" },
      { value: "contain", description: "No vertical scroll chaining.", syntax_example: "div { overscroll-behavior-y: contain; }" },
      { value: "none", description: "No chaining, no bounce.", syntax_example: "div { overscroll-behavior-y: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "div { overscroll-behavior-y: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { overscroll-behavior-y: inherit; }" }
    ],
    examples: [{ label: "Prevent page scroll behind drawer", code: `.drawer {\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}` }],
    browser_support: { chrome: "63", edge: "18", firefox: "59", safari: "16", opera: "50" }
  },

        // scroll-behavior
          {
    property: "scroll-behavior",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/pr_scroll-behavior.php",
    definition: "Sets whether scrolling in a scroll container should be smooth or instant when triggered by navigation or scroll APIs.",
    default_value: "auto",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    tip: "Set scroll-behavior: smooth on the html element to enable smooth scrolling for all anchor link navigation on the page.",
    note: "Always respect the prefers-reduced-motion media query — users who prefer reduced motion may experience discomfort with smooth scrolling.",
    syntax: "scroll-behavior: auto | smooth | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. Scrolling happens instantly with no animation.",
        syntax_example: "html { scroll-behavior: auto; }"
      },
      {
        value: "smooth",
        description: "Scrolling animates smoothly over time.",
        syntax_example: "html { scroll-behavior: smooth; }"
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "html { scroll-behavior: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "html { scroll-behavior: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "prefers-reduced-motion",
        condition: "Always disable smooth scrolling for users who prefer reduced motion to avoid causing discomfort.",
        css_version: "CSS3",
        path: "CSS3 > At-Rules > @media",
        syntax_example: "@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n}",
        section_id: "css3-atrules-media"
      }
    ],
    examples: [
      {
        label: "Smooth anchor link scrolling",
        code: `html {\n  scroll-behavior: smooth;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n}`
      }
    ],
    browser_support: { chrome: "61", edge: "79", firefox: "36", safari: "15.4", opera: "48" }
  },

        // scroll-margin
  {
    property: "scroll-margin",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scroll-margin.php",
    definition: "Shorthand for setting scroll-margin-top, right, bottom, and left. Adds offset space around an element when it is scrolled into view via scroll snapping or anchor navigation.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Use scroll-margin-top to offset anchor link targets below a fixed header — so the content isn't hidden under the navbar when scrolled to.",
    syntax: "scroll-margin: length | initial | inherit;",
    values: [
      {
        value: "length",
        description: "Offset space around the element when scrolled into view.",
        syntax_example: ".section { scroll-margin-top: 80px; }",
        units_note: "Accepts px, em, rem."
      },
      {
        value: "initial",
        description: "Resets to default (0).",
        syntax_example: ".section { scroll-margin: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: ".section { scroll-margin: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "scroll-margin-top",
        condition: "Use scroll-margin-top specifically to offset anchor targets below a fixed header. Set it to the height of your navbar.",
        css_version: "CSS3",
        path: "CSS3 > Scroll > scroll-margin-top",
        syntax_example: "section { scroll-margin-top: 72px; }",
        section_id: "css3-scroll-scroll-margin-top"
      }
    ],
    examples: [
      {
        label: "Offset anchor target below fixed header",
        code: `/* Fixed navbar is 72px tall */\nsection {\n  scroll-margin-top: 72px;\n}`
      }
    ],
    browser_support: { chrome: "69", edge: "79", firefox: "90", safari: "14.1", opera: "56" }
  },



        // scroll-margin-top
  {
    property: "scroll-margin-top",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scroll-margin-top.php",
    definition: "Sets the top scroll margin of an element — the offset from the top edge when the element is scrolled into view.",
    default_value: "0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "scroll-margin-top: length | initial | inherit;",
    values: [
      { value: "length", description: "Top offset when scrolled into view.", syntax_example: "section { scroll-margin-top: 80px; }", units_note: "Accepts px, em, rem." },
      { value: "initial", description: "Resets to default (0).", syntax_example: "section { scroll-margin-top: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "section { scroll-margin-top: inherit; }" }
    ],
    examples: [{ label: "Offset below fixed header", code: `section { scroll-margin-top: 72px; }` }],
    browser_support: { chrome: "69", edge: "79", firefox: "90", safari: "14.1", opera: "56" }
  },



        // scroll-padding
  {
    property: "scroll-padding",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scroll-padding.php",
    definition: "Shorthand for setting scroll-padding on all sides of a scroll container. Defines the optimal viewing region within the scroll container for scroll snapping.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["scroll containers"],
    tip: "Set scroll-padding-top on the html element equal to your fixed header height to ensure snap targets align below the header.",
    syntax: "scroll-padding: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser determines scroll padding.", syntax_example: "html { scroll-padding: auto; }" },
      { value: "length", description: "Fixed scroll padding.", syntax_example: "html { scroll-padding-top: 80px; }", units_note: "Accepts px, em, rem, %." },
      { value: "initial", description: "Resets to default.", syntax_example: "html { scroll-padding: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "html { scroll-padding: inherit; }" }
    ],
    examples: [{ label: "Account for fixed header in scroll snapping", code: `html {\n  scroll-padding-top: 72px;\n}` }],
    browser_support: { chrome: "69", edge: "79", firefox: "68", safari: "14.1", opera: "56" }
  },



        // scroll-snap-align
  {
    property: "scroll-snap-align",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scroll-snap-align.php",
    definition: "Sets the snap position alignment of a scroll snap item within its scroll container — where the item aligns when the container snaps to it.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["children of scroll snap containers"],
    note: "scroll-snap-align is set on the child items. The scroll-snap-type is set on the parent container.",
    syntax: "scroll-snap-align: none | start | end | center | initial | inherit;",
    values: [
      { value: "none", description: "Default. No snap alignment.", syntax_example: ".item { scroll-snap-align: none; }" },
      { value: "start", description: "The start edge of the item aligns with the scroll container.", syntax_example: ".item { scroll-snap-align: start; }" },
      { value: "end", description: "The end edge of the item aligns with the scroll container.", syntax_example: ".item { scroll-snap-align: end; }" },
      { value: "center", description: "The center of the item aligns with the scroll container.", syntax_example: ".item { scroll-snap-align: center; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ".item { scroll-snap-align: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".item { scroll-snap-align: inherit; }" }
    ],
    additional_properties: [
      {
        name: "scroll-snap-type",
        condition: "scroll-snap-align only works when the parent container has scroll-snap-type defined.",
        css_version: "CSS3",
        path: "CSS3 > Scroll > scroll-snap-type",
        syntax_example: ".container { scroll-snap-type: x mandatory; }\n.item { scroll-snap-align: start; }",
        section_id: "css3-scroll-scroll-snap-type"
      }
    ],
    examples: [
      {
        label: "Horizontal scroll carousel",
        code: `.carousel {\n  display: flex;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n}\n\n.slide {\n  flex: 0 0 100%;\n  scroll-snap-align: start;\n}`
      }
    ],
    browser_support: { chrome: "69", edge: "79", firefox: "68", safari: "11", opera: "56" }
  },



        // scroll-snap-stop
  {
    property: "scroll-snap-stop",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scroll-snap-stop.php",
    definition: "Sets whether the scroll container is allowed to skip snap positions when scrolling quickly, or must stop at every snap point.",
    default_value: "normal",
    inherited: "no",
    animatable: "no",
    applies_to: ["children of scroll snap containers"],
    syntax: "scroll-snap-stop: normal | always | initial | inherit;",
    values: [
      { value: "normal", description: "Default. The container may skip snap positions when scrolling fast.", syntax_example: ".item { scroll-snap-stop: normal; }" },
      { value: "always", description: "The container must stop at this snap point — it cannot be skipped.", syntax_example: ".item { scroll-snap-stop: always; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ".item { scroll-snap-stop: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".item { scroll-snap-stop: inherit; }" }
    ],
    examples: [{ label: "Force stop at every slide", code: `.slide {\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n}` }],
    browser_support: { chrome: "75", edge: "79", firefox: "103", safari: "15", opera: "62" }
  },



        // scroll-snap-type
  {
    property: "scroll-snap-type",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scroll-snap-type.php",
    definition: "Sets whether a scroll container enforces snap points and how strictly snapping is enforced. Defined on the scroll container parent.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["scroll containers"],
    tip: "Use mandatory for carousels where you always want a full slide visible. Use proximity for documents where snapping should be gentle.",
    syntax: "scroll-snap-type: none | x | y | block | inline | both  mandatory|proximity | initial | inherit;",
    values: [
      { value: "none", description: "Default. No snap points.", syntax_example: ".container { scroll-snap-type: none; }" },
      { value: "x mandatory", description: "Snap on horizontal axis — always snaps to a point.", syntax_example: ".container { scroll-snap-type: x mandatory; }" },
      { value: "y mandatory", description: "Snap on vertical axis — always snaps to a point.", syntax_example: ".container { scroll-snap-type: y mandatory; }" },
      { value: "x proximity", description: "Snap on horizontal axis only when near a snap point.", syntax_example: ".container { scroll-snap-type: x proximity; }" },
      { value: "y proximity", description: "Snap on vertical axis only when near a snap point.", syntax_example: ".container { scroll-snap-type: y proximity; }" },
      { value: "both mandatory", description: "Snap on both axes.", syntax_example: ".container { scroll-snap-type: both mandatory; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: ".container { scroll-snap-type: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".container { scroll-snap-type: inherit; }" }
    ],
    examples: [
      {
        label: "Full-page vertical scroll snapping",
        code: `.page-container {\n  height: 100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n}\n\n.page-section {\n  height: 100vh;\n  scroll-snap-align: start;\n}`
      }
    ],
    browser_support: { chrome: "69", edge: "79", firefox: "68", safari: "11", opera: "56" }
  },



        // scrollbar-color
          {
    property: "scrollbar-color",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scrollbar-color.php",
    definition: "Sets the color of the scrollbar thumb and track in supported browsers.",
    default_value: "auto",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["scroll containers"],
    note: "scrollbar-color is part of the CSS Scrollbars specification. Webkit browsers (Chrome, Safari) use ::-webkit-scrollbar pseudo-elements instead — include both for cross-browser support.",
    syntax: "scrollbar-color: auto | thumb-color track-color | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser renders the scrollbar in its default style.", syntax_example: "body { scrollbar-color: auto; }" },
      { value: "thumb track", description: "Two color values: first is the thumb, second is the track.", syntax_example: "body { scrollbar-color: #c8a96e #1a1a2e; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "body { scrollbar-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "body { scrollbar-color: inherit; }" }
    ],
    additional_properties: [
      {
        name: "::-webkit-scrollbar",
        condition: "Chrome and Safari use ::-webkit-scrollbar pseudo-elements for scrollbar styling. Include both scrollbar-color and ::-webkit-scrollbar rules for cross-browser support.",
        css_version: "CSS3",
        path: "CSS3 > Pseudo-elements > ::-webkit-scrollbar",
        syntax_example: "::-webkit-scrollbar { width: 8px; }\n::-webkit-scrollbar-track { background: #1a1a2e; }\n::-webkit-scrollbar-thumb { background: #c8a96e; border-radius: 4px; }",
        section_id: "css3-pseudo-webkit-scrollbar"
      }
    ],
    examples: [
      {
        label: "Custom dark scrollbar",
        code: `/* Firefox */\nbody {\n  scrollbar-color: #c8a96e #1a1a2e;\n  scrollbar-width: thin;\n}\n\n/* Chrome / Safari */\n::-webkit-scrollbar { width: 8px; }\n::-webkit-scrollbar-track { background: #1a1a2e; }\n::-webkit-scrollbar-thumb {\n  background: #c8a96e;\n  border-radius: 4px;\n}`
      }
    ],
    browser_support: { chrome: "121", edge: "121", firefox: "64", safari: "Not supported", opera: "107" }
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

        // hanging-punctuation
          {
    property: "hanging-punctuation",
    
    group: "H",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_hanging-punctuation.php",
    definition: "Specifies whether a punctuation mark may be placed outside the line box at the start or end of a line of text — creating a visually cleaner alignment for body text.",
    default_value: "none",
    inherited: "yes",
    animatable: "no",
    applies_to: ["block containers"],
    tip: "hanging-punctuation is most useful for editorial or magazine-style layouts where opening quotation marks hang outside the text column for a polished typographic look.",
    note: "As of 2025, hanging-punctuation has limited browser support — Safari supports it but Chrome and Firefox do not. Use it as a progressive enhancement.",
    syntax: "hanging-punctuation: none | first | last | allow-end | force-end | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No punctuation hangs outside the line box.",
        syntax_example: "p { hanging-punctuation: none; }"
      },
      {
        value: "first",
        description: "An opening bracket or quote at the start of the first formatted line hangs outside the line box.",
        syntax_example: "p { hanging-punctuation: first; }"
      },
      {
        value: "last",
        description: "A closing bracket or quote at the end of the last formatted line hangs outside the line box.",
        syntax_example: "p { hanging-punctuation: last; }"
      },
      {
        value: "allow-end",
        description: "A stop or comma at the end of a line hangs outside the line box if it does not fit before justification.",
        syntax_example: "p { hanging-punctuation: allow-end; }"
      },
      {
        value: "force-end",
        description: "A stop or comma at the end of a line always hangs outside the line box.",
        syntax_example: "p { hanging-punctuation: force-end; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "p { hanging-punctuation: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { hanging-punctuation: inherit; }"
      }
    ],
    examples: [
      {
        label: "Hang opening quote mark outside column",
        code: `blockquote {\n  hanging-punctuation: first;\n  font-style: italic;\n  padding-left: 0;\n}`
      }
    ],
    browser_support: { chrome: "Not supported", edge: "Not supported", firefox: "Not supported", safari: "10", opera: "Not supported" }
  },


        // hyphens
          {
    property: "hyphens",
    
    group: "H",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_hyphens.php",
    definition: "Controls whether words may be broken and hyphenated at the end of a line to improve text justification and prevent awkward line breaks.",
    default_value: "manual",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "For hyphens: auto to work, the document's language must be declared — set the lang attribute on the html element (e.g. <html lang='en'>).",
    note: "Hyphenation dictionaries vary by browser and language. Results may differ slightly across browsers. hyphens: auto works best with text-align: justify for clean justified paragraphs.",
    syntax: "hyphens: none | manual | auto | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Words are never hyphenated, even if soft hyphens (&shy;) are present in the text.",
        syntax_example: "p { hyphens: none; }"
      },
      {
        value: "manual",
        description: "Default. Words are only hyphenated where a soft hyphen (&shy;) or hard hyphen (-) character exists in the text.",
        syntax_example: "p { hyphens: manual; }"
      },
      {
        value: "auto",
        description: "The browser automatically hyphenates words using its built-in hyphenation dictionary. Requires the lang attribute to be set on the element or html tag.",
        syntax_example: "p { hyphens: auto; }"
      },
      {
        value: "initial",
        description: "Resets to default (manual).",
        syntax_example: "p { hyphens: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { hyphens: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "text-align: justify",
        condition: "hyphens: auto pairs best with text-align: justify to create clean, fully justified text blocks with automatic word breaks at line ends.",
        css_version: "CSS1",
        path: "CSS1 > Text Properties > text-align",
        syntax_example: "p { hyphens: auto; text-align: justify; }",
        section_id: "css1-text-text-align"
      },
      {
        name: "overflow-wrap",
        condition: "Use overflow-wrap: break-word as an alternative to hyphens when you want long words to break without a hyphen character.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > overflow-wrap",
        syntax_example: "p { overflow-wrap: break-word; }",
        section_id: "css3-text-overflow-wrap"
      }
    ],
    examples: [
      {
        label: "Auto hyphenation with justified text",
        code: `p {\n  hyphens: auto;\n  text-align: justify;\n  max-width: 60ch;\n}`
      },
      {
        label: "Manual soft hyphen in HTML",
        code: `<!-- In HTML, insert soft hyphen with &shy; -->\n<p>This is a super&shy;long&shy;word that can break.</p>\n\n<!-- In CSS -->\np { hyphens: manual; }`
      }
    ],
    browser_support: { chrome: "55", edge: "79", firefox: "43", safari: "5.1 (-webkit-)", opera: "42" }
  },

        // hyphenate-character
  {
    property: "hyphenate-character",
    
    group: "H",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_hyphenate-character.php",
    definition: "Sets the character (or string) used at the end of a line when a word is hyphenated. By default this is the hyphen-minus character (-).",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    note: "hyphenate-character only takes effect when hyphens: auto or hyphens: manual is set and a hyphenation break actually occurs. It has no effect on its own.",
    syntax: "hyphenate-character: auto | <string> | initial | inherit;",
    values: [
      {
        value: "auto",
        description: "Default. The browser uses the appropriate hyphenation character for the current language (typically -).",
        syntax_example: "p { hyphenate-character: auto; }"
      },
      {
        value: "<string>",
        description: "A custom character or string to use instead of the default hyphen.",
        syntax_example: 'p { hyphenate-character: "‐"; } /* Unicode hyphen U+2010 */'
      },
      {
        value: "initial",
        description: "Resets to default (auto).",
        syntax_example: "p { hyphenate-character: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { hyphenate-character: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "hyphens",
        condition: "hyphenate-character has no effect unless hyphens: auto or hyphens: manual is also set. Always use them together.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > hyphens",
        syntax_example: "p { hyphens: auto; hyphenate-character: auto; }",
        section_id: "css3-text-hyphens"
      }
    ],
    examples: [
      {
        label: "Custom hyphen character",
        code: `p {\n  hyphens: auto;\n  hyphenate-character: "‐";\n  text-align: justify;\n}`
      }
    ],
    browser_support: { chrome: "106", edge: "106", firefox: "98", safari: "5.1 (-webkit-)", opera: "92" }
  },

        // tab-size
          {
    property: "tab-size",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_tab-size.php",
    definition: "Sets the width of tab characters in preformatted text.",
    default_value: "8",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["block containers"],
    note: "tab-size only has an effect in elements where white-space preserves tab characters, such as pre or elements with white-space: pre.",
    syntax: "tab-size: number | length | initial | inherit;",
    values: [
      { value: "number", description: "Number of space characters wide each tab is. Default is 8.", syntax_example: "pre { tab-size: 4; }" },
      { value: "length", description: "A specific length for tab width.", syntax_example: "pre { tab-size: 2em; }" },
      { value: "initial", description: "Resets to default (8).", syntax_example: "pre { tab-size: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "pre { tab-size: inherit; }" }
    ],
    examples: [{ label: "4-space tab width for code blocks", code: `pre, code {\n  tab-size: 4;\n  white-space: pre;\n}` }],
    browser_support: { chrome: "21", edge: "79", firefox: "91", safari: "6.1", opera: "15" }
  },


        // text-align-last
          {
    property: "text-align-last",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-align-last.php",
    definition: "Sets how the last line of a block of text is aligned when text-align is set to justify.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["block containers"],
    note: "text-align-last only has a visible effect when text-align: justify is set. Without justify, the last line already follows normal alignment.",
    syntax: "text-align-last: auto | left | right | center | justify | start | end | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Last line follows text-align value.", syntax_example: "p { text-align-last: auto; }" },
      { value: "left", description: "Last line is left-aligned.", syntax_example: "p { text-align: justify; text-align-last: left; }" },
      { value: "right", description: "Last line is right-aligned.", syntax_example: "p { text-align: justify; text-align-last: right; }" },
      { value: "center", description: "Last line is centered.", syntax_example: "p { text-align: justify; text-align-last: center; }" },
      { value: "justify", description: "Last line is also justified.", syntax_example: "p { text-align: justify; text-align-last: justify; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "p { text-align-last: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-align-last: inherit; }" }
    ],
    examples: [{ label: "Justify all lines including last", code: `p {\n  text-align: justify;\n  text-align-last: justify;\n}` }],
    browser_support: { chrome: "47", edge: "12", firefox: "49", safari: "16", opera: "34" }
  },


        // text-decoration-color
          {
    property: "text-decoration-color",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-decoration-color.php",
    definition: "Sets the color of text decorations (underline, overline, line-through).",
    default_value: "currentColor",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "text-decoration-color: color | initial | inherit;",
    values: [
      { value: "color", description: "Any valid CSS color.", syntax_example: "a { text-decoration-color: #c8a96e; }" },
      { value: "initial", description: "Resets to default (currentColor).", syntax_example: "a { text-decoration-color: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "a { text-decoration-color: inherit; }" }
    ],
    examples: [{ label: "Gold underline", code: `a {\n  text-decoration-line: underline;\n  text-decoration-color: #c8a96e;\n}` }],
    browser_support: { chrome: "57", edge: "79", firefox: "36", safari: "12.1", opera: "44" }
  },

        // text-decoration-line

  {
    property: "text-decoration-line",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-decoration-line.php",
    definition: "Sets the type of text decoration line to apply to an element.",
    default_value: "none",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "text-decoration-line: none | underline | overline | line-through | blink | initial | inherit;",
    values: [
      { value: "none", description: "Default. No decoration.", syntax_example: "p { text-decoration-line: none; }" },
      { value: "underline", description: "A line below the text.", syntax_example: "a { text-decoration-line: underline; }" },
      { value: "overline", description: "A line above the text.", syntax_example: "p { text-decoration-line: overline; }" },
      { value: "line-through", description: "A strikethrough line.", syntax_example: "del { text-decoration-line: line-through; }" },
      { value: "underline overline", description: "Multiple lines can be combined.", syntax_example: "p { text-decoration-line: underline overline; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "p { text-decoration-line: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-decoration-line: inherit; }" }
    ],
    examples: [{ label: "Strikethrough price", code: `.original-price {\n  text-decoration-line: line-through;\n  text-decoration-color: #888;\n}` }],
    browser_support: { chrome: "57", edge: "79", firefox: "36", safari: "12.1", opera: "44" }
  },


        // text-decoration-style
  {
    property: "text-decoration-style",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-decoration-style.php",
    definition: "Sets the style of the text decoration line.",
    default_value: "solid",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "text-decoration-style: solid | double | dotted | dashed | wavy | initial | inherit;",
    values: [
      { value: "solid", description: "Default. A solid line.", syntax_example: "a { text-decoration-style: solid; }" },
      { value: "double", description: "A double line.", syntax_example: "a { text-decoration-style: double; }" },
      { value: "dotted", description: "A dotted line.", syntax_example: "a { text-decoration-style: dotted; }" },
      { value: "dashed", description: "A dashed line.", syntax_example: "a { text-decoration-style: dashed; }" },
      { value: "wavy", description: "A wavy line — useful for spell-check style underlines.", syntax_example: "a { text-decoration-style: wavy; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "a { text-decoration-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "a { text-decoration-style: inherit; }" }
    ],
    examples: [{ label: "Wavy gold underline", code: `a {\n  text-decoration-line: underline;\n  text-decoration-style: wavy;\n  text-decoration-color: #c8a96e;\n}` }],
    browser_support: { chrome: "57", edge: "79", firefox: "36", safari: "12.1", opera: "44" }
  },



        // text-decoration-thickness
  {
    property: "text-decoration-thickness",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-decoration-thickness.php",
    definition: "Sets the thickness of the text decoration line.",
    default_value: "auto",
    inherited: "no",
    animatable: "yes",
    applies_to: ["all elements"],
    syntax: "text-decoration-thickness: auto | from-font | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser determines the thickness.", syntax_example: "a { text-decoration-thickness: auto; }" },
      { value: "from-font", description: "Uses the thickness defined in the font file if available.", syntax_example: "a { text-decoration-thickness: from-font; }" },
      { value: "length", description: "Specific thickness.", syntax_example: "a { text-decoration-thickness: 2px; }", units_note: "Accepts px, em, rem." },
      { value: "%", description: "Percentage of 1em.", syntax_example: "a { text-decoration-thickness: 10%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "a { text-decoration-thickness: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "a { text-decoration-thickness: inherit; }" }
    ],
    examples: [{ label: "Bold underline", code: `a {\n  text-decoration-line: underline;\n  text-decoration-thickness: 3px;\n  text-decoration-color: #c8a96e;\n  text-underline-offset: 4px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "70", safari: "12.1", opera: "73" }
  },



        // text-emphasis
  {
    property: "text-emphasis",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-emphasis.php",
    definition: "Shorthand for text-emphasis-style and text-emphasis-color. Applies emphasis marks to text — small symbols above or below characters, commonly used in East Asian typography.",
    default_value: "none currentColor",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "text-emphasis: text-emphasis-style text-emphasis-color | none | initial | inherit;",
    values: [
      { value: "none", description: "Default. No emphasis marks.", syntax_example: "p { text-emphasis: none; }" },
      { value: "filled", description: "Filled emphasis marks.", syntax_example: "p { text-emphasis: filled #c8a96e; }" },
      { value: "open", description: "Open (hollow) emphasis marks.", syntax_example: "p { text-emphasis: open #c8a96e; }" },
      { value: "dot / circle / double-circle / triangle / sesame", description: "Shape of the emphasis mark.", syntax_example: "p { text-emphasis: filled sesame #c8a96e; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "p { text-emphasis: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-emphasis: inherit; }" }
    ],
    examples: [{ label: "Filled dot emphasis marks", code: `p {\n  text-emphasis: filled dot #c8a96e;\n}` }],
    browser_support: { chrome: "99", edge: "99", firefox: "46", safari: "7 (-webkit-)", opera: "85" }
  },




        // text-justify
          {
    property: "text-justify",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-justify.php",
    definition: "Sets the justification method when text-align: justify is applied — how the browser distributes extra space between words and characters.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["block containers and multi-line inline elements"],
    syntax: "text-justify: auto | inter-word | inter-character | none | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser chooses the best justification method.", syntax_example: "p { text-justify: auto; }" },
      { value: "inter-word", description: "Space is added between words only.", syntax_example: "p { text-justify: inter-word; }" },
      { value: "inter-character", description: "Space is added between characters.", syntax_example: "p { text-justify: inter-character; }" },
      { value: "none", description: "Justification is disabled.", syntax_example: "p { text-justify: none; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "p { text-justify: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-justify: inherit; }" }
    ],
    examples: [{ label: "Word-spaced justified text", code: `p {\n  text-align: justify;\n  text-justify: inter-word;\n}` }],
    browser_support: { chrome: "32", edge: "12", firefox: "55", safari: "Not supported", opera: "19" }
  },

        // text-orientation
  {
    property: "text-orientation",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-orientation.php",
    definition: "Sets the orientation of characters in a line within a vertical writing mode.",
    default_value: "mixed",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements except table row groups, rows, column groups, and columns"],
    note: "text-orientation only has effect in vertical writing modes (writing-mode: vertical-rl or writing-mode: vertical-lr).",
    syntax: "text-orientation: mixed | upright | sideways | initial | inherit;",
    values: [
      { value: "mixed", description: "Default. Horizontal characters are rotated 90° clockwise. Vertical scripts display upright.", syntax_example: "p { text-orientation: mixed; }" },
      { value: "upright", description: "All characters are displayed upright — horizontal characters show their natural orientation.", syntax_example: "p { text-orientation: upright; }" },
      { value: "sideways", description: "All characters are rotated 90° — the entire line is sideways.", syntax_example: "p { text-orientation: sideways; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "p { text-orientation: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-orientation: inherit; }" }
    ],
    additional_properties: [
      {
        name: "writing-mode",
        condition: "text-orientation only works in vertical writing modes. Set writing-mode: vertical-rl or writing-mode: vertical-lr first.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > writing-mode",
        syntax_example: "p { writing-mode: vertical-rl; text-orientation: upright; }",
        section_id: "css3-text-writing-mode"
      }
    ],
    examples: [{ label: "Vertical text with upright characters", code: `.vertical-label {\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n}` }],
    browser_support: { chrome: "48", edge: "79", firefox: "41", safari: "14", opera: "35" }
  },



        // text-overflow
  {
    property: "text-overflow",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-overflow.php",
    definition: "Specifies how overflowed text content that is not displayed should be signaled to the user — typically with an ellipsis (...).",
    default_value: "clip",
    inherited: "no",
    animatable: "no",
    applies_to: ["block containers"],
    tip: "For text-overflow: ellipsis to work, three conditions must be met: the element needs a defined width, overflow: hidden, and white-space: nowrap.",
    note: `Three required properties for ellipsis to work:
1. width or max-width (or the element must have constrained width)
2. overflow: hidden
3. white-space: nowrap`,
    syntax: "text-overflow: clip | ellipsis | string | initial | inherit;",
    values: [
      { value: "clip", description: "Default. Overflowed text is clipped at the content area.", syntax_example: "p { text-overflow: clip; }" },
      { value: "ellipsis", description: "Overflowed text is replaced with an ellipsis (...).", syntax_example: "p { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }" },
      { value: "string", description: "A custom string shown at the clip point (limited browser support).", syntax_example: 'p { text-overflow: "..."; }' },
      { value: "initial", description: "Resets to default (clip).", syntax_example: "p { text-overflow: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "p { text-overflow: inherit; }" }
    ],
    examples: [
      {
        label: "Single line truncation with ellipsis",
        code: `.truncate {\n  width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "7", safari: "1.3", opera: "11" }
  },

        // text-underline-offset
          {
    property: "text-underline-offset",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-underline-offset.php",
    definition: "Sets the distance between the text baseline and the underline decoration.",
    default_value: "auto",
    inherited: "yes",
    animatable: "yes",
    applies_to: ["all elements"],
    tip: "Pair text-underline-offset with text-decoration-thickness for full control over underline placement and weight.",
    syntax: "text-underline-offset: auto | length | % | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser determines the offset.", syntax_example: "a { text-underline-offset: auto; }" },
      { value: "length", description: "Fixed offset from the baseline.", syntax_example: "a { text-underline-offset: 4px; }", units_note: "Accepts px, em, rem." },
      { value: "%", description: "Percentage of 1em.", syntax_example: "a { text-underline-offset: 20%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "a { text-underline-offset: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "a { text-underline-offset: inherit; }" }
    ],
    examples: [{ label: "Offset underline for better readability", code: `a {\n  text-decoration: underline;\n  text-decoration-color: #c8a96e;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}` }],
    browser_support: { chrome: "87", edge: "87", firefox: "70", safari: "12.1", opera: "73" }
  },

        // text-underline-position
  {
    property: "text-underline-position",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_text-underline-position.php",
    definition: "Sets the position of the underline decoration relative to the text.",
    default_value: "auto",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    syntax: "text-underline-position: auto | under | left | right | initial | inherit;",
    values: [
      { value: "auto", description: "Default. Browser determines position.", syntax_example: "a { text-underline-position: auto; }" },
      { value: "under", description: "Underline is placed below all glyphs including descenders.", syntax_example: "a { text-underline-position: under; }" },
      { value: "left", description: "In vertical writing modes, underline is on the left.", syntax_example: "p { text-underline-position: left; }" },
      { value: "right", description: "In vertical writing modes, underline is on the right.", syntax_example: "p { text-underline-position: right; }" },
      { value: "initial", description: "Resets to default.", syntax_example: "a { text-underline-position: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "a { text-underline-position: inherit; }" }
    ],
    examples: [{ label: "Underline below descenders", code: `a {\n  text-decoration: underline;\n  text-underline-position: under;\n}` }],
    browser_support: { chrome: "33", edge: "12", firefox: "74", safari: "12.1", opera: "20" }
  },



        // word-break
          {
    property: "word-break",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_word-break.php",
    definition: "Specifies how words should break when they reach the end of a line — whether they can break at any character or only at normal word break opportunities.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Use word-break: break-word or overflow-wrap: break-word for user-generated content that may contain long URLs or unbroken strings.",
    note: `word-break: break-all — breaks at any character, even within words
word-break: keep-all — used for CJK (Chinese, Japanese, Korean) text to prevent mid-word breaks
overflow-wrap: break-word — similar to break-word but only breaks when necessary to prevent overflow`,
    syntax: "word-break: normal | break-all | keep-all | break-word | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Words break at normal break opportunities (spaces, hyphens).",
        syntax_example: "p { word-break: normal; }"
      },
      {
        value: "break-all",
        description: "Words can break at any character to prevent overflow. May break mid-word.",
        syntax_example: "p { word-break: break-all; }"
      },
      {
        value: "keep-all",
        description: "Word breaks are not allowed in CJK text. Non-CJK text behaves as normal.",
        syntax_example: "p { word-break: keep-all; }"
      },
      {
        value: "break-word",
        description: "Words break to prevent overflow, but only when necessary. Deprecated in favor of overflow-wrap: break-word.",
        syntax_example: "p { word-break: break-word; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { word-break: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { word-break: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "overflow-wrap",
        condition: "overflow-wrap: break-word is the modern standard for breaking long words. It only breaks when the word would otherwise overflow, unlike word-break: break-all which breaks aggressively.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > overflow-wrap",
        syntax_example: "p { overflow-wrap: break-word; }",
        section_id: "css3-text-overflow-wrap"
      }
    ],
    examples: [
      {
        label: "Break long URLs in comments",
        code: `.comment {\n  word-break: break-all;\n  overflow-wrap: break-word;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "15", safari: "3.1", opera: "15" }
  },


        // word-wrap
          {
    property: "word-wrap",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_word-wrap.php",
    definition: "Specifies whether long words should break and wrap onto the next line. This is an alias for overflow-wrap and both names are supported.",
    default_value: "normal",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements"],
    note: "word-wrap is the original name for overflow-wrap. Both are identical in behavior. The CSS specification now uses overflow-wrap as the standard name, but word-wrap remains widely supported as an alias.",
    syntax: "word-wrap: normal | break-word | initial | inherit;",
    values: [
      {
        value: "normal",
        description: "Default. Only breaks at normal word break opportunities.",
        syntax_example: "p { word-wrap: normal; }"
      },
      {
        value: "break-word",
        description: "Breaks long words to prevent overflow when no other break opportunity exists.",
        syntax_example: "p { word-wrap: break-word; }"
      },
      {
        value: "initial",
        description: "Resets to default (normal).",
        syntax_example: "p { word-wrap: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { word-wrap: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "overflow-wrap",
        condition: "overflow-wrap is the modern standard name for this property. Use overflow-wrap: break-word in new code — word-wrap: break-word is supported as an alias for backward compatibility.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > overflow-wrap",
        syntax_example: "p { overflow-wrap: break-word; }",
        section_id: "css3-text-overflow-wrap"
      }
    ],
    examples: [
      {
        label: "Break long words",
        code: `p {\n  word-wrap: break-word;\n  /* Modern equivalent: */\n  overflow-wrap: break-word;\n}`
      }
    ],
    browser_support: { chrome: "1", edge: "12", firefox: "3.5", safari: "1", opera: "10.5" }
  },


        // writing-mode
          {
    property: "writing-mode",
    
    group: "W",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_writing-mode.php",
    definition: "Sets whether lines of text are laid out horizontally or vertically, and the direction in which blocks progress.",
    default_value: "horizontal-tb",
    inherited: "yes",
    animatable: "no",
    applies_to: ["all elements except table row groups, table column groups, table rows, table columns, ruby base containers, ruby annotation containers"],
    tip: "Use writing-mode: vertical-rl for vertical text labels in sidebars, rotated table headers, or Japanese/Chinese/Korean content.",
    note: `writing-mode affects the direction of both the inline axis (text direction) and block axis (stacking direction):
horizontal-tb — text runs left-to-right, blocks stack top-to-bottom (default for English)
vertical-rl   — text runs top-to-bottom, blocks stack right-to-left (traditional CJK)
vertical-lr   — text runs top-to-bottom, blocks stack left-to-right`,
    syntax: "writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr | initial | inherit;",
    values: [
      {
        value: "horizontal-tb",
        description: "Default. Text flows horizontally, left to right. Blocks stack top to bottom.",
        syntax_example: "p { writing-mode: horizontal-tb; }"
      },
      {
        value: "vertical-rl",
        description: "Text flows vertically top to bottom. Blocks stack right to left. Used for traditional East Asian layout.",
        syntax_example: ".vertical { writing-mode: vertical-rl; }"
      },
      {
        value: "vertical-lr",
        description: "Text flows vertically top to bottom. Blocks stack left to right.",
        syntax_example: ".vertical { writing-mode: vertical-lr; }"
      },
      {
        value: "sideways-rl",
        description: "Text is rotated 90° clockwise. Blocks stack right to left.",
        syntax_example: ".label { writing-mode: sideways-rl; }"
      },
      {
        value: "sideways-lr",
        description: "Text is rotated 90° counter-clockwise. Blocks stack left to right.",
        syntax_example: ".label { writing-mode: sideways-lr; }"
      },
      {
        value: "initial",
        description: "Resets to default (horizontal-tb).",
        syntax_example: "p { writing-mode: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "p { writing-mode: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "text-orientation",
        condition: "Use text-orientation alongside writing-mode to control how individual characters are oriented within a vertical text flow.",
        css_version: "CSS3",
        path: "CSS3 > Text Properties > text-orientation",
        syntax_example: ".vertical { writing-mode: vertical-rl; text-orientation: upright; }",
        section_id: "css3-text-text-orientation"
      },
      {
        name: "CSS Logical Properties",
        condition: "When writing-mode changes the text flow direction, use CSS Logical Properties (margin-inline, padding-block, border-inline, etc.) instead of physical properties (margin-left, padding-top) so your layout adapts correctly to any writing mode.",
        css_version: "CSS",
        path: "CSS > Logical Properties > margin-inline",
        syntax_example: ".vertical { writing-mode: vertical-rl; margin-inline: auto; }",
        section_id: "css-logical-margin-inline"
      }
    ],
    examples: [
      {
        label: "Vertical sidebar label",
        code: `.sidebar-label {\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  transform: rotate(180deg);\n  font-size: 0.85rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}`
      },
      {
        label: "Rotated table header",
        code: `th.rotated {\n  writing-mode: vertical-lr;\n  white-space: nowrap;\n  padding: 8px 4px;\n}`
      }
    ],
    browser_support: { chrome: "48", edge: "12", firefox: "41", safari: "10.1", opera: "35" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "3D & Perspective",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // backface-visibility
          {
    property: "backface-visibility",
    
    group: "B",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_backface-visibility.php",
    definition: "Defines whether or not the back face of an element should be visible when facing the user during a 3D transform.",
    default_value: "visible",
    inherited: "no",
    animatable: "no",
    applies_to: ["transformable elements"],
    tip: "Use backface-visibility: hidden on card flip animations to prevent the back of the card from showing through when rotated.",
    syntax: "backface-visibility: visible | hidden | initial | inherit;",
    values: [
      {
        value: "visible",
        description: "Default. The back face is visible when turned toward the user.",
        syntax_example: "div { backface-visibility: visible; }"
      },
      {
        value: "hidden",
        description: "The back face is hidden when turned toward the user.",
        syntax_example: "div { backface-visibility: hidden; }"
      },
      {
        value: "initial",
        description: "Resets to default value (visible).",
        syntax_example: "div { backface-visibility: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits this property from its parent element.",
        syntax_example: "div { backface-visibility: inherit; }"
      }
    ],
    examples: [
      {
        label: "Card flip — hide back face",
        code: `.card-front,
.card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}`
      }
    ],
    browser_support: {
      chrome: "36",
      edge: "12",
      firefox: "16",
      safari: "15",
      opera: "23"
    }
  },


        // perspective
          {
    property: "perspective",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_perspective.php",
    definition: "Sets the distance between the z=0 plane and the viewer, giving depth to 3D-transformed elements. Lower values create more dramatic 3D effects.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    tip: "perspective is set on the parent container, not on the element being transformed. All child 3D transforms share the same perspective point.",
    note: `perspective: none means no perspective is applied — 3D transforms appear flat.
Lower values (e.g. 200px) = extreme, dramatic 3D effect.
Higher values (e.g. 1000px) = subtle, more realistic depth.`,
    syntax: "perspective: none | length | initial | inherit;",
    values: [
      { value: "none", description: "Default. No perspective — 3D transforms appear flat.", syntax_example: ".container { perspective: none; }" },
      { value: "length", description: "Distance from the viewer to the z=0 plane.", syntax_example: ".container { perspective: 800px; }", units_note: "Accepts px, em, rem. Typical values: 300px–1200px." },
      { value: "initial", description: "Resets to default (none).", syntax_example: ".container { perspective: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".container { perspective: inherit; }" }
    ],
    additional_properties: [
      {
        name: "perspective-origin",
        condition: "Use perspective-origin to change the vanishing point of the 3D perspective. Default is center center.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > perspective-origin",
        syntax_example: ".container { perspective: 800px; perspective-origin: top left; }",
        section_id: "css3-transforms-perspective-origin"
      },
      {
        name: "transform-style: preserve-3d",
        condition: "Set transform-style: preserve-3d on the parent to allow child elements to exist in 3D space rather than being flattened.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform-style",
        syntax_example: ".container { perspective: 800px; transform-style: preserve-3d; }",
        section_id: "css3-transforms-transform-style"
      }
    ],
    examples: [
      {
        label: "3D card flip container",
        code: `.scene {\n  perspective: 800px;\n}\n\n.card {\n  transform-style: preserve-3d;\n  transition: transform 0.6s;\n}\n\n.card:hover {\n  transform: rotateY(180deg);\n}`
      }
    ],
    browser_support: { chrome: "36", edge: "12", firefox: "16", safari: "9", opera: "23" }
  },

        // perspective-origin
  {
    property: "perspective-origin",
    
    group: "P",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_perspective-origin.php",
    definition: "Sets the position of the vanishing point for the perspective property. Defines where the viewer's eye is positioned when looking at 3D transformed elements.",
    default_value: "50% 50%",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    syntax: "perspective-origin: x y | keyword | % | length | initial | inherit;",
    values: [
      { value: "50% 50%", description: "Default. Vanishing point at the center of the element.", syntax_example: ".container { perspective-origin: 50% 50%; }" },
      { value: "keyword", description: "top, right, bottom, left, center.", syntax_example: ".container { perspective-origin: top left; }" },
      { value: "length", description: "Fixed position.", syntax_example: ".container { perspective-origin: 200px 100px; }" },
      { value: "%", description: "Percentage of element size.", syntax_example: ".container { perspective-origin: 25% 75%; }" },
      { value: "initial", description: "Resets to default.", syntax_example: ".container { perspective-origin: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: ".container { perspective-origin: inherit; }" }
    ],
    examples: [{ label: "Top-left vanishing point", code: `.scene {\n  perspective: 800px;\n  perspective-origin: top left;\n}` }],
    browser_support: { chrome: "36", edge: "12", firefox: "16", safari: "9", opera: "23" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Transforms",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // rotate
          {
    property: "rotate",
    
    group: "R",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_rotate.php",
    definition: "Applies a rotation transform to an element. A standalone alternative to using transform: rotate() — allows independent animation without affecting other transform values.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    tip: "Using the individual transform properties (rotate, scale, translate) instead of the transform shorthand lets you animate each independently without conflicts.",
    note: `rotate: 45deg    = 2D rotation
rotate: x 45deg  = rotation around the X axis (3D)
rotate: y 45deg  = rotation around the Y axis (3D)
rotate: z 45deg  = rotation around the Z axis (same as 2D)
rotate: 1 1 0 45deg = rotation around a custom vector (3D)`,
    syntax: "rotate: none | angle | x|y|z angle | x y z angle | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No rotation is applied.",
        syntax_example: "div { rotate: none; }"
      },
      {
        value: "angle",
        description: "Rotates the element by the specified angle in 2D.",
        syntax_example: "div { rotate: 45deg; }",
        units_note: "Accepts deg, rad, grad, turn. Example: 45deg, 0.25turn, 1.57rad."
      },
      {
        value: "x angle",
        description: "Rotates around the X axis (3D tilt forward/backward).",
        syntax_example: "div { rotate: x 45deg; }"
      },
      {
        value: "y angle",
        description: "Rotates around the Y axis (3D flip left/right).",
        syntax_example: "div { rotate: y 45deg; }"
      },
      {
        value: "z angle",
        description: "Rotates around the Z axis — same as 2D rotation.",
        syntax_example: "div { rotate: z 45deg; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "div { rotate: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { rotate: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "transform: rotate()",
        condition: "transform: rotate() achieves the same result as the rotate property. Use the individual rotate property when you need to animate rotation independently from other transforms like scale or translate.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform",
        syntax_example: "div { transform: rotate(45deg); }",
        section_id: "css3-transforms-transform"
      },
      
      
      {
        name: "transform-origin",
        condition: "Use transform-origin to change the point around which the rotation occurs. Default is the element's center (50% 50%).",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform-origin",
        syntax_example: "div { transform-origin: top left; rotate: 45deg; }",
        section_id: "css3-transforms-transform-origin"
      }
    ],
    examples: [
      {
        label: "Rotate icon on hover",
        code: `.icon {\n  transition: rotate 0.3s ease;\n}\n\n.icon:hover {\n  rotate: 90deg;\n}`
      },
      {
        label: "Animated spinner",
        code: `.spinner {\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to { rotate: 360deg; }\n}`
      }
    ],
    browser_support: { chrome: "104", edge: "104", firefox: "72", safari: "14.1", opera: "90" }
  },


        // scale
          {
    property: "scale",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_scale.php",
    definition: "Applies a scale transform to an element. A standalone alternative to transform: scale() — allows independent animation without affecting other transform values.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    tip: "Using the individual scale property instead of transform: scale() lets you animate scaling independently from rotation or translation.",
    note: `scale: 1       = no scaling (default size)
scale: 2       = twice the size
scale: 0.5     = half the size
scale: 1 2     = 1x horizontal, 2x vertical
scale: 1 2 3   = x y z scaling (3D)`,
    syntax: "scale: none | number | x y | x y z | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No scaling is applied.",
        syntax_example: "div { scale: none; }"
      },
      {
        value: "number",
        description: "A single number scales uniformly on both X and Y axes.",
        syntax_example: "div { scale: 1.2; } /* 20% larger */"
      },
      {
        value: "x y",
        description: "Two numbers scale X and Y independently.",
        syntax_example: "div { scale: 1.5 0.8; } /* wider, shorter */"
      },
      {
        value: "x y z",
        description: "Three numbers scale X, Y, and Z axes (3D scaling).",
        syntax_example: "div { scale: 1 1 2; }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "div { scale: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { scale: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "transform: scale()",
        condition: "transform: scale() achieves the same result. Use the individual scale property when animating scale independently from other transforms.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform",
        syntax_example: "div { transform: scale(1.2); }",
        section_id: "css3-transforms-transform"
      }
    ],
    examples: [
      {
        label: "Scale up card on hover",
        code: `.card {\n  transition: scale 0.2s ease;\n}\n\n.card:hover {\n  scale: 1.03;\n}`
      }
    ],
    browser_support: { chrome: "104", edge: "104", firefox: "72", safari: "14.1", opera: "90" }
  },


        // transform
          {
    property: "transform",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transform.php",
    definition: "Applies one or more 2D or 3D transformations to an element — including translation, rotation, scaling, and skewing. Transformed elements do not affect the layout of surrounding elements.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    tip: "Multiple transform functions are combined in one declaration separated by spaces. The order matters — transforms are applied right to left.",
    note: `Transform functions can be combined:
transform: translateX(50px) rotate(45deg) scale(1.2);
Applied right to left: first scale, then rotate, then translate.

For independent animation of each transform, use the individual properties:
translate, rotate, scale — instead of the transform shorthand.`,
    syntax: "transform: none | transform-function(s) | initial | inherit;",
    values: [
      {
        value: "none",
        description: "Default. No transformation.",
        syntax_example: "div { transform: none; }"
      },
      {
        value: "translate(x, y)",
        description: "Moves the element along the X and Y axes.",
        syntax_example: "div { transform: translate(50px, 20px); }",
        units_note: "Accepts px, em, rem, %. translateX(x) and translateY(y) are shorthand versions."
      },
      {
        value: "translateX(x)",
        description: "Moves the element horizontally.",
        syntax_example: "div { transform: translateX(50px); }"
      },
      {
        value: "translateY(y)",
        description: "Moves the element vertically.",
        syntax_example: "div { transform: translateY(-50%); }"
      },
      {
        value: "translateZ(z)",
        description: "Moves the element along the Z axis (3D — toward or away from the viewer).",
        syntax_example: "div { transform: translateZ(100px); }"
      },
      {
        value: "rotate(angle)",
        description: "Rotates the element clockwise by the given angle.",
        syntax_example: "div { transform: rotate(45deg); }",
        units_note: "Accepts deg, rad, grad, turn."
      },
      {
        value: "rotateX(angle)",
        description: "Rotates the element around the X axis (3D tilt).",
        syntax_example: "div { transform: rotateX(45deg); }"
      },
      {
        value: "rotateY(angle)",
        description: "Rotates the element around the Y axis (3D flip).",
        syntax_example: "div { transform: rotateY(180deg); }"
      },
      {
        value: "rotateZ(angle)",
        description: "Rotates around the Z axis — same as rotate().",
        syntax_example: "div { transform: rotateZ(90deg); }"
      },
      {
        value: "scale(x, y)",
        description: "Scales the element. One value scales uniformly; two values scale X and Y independently.",
        syntax_example: "div { transform: scale(1.5); }"
      },
      {
        value: "scaleX(x) / scaleY(y)",
        description: "Scales the element on one axis.",
        syntax_example: "div { transform: scaleX(2); }"
      },
      {
        value: "skew(x, y)",
        description: "Skews the element along the X and Y axes.",
        syntax_example: "div { transform: skew(20deg, 10deg); }",
        units_note: "Accepts deg."
      },
      {
        value: "skewX(angle) / skewY(angle)",
        description: "Skews along one axis.",
        syntax_example: "div { transform: skewX(20deg); }"
      },
      {
        value: "matrix(a,b,c,d,e,f)",
        description: "A 2D transformation matrix combining all transforms in one function.",
        syntax_example: "div { transform: matrix(1, 0.5, -0.5, 1, 30, 10); }"
      },
      {
        value: "perspective(n)",
        description: "Applies a perspective to the element itself (not its children).",
        syntax_example: "div { transform: perspective(500px) rotateY(30deg); }"
      },
      {
        value: "initial",
        description: "Resets to default (none).",
        syntax_example: "div { transform: initial; }"
      },
      {
        value: "inherit",
        description: "Inherits from parent.",
        syntax_example: "div { transform: inherit; }"
      }
    ],
    additional_properties: [
      {
        name: "transform-origin",
        condition: "Use transform-origin to change the point of origin for transforms. Default is the element's center (50% 50%). Affects rotation, scaling, and skewing.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform-origin",
        syntax_example: "div { transform-origin: top left; transform: rotate(45deg); }",
        section_id: "css3-transforms-transform-origin"
      },
      {
        name: "transform-style",
        condition: "Set transform-style: preserve-3d on the parent to allow child 3D transforms to exist in the same 3D space rather than being flattened.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform-style",
        syntax_example: ".parent { transform-style: preserve-3d; }\n.child { transform: rotateY(45deg); }",
        section_id: "css3-transforms-transform-style"
      },
      {
        name: "will-change",
        condition: "Use will-change: transform on elements you plan to animate with transform to hint the browser to promote the element to its own compositing layer for smoother animation.",
        css_version: "CSS3",
        path: "CSS3 > Performance > will-change",
        syntax_example: ".animated { will-change: transform; }",
        section_id: "css3-performance-will-change"
      }
    ],
    examples: [
      { label: "Center element absolutely", code: `.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}` },
      { label: "Card flip on hover", code: `.card {\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n\n.card:hover {\n  transform: rotateY(180deg);\n}` },
      { label: "Scale up on hover", code: `.btn {\n  transition: transform 0.2s ease;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}` }
    ],
    browser_support: { chrome: "36", edge: "12", firefox: "16", safari: "9", opera: "23" }
  },

        // transform-origin

  {
    property: "transform-origin",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transform-origin.php",
    definition: "Sets the origin point for CSS transforms. The element transforms around this point.",
    default_value: "50% 50% 0",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    tip: "Set transform-origin: top left to rotate an element from its top-left corner — useful for fold or unfold animations.",
    syntax: "transform-origin: x y z | keyword | length | % | initial | inherit;",
    values: [
      { value: "50% 50%", description: "Default. Origin at the center of the element.", syntax_example: "div { transform-origin: 50% 50%; }" },
      { value: "keyword", description: "top, right, bottom, left, center — alone or combined.", syntax_example: "div { transform-origin: top left; }" },
      { value: "length", description: "Fixed position from the top-left corner.", syntax_example: "div { transform-origin: 20px 30px; }", units_note: "Accepts px, em, rem, %." },
      { value: "x y z", description: "Three values for 3D transforms — third value is the Z axis offset.", syntax_example: "div { transform-origin: 50% 50% 100px; }" },
      { value: "initial", description: "Resets to default (50% 50% 0).", syntax_example: "div { transform-origin: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transform-origin: inherit; }" }
    ],
    examples: [
      { label: "Rotate from top-left corner", code: `div {\n  transform-origin: top left;\n  transform: rotate(45deg);\n}` }
    ],
    browser_support: { chrome: "36", edge: "12", firefox: "16", safari: "9", opera: "23" }
  },


        // transform-style
  {
    property: "transform-style",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transform-style.php",
    definition: "Sets whether children of a 3D-transformed element are positioned in 3D space or flattened into the plane of the parent.",
    default_value: "flat",
    inherited: "no",
    animatable: "no",
    applies_to: ["transformable elements"],
    tip: "preserve-3d is required for card flip animations — without it, the back face of the card would be flattened and visible even before flipping.",
    syntax: "transform-style: flat | preserve-3d | initial | inherit;",
    values: [
      { value: "flat", description: "Default. Children are flattened into the parent's plane — no true 3D depth.", syntax_example: "div { transform-style: flat; }" },
      { value: "preserve-3d", description: "Children exist in 3D space and can be transformed in 3D relative to each other.", syntax_example: ".scene { transform-style: preserve-3d; }" },
      { value: "initial", description: "Resets to default (flat).", syntax_example: "div { transform-style: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transform-style: inherit; }" }
    ],
    examples: [
      { label: "3D card flip setup", code: `.scene {\n  perspective: 800px;\n}\n\n.card {\n  transform-style: preserve-3d;\n  transition: transform 0.6s;\n}\n\n.card:hover {\n  transform: rotateY(180deg);\n}\n\n.card-front,\n.card-back {\n  backface-visibility: hidden;\n}` }
    ],
    browser_support: { chrome: "36", edge: "12", firefox: "16", safari: "9", opera: "23" }
  },

        // translate
          {
    property: "translate",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css_pr_translate.php",
    definition: "Applies a translation transform to an element. A standalone alternative to transform: translate() — allows independent animation without affecting other transform values.",
    default_value: "none",
    inherited: "no",
    animatable: "yes",
    applies_to: ["transformable elements"],
    tip: "Use translate instead of transform: translate() when you need to animate position independently from rotation or scale.",
    syntax: "translate: none | x | x y | x y z | initial | inherit;",
    values: [
      { value: "none", description: "Default. No translation.", syntax_example: "div { translate: none; }" },
      { value: "x", description: "Translate along the X axis only.", syntax_example: "div { translate: 50px; }", units_note: "Accepts px, em, rem, %, vw, vh." },
      { value: "x y", description: "Translate along both X and Y axes.", syntax_example: "div { translate: 50px 20px; }" },
      { value: "x y z", description: "Translate along X, Y, and Z axes (3D).", syntax_example: "div { translate: 50px 20px 10px; }" },
      { value: "initial", description: "Resets to default (none).", syntax_example: "div { translate: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { translate: inherit; }" }
    ],
    additional_properties: [
      {
        name: "transform: translate()",
        condition: "transform: translate() achieves the same result. Use the individual translate property when animating movement independently from other transforms.",
        css_version: "CSS3",
        path: "CSS3 > Transforms > transform",
        syntax_example: "div { transform: translate(50px, 20px); }",
        section_id: "css3-transforms-transform"
      }
    ],
    examples: [
      { label: "Slide up on hover", code: `.card {\n  transition: translate 0.3s ease;\n}\n\n.card:hover {\n  translate: 0 -8px;\n}` }
    ],
    browser_support: { chrome: "104", edge: "104", firefox: "72", safari: "14.1", opera: "90" }
  }


      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Transitions",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // transition
          {
    property: "transition",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transition.php",
    definition: "Shorthand for setting transition-property, transition-duration, transition-timing-function, and transition-delay in one declaration. Creates smooth animated changes between CSS property values.",
    default_value: "all 0s ease 0s",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Specify the exact property name instead of 'all' for better performance: transition: opacity 0.3s ease is better than transition: all 0.3s ease.",
    note: `Order: property duration timing-function delay
The first time value is duration. The second (if present) is delay.

transition: opacity 0.3s ease 0.1s;
= property: opacity, duration: 0.3s, timing: ease, delay: 0.1s

Multiple transitions: separate with commas:
transition: opacity 0.3s, transform 0.5s ease-out;`,
    syntax: "transition: property duration timing-function delay | none | initial | inherit;",
    values: [
      { value: "property", description: "The CSS property to animate. Use 'all' to animate all animatable properties.", syntax_example: "div { transition: background-color 0.3s; }" },
      { value: "duration", description: "How long the transition takes.", syntax_example: "div { transition: opacity 0.5s; }", units_note: "Use s (seconds) or ms (milliseconds). Do not omit the unit: 0.3s not 0.3." },
      { value: "timing-function", description: "The speed curve: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier().", syntax_example: "div { transition: transform 0.3s ease-in-out; }" },
      { value: "delay", description: "Wait time before the transition starts.", syntax_example: "div { transition: opacity 0.3s ease 0.1s; }" },
      { value: "none", description: "No transition.", syntax_example: "div { transition: none; }" },
      { value: "initial", description: "Resets to defaults.", syntax_example: "div { transition: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transition: inherit; }" }
    ],
    additional_properties: [
      {
        name: "animation",
        condition: "Use animation (with @keyframes) for complex multi-step sequences, repeating loops, or animations that run on page load without user interaction. Use transition for simple A-to-B state changes triggered by hover, focus, or JavaScript.",
        css_version: "CSS3",
        path: "CSS3 > Animations > animation",
        syntax_example: "div { animation: pulse 2s infinite; }",
        section_id: "css3-animations-animation"
      }
    ],
    examples: [
      { label: "Button hover transition", code: `.btn {\n  background: #1a1a2e;\n  color: #c8a96e;\n  transition: background 0.3s ease, color 0.3s ease;\n}\n\n.btn:hover {\n  background: #c8a96e;\n  color: #1a1a2e;\n}` },
      { label: "Multiple property transitions", code: `.card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.3);\n}` }
    ],
    browser_support: { chrome: "26", edge: "12", firefox: "16", safari: "9", opera: "12.1" }
  },

        // transition-delay

  {
    property: "transition-delay",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transition-delay.php",
    definition: "Specifies a delay before the transition starts.",
    default_value: "0s",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: "Negative delay values cause the transition to start immediately but partway through its cycle.",
    syntax: "transition-delay: time | initial | inherit;",
    values: [
      { value: "time", description: "Delay in seconds or milliseconds.", syntax_example: "div { transition-delay: 0.5s; }", units_note: "Use s or ms. Do not omit unit." },
      { value: "initial", description: "Resets to default (0s).", syntax_example: "div { transition-delay: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transition-delay: inherit; }" }
    ],
    examples: [{ label: "Stagger list item transitions", code: `li:nth-child(1) { transition-delay: 0s; }\nli:nth-child(2) { transition-delay: 0.1s; }\nli:nth-child(3) { transition-delay: 0.2s; }` }],
    browser_support: { chrome: "26", edge: "12", firefox: "16", safari: "9", opera: "12.1" }
  },


        // transition-duration

  {
    property: "transition-duration",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transition-duration.php",
    definition: "Sets how long a transition animation takes to complete.",
    default_value: "0s",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    note: `A value of 0s means no transition — change happens instantly.
Do not add a space between value and unit:
Incorrect: transition-duration: 0.3 s;
Correct:   transition-duration: 0.3s;`,
    syntax: "transition-duration: time | initial | inherit;",
    values: [
      { value: "time", description: "Duration in seconds (s) or milliseconds (ms).", syntax_example: "div { transition-duration: 0.3s; }", units_note: "Use s or ms. 0s = no transition." },
      { value: "initial", description: "Resets to default (0s).", syntax_example: "div { transition-duration: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transition-duration: inherit; }" }
    ],
    examples: [{ label: "300ms opacity transition", code: `div {\n  transition-property: opacity;\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n}` }],
    browser_support: { chrome: "26", edge: "12", firefox: "16", safari: "9", opera: "12.1" }
  },


        // transition-property

  {
    property: "transition-property",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transition-property.php",
    definition: "Specifies the CSS property or properties to which a transition effect should be applied.",
    default_value: "all",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "Name specific properties instead of using 'all' for better performance and to avoid accidentally transitioning properties you don't intend to.",
    syntax: "transition-property: none | all | property | initial | inherit;",
    values: [
      { value: "all", description: "Default. All animatable properties transition.", syntax_example: "div { transition-property: all; }" },
      { value: "none", description: "No properties transition.", syntax_example: "div { transition-property: none; }" },
      { value: "property", description: "A specific CSS property name. Multiple properties separated by commas.", syntax_example: "div { transition-property: opacity, transform; }" },
      { value: "initial", description: "Resets to default (all).", syntax_example: "div { transition-property: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transition-property: inherit; }" }
    ],
    examples: [{ label: "Transition only specific properties", code: `div {\n  transition-property: background-color, transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n}` }],
    browser_support: { chrome: "26", edge: "12", firefox: "16", safari: "9", opera: "12.1" }
  },


        // transition-timing-function
  {
    property: "transition-timing-function",
    
    group: "S",
    w3schools_url: "https://www.w3schools.com/cssref/css3_pr_transition-timing-function.php",
    definition: "Sets the speed curve of a transition — how the transition progresses over its duration.",
    default_value: "ease",
    inherited: "no",
    animatable: "no",
    applies_to: ["all elements"],
    tip: "ease-in-out is the most natural-feeling timing function for most UI transitions — it starts and ends slowly with acceleration in the middle.",
    syntax: "transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end | steps(n) | cubic-bezier(n,n,n,n) | initial | inherit;",
    values: [
      { value: "ease", description: "Default. Slow start, fast middle, slow end.", syntax_example: "div { transition-timing-function: ease; }" },
      { value: "linear", description: "Constant speed throughout.", syntax_example: "div { transition-timing-function: linear; }" },
      { value: "ease-in", description: "Slow start, accelerates.", syntax_example: "div { transition-timing-function: ease-in; }" },
      { value: "ease-out", description: "Fast start, decelerates to stop.", syntax_example: "div { transition-timing-function: ease-out; }" },
      { value: "ease-in-out", description: "Slow start, fast middle, slow end — more symmetrical than ease.", syntax_example: "div { transition-timing-function: ease-in-out; }" },
      { value: "cubic-bezier(n,n,n,n)", description: "Custom speed curve with four control points.", syntax_example: "div { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); }" },
      { value: "steps(n, start|end)", description: "Step function — jumps between states in discrete steps.", syntax_example: "div { transition-timing-function: steps(4, end); }" },
      { value: "initial", description: "Resets to default (ease).", syntax_example: "div { transition-timing-function: initial; }" },
      { value: "inherit", description: "Inherits from parent.", syntax_example: "div { transition-timing-function: inherit; }" }
    ],
    examples: [{ label: "Smooth ease-in-out button hover", code: `.btn {\n  transition: transform 0.3s ease-in-out;\n}\n\n.btn:hover {\n  transform: scale(1.05);\n}` }],
    browser_support: { chrome: "26", edge: "12", firefox: "16", safari: "9", opera: "12.1" }
  }

      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      topic: "Miscellaneous",
      definition: "",
      what_it_introduced: "",
      note: "",
      tip: "",
      properties: [

        // appearance

      ]
    }

  ] // end topics
}; // end css3_lessons
