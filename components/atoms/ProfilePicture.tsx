import Image from 'next/image'

interface ProfilePictureProps {
  src: string
  alt: string
  home?: boolean
}

const ProfilePicture = ({ src, alt, home }: ProfilePictureProps) => (
  <div
    style={{
      height: home ? '20rem' : '10rem',
      width: home ? '15rem' : '7rem',
      position: 'relative',
    }}
  >
    <Image src={src} fill style={{ objectFit: 'contain' }} alt={alt} />
  </div>
)

export default ProfilePicture
