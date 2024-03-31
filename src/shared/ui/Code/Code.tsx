import { memo } from 'react'
import Cope from '@/shared/assets/icons/cope.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './styles.module.scss'
import { Button } from '../Button/Button'

 interface CodeProps {
   className?: string
   text: string
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props

    const copeBtn = () => {
        navigator.clipboard.writeText(text)
    }

    return (
        <pre className={classNames(styles.blockCode, {}, [className])}>
            <Button onClick={copeBtn} className={styles.copeBtn}>
                <Cope className={styles.iconCope} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
})
