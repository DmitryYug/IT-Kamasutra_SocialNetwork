import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootsStateType} from "../../../redux/redux-store";
import {FollowToggleAC, SetUsersAC, UsersType} from "../../../redux/users-reducer";
import Users from "./Users";

type MapStateToProps = {
    users: Array<UsersType>
}

type MapDispatchToProps = {
    onFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
}

let mapStateToProps = (state: RootsStateType): MapStateToProps => {
    return {
      users: state.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onFollow: (userId: string) => {
            dispatch(FollowToggleAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
