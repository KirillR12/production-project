import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { HStack } from '@/shared/ui/Stack'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import styles from './styles.module.scss'
import { getAddCommentForm } from '../../model/selectors/getAddCommentForm'

 interface addCommentFormProps {
   className?: string
   onSendComment: (text: string) => void
}

const reducer: ReducerList = {
    addComment: addCommentFormReducer,
}

const AddCommentForm = memo((props: addCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const comment = useSelector(getAddCommentForm)

    const setCommentText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHalper = useCallback(() => {
        onSendComment(comment || '')
        dispatch(addCommentFormActions.setText(''))
    }, [comment, dispatch, onSendComment])

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <HStack max justify="between" className={classNames(styles.addCommentForm, {}, [className])}>
                <Input
                    label={t('Введите текст комментария')}
                    value={comment}
                    onChange={setCommentText}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHalper}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
