// css_guide_engine.js
// Builds a three-level toggle list: CSS Version → Topic Group → Property
// Level 1 data: css_levels.js
// Level 2 data: css_topics.js
// Level 3 data: atoz_properties_lessons (existing)
// No inline styles. All styling via stylesheet classes.

// ─── § 1  VERSION ORDER ──────────────────────────────────────────────────────
const version_order = ["CSS1", "CSS2", "CSS3", "CSS4"];

// ─── § 2  TOPIC ORDER ────────────────────────────────────────────────────────
const topic_order = [
  "Accessibility & UI Controls",
  "Animation",
  "Backgrounds",
  "Borders",
  "Box Model",
  "Clipping & Shape",
  "Color",
  "Content & Counters",
  "Display & Visibility",
  "Effects & Filters",
  "Flexbox",
  "Float & Clear",
  "Fonts & Typography",
  "Grid Layout",
  "Images & Objects",
  "Lists",
  "Logical Properties",
  "Masking",
  "Multi-Column Layout",
  "Outline",
  "Positioning",
  "Scroll & Snap",
  "Selectors",
  "Tables",
  "Text",
  "Transforms",
  "Transitions",
  "3D & Perspective",
  "Miscellaneous"
];

// ─── § 2B  NAVIGATION STACK ──────────────────────────────────────────────────
const nav_stack = [];

function push_nav_state() {
  const detail_el     = document.getElementById("css-lesson-detail");
  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  const toggle_el     = document.getElementById("css-toggle-list");

  nav_stack.push({
    is_list:         !toggle_el.classList.contains("hidden"),
    detail_html:     detail_el     ? detail_el.innerHTML     : "",
    breadcrumb_html: breadcrumb_el ? breadcrumb_el.innerHTML : ""
  });
}

// ─── § 3  TOGGLE HANDLER ─────────────────────────────────────────────────────
function toggle_item(chevron_el) {
  const trigger_el = chevron_el.parentElement;
  const parent_el  = trigger_el.parentElement;
  const list_el    = parent_el.querySelector(":scope > .topic-group-list, :scope > .topic-property-list, :scope > .property-values-list");

  if (!list_el) return;

  const is_open = !list_el.classList.contains("hidden");

  if (is_open) {
    list_el.classList.add("hidden");
    chevron_el.textContent = "▶";
  } else {
    list_el.classList.remove("hidden");
    chevron_el.textContent = "▼";
  }
}

// ─── § 4  VERSION CLICK ──────────────────────────────────────────────────────
function on_version_click(version_name) {
  const version_obj = css_levels.find(function(v) {
    return v.version === version_name;
  });

  if (!version_obj) return;

  push_nav_state();

  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    breadcrumb_el.innerHTML =
      '<span class="breadcrumb-active">CSS Guide</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + version_name + '</span>';
  }

  render_version_detail(version_obj);
}

// ─── § 5  TOPIC CLICK ────────────────────────────────────────────────────────
function on_topic_click(topic_name, version_name) {
  const topic_obj = css_topics.find(function(t) {
    return t.topic === topic_name;
  });

  if (!topic_obj) return;

  push_nav_state();

  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    breadcrumb_el.innerHTML =
      '<span class="breadcrumb-active">CSS Guide</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + version_name + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + topic_name + '</span>';
  }

  render_topic_detail(topic_obj);
}

// ─── § 6  PROPERTY CLICK ─────────────────────────────────────────────────────
function on_property_click(property_name) {
  const lesson = atoz_properties_lessons.find(function(l) {
    return l.property === property_name;
  });

  if (!lesson) return;

  push_nav_state();

  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    const topic   = css_topic_map[property_name] || "Miscellaneous";
    const version = lesson.category || "";
    breadcrumb_el.innerHTML =
      '<span class="breadcrumb-active">CSS Guide</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + version + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + topic + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + property_name + '</span>';
  }

  render_lesson_detail(lesson);
}

// ─── § 6B  VALUE CLICK ───────────────────────────────────────────────────────
function on_value_click(value_name, property_name) {
  const lesson = atoz_properties_lessons.find(function(l) {
    return l.property === property_name;
  });

  if (!lesson) return;

  push_nav_state();

  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    const topic   = (typeof css_topic_map !== "undefined" && css_topic_map[property_name]) || "Miscellaneous";
    const version = lesson.category || "";
    breadcrumb_el.innerHTML =
      '<span class="breadcrumb-active">CSS Guide</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + version + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + topic + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + property_name + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + value_name + '</span>';
  }

  render_value_detail(value_name, lesson);
}

