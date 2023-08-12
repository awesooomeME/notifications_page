import Image from "next/image"
import Link from "next/link"

type MessageNotifProps = {
    setter: any,
    index: number
    name: string,
    type: string,
    activity: string,
    activity_object: string,
    time: string,
    status: string,
    avatar: any
}

const MessageNotif = 
({setter, index, name, type, activity, activity_object, time, status, avatar}: MessageNotifProps) => {
  return (
    <div className={`flex gap-2 w-full px-3 py-5 rounded-xl cursor-pointer
        ${status === 'read' ? 'bg-white' : 'bg-light_grayish_blue_1'}`}
        onClick={() => {setter(index)}}>
        <Image src={avatar} alt={`Avatar of ${name}`}
            className="h-[40px] w-auto cursor-pointer"/>
        <section className="grid gap-2">
            <h1 className="font-heavy tracking-wide text-sm">
                <Link href='./'>
                    {name}
                </Link>
                &nbsp;
                <span className="font-normal text-grayish_blue">
                    {activity}
                </span>
            </h1>
            <p className="text-xs text-grayish_blue">
                {time}
            </p>
            <Link href='./' className="text-sm tracking-wide px-3 py-4
                border border-grayish_blue text-very_dark_blue
                leading-5 rounded-md">
                <p>
                    {activity_object}
                </p>
            </Link>
        </section>
    </div>
  )
}

export default MessageNotif