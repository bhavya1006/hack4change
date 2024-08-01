function UploadSection() {
    return (
        <>
            <div className="flex flex-col items-center mt-16">
                <button className="bg-purple-600 text-white font-bold py-3 px-6 rounded mb-6 hover:bg-purple-700">
                    + Choose a file
                </button>
                <button className="bg-gray-600 text-white font-bold py-3 px-6 rounded hover:bg-gray-700">
                    Convert Text To Speech
                </button>
            </div>
        </>
    )

}

export default UploadSection;