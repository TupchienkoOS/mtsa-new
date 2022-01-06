import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export const RequiredAuth = ({ children, redirectTo }) => {
    return (
        false ? children : <Navigate to={redirectTo} />
    )
}
