import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootsStateType, UsersType} from "../../../redux/redux-store";
import {
    followToggle,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetchingToggle
} from "../../../redux/users-reducer";
import {PaginationComponent} from "../../common/PaginationComponent";
import {Preloader} from "../../common/Preloader";
import {Users} from "./Users";


class UsersApiContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.isFetchingToggle(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then(response => {
                this.props.isFetchingToggle(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.isFetchingToggle(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        ).then(response => {
            this.props.isFetchingToggle(false)
            this.props.setUsers(response.data.items)
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
                        followToggle={this.props.followToggle}
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
    followToggle: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageId: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    isFetchingToggle: (isFetching: boolean) => void
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
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         onFollow: (userId) => {
//             dispatch(FollowToggleAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(SetCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsers) => {
//             dispatch(SetTotalUsersCountAC(totalUsers))
//         },
//         isFetchingToggle: (isFetching) => {
//             dispatch(IsFetchingToggleAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {
        followToggle,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        isFetchingToggle
    }
    ) (UsersApiContainer)
