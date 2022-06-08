import React, {ChangeEvent} from "react";
import {AddPostAC, ChangePostAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootsStateType} from "../../../../redux/redux-store";

// type MyPostsContainerPropsType = {
//     store: any
// }

// export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
//
//     const {posts, newPostText} = props.store.getState().profileReducer
//
//     const addPostOnClick = () => {
//         props.store.dispatch(AddPostAC())
//     }
//     const addPostOnChange = (currentPostText: string) => {
//         props.store.dispatch(ChangePostAC(currentPostText))
//     }
//
//     return (
//         <MyPosts
//             addPostOnClick={addPostOnClick}
//             addPostOnChange={addPostOnChange}
//             posts={posts}
//             newPostTitle={newPostText}
//         />
//     )
// }

let mapStateToProps = (state: RootsStateType) => {
    // debugger
    return {
        posts: state.profilePage.posts,
        newPostTitle: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPostOnClick: () => {
            dispatch(AddPostAC())
        },
        addPostOnChange: (currentPostText: string) => {
            dispatch(ChangePostAC(currentPostText))
        }

    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
