
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold  px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Welcome to Craptor Developers</h1>
            <h2>Where software development and hardware meet</h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Latest Technologies | Weekly updates | New gadgets
        </p>
    </div>
  )
}

export default Banner