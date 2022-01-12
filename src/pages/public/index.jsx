import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import Login from './login/login'

const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="login" element={< Login />} />
            <Route path="register" element={< Login />} />
        </Routes>
    )
}

export default Public