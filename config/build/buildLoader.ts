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

    const cssLoader = stylesLoader(isDev)

    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader,
    ]
}
