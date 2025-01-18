import { useEffect, useState } from 'react';
import './App.css'
import SlectUser from './Components/SelectUser'
import PieChart from './Components/PieChart';
import { calls } from './data/calls';
import { emails } from './data/emails';
import { accounts } from './data/accounts';
function App() {
  const [selected, setSelected] = useState(null);
  const [accountsData, setAccounts] = useState([]);
  const [callsData, setCalls] = useState([]);
  const [emailsData, setEmails] = useState([]);


  const selectedTerritoryArray = accountsData.filter((item) => item?.territory === selected?.territory)
  const accountsWithCallsAndEmail = selectedTerritoryArray.map((acc) => {
    const calls = callsData.filter((call) => call.accountId === acc?.id);
    const emails = emailsData.filter((email) => email?.accountId === acc?.id);
    return {
      ...acc,
      calls: calls,
      emails: emails
    }
  })
  
  useEffect(() => {
    setAccounts(accounts);
    setCalls(calls);
    setEmails(emails);
  }, [])
  return (
    <div className='h-screen'>
      <header className='flex  justify-center items-center bg-blue-500 h-24'>
        <div className='w-72'>
          <SlectUser selected={selected} setSelected={setSelected} />
        </div>
      </header>
      <main>
        {!selected ? (
          <>
            <div className='flex  justify-center items-center text-center my-2 shadow-lg bg-blue-100 h-12'>
              <h1 className='text-xl text-blue-600 font-bold'>Please Select a user to view Analytics</h1>
            </div>
            <div className='flex justify-center items-center text-center mt-1 shadow-lg bg-blue-100 h-12'>
              <h1 className='text-xl text-blue-600 font-bold'>Please Select a user to View Account Detail</h1>
            </div>
          </>
        ) : (
        <>

          <div className='p-2'>
            <PieChart data={accountsWithCallsAndEmail} />
          </div>
        </>
      )}
      </main>
    </div>
  )
}

export default App
