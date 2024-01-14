import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlagins } from "./buildPlagins";
import { buildLoader } from "./buildLoader";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlagins(options),
         module: {
            rules: buildLoader(options),
          },
          resolve: buildResolve(options),
          devtool: isDev ? 'inline-source-map' : undefined,
          devServer: isDev ? buildDevServer(options) : undefined,
        }
}


