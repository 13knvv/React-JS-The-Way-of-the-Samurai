import React from 'react'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
        }
    }

    chengeEditMode = () => {
        this.setState((state, props) => ({
            
            editMode: !state.editMode
        }))
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                <div>
                    <input type="text"
                            value={this.props.textStatus}
                            autoFocus={true}
                            onBlur={this.chengeEditMode}  />
                </div>
                :
                <div onClick={this.chengeEditMode}>
                    {this.props.textStatus}
                </div>}
            </>
        )
    }
}

export default ProfileStatus