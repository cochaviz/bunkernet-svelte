import fetch from 'node-fetch';
import { writable } from 'svelte/store';

export const repos = writable([]);
let loaded = false;

export const fetchRepos = async (host) => {
  if (loaded) {
    return;
  }
  const response = await fetch(`/repos.json`)
  const {repos : loadedRepos} = await response.json();

  repos.set(loadedRepos);
  loaded = true;
};
