import { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import currencyapi from '@everapi/currencyapi-js';
import Input from './components/input';
import Button from './components/button';

const client = new currencyapi('cur_live_Fn6nCuF8KefgQWiwdzZ3hPbzRUpDq8FOf1tJkj1Q');

type CurrencyType = {
  code: string;
  name: string;
  flagUrl: string;
};

export default function App() {
  const [fromCurrency, setFromCurrency] = useState<CurrencyType>({
    code: 'US',
    name: 'United States Dollar',
    flagUrl: 'https://www.countryflags.io/us/flat/64.png',
  });
  const [toCurrency, setToCurrency] = useState('EUR');

  const formatDate = (date: Date) => {
    const day = String(date.getDate() - 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  const formattedDate = formatDate(today);

  client.historical({
      date: formattedDate,
  }).then((response: unknown) => {
      console.log(response)
  });



  return (
    <div className='flex flex-col h-screen'>
      <header className='flex p-10'>
        <p className="text-6xl font-bold text-gray-300">
          Money
          <span className="text-outline-hover text-transparent ">Sync</span>
        </p>
      </header>
      <div className='flex lg:flex-row justify-center items-center space-x-10 h-full'>
        <Input />
        <div>
            <FaExchangeAlt 
              className="text-4xl text-[#00ff99] cursor-pointer"
            />
        </div>
        <Input />
      </div>
      <div className='flex justify-center items-center p-20'>
        <Button 
          text='Convert' 
          onClick={() => console.log('Convert')} 
        />
      </div>
    </div>
  )
}