// ─── § X  TOGGLE EXPAND AND CONTRACT ─────────────────────────────────────────
// ─── § X  TOGGLE EXPAND AND CONTRACT ─────────────────────────────────────────
function toggle_expand(clicked_el) {
  const card       = clicked_el.closest(".card");
  const all_bodies = card.querySelectorAll(".expand-body");
  const all_titles = card.querySelectorAll(".expand-title");
  const this_body  = clicked_el.nextElementSibling;
  const is_open    = !this_body.classList.contains("hidden");

  all_bodies.forEach(function(b) { b.classList.add("hidden"); });
  all_titles.forEach(function(t) { t.classList.remove("expanded"); });

  // Remove any previously added value crumb
  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    const existing_sep = breadcrumb_el.querySelector(".breadcrumb-value-sep");
    const existing_val = breadcrumb_el.querySelector(".breadcrumb-value");
    if (existing_sep) existing_sep.remove();
    if (existing_val) existing_val.remove();
  }

  if (!is_open) {
    this_body.classList.remove("hidden");
    clicked_el.classList.add("expanded");

    // Append value name to breadcrumb
    if (breadcrumb_el) {
      breadcrumb_el.innerHTML +=
        '<span class="breadcrumb-sep breadcrumb-value-sep"> › </span>' +
        '<span class="breadcrumb-active breadcrumb-value">' + clicked_el.textContent + '</span>';
    }
  }
}


