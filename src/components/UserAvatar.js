import React, { Component } from 'react'

export class UserAvatar extends Component {

  cloudinaryUrl = (photoId, size) => {
    return `https://res.cloudinary.com/dzqfobpd7/image/upload/c_fill,h_${size},w_${size}/${photoId}`
  }

  render() {
  
    const firstName = this.props.firstName
    const lastName = this.props.lastName
    const photoId = this.props.photoId
    const size = this.props.size

    return (
      <img src={this.cloudinaryUrl(photoId,size)} alt={firstName+" "+lastName+" photo"} />
    )
  }
}

export default UserAvatar
