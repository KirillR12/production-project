import { Button, classNames } from 'shared'
import { memo } from 'react'
import Cope from 'shared/assets/icons/cope.svg'
import styles from './styles.module.scss'

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
