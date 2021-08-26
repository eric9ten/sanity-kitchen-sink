export default {
  widgets: [
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
                  buildHookId: '61270e2c2ef5a34211f84163',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ge9ix8nd',
                  apiId: 'e47877a0-d86b-4887-ba88-d08f41b8a857'
                },
                {
                  buildHookId: '61270e2cdb521c3e9b7ae0c4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wh5e8spx',
                  apiId: '87b2dccd-40a5-4a20-82c7-1f4e3c47c93a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eric9ten/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wh5e8spx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
