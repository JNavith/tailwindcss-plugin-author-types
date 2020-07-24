declare module "tailwindcss";

declare module "tailwindcss/plugin" {
    import { CreatePlugin } from "src"; // eslint-disable-line import/no-unresolved

    const createPlugin: CreatePlugin;
    export = createPlugin;
}
