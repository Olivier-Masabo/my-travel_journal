import image from '../../public/globally.png'
function Header(){


    return(
        <>
        <div className='flex items-center justify-center gap-3 bg-red-400 p-3  w-[45%] mx-auto'>

        <img className='w-10' src={image} alt="global image" />
        <h2 className='text-white text-lg'>My travel journal</h2>
        </div>
        </>
    )

}

export default Header;