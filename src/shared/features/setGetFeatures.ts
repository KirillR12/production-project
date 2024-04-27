import { FeatureFlags } from '../types/featureFlags'

let featureFlags: FeatureFlags

export function setFeatureFlags(newFeaturesFlag?: FeatureFlags) {
    if (newFeaturesFlag) {
        featureFlags = newFeaturesFlag
    }
}

export const getFeatureFlags = (flag: keyof FeatureFlags) => featureFlags[flag]
