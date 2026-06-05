// css_guide_engine.js
// Builds a nested inline toggle list:
// CSS Versions → Lesson Topics → Properties → Property Lesson → Values

// ─── § 1  VERSION ORDER ──────────────────────────────────────────────────────
const version_order = ["CSS1", "CSS2", "CSS3", "CSS4"];

// ─── § 2  TOPIC ORDER ────────────────────────────────────────────────────────
const topic_order = [
  "Accessibility & UI Controls",
  "Animation",
  "At-Rules",
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

// ─── § 3  GET VERSION DATA ───────────────────────────────────────────────────
function get_version_data(version_name) {
  if (version_name === "CSS1") return css1_lessons;
  if (version_name === "CSS2") return css2_lessons;
  if (version_name === "CSS3") return css3_lessons;
  if (version_name === "CSS4") return css4_lessons;
  return null;
}

// ─── § 4  REMOVE ELEMENT BY ID (DISABLED SAFELY) ────────────────────────────
// NOTE: replaced destructive behavior with safe hide-only model
function remove_by_id(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

// ─── § 5  UPDATE NAV PATH ────────────────────────────────────────────────────
function update_nav_path(crumbs) {
  const nav_el = document.getElementById("nav-path");
  if (!nav_el) return;
  let html = "<span>CSS Guide</span>";
  crumbs.forEach(function(crumb) {
    html += '<span class="separator"> › </span><span>' + crumb + "</span>";
  });
  nav_el.innerHTML = html;
}

// ─── § 6  RENDER VERSION TOPICS LIST ─────────────────────────────────────────
function render_version_topics_list() {
  const main_el = document.querySelector("main");
  if (!main_el) return;

  const ul = document.createElement("ul");
  ul.id = "version-topics-list";

  version_order.forEach(function(version_name) {
    const version_obj = get_version_data(version_name);
    if (!version_obj) return;

    const li = document.createElement("li");
    li.textContent = version_name;

    li.onclick = function() {
      li.classList.toggle("open");
      on_version_click(version_obj, li);
    };

    ul.appendChild(li);
  });

  main_el.appendChild(ul);
  update_nav_path([]);
}

// ─── § 7  VERSION CLICK ──────────────────────────────────────────────────────
function on_version_click(version_obj, clicked_li) {
  set_hidden("property-lesson", true);

  const existing = clicked_li.querySelector("#lesson-topics-list");
  if (!existing) {
    render_lesson_topics_list(version_obj, clicked_li);
  } else {
    existing.classList.toggle("hidden");
  }

  update_nav_path([version_obj.version]);
  document.getElementById("back-btn").classList.remove("hidden");
}

// ─── SAFE VISIBILITY ────────────────────────────────────────────────────────
function set_hidden(id, state) {
  const el = document.getElementById(id);
  if (!el) return;
  if (state) el.classList.add("hidden");
  else el.classList.remove("hidden");
}

// ─── § 8  LESSON TOPICS LIST ────────────────────────────────────────────────
function render_lesson_topics_list(version_obj, clicked_li) {
  const ul = document.createElement("ul");
  ul.id = "lesson-topics-list";

  const header_li = document.createElement("li");
  header_li.textContent = "Lesson Topics";

  const properties_ol = document.createElement("ol");
  properties_ol.id = "properties-list";

  header_li.onclick = function(e) {
    e.stopPropagation();
    header_li.classList.toggle("open");
    properties_ol.classList.toggle("hidden");
  };

  properties_ol.classList.remove("hidden");

  const sorted_topics = version_obj.topics
    ? version_obj.topics.slice().sort(function(a, b) {
        const ai = topic_order.indexOf(a.topic);
        const bi = topic_order.indexOf(b.topic);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      })
    : [];

  sorted_topics.forEach(function(topic_obj) {
    const li = document.createElement("li");
    li.textContent = topic_obj.topic;

    li.onclick = function(e) {
      e.stopPropagation();
      li.classList.toggle("open");
      on_topic_click(topic_obj, version_obj, li);
    };

    properties_ol.appendChild(li);
  });

  header_li.appendChild(properties_ol);
  ul.appendChild(header_li);

  const static_items = [
    "version",
    "released",
    "definition",
    "what_it_introduced",
    "note",
    "tip"
  ];

  static_items.forEach(function(name) {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });

  clicked_li.appendChild(ul);
  update_nav_path([]);
}

// ─── § 9  TOPIC CLICK ───────────────────────────────────────────────────────
function on_topic_click(topic_obj, version_obj, clicked_li) {
  let properties_ol = clicked_li.querySelector("#property-lessons");

  if (!properties_ol) {
    render_properties(topic_obj, version_obj, clicked_li);
  } else {
    properties_ol.classList.toggle("hidden");
  }

  update_nav_path([version_obj.version, topic_obj.topic]);
}

// ─── § 10  PROPERTIES ───────────────────────────────────────────────────────
function render_properties(topic_obj, version_obj, clicked_li) {
  let existing = clicked_li.querySelector("#properties-list");

  if (existing) {
    existing.classList.remove("hidden");
    return;
  }

  const ol = document.createElement("ol");
  ol.id = "property-lessons";

  topic_obj.properties.forEach(function(prop_obj) {
    const li = document.createElement("li");
    li.textContent = prop_obj.property;
    li.onclick = function(e) {
      e.stopPropagation();
      li.classList.toggle("open");
      on_property_click(prop_obj, version_obj, topic_obj.topic, li);
    };
    ol.appendChild(li);
  });

  clicked_li.appendChild(ol);
}

// ─── § 11  PROPERTY CLICK ───────────────────────────────────────────────────
function on_property_click(prop_obj, version_obj, topic_name, clicked_li) {
  const existing = clicked_li.querySelector("#property-lesson");
  if (existing) {
    existing.remove();
    return;
  }

  const other = document.getElementById("property-lesson");
  if (other) other.remove();

  render_property_lesson(prop_obj, clicked_li);
  update_nav_path([version_obj.version, topic_name, prop_obj.property]);
}

// ─── § 12  PROPERTY LESSON ──────────────────────────────────────────────────
function render_property_lesson(prop_obj, container) {
  if (!container) return;

  const existing = document.getElementById("property-lesson");
  if (existing) existing.remove();

  const div = document.createElement("div");
  div.id = "property-lesson";

  div.addEventListener("click", function(e) {
    e.stopPropagation();
  });

  const ul = document.createElement("ul");
  ul.id = "property-lesson-titles";

  const titles = [
    { label: "Definition", key: "definition", type: "p" },
    { label: "Values", key: "values", type: "values" },
    { label: "Syntax", key: "syntax", type: "code" },
    { label: "Default Value", key: "default_value", type: "code" },
    { label: "Tip", key: "tip", type: "p" },
    { label: "Note", key: "note", type: "p" }
  ];

  titles.forEach(function(title) {
    const li = document.createElement("li");
    li.textContent = title.label;

    if (title.type === "values") {
      li.appendChild(render_values_list(prop_obj));
    } else {
      li.onclick = function() {
        li.classList.toggle("open");
        toggle_lesson_content(li, prop_obj[title.key], title.type);
      };
    }

    ul.appendChild(li);
  });

  div.appendChild(ul);
  container.appendChild(div);
}

// ─── § 13  VALUE LIST ───────────────────────────────────────────────────────
function render_values_list(prop_obj) {
  const ul = document.createElement("ul");
  ul.id = "values-list";

  ul.addEventListener("click", function(e) {
    e.stopPropagation();
  });

  if (prop_obj.values) {
    prop_obj.values.forEach(function(v) {
      const li = document.createElement("li");
      li.textContent = v.value;

      li.onclick = function() {
        li.classList.toggle("open");
        toggle_value_content(li, v);
      };

      ul.appendChild(li);
    });
  }

  return ul;
}

// ─── § 14  TOGGLES ──────────────────────────────────────────────────────────
function toggle_lesson_content(li_el, content, type) {
  const existing = li_el.querySelector("p, code");
  if (existing) {
    existing.remove();
    return;
  }
  if (!content) return;

  const el = document.createElement(type === "code" ? "code" : "p");
  el.textContent = content;
  li_el.appendChild(el);
}

function toggle_value_content(li_el, value_obj) {
  const existing = li_el.querySelector("p, code");
  if (existing) {
    existing.remove();
    return;
  }

  if (value_obj.description) {
    const p = document.createElement("p");
    p.textContent = value_obj.description;
    li_el.appendChild(p);
  }

  if (value_obj.syntax_example) {
    const code = document.createElement("code");
    code.textContent = value_obj.syntax_example;
    li_el.appendChild(code);
  }
}

// ─── § 15  INIT ──────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  render_version_topics_list();
});
