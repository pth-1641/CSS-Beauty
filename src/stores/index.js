import { writable } from 'svelte/store';

export const selectedItem = writable({
  htmlCode: null,
  cssCode: null,
});
