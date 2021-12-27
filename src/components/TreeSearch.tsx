import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

const json = {
  id: '19489072645',
  type: 'IssueCommentEvent',
  actor: {
    id: 8078968,
    login: 'jbrockmendel',
    display_login: 'jbrockmendel',
    gravatar_id: '',
    url: 'https://api.github.com/users/jbrockmendel',
    avatar_url: 'https://avatars.githubusercontent.com/u/8078968?'
  },
  repo: {
    id: 858127,
    name: 'pandas-dev/pandas',
    url: 'https://api.github.com/repos/pandas-dev/pandas'
  },
  payload: {
    action: 'created',
    issue: {
      url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142',
      repository_url: 'https://api.github.com/repos/pandas-dev/pandas',
      labels_url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142/labels{/name}',
      comments_url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142/comments',
      events_url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142/events',
      html_url: 'https://github.com/pandas-dev/pandas/pull/44142',
      id: 1033259427,
      node_id: 'PR_kwDOAA0YD84tiJ9p',
      number: 44142,
      title: 'Fixes Issues#44132, #40148, #29033, #22275, #18869: groupby',
      user: {
        login: 'ikramersh',
        id: 91307258,
        node_id: 'MDQ6VXNlcjkxMzA3MjU4',
        avatar_url: 'https://avatars.githubusercontent.com/u/91307258?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ikramersh',
        html_url: 'https://github.com/ikramersh',
        followers_url: 'https://api.github.com/users/ikramersh/followers',
        following_url: 'https://api.github.com/users/ikramersh/following{/other_user}',
        gists_url: 'https://api.github.com/users/ikramersh/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/ikramersh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ikramersh/subscriptions',
        organizations_url: 'https://api.github.com/users/ikramersh/orgs',
        repos_url: 'https://api.github.com/users/ikramersh/repos',
        events_url: 'https://api.github.com/users/ikramersh/events{/privacy}',
        received_events_url: 'https://api.github.com/users/ikramersh/received_events',
        type: 'User',
        site_admin: false
      },
      labels: [
        {
          id: 233160,
          node_id: 'MDU6TGFiZWwyMzMxNjA=',
          url: 'https://api.github.com/repos/pandas-dev/pandas/labels/Groupby',
          name: 'Groupby',
          color: '729FCF',
          default: false,
          description: null
        },
        {
          id: 2347992045,
          node_id: 'MDU6TGFiZWwyMzQ3OTkyMDQ1',
          url: 'https://api.github.com/repos/pandas-dev/pandas/labels/Stale',
          name: 'Stale',
          color: '7fcce8',
          default: false,
          description: ''
        },
        {
          id: 2365523662,
          node_id: 'MDU6TGFiZWwyMzY1NTIzNjYy',
          url: 'https://api.github.com/repos/pandas-dev/pandas/labels/Nuisance%20Columns',
          name: 'Nuisance Columns',
          color: '120491',
          default: false,
          description: 'Identifying/Dropping nuisance columns in reductions, groupby.add, DataFrame.apply'
        }
      ],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 6,
      created_at: '2021-10-22T07:17:43Z',
      updated_at: '2021-12-27T00:35:33Z',
      closed_at: null,
      author_association: 'NONE',
      active_lock_reason: null,
      draft: false,
      pull_request: {
        url: 'https://api.github.com/repos/pandas-dev/pandas/pulls/44142',
        html_url: 'https://github.com/pandas-dev/pandas/pull/44142',
        diff_url: 'https://github.com/pandas-dev/pandas/pull/44142.diff',
        patch_url: 'https://github.com/pandas-dev/pandas/pull/44142.patch',
        merged_at: null
      },
      body: '- [x] closes #44132\r\n- [x] closes #40148 \r\n- [x] closes #29033\r\n- [x] closes #22275\r\n- [x] closes #18869\r\n- [ ] tests added / passed\r\n- [ ] Ensure all linting tests pass, see [here](https://pandas.pydata.org/pandas-docs/dev/development/contributing_codebase.html#pre-commit) for how to run them\r\n- [ ] whatsnew entry\r\n',
      reactions: {
        url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0
      },
      timeline_url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142/timeline',
      performed_via_github_app: null
    },
    comment: {
      url: 'https://api.github.com/repos/pandas-dev/pandas/issues/comments/1001265072',
      html_url: 'https://github.com/pandas-dev/pandas/pull/44142#issuecomment-1001265072',
      issue_url: 'https://api.github.com/repos/pandas-dev/pandas/issues/44142',
      id: 1001265072,
      node_id: 'IC_kwDOAA0YD847rhew',
      user: {
        login: 'jbrockmendel',
        id: 8078968,
        node_id: 'MDQ6VXNlcjgwNzg5Njg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8078968?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jbrockmendel',
        html_url: 'https://github.com/jbrockmendel',
        followers_url: 'https://api.github.com/users/jbrockmendel/followers',
        following_url: 'https://api.github.com/users/jbrockmendel/following{/other_user}',
        gists_url: 'https://api.github.com/users/jbrockmendel/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jbrockmendel/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jbrockmendel/subscriptions',
        organizations_url: 'https://api.github.com/users/jbrockmendel/orgs',
        repos_url: 'https://api.github.com/users/jbrockmendel/repos',
        events_url: 'https://api.github.com/users/jbrockmendel/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jbrockmendel/received_events',
        type: 'User',
        site_admin: false
      },
      created_at: '2021-12-27T00:35:33Z',
      updated_at: '2021-12-27T00:35:33Z',
      author_association: 'MEMBER',
      body: 'I think we already have a deprecation path in place for numeric_only=None, can close this.',
      reactions: {
        url: 'https://api.github.com/repos/pandas-dev/pandas/issues/comments/1001265072/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0
      },
      performed_via_github_app: null
    }
  },
  public: true,
  created_at: '2021-12-27T00:35:33Z',
  org: {
    id: 21206976,
    login: 'pandas-dev',
    gravatar_id: '',
    url: 'https://api.github.com/orgs/pandas-dev',
    avatar_url: 'https://avatars.githubusercontent.com/u/21206976?'
  }
};

const filterJson = (filter: string, json: any) => {
  const filterKey = filter && filter.toLowerCase();
  if (filterKey) {
    const keys = Object.keys(json);
    const filterData: any = {};
    keys.forEach(key => {
      if (key.toLowerCase().includes(filterKey) || JSON.stringify(json[key]).includes(filterKey)) {
        filterData[key] = json[key];
      }
    });
    return filterData;
  }
  return json;
};

const TreeSearch = () => {
  const [filterInput, setFilterInput] = useState('');
  // For performance debounce filter input and wait until user stops typing
  const [debouncedValue] = useDebounce(filterInput, 250);

  return (
    <div>
      <div>
        <label htmlFor="key-search" className="block text-sm font-medium text-gray-700">
          Filter Key
        </label>
        <div className="mt-1">
          <input
            value={filterInput}
            onChange={event => setFilterInput(event.target.value)}
            type="text"
            name="key-search"
            id="key-search"
            className="p-2 shadow-sm text-sm block w-1/3 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="w-full mt-10">
        <pre className="text-ellipsis overflow-hidden">{JSON.stringify(filterJson(debouncedValue, json), null, 2)}</pre>
      </div>
    </div>
  );
};

export default TreeSearch;
