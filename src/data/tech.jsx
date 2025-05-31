const Technologies = [
  { name: "3DS Max", icon: "view_in_ar" },
  { name: "Accessibility", icon: "accessibility" },
  { name: "Adobe Audition", icon: "graphic_eq" },
  { name: "Adobe Illustrator", icon: "draw" },
  { name: "Adobe Photoshop", icon: "palette" },
  { name: "Adobe Premiere", icon: "movie" },
  { name: "Android", icon: "phone_android" },
  { name: "ASP .NET", icon: "cloud" },
  { name: "AZURE", icon: "cloud_queue" },
  { name: "Blender", icon: "3d_rotation" },
  { name: "C#", icon: "tag" },
  { name: "CSS", icon: "css" },
  { name: "GIT", icon: "fork_right" },
  { name: "HTML", icon: "html" },
  { name: "iOS", icon: "phone_iphone" },
  { name: "JavaScript", icon: "javascript" },
  { name: "NODE", icon: "hub" },
  { name: "PWA", icon: "install_mobile" },
  { name: "Python", icon: "format_indent_increase" },
  { name: "REACT", icon: "hive" },
  { name: "SCSS", icon: "css" },
  { name: "SEO", icon: "search" },
  { name: "Three.js", icon: "screenshot_monitor" },
  { name: "TypeScript", icon: "data_object" },
  { name: "Umbraco CMS", icon: "wysiwyg" },
  { name: "WebGL", icon: "laptop_mac" },
  { name: "Freemarker", icon: "code" },
  { name: "CMS", icon: "wysiwyg" },
  { name: "AMP", icon: "book_online" },
  { name: "WEBPACK", icon: "integration_instructions" },
  { name: "JEST", icon: "check_circle" },
  { name: "Unit Testing", icon: "fact_check" },
  { name: "Storybook", icon: "menu_book" },
  { name: "PM2", icon: "settings_power" },
];

function GetTech(name) {
  const output = Technologies.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return output ? output : null;
}

export { GetTech };
