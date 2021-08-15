import {Octokit} from '@octokit/core';
import {writable} from 'svelte/store';

export const repos = writable([]);
let loaded = false;

export const fetchRepos = async (include) => {
  if (loaded) {
    return;
  }
  const octo = new Octokit({auth : `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`});
  const {data : data} = await octo.request('GET /user/repos');

  const loadedRepos = data.filter(
      (repo) => repo.owner.login === 'zoharcochavi' &&
                repo.description != null && include.includes(repo.name));

  repos.set(loadedRepos);
  loaded = true;
};
