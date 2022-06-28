import React, {useEffect, useState} from "react";
import { MyButton } from "./MyButton";
import { MyInput } from "./MyInput";


type MyAddItemFieldPropsType = {
    value: string
    labelText?: string,
    errorLabelText?: string,
    /**
     * Callback sets current input value
     * @param currentValue current input value
     */
    onClickCallback: (value: string) => void
    onChangeCallback: (currentValue: string) => void
    /**
     * Callback sets current input value when enter is pressed
     * @param value current input value
     */
    onKeyPressCallback?: (value: string) => void
}

export const MyAddItemField: React.FC<MyAddItemFieldPropsType> = (
    {
        value,
        labelText,
        errorLabelText,
        onChangeCallback,
        onClickCallback,
        onKeyPressCallback
    }
) => {

    // let [value, setValue] = useState<string>('')
    let [error, setError] = useState<boolean>(false)
    useEffect(() => {
        if (value) {
            setError(false)
        }
    }, [value])


    const onClickHandler = () => {
        if (value && onClickCallback) {
            onClickCallback(value)
        } else {
            setError(true)
        }
    }

    const onKeyPressHandler = () => {
        if (value && onKeyPressCallback) {
            onKeyPressCallback(value)
        } else {
            setError(true)
        }
    }

    return (
        <div style={{
            display: 'flex',
        }}>
            <div>
                <MyInput
                    value={value}
                    error={error}
                    labelText={error ? errorLabelText : labelText}
                    onChangeCallback={onChangeCallback}
                    onKeyPressCallback={onKeyPressHandler}
                />
            </div>
            <div>
                <MyButton
                    name={'Add'}
                    onClickCallback={onClickHandler}
                />
            </div>
        </div>
    )
}