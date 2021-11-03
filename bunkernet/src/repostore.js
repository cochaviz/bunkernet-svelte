import {writable} from 'svelte/store';

export const repos = writable([]);
let loaded = false;

export const fetchRepos = async (host) => {
  if (loaded) {
    return;
  }
  const response = await fetch(`/data/repos.json`)
  const {repos : loadedRepos} = await response.json();

  repos.set(loadedRepos);
  loaded = true;
};
