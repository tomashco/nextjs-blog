import Image from 'next/image'

interface ProfilePictureProps {
  src: string
  alt: string
}

const ProfilePicture = ({ src, alt }: ProfilePictureProps) => (
  <Image src={src} fill style={{ objectFit: 'contain' }} alt={alt} />
)

export default ProfilePicture
