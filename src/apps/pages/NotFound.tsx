
const NotFound = () => {
    return (
        <main className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-title">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-text sm:text-7xl">Page not found</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-text/50 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-title px-3.5 py-2.5 text-sm font-semibold text-frontground shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
                    <a href="#" className="text-sm font-semibold text-text">Contact support <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </main>
    )
}

export default NotFound;