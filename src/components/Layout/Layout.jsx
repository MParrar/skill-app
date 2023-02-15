import React from 'react'
import { Outlet } from "react-router-dom";
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = () => {
    return (
        < >
            <Header />
            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>
            <Footer />
        </>
    )
}
