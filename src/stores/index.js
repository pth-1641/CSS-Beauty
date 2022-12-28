import { writable } from 'svelte/store';

export const codeInspect = writable({
  htmlCode: null,
  cssCode: null,
});

export const isOpenModal = writable(false);

export const getSelectedItemCode = async (item) => {
  const fileName = item.split('<')[1].slice(0, -1).toLowerCase();
  const folder = item.split('<')[1].split('-')[0] + 's';
  const file = await import(`../components/${folder}/${fileName}.svelte?raw`);
  let content = file.default;
  const htmlCode = content.split('</script>')[1].split('<style>')[0].trim();
  const cssCode = content.split('<style>')[1].replace('</style>', '');
  codeInspect.update(
    (code) =>
      (code = {
        htmlCode: htmlCode.replace(/style="--mainColor:{mainColor}"/g, ''),
        cssCode: cssCode.replace(/var(--mainColor)/g, '#ff3e00'),
      })
  );
  isOpenModal.update((status) => (status = true));
};
