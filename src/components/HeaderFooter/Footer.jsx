export default function Footer() {
  return (
    <div className='min-h-[8vh] bg-gray-100 dark:bg-gray-900 grid p-5 text-gray-700 dark:text-white grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 place-items-center items-center '>
      <a
        className='font-bold'
        target='_blank'
        href='https://francociprian.vercel.app/'
        rel='noreferrer'
      >
        francociprian
      </a>
      <div className='grid place-items-center'>
        <p>
          Made by{' '}
          <a
            target='_blank'
            href='https://www.linkedin.com'
            rel='noreferrer'
            className=" font-black text-sky-900 dark:text-cyan-500"
          >
            Franco Ciprian
          </a>
        </p>
      </div>
      <a
        className='font-bold'
        target='_blank'
        href='https://www.github.com/francociprian'
        rel='noreferrer'
      >
        Github
      </a>
    </div>
  )
}
