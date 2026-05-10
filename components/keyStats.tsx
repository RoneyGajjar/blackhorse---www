const KeyStats = () => {
    const myRealStats = [
        { id: 1, value: '250', suffix: 'M+', label: 'Assets Managed' },
        { id: 2, value: '15', suffix: 'Yrs', label: 'Firm Experience' },
        { id: 3, value: '95', suffix: '%', label: 'Client Retention Rate' },
        { id: 4, value: '10', suffix: '%', label: 'New Client Acquisition Rate' }

    ];
    return (
        <section className="w-full bg-stone-900 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-stone-700">
                    {myRealStats.map((stat: any) => (
                        <div
                            key={stat.id}
                            className="flex-1 w-full flex flex-col items-center justify-center py-6 md:py-0"
                        >
                            <div className="flex items-baseline">
                                <span className="text-3xl md:text-4xl font-serif font-bold text-stone-50 tracking-tight">
                                    {stat.value}
                                </span>
                                {stat.suffix && (
                                    <span className="text-lg font-medium text-[#B5C1A9] ml-1">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xs md:text-sm font-medium tracking-wider text-stone-400 uppercase mt-2">
                                {stat.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KeyStats;