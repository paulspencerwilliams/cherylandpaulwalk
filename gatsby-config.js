module.exports = {
  siteMetadata: {
    title: 'Cheryl and Paul walk',
  },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'r9yi0oycj9fa',
                accessToken: 'b784f02e8c79269141e2e11ec717bae507945385f9a2fff18b1fbcb0025ca8a1',
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-react-helmet'],
};
