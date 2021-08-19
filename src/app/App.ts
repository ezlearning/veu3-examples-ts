import { computed, ref, onMounted, defineComponent, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import { useAppStore } from "@/common/stores/app";
import routes from "@/router/routes";
import { Menu } from "../common/models/app";
import { pathLevel, routes2Menu } from "./helpers";

export default defineComponent({
  name: "App",
  setup(props, { emit }) {
    const router = useRouter();
    const menus = ref(routes2Menu(routes));
    const app$ = useAppStore();

    onMounted(() => {});

    // router beforeEach
    router.beforeEach((to) => {
      const level = pathLevel(to.fullPath);
      if (level > 1) {
        const menu = menus.value.find(
          (m) => m.prefix != "/" && to.fullPath.startsWith(m.prefix)
        );
        if (menu) {
          app$.switchMenu(menu);
        }
      }
      return true;
    });

    // computed
    const moduleRoutes = computed(() => {
      return routes.filter((route) => {
        if (app$.currentMenu.prefix === "/") {
          return pathLevel(route.path) <= 1;
        }

        return route.path.startsWith(app$.currentMenu.prefix);
      });
    });

    return {
      routes,
      moduleRoutes,
      menus,
      app$,
      pathLevel,
    };
  },
});
