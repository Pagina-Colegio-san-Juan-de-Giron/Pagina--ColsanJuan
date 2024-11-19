

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx', '.jsx', '.jpg', '.scss'],
        module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      api: "modern-compiler",
                      sassOptions: {
                        // Your sass options
                      },
                    },
                  },
                ],
              },
            ],
          },
    }
  };
