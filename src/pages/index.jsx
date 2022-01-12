import { React } from 'react'
import { Route, Routes } from "react-router-dom"
import Private from './private'
import Public from './public/index'
import { useAuth0 } from '@auth0/auth0-react';


export const Routing = () => {
    const { isLoading,
        isAuthenticated,
    } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(isAuthenticated)
    return (
        <Routes>
            <Route path="/*" element={isAuthenticated ? <Private /> : <Public />} />
        </Routes>

    )
}

