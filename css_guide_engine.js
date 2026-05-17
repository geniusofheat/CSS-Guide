// css_guide_engine.js
// Dynamically builds the CSS guide toggle list from atoz_properties_lessons
// grouped by lesson topic using css_topic_map.
// No inline styles. All styling via stylesheet classes.

// ─── § 1  TOPIC ORDER ────────────────────────────────────────────────────────
// Controls the order topics appear in the toggle list.
const topic_order = [
  "Display & Visibility",
  "Box Model",
  "Positioning",
  "Flexbox",
  "Grid Layout",
  "Multi-Column Layout",
  "Float & Clear",
  "Backgrounds",
  "Color",
  "Borders",
  "Outline",
  "Fonts & Typography",
  "Text",
  "Lists",
  "Tables",
  "Animation",
  "Transitions",
  "Transforms",
  "3D & Perspective",
  "Effects & Filters",
  "Images & Objects",
  "Scroll & Snap",
  "Masking",
  "Clipping & Shape",
  "Content & Counters",
  "Logical Properties",
  "Accessibility & UI Controls",
  "Miscellaneous"
];

// ─── § 2  GROUP LESSONS BY TOPIC ─────────────────────────────────────────────
function build_topic_groups() {
  const groups = {};

  atoz_properties_lessons.forEach(function(lesson) {
    const topic = css_topic_map[lesson.property] || "Miscellaneous";
    if (!groups[topic]) {
      groups[topic] = [];
    }
    groups[topic].push(lesson);
  });

  return groups;
}

// ─── § 3  TOGGLE HANDLER ─────────────────────────────────────────────────────
function toggle_topic(trigger_el) {
  const group_el = trigger_el.parentElement;
  const list_el = group_el.querySelector(".topic-property-list");
  const chevron_el = trigger_el.querySelector(".chevron");

  const is_open = !list_el.classList.contains("hidden");

  if (is_open) {
    list_el.classList.add("hidden");
    chevron_el.textContent = "▶";
  } else {
    list_el.classList.remove("hidden");
    chevron_el.textContent = "▼";
  }
}

// ─── § 4  PROPERTY CLICK HANDLER ─────────────────────────────────────────────
function on_property_click(property_name) {
  // Find the lesson object
  const lesson = atoz_properties_lessons.find(function(l) {
    return l.property === property_name;
  });

  if (!lesson) return;

  // Update breadcrumb
  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    const topic = css_topic_map[property_name] || "Miscellaneous";
    breadcrumb_el.innerHTML =
      '<span class="breadcrumb-active">CSS Guide</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + topic + '</span>' +
      '<span class="breadcrumb-sep"> › </span>' +
      '<span class="breadcrumb-active">' + property_name + '</span>';
  }

  // Render lesson detail
  render_lesson_detail(lesson);
}

// ─── § 5  RENDER LESSON DETAIL ───────────────────────────────────────────────
function render_lesson_detail(lesson) {
  const detail_el = document.getElementById("css-lesson-detail");
  if (!detail_el) return;

  // Build values list
  let values_html = "";
  if (lesson.values && lesson.values.length) {
    values_html = '<ol>';
    lesson.values.forEach(function(v) {
      values_html +=
        '<li>' +
          '<h5>' + v.value + '</h5>' +
          '<p>' + v.description + '</p>' +
          (v.syntax_example
            ? '<p class="syntax-example">' + v.syntax_example + '</p>'
            : '') +
        '</li>';
    });
    values_html += '</ol>';
  }

  // Build examples list
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
  
  let reference_html = "";

if (lesson.w3schools_url) {
  reference_html =
    '<h4>Reference</h4>' +
    '<p><a href="' + lesson.w3schools_url + '" target="_blank">W3Schools Link</a></p>';
}

  detail_el.innerHTML =
    '<div class="card">' +
      '<h3>' + lesson.property + '</h3>' +
      reference_html +
      '<hr>' +
      '<p>' + lesson.definition + '</p>' +
      '<h4>Syntax</h4>' +
      '<pre class="code-block">' + lesson.syntax + '</pre>' +
      '<h4>Default Value</h4>' +
      '<p>' + lesson.default_value + '</p>' +
      '<h4>Values</h4>' +
      values_html +
      examples_html +
      
    '</div>';

  // Show detail panel, hide toggle list, show back button
  document.getElementById("css-toggle-list").classList.add("hidden");
  document.getElementById("css-back-btn").classList.remove("hidden");
  detail_el.classList.remove("hidden");
}

// ─── § 6  BACK TO LIST ───────────────────────────────────────────────────────
function show_topic_list() {
  document.getElementById("css-toggle-list").classList.remove("hidden");
  document.getElementById("css-lesson-detail").classList.add("hidden");
  document.getElementById("css-back-btn").classList.add("hidden");

  // Reset breadcrumb
  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    breadcrumb_el.innerHTML = '<span class="breadcrumb-active">CSS Guide</span>';
  }
}

// ─── § 7  BUILD TOGGLE LIST HTML ─────────────────────────────────────────────
function build_toggle_list() {
  const container = document.getElementById("css-toggle-list");
  if (!container) return;

  const groups = build_topic_groups();
  let html = '<ul class="topic-list">';

  topic_order.forEach(function(topic) {
    const lessons = groups[topic];
    if (!lessons || lessons.length === 0) return;

    html += '<li class="topic-group content-block">';
    html +=   '<div class="topic-trigger" onclick="toggle_topic(this)">';
    html +=     '<em class="chevron">▶</em>';
    html +=     '<h4>' + topic + '</h4>';
    html +=   '</div>';
    html +=   '<ol class="topic-property-list hidden">';

    lessons.forEach(function(lesson) {
      html +=   '<li class="property-item" onclick="on_property_click(\'' + lesson.property + '\')">';
      html +=     lesson.property;
      html +=   '</li>';
    });

    html +=   '</ol>';
    html += '</li>';
  });

  html += '</ul>';
  container.innerHTML = html;
}

// ─── § 8  INIT ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  build_toggle_list();
});
