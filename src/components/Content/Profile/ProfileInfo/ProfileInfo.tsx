import React from "react";
import {Preloader} from "../../../common/Preloader";
import unknownUserPhoto
    from '../../../../assets/437-4374952_no-avatar-male-female.png'
import MyEditableSpan from "../../../MyUiComponents/MyEditableSpan/MyEditableSpan";
import {ProfileItemType} from "../../../../redux/profile-reducer";
import {ProfileContainerPropsType} from "../ProfileContainer";

type ProfileInfoPropsType = {
    newStatusText: string
    setStatus: (newStatusText: string) => void
    profile: ProfileItemType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) return <Preloader/>

    const setStatus = (newStatusText: string) => {
        props.setStatus(newStatusText)
    }

    return (
        <div>
            <div>
                <img
                    style={{width: '100%'}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmzHamssh3M081NcC3AWVhzJCzG76vADS7Q&usqp=CAU"/>
            </div>
            <div>
                <h1>{props.profile.fullName}</h1>
                <div>
                    <MyEditableSpan
                        label={props.newStatusText}
                        onChangeCallback={setStatus}
                    />
                </div>
                <img style={{width: '200px', height: '200px'}}
                     src={props.profile.photos.large || unknownUserPhoto}></img>
            </div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>
                <div>Contacts:</div>
                <div>facebook: {props.profile.contacts.facebook}</div>
                <div>github: {props.profile.contacts.github}</div>
                <div>instagram: {props.profile.contacts.instagram}</div>
                <div>mainLink: {props.profile.contacts.mainLink}</div>
                <div>twitter: {props.profile.contacts.twitter}</div>
                <div>vk: {props.profile.contacts.vk}</div>
                <div>website: {props.profile.contacts.website}</div>
                <div>youtube: {props.profile.contacts.youtube}</div>
            </div>
            <div>Looking for a job:</div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default ProfileInfo