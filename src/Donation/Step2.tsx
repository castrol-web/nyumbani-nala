import { useMemo } from "react"
function Step2({ data, setData, next, back, loading }: any) {
    const isValid = useMemo(() => {
        return (
            data.name.trim().length > 2 &&
            data.email.includes('@') &&
            data.amount >= 1
        );
    }, [data]);
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Donation</h2>

            <div className="flex gap-2 mb-4">
                {[5, 10, 25, 50].map(v => (
                    <button
                        key={v}
                        className={`btn ${data.amount === v ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setData({ ...data, amount: v })}
                    >
                        €{v}
                    </button>
                ))}
            </div>

            <input
                type="number"
                className="input input-bordered w-full mb-4"
                value={data.amount}
                onChange={e => setData({ ...data, amount: +e.target.value })}
            />

            <div className="mb-6">
                <label className="label">Frequency</label>
                <select
                    className="select select-bordered w-full"
                    name="frequency"
                    value={data.frequency}
                    onChange={e => setData({ ...data, frequency: e.target.value })}
                >
                    <option value="once">One-time</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            <div className="flex gap-2">
                <button className="btn btn-outline w-1/2" onClick={back}>Back</button>
                <button className="btn btn-primary w-1/2" disabled={!isValid || loading} onClick={next}>{loading ? 'Preparing...' : 'Continue to payment'}</button>
            </div>
        </>
    )
}

export default Step2