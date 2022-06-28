import React, {MouseEventHandler} from "react";
import {Button} from "@mui/material";

type MyButtonPropsType = {
    name: string,
    disabled?: boolean,
    onClickCallback: () => void
}

export const MyButton: React.FC<MyButtonPropsType> = (
    {
        name,
        disabled,
        onClickCallback
    }
) => {


    const onClickHandler = () => {
        onClickCallback()
    }

    return (
        <div style={{
            width: '100%',
            height: '100%'
        }}>
            <Button
                style={{
                    height: '100%'
                }}
                disabled={disabled}
                onClick={onClickHandler}
                variant="contained"
            >
                {name}
            </Button>
        </div>
    )
}