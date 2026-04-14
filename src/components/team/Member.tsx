type teamProps = {
    position: string;
    url: string;
    name: string;
    organization: string;
    details: string;
}

function Member({ position, url, name, organization, details }: teamProps) {
    return (
        <div className="text-center justify-center mx-auto rounded-lg outline-1 outline-gray-300/40 pt-2 pb-2 items-center">
            <img src={url} alt={url} className="rounded-full w-20 h-20 mx-auto mb-2 hover:border" />
            <p><span className="text-gray-500">Name:</span>{name}</p>
            <p><span className="text-gray-500">Position:</span>{position}</p>
            <p><span className="text-gray-500">Organization:</span>{organization}</p>
            <p className="text-sm"><span className="text-gray-500">Description:</span>{details}</p>
        </div>
    )
}

export default Member