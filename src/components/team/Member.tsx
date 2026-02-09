type teamProps = {
    position: string;
    url:string;
}

function Member({ position,url }: teamProps) {
    return (
        <div className="w-30 text-center mb-2 justify-center mx-auto">
            <img src={url} alt={url} className="rounded-full w-10 h-10 mx-auto mb-2 hover:border" />
            <p className="text-xs text-gray-400">{position}</p>
        </div>
    )
}

export default Member