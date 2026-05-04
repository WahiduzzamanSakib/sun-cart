"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';
import { UpdateUserModal } from '../components/UpdateUser';


const ProfilePage = () => {

    const userData = authClient.useSession()
    const user = userData.data?.user

  
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center mt-3 hover:shadow-lg'>
                <Avatar className='h-20 w-20'>
                    <Avatar.Image
                        alt="User avatar"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>
                        {user?.name?.[0]}
                    </Avatar.Fallback>
                </Avatar>
                <h2 className='text-2xl font-bold'>{user?.name}</h2>
                <h2 className='test-muted'>{user?.email}</h2>
                <UpdateUserModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;