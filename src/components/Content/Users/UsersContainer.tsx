import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootsStateType, UsersType} from "../../../redux/redux-store";
import {
    FollowToggleAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC
} from "../../../redux/users-reducer";
import {Users} from "./Users";


class UsersApiContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        ).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        //     this.onPageChanged(value)
        // };

        return (
            <Users
                pages={pages}
                users={this.props.users}
                paginationOnChange={this.onPageChanged}
                onFollow={this.props.onFollow}
            />
        )
    }
}

type MapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    onFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageId: number) => void
    setTotalUsersCount: (totalUsers: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onFollow: (userId) => {
            dispatch(FollowToggleAC(userId))
        },
        setUsers: (users) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(SetTotalUsersCountAC(totalUsers))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)
