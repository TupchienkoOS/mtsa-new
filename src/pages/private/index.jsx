import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Profile } from './profile/index'

const Private = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="user/profile" />} />
            <Route path="user/*" element={< Profile />} />
            <Route path="company/*" element={< Profile />} />
        </Routes>
    )
}

export default withAuthenticationRequired(Private)