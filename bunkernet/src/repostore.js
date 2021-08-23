import {Octokit} from '@octokit/core';
import {writable} from 'svelte/store';

export const repos = writable([]);
let loaded = false;

export const fetchRepos = async (include) => {
  if (loaded) {
    return;
  }

  console.log(import.meta.env.VITE_GH_PERSONAL_ACCESS_TOKEN);
  const octo =
      new Octokit({auth : import.meta.env.VITE_GH_PERSONAL_ACCESS_TOKEN});
  const {data : data} = await octo.request('GET /user/repos');

  const loadedRepos = data.filter(
      (repo) => repo.owner.login === 'zoharcochavi' &&
                repo.description != null && include.includes(repo.name));

  repos.set(loadedRepos);
  loaded = true;
};
