export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61e0123e7bcada218b05efc9',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-obykcees',
                  apiId: '0cc604fb-6648-40dd-97f9-df37f3b7d7a8'
                },
                {
                  buildHookId: '61e0123edde77d403baaf2d4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-95oxmbdr',
                  apiId: '849c476d-eb5a-4f04-97c6-76e149df8af9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sammynacole6/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-95oxmbdr.netlify.app', category: 'apps'}
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
