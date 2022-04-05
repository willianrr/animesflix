
module.exports = {
  images: {
    loader: "imgix",
    path: '',
    domains: ["https://animesflix.tv/", "https://drive.google.com"]
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' 
      }
    )
    return config
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/4ea68f4b7321706f7a05b12c69f2xa463.json',
        destination: 'https://animesflix.tv/4ea68f4b7321706f7a05b12c69f2xa463.json',
      },
    ]
  },
}