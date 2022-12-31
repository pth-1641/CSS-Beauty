export const importComponents = async (folder) => {
  let allComponents;
  switch (folder) {
    case 'Loaders':
      allComponents = import.meta.glob(`../components/Loaders/*.svelte`);
      break;
    case 'Inputs':
      allComponents = import.meta.glob(`../components/Inputs/*.svelte`);
      break;
    case 'Buttons':
      allComponents = import.meta.glob(`../components/Buttons/*.svelte`);
      break;
    default:
      allComponents = [];
  }
  const components = [];

  for (const path in allComponents) {
    if (path.includes('index')) continue;
    const module = await allComponents[path]();
    const name = module.default;
    const fileName = path.split('/').pop().split('.')[0];
    const raw = await import(`../components/${folder}/${fileName}.svelte?raw`);
    const content = raw.default;
    const html = content.split('</script>')[1].split('<style>')[0].trim();
    const css = content.split('<style>')[1].replace('</style>', '');
    components.push({ html, css, name });
  }

  return components;
};
