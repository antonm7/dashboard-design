import { useStore } from "./store"
export default function Index() {
  const store = useStore()

  const changeTheme = () => {
    store.setTheme()
  }

  return (
    <div>
      <button onClick={() => changeTheme()}>clicm me</button>
    </div>
  )
}
