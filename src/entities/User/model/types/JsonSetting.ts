import { Theme } from '@/shared/const/theme'

export interface JsonSetting {
    theme?: keyof Theme
    isFirstVisit?: boolean
    settingPageHasBeenOpen?: boolean
}
