import { faExchangeAlt, faPiggyBank, faScroll, faUniversity } from "@fortawesome/free-solid-svg-icons"
import ColoredBox from "./components/common/ColoredBox"
import DashboardBox from "./components/common/DashboardBox"
import CreditCard from "./components/CreditCard"
import { useStore } from "./store"
export default function Index() {
  const store = useStore()

  const changeTheme = () => {
    store.setTheme()
  }

  return (
    <div id="index">
      <p className="title">Dashboard</p>
      <div id="header" className="flex">
        <div className="space" style={{paddingLeft:0}}>
          <CreditCard />
        </div>
        <div className="space">
          <DashboardBox amount="1200" para="Transfer via card number" icon={faPiggyBank}/>
        </div>
        <div className="space">
          <DashboardBox amount="1200" para="Transfer via banks" icon={faExchangeAlt}/>
        </div>
        <div className="space">
          <DashboardBox amount="1200" para="Transfer to other banks" icon={faUniversity}/>
        </div>
        <div className="space">
          <DashboardBox amount="1200" para="Deals with other clients" icon={faScroll}/>
        </div>
      </div>
      <div id="body">
        <p id="title" className="title">Analytics Overview</p>
        <div className="flex align-center">
          <ColoredBox color="#EEFEFD" number="112k" title="last 7 days website visits" secTitle="7% more then last week"/>
          <ColoredBox color="#FFEEEF" number="4.3k" title="last 7 days website visits" secTitle="1% more then last week"/>
          <ColoredBox color="#F2E7FF" number="8k" title="last 7 days website visits" secTitle="3%% less then last week"/>
        </div>
      </div>
      <button onClick={() => changeTheme()}>clicm me</button>
    </div>
  )
}
