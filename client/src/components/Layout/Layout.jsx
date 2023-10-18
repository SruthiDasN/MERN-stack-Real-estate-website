import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../../context/UserDetailsContext';
import { createUser } from '../../utils/api';
import { useMutation } from 'react-query';

const Layout = () => {
  const { isAuthenticated, user } = useAuth0()
  const { setUserDetails } = useContext(UserDetailsContext)
  
  // to check wether user exixt in db or not
  const {mutate} = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email)
  })

  useEffect(() => {

    isAuthenticated && mutate()

  }, [isAuthenticated])


  return (
    <>
        <div style={{background: "var(--black)", overflow: "hidden"}}>
            <Header />
            <Outlet />
        </div>
        <Footer />
    </>
    
  );
};

export default Layout