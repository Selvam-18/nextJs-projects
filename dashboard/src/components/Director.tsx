type APIContent = {
    id: number,
    avatar: string,
    first: string,
    last: string,
    email: string
    
}

export default function Director({id, avatar, first, last, email}: APIContent) {
    return(
         <>
            <div className="flex flex-col m-2 p-4 border-1 border-gray-200 rounded-2xl  shadow-xl">
                <div className="flex flex-row justify-between my-2">
                    <img src={avatar} alt="avatar" className="rounded-3xl border-2 border-white"/>
                    <h1 className="text-lg font-bold">{id}</h1>
                </div>
                <div className="flex flex-row text-2xl">
                    <span>{first}</span>
                    <span className="mx-2">{last}</span>
                </div>
                <span className="underline text-sm text-blue-500"><a href={`mailto:${email}`}>{email}</a></span>
            </div>
         </>
    )
}