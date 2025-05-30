const Technologies = [
  { name: "3DS Max", icon: "view_in_ar" },
  { name: "REACT", icon: "hive" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "data_object" },
  { name: "Adobe Photoshop", icon: "palette" },
  { name: "Adobe Illustrator", icon: "draw" },
  { name: "Adobe Audition", icon: "graphic_eq" },
  { name: "Adobe Premiere", icon: "movie" },
  { name: "Python", icon: "format_indent_increase" },
  { name: "Blender", icon: "3d_rotation" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "GIT", icon: "fork_right" },
  { name: "NODE", icon: "hub" },
  { name: "iOS", icon: "phone_iphone" },
  { name: "Android", icon: "phone_android" },
];

function GetTech(name) {
  const output = Technologies.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return output ? output : null;
}

export { GetTech };
