const componentGlobs = {
  Loaders: import.meta.glob("../components/Loaders/*.svelte"),
  Inputs: import.meta.glob("../components/Inputs/*.svelte"),
  Buttons: import.meta.glob("../components/Buttons/*.svelte"),
};

export const importComponents = async (folder, onLoad) => {
  const allComponents = componentGlobs[folder] || [];
  const components = [];

  for (const path in allComponents) {
    if (path.includes("index")) continue;
    const module = await allComponents[path]();
    const name = module.default;
    const fileName = path.split("/").pop().split(".")[0];
    const raw = await import(`../components/${folder}/${fileName}.svelte?raw`);
    const content = raw.default;

    const htmlCodeBlocks = content.match(/<\/script>([^]*?)<style>/);
    const html = htmlCodeBlocks?.[1]?.trim();

    const cssCodeBlocks = content.match(/<style>([^]*?)<\/style>/);
    const css = cssCodeBlocks?.[1]?.split(":global(.dark)")?.[0]?.trim();
    components.push({ html, css, name });
    onLoad((components.length / Object.keys(allComponents).length) * 100);
  }

  return components;
};
