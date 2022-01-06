import { React } from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './login'
import Profile from './profile'
import { RequiredAuth } from './required-auth'

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={
                <RequiredAuth redirectTo={'/login'}>
                    <Profile />
                </RequiredAuth>} />
        </Routes>

    )
}