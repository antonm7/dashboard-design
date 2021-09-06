import { useStore } from "./store"
export default function Index() {
  const store = useStore()

  const changeTheme = () => {
    store.setTheme()
  }

  return (
    <div>
      welcome
      {store.theme}
      <button onClick={() => changeTheme()}>clicm me</button>
    </div>
  )
}
