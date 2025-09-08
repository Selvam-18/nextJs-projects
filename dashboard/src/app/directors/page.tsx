'use client'

import Director from "@/components/Director";
import { useEffect, useState } from "react";
// import { applyTheme } from '../../hooks/useApplyTheme'
type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function Page() {
    // applyTheme()
    useEffect(()=>{

        async function fetchData() {
            const url = 'https://reqres.in/api/users';
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'reqres-free-v1'
                }
            }

            const response = await fetch(url, options)
            if(!response.ok) {
                console.log('Error')
                return
            }
            // console.log(response, "API response")
            const userData = await response.json()
            setUserData(userData.data)
        }

        fetchData()
    }, [])


    const [ userData, setUserData ] =  useState<User[]>([])
    // console.log(userData, 'API Data')
    return(
        // <PageLayout>
        <>
        
            <h1 className=" text-2xl lg:text-4xl ">Board Of Directors</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-white my-3 p-2 rounded-xl border border-gray-200">
                {userData.map((item) => 
                    <Director key={item.id} id={item.id} avatar={item.avatar} first={item.first_name} last={item.last_name} email={item.email} />
                )}
                {/* <Director /> */}
            </div>
        </>
      
    )
}