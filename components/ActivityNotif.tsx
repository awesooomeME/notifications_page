import Image from "next/image"
import Link from "next/link"

type ActivityNotifProps = {
    setter: any,
    index: number,
    name: string,
    type: string,
    activity: string,
    activity_object: string | any,
    time: string,
    status: string,
    avatar: any
}

const ActivityNotif = 
    ({setter, index, name, type, activity, activity_object, time, status, avatar}: ActivityNotifProps) => {

  return (
    <div className={`flex gap-2 w-full px-3 py-5 rounded-xl cursor-pointer
        ${status === 'read' ? 'bg-white' : 'bg-light_grayish_blue_1'}`}
        onClick={() => {setter(index)}}>
        <Image src={avatar} alt={`Avatar of ${name}`}
            className="w-auto h-[40px] cursor-pointer"/>
        <section className="grid gap-1">
            <h1 className="font-heavy tracking-wide text-sm">
                <Link href='./'>
                    {name}
                </Link>
                &nbsp;
                <span className="font-normal text-grayish_blue">
                    {activity}
                </span>
                &nbsp;
                <Link href='./' className="font-heavy text-dark_grayish_blue">
                    {typeof(activity_object) === 'string' &&
                        activity_object }
                </Link>
                { status==='unread' && 
                    <div className="w-[10px] h-[10px] bg-red rounded-full inline-block
                        ml-2">
                    </div>
                }
            </h1>
            <p className="text-xs text-grayish_blue">
                {time}
            </p>
        </section>
        {typeof(activity_object) === 'object' && 
        <Image src={activity_object} alt='picture' className="h-[40px] w-auto cursor-pointer"/>
        }
    </div>
  )
}

export default ActivityNotif