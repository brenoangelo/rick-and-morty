import rickAndMortyLogo from '../assets/rick-and-morty-logo.png'

export function LogoLoading() {
  return (
    <img
      src={rickAndMortyLogo}
      className='max-w-lg w-full animate-pulse'
    />
  )
}