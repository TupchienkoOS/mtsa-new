import { React, Suspense } from 'react'
import { Route, Routes } from "react-router-dom"
import Private from './private'
import Public from './public/index'
import { Spinner } from '../shared/ui/spinner'
import { useAuth0 } from '@auth0/auth0-react';


export const Routing = () => {
    const { isLoading,
        isAuthenticated,
    } = useAuth0();

    if (isLoading) {
        return (<Spinner />)
    }
    return (
        <Routes>
            <Route path="/*" element={isAuthenticated ? <Private /> : <Public />} />
        </Routes>

    )
}

