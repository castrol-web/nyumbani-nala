import { useMemo } from "react";

function Step1({ data, setData, next, loading }: any) {
    const isValid = useMemo(() => {
        return (
            data.name?.trim().length > 2 &&
            data.email?.includes('@')
        );
    }, [data]);

    return (
        <>
            <h2 className="text-xl font-bold mb-4">Your Details</h2>

            <input
                className="input input-bordered w-full mb-3"
                placeholder="Full Name"
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })}
            />

            <input
                className="input input-bordered w-full mb-3"
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={e => setData({ ...data, email: e.target.value })}
            />

            <input
                className="input input-bordered w-full mb-3"
                placeholder="Phone (optional)"
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value })}
            />

            <input
                className="input input-bordered w-full mb-4"
                placeholder="Address (optional)"
                value={data.address}
                onChange={e => setData({ ...data, address: e.target.value })}
            />

            <button
                className="btn btn-primary w-full"
                disabled={!isValid || loading}
                onClick={next}
            >
              {loading ? 'Validating...' : 'Continue'}
            </button>
        </>
    );
}

export default Step1;
