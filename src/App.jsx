import './App.css'
import './fonts/ralewayFonts.css'
import profile from './assets/profile.svg'
import mainImage from './assets/main-image.svg'

function App() {

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-[405.07px] w-full min-h-[462.52px] bg-white rounded-[19.47px] px-[14.6px] pt-[18.5px] pb-[22.4px] flex flex-col gap-3'>
        <div className='flex items-center gap-[7.79px]'>
          <img 
            className='w-[39.92px] h-[39.92px] rounded-full'
            src={profile} 
            alt="profile picture" 
          />
          <h1 className='text-[19.47px] font-bold text-[#242424]'>Julia Maria</h1>
        </div>
        <img
          className='w-full h-[282.38px] object-cover rounded-[9.74px]' 
          src={mainImage} 
          alt="" 
        />
        <div className='flex  flex-col gap-[17.53px]'>
          <div className='flex justify-between w-full items-center'>
            <div className='flex gap-[23.37px] items-center'>
              <div className='flex items-center justify-center'>
                <svg class="akar-icons-heart" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.20233 4.15381C5.1778 4.15381 2.7251 6.58132 2.7251 9.57627C2.7251 11.9939 3.68361 17.7319 13.1187 23.5323C13.2877 23.6351 13.4817 23.6895 13.6796 23.6895C13.8774 23.6895 14.0714 23.6351 14.2404 23.5323C23.6755 17.7319 24.634 11.9939 24.634 9.57627C24.634 6.58132 22.1813 4.15381 19.1568 4.15381C16.1323 4.15381 13.6796 7.44015 13.6796 7.44015C13.6796 7.44015 11.2269 4.15381 8.20233 4.15381Z" stroke="#7A7A7A" stroke-width="0.97373" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex items-center justify center'>
                <svg class="group" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5306 17.681C17.6615 17.681 19.7275 17.6809 21.0103 16.3971C22.2942 15.1143 22.2942 13.0483 22.2942 8.91738C22.2942 4.78645 22.2942 2.72044 21.0103 1.43767C19.7275 0.153808 17.6615 0.153809 13.5306 0.153809H9.14882C5.0179 0.153809 2.95188 0.153808 1.66912 1.43767C0.385254 2.72044 0.385254 4.78645 0.385254 8.91738C0.385254 13.0483 0.385254 15.1143 1.66912 16.3971C2.38444 17.1135 3.34296 17.4301 4.76704 17.5692" stroke="#7A7A7A" stroke-width="0.97373" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.5309 17.681C12.1769 17.681 10.6849 18.2287 9.32325 18.9353C7.13455 20.0713 6.0402 20.6398 5.50124 20.2772C4.96228 19.9157 5.06416 18.7929 5.269 16.5483L5.31501 16.0378" stroke="#7A7A7A" stroke-width="0.97373" stroke-linecap="round" />
                </svg>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <svg class="heroicons-solid-save" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4391 15.9539C11.3044 15.8144 11.1432 15.7031 10.965 15.6266C10.7868 15.55 10.5952 15.5097 10.4012 15.508C10.2073 15.5063 10.015 15.5433 9.83547 15.6167C9.65596 15.6902 9.49289 15.7986 9.35575 15.9358C9.21861 16.0729 9.11015 16.236 9.03671 16.4155C8.96327 16.595 8.92632 16.7873 8.928 16.9813C8.92969 17.1752 8.96998 17.3669 9.04653 17.5451C9.12308 17.7233 9.23435 17.8844 9.37385 18.0192L13.7556 22.4009C14.0295 22.6748 14.401 22.8286 14.7883 22.8286C15.1756 22.8286 15.547 22.6748 15.8209 22.4009L20.2027 18.0192C20.4688 17.7437 20.616 17.3747 20.6127 16.9918C20.6093 16.6088 20.4557 16.2425 20.1849 15.9717C19.9141 15.7009 19.5478 15.5473 19.1648 15.5439C18.7818 15.5406 18.4129 15.6878 18.1374 15.9539L16.2489 17.8424V9.68354H23.5518C24.3266 9.68354 25.0696 9.99131 25.6174 10.5391C26.1653 11.087 26.473 11.83 26.473 12.6047V22.8289C26.473 23.6036 26.1653 24.3467 25.6174 24.8945C25.0696 25.4423 24.3266 25.7501 23.5518 25.7501H6.02471C5.24996 25.7501 4.50694 25.4423 3.95911 24.8945C3.41128 24.3467 3.10352 23.6036 3.10352 22.8289V12.6047C3.10352 11.83 3.41128 11.087 3.95911 10.5391C4.50694 9.99131 5.24996 9.68354 6.02471 9.68354H13.3277V17.8424L11.4391 15.9539ZM13.3277 6.76235C13.3277 6.37498 13.4816 6.00347 13.7555 5.72956C14.0294 5.45564 14.4009 5.30176 14.7883 5.30176C15.1757 5.30176 15.5472 5.45564 15.8211 5.72956C16.095 6.00347 16.2489 6.37498 16.2489 6.76235V9.68354H13.3277V6.76235Z" fill="#7A7A7A" />
              </svg>
            </div>
          </div>
          <p className='text-[13px]'>The world is beautiful and so are you who doesn’t like to travel this far to the mountains and           read more</p>
        </div>
      </div>
    </div>
  )
}

export default App
