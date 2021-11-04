import { writable } from 'svelte/store';

import * as org from "org";

export const posts = writable([]);
export const postSource = writable();
let loaded = false;

export const fetchPosts = async () => {
  if (loaded) {
    return;
  }
  const response = await fetch(`/blog/all.json`)
  const {posts : loadedPosts} = await response.json();

  print(loadedPosts);
  posts.set(loadedPosts);
  loaded = true;
};
