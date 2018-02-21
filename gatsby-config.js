module.exports = {
  siteMetadata: {
    title: 'Cheryl and Paul walk',
  },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CF_SPACE_ID,
                accessToken: process.env.CF_ACCESS_TOKEN,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-react-helmet'],
};
