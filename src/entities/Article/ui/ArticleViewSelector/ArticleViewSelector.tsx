import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import Block from '@/shared/assets/icons/blockView.svg'
import List from '@/shared/assets/icons/listView.svg'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { ArticleView } from '../../model/consts/consts'
import styles from './styles.module.scss'

 interface ArticleViewSelectorProps {
   className?: string
   view: ArticleView
   onViewClick?: (view: ArticleView) => void
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props

    const viewTypes = [
        {
            icon: Block,
            view: ArticleView.SMALL,
        },
        {
            icon: List,
            view: ArticleView.BIG,
        },
    ]

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((el, index) => (
                <Button
                    onClick={onClick(el.view)}
                    key={index}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        Svg={el.icon}
                        className={classNames('', { [styles.action]: el.view !== view }, [])}
                    />
                </Button>
            ))}
        </div>
    )
})
