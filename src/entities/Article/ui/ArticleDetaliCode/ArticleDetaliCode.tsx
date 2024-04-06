import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Code } from '@/shared/ui/Code'
import { ArticlBlockCode } from '../../model/types/ArticleType'

 interface ArticleDetaliCodeProps {
   className?: string
   block: ArticlBlockCode
}

export const ArticleDetaliCode = memo((props: ArticleDetaliCodeProps) => {
    const {
        className,
        block,
    } = props

    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>

    )
})
