import { classNames } from 'shared'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import Eye from 'shared/assets/icons/eye.svg'
import Calindar from 'shared/assets/icons/calindar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { getArticleDetaliData, getArticleDetaliError, getArticleDetaliIsLoading } from '../../model/selector/articleDetali'
import { ArticleDetaliReducer } from '../../model/slice/ArticleDetaliSlice/ArticleDetaliSlice'
import { ArticleDetaliThunk } from '../../model/servers/ArticleDetaliThunk/ArticleDetaliThunk'
import styles from './styles.module.scss'
import { ArticleBlock, ArticleBlockType } from '../../model/types/ArticleType'
import { ArticleDetaliImage } from '../ArticleDetaliImage/ArticleDetaliImage'
import { ArticleDetaliCode } from '../ArticleDetaliCode/ArticleDetaliCode'
import { ArticleDetaliText } from '../ArticleDetaliText/ArticleDetaliText'

 interface ArticleDetaliProps {
   className?: string
   id: string
}

const reducer: ReducerList = {
    articleDetali: ArticleDetaliReducer,
}

export const ArticleDetali = memo((props: ArticleDetaliProps) => {
    const {
        className,
        id,
    } = props

    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const data = useSelector(getArticleDetaliData)
    const error = useSelector(getArticleDetaliError)
    const isLoading = useSelector(getArticleDetaliIsLoading)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(ArticleDetaliThunk(id))
        }
    }, [dispatch, id])

    const renderWith = useCallback((block: ArticleBlockType) => {
        switch (block.type) {
        case ArticleBlock.CODE:
            return <ArticleDetaliCode key={block.id} block={block} className={styles.block} />
            break
        case ArticleBlock.IMAGE:
            return <ArticleDetaliImage key={block.id} block={block} className={styles.block} />
            break
        case ArticleBlock.TEXT:
            return <ArticleDetaliText key={block.id} block={block} className={styles.block} />
            break
        default:
            return null
        }
    }, [])

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </div>
        )
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка, перезагрузите страницу')}
                align={TextAlign.CENTER}
            />
        )
    } else {
        content = (
            <>
                <div className={styles.avatarWrapper}>
                    <Avatar
                        className={styles.avatar}
                        alt={data?.subtitle}
                        src={data?.img}
                        size={200}
                    />
                </div>
                <Text
                    title={data?.title}
                    text={data?.subtitle}
                    size={TextSize.L}
                />
                <div className={styles.articleInfo}>
                    <Icon className={styles.icon} Svg={Eye} />
                    <Text text={String(data?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon className={styles.icon} Svg={Calindar} />
                    <Text text={data?.createdAt} />
                </div>
                {data?.blocks.map(renderWith)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(styles.ArticleDetali, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
