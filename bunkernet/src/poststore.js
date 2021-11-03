import { writable } from 'svelte/store';
import { page } from '$app/stores';

import * as fs from "@supercharge/fs";
import * as org from "org";

export const posts = writable([]);
export const postSource = writable();
let loaded = false;

export const fetchPosts = async () => {
  if (loaded) {
    return;
  }
  const response = await fetch(`/data/posts/all.json`)
  const {posts : loadedPosts} = await response.json();

  print(loadedPosts);
  posts.set(loadedPosts);
  loaded = true;
};
