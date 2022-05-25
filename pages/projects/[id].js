import { useRouter } from 'next/router'

export default function Project() {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>Project 1</div>
  )
}
