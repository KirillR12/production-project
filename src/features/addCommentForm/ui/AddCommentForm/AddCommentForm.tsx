import { Button, classNames } from 'shared'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import styles from './styles.module.scss'
import { getAddCommentForm, getAddCommentFormError } from '../../model/selectors/getAddCommentForm'

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
    const error = useSelector(getAddCommentFormError)

    const setCommentText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHalper = useCallback(() => {
        onSendComment(comment || '')
        dispatch(addCommentFormActions.setText(''))
    }, [comment, dispatch, onSendComment])

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(styles.addCommentForm, {}, [className])}>
                <Input
                    className={styles.input}
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
            </div>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
