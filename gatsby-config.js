module.exports = {
  siteMetadata: {
    title: 'Gatsby starter',
    description: 'Gatsby starter for personal projects',
    keywords: ['gatsby', 'starter'],
    /* Absolute deployment path without trailing slash */
    baseUrl: '',
    /* Used for facebook SEO. Pass 'website' or 'article' */
    contentType: 'website',
    /* Author usernames on social accounts */
    socials: {
      twitter: '',
      facebook: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
          '@hooks': 'src/utils/hooks',
          '@api': 'src/api',
          '@images': 'src/images',
          '@icons': 'src/icons',
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        titleProp: true,
      },
    },
  ],
}
