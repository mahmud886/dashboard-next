

const ContentSearch = () => {
  return (
    <div>
        <form className='my-12'>
            <div className="max-w-xl">
                <div className="flex rounded-md overflow-hidden w-[100%] md:w-full">
                    <input type="text" className="w-full rounded-md rounded-r-none focus:outline-0 px-4" />
                    <button className="bg-[#74C169] text-white px-12 text-lg font-archivo font-semibold py-4 rounded-r-md">
                        Search
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContentSearch