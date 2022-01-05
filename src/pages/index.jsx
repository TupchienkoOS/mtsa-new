import { React } from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './login'
import Profile from './profile'

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>

    )
}