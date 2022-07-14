import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getUsersAPI} from "../../../api/api";
import {RootsStateType} from "../../../redux/redux-store";
import {
    followToggle,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetchingToggle,
    isFollowDisabledToggle,
    UsersType
} from "../../../redux/users-reducer";
import {PaginationComponent} from "../../common/PaginationComponent";
import {Preloader} from "../../common/Preloader";
import {Users} from "./Users";


class UsersApiContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.isFetchingToggle(true)
        getUsersAPI(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.isFetchingToggle(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.isFetchingToggle(true)
        getUsersAPI(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.isFetchingToggle(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        const paginationOnChange = (value: number) => {
            this.onPageChanged(value)
        }
        return (
            <>
                <PaginationComponent
                    pages={pages}
                    onChange={paginationOnChange}
                />
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        // isFollowDisabled={this.props.isFollowDisabled}
                        followToggle={this.props.followToggle}
                        followDisabledToggle={this.props.isFollowDisabledToggle}
                    />
                }
            </>
        )
    }
}

type MapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // isFollowDisabled: boolean
}
type MapDispatchToPropsType = {
    followToggle: (userId: string, isChecked: boolean) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageId: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    isFetchingToggle: (isFetching: boolean) => void
    isFollowDisabledToggle: (userId: string, isFollowDisabled: boolean) => void
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        // isFollowDisabled: state.usersPage.isFollowDisabled
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        followToggle,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        isFetchingToggle,
        isFollowDisabledToggle
    })(UsersApiContainer)
