export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604e1e18e813183db84bbeca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-uiter3aa',
                  apiId: 'fd6f4519-903d-49e4-9b29-fef50d1da85d'
                },
                {
                  buildHookId: '604e1e1853456e22e184b007',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-dv9mh5de',
                  apiId: '3139c6a1-c7c3-4dd0-a3d1-0be524e8cd75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevechez/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-dv9mh5de.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
