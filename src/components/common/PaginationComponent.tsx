import { Pagination } from '@mui/material'
import React from 'react'

type PaginationPropsType = {
    pages: number[]
    onChange: (value: number) => void
}

export const PaginationComponent = (props: PaginationPropsType) => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.onChange(value)
    };
    return(
        <Pagination
            count={props.pages.length}
            onChange={handleChange}
        />)
    

}