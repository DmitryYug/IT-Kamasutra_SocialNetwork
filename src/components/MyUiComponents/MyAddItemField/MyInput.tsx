import React, {ChangeEvent, KeyboardEvent} from "react";
import {TextField} from "@mui/material";

type MyInputPropsType = {
    value: string,
    labelText?: string,
    error?: boolean,
    /**
     * Callback with current input value
     * @param currentValue current input value
     */
    onChangeCallback: (currentValue: string) => void
    /**
     * Callback when enter is pressed
     */
    onKeyPressCallback?: () => void
}

export const MyInput: React.FC<MyInputPropsType> = (
    {
        value,
        labelText,
        error,
        onChangeCallback,
        onKeyPressCallback
    }
) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeCallback(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter' && onKeyPressCallback) {
            onKeyPressCallback()
        }
    }

    return (
        <div>
            <TextField
                value={value}
                label={labelText}
                error={error}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                id="outlined-basic"
                variant="outlined"/>
        </div>
    )
}