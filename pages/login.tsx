import React from 'react'
import {useRouter} from 'next/router'
import { getSession, signIn,useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context);

  if (session) return {
      redirect: {
          destination: "/",
          permanent: false
      }
  }
  return {
      props: {
        
      }
  }
}


const Login = (props:GetServerSideProps<typeof getServerSideProps>) => {
  
  return (
    <button onClick={()=>{ signIn("github") }}>
       boton
    </button>
  )
}


export default Login
