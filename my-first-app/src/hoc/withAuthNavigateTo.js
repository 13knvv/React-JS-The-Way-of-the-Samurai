import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
})

let withAuthNavigateTo = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth)  return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    }
    let ConnectedWithAuthNavigateTo = connect(mapStateToPropsForNavigate)(NavigateComponent)
     return ConnectedWithAuthNavigateTo
}



export default withAuthNavigateTo