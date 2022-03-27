import React from 'react'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            status: this.props.status
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onEditMode = () => {
        this.setState({editMode: true})
    }

    offEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({status: e.target.value})
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                <div>
                    <input type="text"
                            value={this.state.status}
                            autoFocus={true}
                            onBlur={this.offEditMode}
                            onChange={this.onChangeStatus}  />
                </div>
                :
                <div onClick={this.onEditMode}>
                    {this.props.status ? this.props.status : 'Edit status'}
                </div>}
            </>
        )
    }
}

export default ProfileStatus