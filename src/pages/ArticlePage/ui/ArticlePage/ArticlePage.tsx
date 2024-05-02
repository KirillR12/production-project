import { useSearchParams } from 'react-router-dom'
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { initArticlePage } from '../../model/servers/initArticlePage/initArticlePage'
import { ArticlePageNextThunk } from '../../model/servers/ArticlePageNextThunk/ArticlePageNextThunk'
import { ArticlePageReducer } from '../../model/slice/ArticlePageSlice'
import styles from './styles.module.scss'
import { ArticleItfiteList } from '../ArticleItfiteList/ArticleItfiteList'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { ArticlePageGreeting } from '@/features/articlePageGreeting'

interface ArticlePageProps {
    className?: string
}

const reducer: ReducerList = {
    articlePage: ArticlePageReducer,
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch()

    const [searcParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlePage(searcParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(ArticlePageNextThunk())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                data-testid="ArticlePage"
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlePage, {}, [className])}
            >
                <VStack max gap="16">
                    <ArticlePageFilters />
                    <ArticleItfiteList />
                </VStack>
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlePage)
