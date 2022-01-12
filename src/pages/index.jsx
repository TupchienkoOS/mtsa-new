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
        return (<div class=" flex justify-center mt-48">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-900"></div>
        </div>)
    }
    console.log(isAuthenticated)
    return (
        <Routes>
            <Route path="/*" element={isAuthenticated ? <Private /> : <Public />} />
        </Routes>

    )
}

