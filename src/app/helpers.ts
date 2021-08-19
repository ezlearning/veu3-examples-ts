import { Menu } from "@/common/models/app";
import { RouteRecordRaw } from "vue-router";

export function pathLevel(path: string): number {
  return path.replace(/[^/]/g, "").length;
}

export function routes2Menu(routes: RouteRecordRaw[]): Menu[] {
  const menus: Menu[] = [];
  return routes.reduce((prev, curr) => {
    if (pathLevel(curr.path) <= 1) {
      prev.push({
        name: curr.name as string,
        prefix: "/",
      });
    } else {
      const folders = curr.path.split("/");
      const exist = prev.some((p) => p.name === folders[1]);
      if (!exist) {
        prev.push({
          name: folders[1],
          prefix: folders.slice(0, 2).join("/"),
        });
      }
    }

    return prev;
  }, menus);
}
