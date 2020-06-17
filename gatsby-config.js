module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
            plugins: [ `gatsby-remark-images` ],
        }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `J. Blog`,
    author: `Jamal Al`,
    description: `This blog will discuss various concept, methods and technologies that interest the author such as operating systems, Linux, reverse engineering, ect..`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jamal70070507`,
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/jamal-al-119a14152/`,
      },
      {
        name: `github`,
        url: `https://github.com/jay51`,
      },
    ],
  },
}
