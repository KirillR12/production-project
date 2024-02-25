import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { stylesLoader } from './loaders/stylesLoader'

export function buildLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const babelLoading = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                },
            },
        ],
    }

    const cssLoader = stylesLoader(isDev)

    return [
        babelLoading,
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader,
    ]
}
