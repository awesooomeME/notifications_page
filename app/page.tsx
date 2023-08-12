'use client'
import Image from 'next/image'
import { ImgHTMLAttributes, useState } from 'react'  
import mark_webber from '@/public/images/avatar-mark-webber.webp'
import angela_gray from '@/public/images/avatar-angela-gray.webp'
import jacob_thompson from '@/public/images/avatar-jacob-thompson.webp'
import rizky_hasanuddin from '@/public/images/avatar-rizky-hasanuddin.webp'
import kimberly_smith from '@/public/images/avatar-kimberly-smith.webp'
import nathan_peterson from '@/public/images/avatar-nathan-peterson.webp'
import anna_kim from '@/public/images/avatar-anna-kim.webp'
import post_image from '@/public/images/image-chess.webp'
import ActivityNotif from '@/components/ActivityNotif'
import MessageNotif from '@/components/MessageNotif'

type notification = {
  name: string,
  type: string,
  activity: string,
  activity_object: string | any,
  time: string,
  status: string,
  avatar: any
}

export default function Home() {
  const [notifications, setNotifications] = useState<notification[]>([
    {
      name: 'Mark Webber',
      type: 'activity',
      activity: 'reacted to your recent post',
      activity_object: 'My first tournament today!',
      time: '1m ago',
      status: 'unread',
      avatar: mark_webber
    }, {
      name: 'Angela Gray',
      type: 'activity',
      activity: 'followed you',
      activity_object: '',
      time: '5m ago',
      status: 'unread',
      avatar: angela_gray
    }, {
      name: 'Jacob Thompson',
      type: 'activity',
      activity: 'has joined your grouped',
      activity_object: 'Chess Club',
      time: '1 day ago',
      status: 'unread',
      avatar: jacob_thompson
    }, {
      name: 'Rizky Hasanuddin',
      type: 'message',
      activity: 'sent you a private message',
      activity_object: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days ago',
      status: 'read',
      avatar: rizky_hasanuddin
    }, {
      name: 'Kimberly Smith',
      type: 'activity',
      activity: 'commented on your picture',
      activity_object: post_image,
      time: '1 week ago',
      status: 'read',
      avatar: kimberly_smith
    }, {
      name: 'Nathan Peterson',
      type: 'activity',
      activity: 'reacted to your recent post',
      activity_object: '5 end-game strategies to increase your win rate',
      time: '1 weeks ago',
      status: 'read',
      avatar: nathan_peterson
    }, {
      name: 'Anna Kim',
      type: 'activity',
      activity: 'left the group',
      activity_object: 'Chess Club',
      time: '2 weeks ago',
      status: 'read',
      avatar: anna_kim
    }
  ])

  const setRead = (index: number) => {
    const newNotifications = notifications.map((item: notification, i:number) => {
      if (i === index) {
        const updatedItem = {
          ...item,
          status: 'read'
        }

        return updatedItem
      }
      return item
    })

    setNotifications(newNotifications)
  }

  const setAllRead = () => {
    const newNotifications = notifications.map((item: notification, i:number) => {
      const updatedItem = {
        ...item,
        status: 'read'
      }
      return updatedItem
    })

    setNotifications(newNotifications)
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-light_grayish_blue_2">
      <article className='flex flex-col px-5 py-10 gap-5
        max-w-[800px] bg-white shadow-xl rounded-xl'>
        <div className='flex justify-between'>
          <div className='flex gap-3 items-center'>
            <h1 className='font-heavy text-xl'>
              Notifications
            </h1>
            { notifications.filter((notification: any) =>
                  notification.status === 'unread').length > 0 &&
            <h3 className='text-white bg-blue px-3 rounded-lg
              py-1 font-normal'>
              {
                notifications.filter((notification: any) =>
                  notification.status === 'unread').length
              }
            </h3>
            }
          </div>
          <button className='text-sm text-grayish_blue'
            onClick={() => {setAllRead()}}>
            Mark all as read
          </button>
        </div>
        <div className='grid gap-3'>
        {
          notifications.map((notification: notification, i:number) => (
            notification.type === 'activity' ? 
            <ActivityNotif setter={setRead} index={i} key={notification.name} {...notification}/> : 
            <MessageNotif setter={setRead} index={i} key={notification.name} {...notification}/>
          ))
        }
        </div>
      </article>
    </main>
  )
}
