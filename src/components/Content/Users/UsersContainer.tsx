import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {getUsersAPI} from "../../../api/api";
import {RootsStateType} from "../../../redux/redux-store";
import {
    getUsers,
    UsersType,
    onFollow
} from "../../../redux/users-reducer";
import {PaginationComponent} from "../../common/PaginationComponent";
import {Preloader} from "../../common/Preloader";
import {Users} from "./Users";
import { WithAuthRedirect } from "../../WithAuthRedirect";


class UsersApiContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                        onFollow={this.props.onFollow}
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
}
type MapDispatchToPropsType = {
    onFollow: (userId: string, isChecked: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, onFollow}),
    WithAuthRedirect
)(UsersApiContainer)