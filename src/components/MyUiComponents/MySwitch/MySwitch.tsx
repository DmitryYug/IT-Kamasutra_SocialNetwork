import React, {ChangeEvent} from "react";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";

type MySwitchPropsType = {
    checked?: boolean
    disabled?: boolean
    trueText?: string
    falseText?: string
    callback: (currentState: boolean) => void
}

export const MySwitch: React.FC<MySwitchPropsType> = (
    {
        checked,
        disabled,
        trueText,
        falseText,
        callback
    }
) => {


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.checked)
        callback(event.currentTarget.checked)
    }
    
    return (
        <FormGroup>
            <FormControlLabel
                disabled={disabled}
                control={
                    <Switch
                        checked={checked}
                        onChange={onChangeHandler}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                }
                label={checked ? trueText : falseText}
            />
        </FormGroup>
    )
}