// css_guide_engine.js
// Builds a three-level toggle list: CSS Version → Topic Group → Property
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

// ─── § 3  BUILD GROUPED DATA ─────────────────────────────────────────────────
function build_version_groups() {
  const versions = {};

  atoz_properties_lessons.forEach(function(lesson) {
    const version = lesson.category || "Miscellaneous";
    const topic = css_topic_map[lesson.property] || "Miscellaneous";

    if (!versions[version]) versions[version] = {};
    if (!versions[version][topic]) versions[version][topic] = [];

    versions[version][topic].push(lesson);
  });

  return versions;
}

// ─── § 4  TOGGLE HANDLER ─────────────────────────────────────────────────────
function toggle_item(trigger_el) {
  const parent_el = trigger_el.parentElement;
  const list_el = parent_el.querySelector(":scope > .topic-group-list, :scope > .topic-property-list");
  const chevron_el = trigger_el.querySelector(".chevron");

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

// ─── § 5  PROPERTY CLICK HANDLER ─────────────────────────────────────────────
function on_property_click(property_name) {
  const lesson = atoz_properties_lessons.find(function(l) {
    return l.property === property_name;
  });

  if (!lesson) return;

  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    const topic = css_topic_map[property_name] || "Miscellaneous";
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

// ─── § 6  RENDER LESSON DETAIL ───────────────────────────────────────────────
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

  // Values — merge additional values from css_guide_additional_values.js
  let values_html = "";
  if (lesson.values && lesson.values.length) {
    values_html = '<h4>Values</h4><ol>';
    lesson.values.forEach(function(v) {

      // Look up additional values for this value name
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

      values_html +=
        '<li>' +
          '<h5>' + v.value + '</h5>' +
          '<p>' + v.description + '</p>' +
          (v.syntax_example ? '<p class="syntax-example">' + v.syntax_example + '</p>' : '') +
          (v.units_note     ? '<p class="syntax-example">' + v.units_note     + '</p>' : '') +
          additional_html +
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
      reference_html +
      '<hr>' +
      '<p>' + lesson.definition + '</p>' +
      info_html +

      '<h4>Default Value :</h4>' +

      '<h4>Syntax :</h4>' +
      '<pre class="code-block">' + lesson.syntax + '</pre>' +

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
      tip_html +
      note_html +
      values_html +
      examples_html +
      browser_html +
    '</div>';

  document.getElementById("css-toggle-list").classList.add("hidden");
  document.getElementById("css-back-btn").classList.remove("hidden");
  detail_el.classList.remove("hidden");
}

// ─── § 7  BACK TO LIST ───────────────────────────────────────────────────────
function show_topic_list() {
  document.getElementById("css-toggle-list").classList.remove("hidden");
  document.getElementById("css-lesson-detail").classList.add("hidden");
  document.getElementById("css-back-btn").classList.add("hidden");

  const breadcrumb_el = document.getElementById("css-guide-breadcrumb");
  if (breadcrumb_el) {
    breadcrumb_el.innerHTML = '<span class="breadcrumb-active">CSS Guide</span>';
  }
}

// ─── § 8  BUILD THREE-LEVEL TOGGLE LIST ──────────────────────────────────────
function build_toggle_list() {
  const container = document.getElementById("css-toggle-list");
  if (!container) return;

  const versions = build_version_groups();
  let html = '<ul class="topic-list">';

  version_order.forEach(function(version) {
    const topics = versions[version];
    if (!topics) return;

    // Level 1: CSS version
    html += '<li class="version-group content-block">';
    html +=   '<div class="topic-trigger" onclick="toggle_item(this)">';
    html +=     '<em class="chevron">▶</em>';
    html +=     '<h4>' + version + '</h4>';
    html +=   '</div>';
    html +=   '<ul class="topic-group-list hidden">';

    // Level 2: topic groups
    topic_order.forEach(function(topic) {
      const lessons = topics[topic];
      if (!lessons || lessons.length === 0) return;

      html += '<li class="topic-group">';
      html +=   '<div class="topic-trigger" onclick="toggle_item(this)">';
      html +=     '<em class="chevron">▶</em>';
      html +=     '<h4>' + topic + '</h4>';
      html +=   '</div>';
      html +=   '<ul class="topic-property-list hidden">';

      // Level 3: properties
      lessons.forEach(function(lesson) {
        html += '<li class="property-item" onclick="on_property_click(\'' + lesson.property + '\')">';
        html +=   lesson.property;
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

// ─── § 9  INIT ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  build_toggle_list();
});
