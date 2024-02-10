import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'
import { stylesLoader } from '../build/loaders/stylesLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.resolve.extensions.push('.tsx', '.ts', '.js')
    config.resolve.modules.push(paths.src)
    config.module.rules.push(stylesLoader(true))
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
    }))

    return config
}