// ─── § 7  RENDER VERSION DETAIL ──────────────────────────────────────────────
function render_version_detail(version_obj) {
  const detail_el = document.getElementById("css-lesson-detail");
  if (!detail_el) return;

  let lessons_html = "";
  if (version_obj.lessons && version_obj.lessons.length) {
    lessons_html = '<ul class="topic-property-list">';
    version_obj.lessons.forEach(function(topic_name) {
      const safe_topic   = topic_name.replace(/'/g, "\\'");
      const safe_version = version_obj.version.replace(/'/g, "\\'");
      lessons_html += '<li class="property-item" onclick="on_topic_click(\'' + safe_topic + '\', \'' + safe_version + '\')">';
      lessons_html +=   topic_name;
      lessons_html += '</li>';
    });
    lessons_html += '</ul>';
  }

  detail_el.innerHTML =
    '<div class="card">' +
      '<h3>' + version_obj.version + '</h3>' +
      '<h4>Released : ' + version_obj.released + '</h4>' +
      '<hr>' +
      '<ol class="expand-list">' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Lesson Topics :</div>' +
          '<div class="expand-body">' + lessons_html + '</div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Definition :</div>' +
          '<div class="expand-body hidden"><p>' + version_obj.definition + '</p></div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">What It Introduced :</div>' +
          '<div class="expand-body hidden"><p>' + version_obj.what_it_introduced + '</p></div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Note :</div>' +
          '<div class="expand-body hidden"><p>' + version_obj.note + '</p></div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Tip :</div>' +
          '<div class="expand-body hidden"><p>' + version_obj.tip + '</p></div>' +
        '</li>' +
      '</ol>' +
    '</div>';

  document.getElementById("css-toggle-list").classList.add("hidden");
  document.getElementById("css-back-btn").classList.remove("hidden");
  detail_el.classList.remove("hidden");
}

// ─── § 8  RENDER TOPIC DETAIL ────────────────────────────────────────────────
function render_topic_detail(topic_obj) {
  const detail_el = document.getElementById("css-lesson-detail");
  if (!detail_el) return;

  let lessons_html = "";
  if (topic_obj.lessons && topic_obj.lessons.length) {
    lessons_html = '<ul class="topic-property-list">';
    topic_obj.lessons.forEach(function(property_name) {
      const safe_property = property_name.replace(/'/g, "\\'");
      lessons_html += '<li class="property-item" onclick="on_property_click(\'' + safe_property + '\')">';
      lessons_html +=   property_name;
      lessons_html += '</li>';
    });
    lessons_html += '</ul>';
  }

  detail_el.innerHTML =
    '<div class="card">' +
      '<h3>' + topic_obj.topic + '</h3>' +
      
      '<ol class="expand-list">' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Property Types :</div>' +
          '<div class="expand-body">' + lessons_html + '</div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Definition</div>' +
          '<div class="expand-body hidden"><p>' + topic_obj.definition + '</p></div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">What It Introduced</div>' +
          '<div class="expand-body hidden"><p>' + topic_obj.what_it_introduced + '</p></div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Note</div>' +
          '<div class="expand-body hidden"><p>' + topic_obj.note + '</p></div>' +
        '</li>' +
        '<li>' +
          '<div class="expand-title" onclick="toggle_expand(this)">Tip</div>' +
          '<div class="expand-body hidden"><p>' + topic_obj.tip + '</p></div>' +
        '</li>' +
      '</ol>' +
    '</div>';

  document.getElementById("css-toggle-list").classList.add("hidden");
  document.getElementById("css-back-btn").classList.remove("hidden");
  detail_el.classList.remove("hidden");
}

// ─── § 9  RENDER PROPERTY DETAIL ─────────────────────────────────────────────
function render_lesson_detail(lesson) {
  const detail_el = document.getElementById("css-lesson-detail");
  if (!detail_el) return;

  // Merge default value data from css_guide_default_values.js
  const dv = (typeof css_guide_default_values !== "undefined" && css_guide_default_values[lesson.property])
    ? css_guide_default_values[lesson.property]
    : {};

  // Merge additional values data from css_guide_additional_values.js
  const av = (typeof css_guide_additional_values !== "undefined" && css_guide_additional_values[lesson.property])
    ? css_guide_additional_values[lesson.property]
    : {};

  // Reference link
  let reference_html = "";
  if (lesson.w3schools_url) {
    reference_html =
      '<h4>Reference</h4>' +
      '<p><a href="' + lesson.w3schools_url + '" target="_blank">W3Schools Link</a></p>';
  }

  // Property info: inherited, animatable, applies_to
  let applies_html = "";
  if (lesson.applies_to && lesson.applies_to.length) {
    applies_html = '<li><strong>Applies to:</strong> ' + lesson.applies_to.join(", ") + '</li>';
  }
  let info_html =
    '<h4>Property Info</h4><ul>' +
      (lesson.inherited  !== undefined ? '<li><strong>Inherited:</strong> '   + lesson.inherited  + '</li>' : '') +
      (lesson.animatable !== undefined ? '<li><strong>Animatable:</strong> '  + lesson.animatable + '</li>' : '') +
      applies_html +
    '</ul>';

  // Tip
  let tip_html = "";
  if (lesson.tip) {
    tip_html = '<h4>Tip</h4><p>' + lesson.tip + '</p>';
  }

  // Note
  let note_html = "";
  if (lesson.note) {
    note_html = '<h4>Note</h4><p>' + lesson.note + '</p>';
  }

  // Values — toggle list at top of card
  let values_html = "";
  if (lesson.values && lesson.values.length) {
    values_html = '<h4>Values</h4><ol class="expand-list">';
    lesson.values.forEach(function(v) {

      const extra = av[v.value] || [];
      let additional_html = "";
      if (extra.length) {
        additional_html = '<ul class="additional-values-list">';
        extra.forEach(function(av_item) {
          additional_html +=
            '<li>' +
              '<h5>' + av_item.value + '</h5>' +
              '<p>' + av_item.description + '</p>' +
              (av_item.syntax_example
                ? '<p class="syntax-example">' + av_item.syntax_example + '</p>'
                : '') +
            '</li>';
        });
        additional_html += '</ul>';
      }

      const safe_value = v.value.replace(/'/g, "\\'");
const safe_property = lesson.property.replace(/'/g, "\\'");
values_html +=
  '<li class="value-item">' +
    '<div class="expand-title" onclick="toggle_expand(this)">' + v.value + '</div>' +
    '<div class="expand-body hidden">' +
      '<p>' + (v.description || '') + '</p>' +
      (v.syntax_example ? '<pre class="code-block">' + v.syntax_example + '</pre>' : '') +
    '</div>' +
  '</li>';
    });
    values_html += '</ol>';
  }
  
  // Examples
  let examples_html = "";
  if (lesson.examples && lesson.examples.length) {
    examples_html = '<h4>Examples</h4><ol>';
    lesson.examples.forEach(function(ex) {
      examples_html +=
        '<li>' +
          '<p>' + ex.label + '</p>' +
          '<pre class="code-block">' + ex.code + '</pre>' +
        '</li>';
    });
    examples_html += '</ol>';
  }

  // Browser support
  let browser_html = "";
  if (lesson.browser_support) {
    const bs = lesson.browser_support;
    browser_html = '<h4>Browser Support</h4><ul>';
    if (bs.chrome)  browser_html += '<li><strong>Chrome:</strong> '  + bs.chrome  + '</li>';
    if (bs.edge)    browser_html += '<li><strong>Edge:</strong> '    + bs.edge    + '</li>';
    if (bs.firefox) browser_html += '<li><strong>Firefox:</strong> ' + bs.firefox + '</li>';
    if (bs.safari)  browser_html += '<li><strong>Safari:</strong> '  + bs.safari  + '</li>';
    if (bs.opera)   browser_html += '<li><strong>Opera:</strong> '   + bs.opera   + '</li>';
    browser_html += '</ul>';
  }

  detail_el.innerHTML =
    '<div class="card">' +
      '<h3>Property Name : ' + lesson.property + '</h3>' +
      '<hr>' +
      values_html +
      reference_html +
      '<p>' + lesson.definition + '</p>' +
      info_html +
      note_html +
      '<h4>Default Value :</h4>' +
      '<p>' + lesson.default_value.charAt(0).toUpperCase() + lesson.default_value.slice(1) + '</p>' +
      (dv.default_value_description
        ? '<p>' + dv.default_value_description + '</p>'
        : '') +
      (dv.default_value_syntax
        ? '<pre class="code-block">' + dv.default_value_syntax + '</pre>'
        : '') +
      (dv.default_value_applies_to && dv.default_value_applies_to.length
        ? '<p><strong>Applies to :</strong> ' + dv.default_value_applies_to.join(", ") + '</p>'
        : '') +
      '<h4>Syntax :</h4>' +
      '<pre class="code-block">' + lesson.syntax + '</pre>' +
      tip_html +
      examples_html +
      browser_html +
    '</div>';

  document.getElementById("css-toggle-list").classList.add("hidden");
  document.getElementById("css-back-btn").classList.remove("hidden");
  detail_el.classList.remove("hidden");
}

// ─── § 9B  RENDER VALUE DETAIL ───────────────────────────────────────────────
function render_value_detail(value_name, lesson) {
  const detail_el = document.getElementById("css-lesson-detail");
  if (!detail_el) return;

  let values_html = "";

  // Applies to
  let applies_html = "";
  if (lesson.applies_to && lesson.applies_to.length) {
    applies_html = '<h4>Applies To</h4><p>' + lesson.applies_to.join(", ") + '</p>';
  }

  // Tip
  let tip_html = "";
  if (lesson.tip) {
    tip_html = '<h4>Tip</h4><p>' + lesson.tip + '</p>';
  }

  // Note
  let note_html = "";
  if (lesson.note) {
    note_html = '<h4>Note</h4><p>' + lesson.note + '</p>';
  }

  // Examples
  let examples_html = "";
  if (lesson.examples && lesson.examples.length) {
    examples_html = '<h4>Examples</h4><ol>';
    lesson.examples.forEach(function(ex) {
      examples_html +=
        '<li>' +
          '<p>' + ex.label + '</p>' +
          '<pre class="code-block">' + ex.code + '</pre>' +
        '</li>';
    });
    examples_html += '</ol>';
  }

  // Reference
  let reference_html = "";
  if (lesson.w3schools_url) {
    reference_html =
      '<h4>Reference</h4>' +
      '<p><a href="' + lesson.w3schools_url + '" target="_blank">W3Schools Link</a></p>';
  }

  detail_el.innerHTML =
    '<div class="card">' +
      '<h3>Value Name : ' + value_name + '</h3>' +
      '<hr>' +
      values_html +
      '<h4>Definition</h4>' +
      '<p>' + lesson.definition + '</p>' +
      '<h4>Default Value</h4>' +
      '<p>' + lesson.default_value.charAt(0).toUpperCase() + lesson.default_value.slice(1) + '</p>' +
      '<h4>Syntax</h4>' +
      '<pre class="code-block">' + lesson.syntax + '</pre>' +
      applies_html +
      tip_html +
      note_html +
      examples_html +
      reference_html +
    '</div>';

  document.getElementById("css-toggle-list").classList.add("hidden");
  document.getElementById("css-back-btn").classList.remove("hidden");
  detail_el.classList.remove("hidden");
}

// ─── § 10  BACK TO LIST ──────────────────────────────────────────────────────
function show_topic_list() {
  const detail_el     = document.getElementById("css-lesson-detail");
  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  const toggle_el     = document.getElementById("css-toggle-list");
  const back_btn      = document.getElementById("css-back-btn");

  if (nav_stack.length === 0) {
    toggle_el.classList.remove("hidden");
    detail_el.classList.add("hidden");
    back_btn.classList.add("hidden");
    if (breadcrumb_el) {
      breadcrumb_el.innerHTML = '<span class="breadcrumb-active">CSS Guide</span>';
    }
    return;
  }

  const prev = nav_stack.pop();

  if (prev.is_list) {
    toggle_el.classList.remove("hidden");
    detail_el.classList.add("hidden");
    back_btn.classList.add("hidden");
  } else {
    toggle_el.classList.add("hidden");
    detail_el.innerHTML = prev.detail_html;
    detail_el.classList.remove("hidden");
    back_btn.classList.remove("hidden");
  }

  if (breadcrumb_el) {
    breadcrumb_el.innerHTML = prev.breadcrumb_html;
  }
}

// ─── § 11  BUILD THREE-LEVEL TOGGLE LIST ─────────────────────────────────────
function build_toggle_list() {
  const container = document.getElementById("css-toggle-list");
  if (!container) return;

  let html = '<ul class="topic-list">';

  version_order.forEach(function(version_name) {
    const version_obj = css_levels.find(function(v) {
      return v.version === version_name;
    });

    if (!version_obj) return;

    // Level 1 : CSS version
    html += '<li class="version-group content-block">';
    html +=   '<div class="topic-trigger">';
    html +=     '<em class="chevron" onclick="toggle_item(this)">▶</em>';
    html +=     '<h4 onclick="on_version_click(\'' + version_name + '\')">' + version_name + '</h4>';
    html +=   '</div>';
    html +=   '<ul class="topic-group-list hidden">';

    // Level 2 : topic groups
    version_obj.lessons.forEach(function(topic_name) {
      const topic_obj = css_topics.find(function(t) {
        return t.topic === topic_name;
      });

      if (!topic_obj) return;

      const safe_topic   = topic_name.replace(/'/g, "\\'");
      const safe_version = version_name.replace(/'/g, "\\'");

      html += '<li class="topic-group">';
      html +=   '<div class="topic-trigger">';
      html +=     '<em class="chevron" onclick="toggle_item(this)">▶</em>';
      html +=     '<h4 onclick="on_topic_click(\'' + safe_topic + '\', \'' + safe_version + '\')">' + topic_name + '</h4>';
      html +=   '</div>';
      html +=   '<ul class="topic-property-list hidden">';

      // Level 3 : properties — chevron expands values list
      topic_obj.lessons.forEach(function(property_name) {
        const safe_property = property_name.replace(/'/g, "\\'");
        const lesson = atoz_properties_lessons.find(function(l) {
          return l.property === property_name;
        });

        html += '<li class="property-group">';
        html +=   '<div class="topic-trigger">';
        html +=     '<em class="chevron" onclick="toggle_item(this)">▶</em>';
        html +=     '<span>' + property_name + '</span>';
        html +=   '</div>';
        html +=   '<ul class="property-values-list hidden">';

        if (lesson && lesson.values && lesson.values.length) {
          lesson.values.forEach(function(v) {
            const safe_value = v.value.replace(/'/g, "\\'");
            html += '<li class="value-item" onclick="on_value_click(\'' + safe_value + '\', \'' + safe_property + '\')">';
            html +=   v.value;
            html += '</li>';
          });
        }

        html +=   '</ul>';
        html += '</li>';
      });

      html +=   '</ul>';
      html += '</li>';
    });

    html +=   '</ul>';
    html += '</li>';
  });

  html += '</ul>';
  container.innerHTML = html;
}

// ─── § 12  INIT ──────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  build_toggle_list();
});