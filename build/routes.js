/* eslint-disable */
// @ts-check
const path = require("path");
const fs = require("fs");

/**
 * 遍历出 src/pages/**\/*.vue 文件
 * 注意：views页面的路径规则由变化时需要做相应的调整．
 *
 * @param {string} root_dir src/projects
 * @param {string} current_dir 当前目录
 * @param {string} views 页面目录
 * @returns {string[]}
 */
function walk_dir(root_dir, views, current_dir) {
  /** @type {string[]} */
  const results = [];
  const files = fs.readdirSync(path.join(root_dir, current_dir));
  files.forEach((file) => {
    file = current_dir + "/" + file;
    const stat = fs.statSync(path.join(root_dir, file));
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results.push(...walk_dir(root_dir, views, file));
    } else if (
      file.includes(views) &&
      !file.includes("helpers") &&
      file.endsWith(".vue")
    ) {
      /* ./views/**.vue file */
      results.push(file);
    }
  });
  return results;
}

/**
 * 生成projects下模块的路由映射: src/router/static.ts
 * @param {string} views 页面目录
 * @param {string[]} excludes 排除模块
 */
function generate_static_routes(views, excludes = []) {
  const views_path = path.resolve(process.cwd(), "src");
  const views_exist = fs.existsSync(views_path);
  const files = views_exist ? walk_dir(views_path, views, ".") : [];
  const static_routes_file = path.resolve(
    process.cwd(),
    "src/router/static.ts"
  );

  // make sure directory exist
  const router_dir = path.dirname(static_routes_file);
  if (!fs.existsSync(router_dir)) {
    fs.mkdirSync(router_dir, { recursive: true });
  }

  const static_routes = ["/* eslint-disable */", "export const routes = ["];
  views = views.replace(/\//g, "");

  files.forEach((file) => {
    if (!excludes.some((exclude) => file.includes(exclude))) {
      // file: "./pages/folder/study-el-tree/StudyElTree.vue" => path: "/folder/study-el-tree"
      const route_path = ["", ...file.split("/").slice(2, -1)].join("/");
      const module_name = route_path.split("/").slice(1).join("$");
      const name = path.basename(file).split(".")[0];
      const comment = `/* webpackChunkName: "${module_name}" */`;
      static_routes.push(
        [
          "  { ",
          `path: "${route_path}", `,
          `name: "${name}", `,
          `component: () => import(${comment} "@${file.slice(1)}")`,
          " },",
        ].join("")
      );
    }
  });

  static_routes.push("];");
  static_routes.push("");
  fs.writeFileSync(static_routes_file, static_routes.join("\n"));
}

generate_static_routes("/pages/", []);

module.exports.generate_static_routes = generate_static_routes;
