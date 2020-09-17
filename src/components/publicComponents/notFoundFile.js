import React, { Component } from 'react';
import { FaRegFolderOpen } from "react-icons/fa";
class NotFoundFile extends Component {
    render() {
        return (
            <div className="mt-5">
                <span className="not-found-file">  <FaRegFolderOpen /></span>
                <p className="text-not-found-file">فایلی پیدا نشد</p>
            </div>
        );
    }
}

export default NotFoundFile;
