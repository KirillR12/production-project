import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import Star from '@/shared/assets/icons/star.svg'
import { Icon } from '../Icon/Icon'
import styles from './styles.module.scss'

interface StarRatingProps {
   className?: string
   onSelect?: (starsCount: number) => void
   size?: number
   selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starCount)
        }
    }

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(styles.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(styles.starIcon, { [styles.hovered]: currentStarsCount >= starNumber })}
                    width={size}
                    height={size}
                    Svg={Star}
                    key={starNumber}
                    onMouseLeave={onLeave()}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    )
})
