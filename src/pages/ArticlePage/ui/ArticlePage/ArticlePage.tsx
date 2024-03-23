import { useSearchParams } from 'react-router-dom'
import { classNames } from 'shared'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Page } from 'widgets/Page'
import { VStack } from 'shared/ui/Stack'
import { initArticlePage } from '../../model/servers/initArticlePage/initArticlePage'
import { ArticlePageNextThunk } from '../../model/servers/ArticlePageNextThunk/ArticlePageNextThunk'
import { ArticlePageReducer } from '../../model/slice/ArticlePageSlice'
import styles from './styles.module.scss'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { ArticleItfiteList } from '../ArticleItfiteList/ArticleItfiteList'

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
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlePage, {}, [className])}
            >
                <VStack max gap="16">
                    <ArticlePageFilters />
                    <ArticleItfiteList />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlePage)
