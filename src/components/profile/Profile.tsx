import React from "react";
import './Profile.css'

export function Profile() {
    return(
        <div className="content">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmzHamssh3M081NcC3AWVhzJCzG76vADS7Q&usqp=CAU" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div>
                    post-1
                </div>
                <div>
                    post-2
                </div>
                <div>
                    post-3
                </div>
            </div>
        </div>
    )
}