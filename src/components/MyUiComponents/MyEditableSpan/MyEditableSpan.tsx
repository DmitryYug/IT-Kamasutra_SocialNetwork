import React, {ChangeEvent, KeyboardEvent, useState} from "react";


export type MyEditableSpanPropsType = {
    label: string
    onChangeCallback: (currentValue: string) => void
}

const MyEditableSpan: React.FC<MyEditableSpanPropsType> = (
    {
        label,
        onChangeCallback
    }
) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCallback(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter') {
            setEditMode(false)
        }
    }

    return (
        <>
            {editMode ?
                <input
                    value={label}
                    type="text"
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    onBlur={() => setEditMode(false)}
                    autoFocus
                /> :
                <span
                    onDoubleClick={onDoubleClickHandler}
                >
                    {label}
                </span>
            }
        </>
    )
}
export default MyEditableSpan