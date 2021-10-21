import {Octokit} from '@octokit/core';
import dotenv from 'dotenv/config';

let repos;

const token = process.env['GH_TOKEN'];
const include = [
  'dotfiles', 'BattleDucks', 'gopy', 'wikiscraper', 'dotfield',
  'music-bot-family'
];

let loaded = false;

export async function get() {
  if (loaded) {
    return {body : {repos : repos}};
  }
  const octo = new Octokit({auth : token});
  const {data : data} = await octo.request('GET /user/repos');

  repos = data.filter((repo) => repo.owner.login === 'zoharcochavi' &&
                                repo.description != null &&
                                include.includes(repo.name));

  loaded = true;
  return {body : {repos}};
};
