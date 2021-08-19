import { routes } from "./static";
import HelloWorld from "@/components/HelloWorld.vue";

export default [{ path: "/", name: "Home", component: HelloWorld }, ...routes];
