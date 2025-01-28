import { countries } from '../const/countries';

export default function Input() {
  return (
    <div className='flex items-center justify-between border-2 border-gray-300 p-2 rounded-lg'>
        <select>
        {countries.map((country) => (
            <option 
                key={country.code}
                className='flex items-center text-gray-800'
            >
            {country.name}
            </option>
        ))}
        </select>
        <input 
        className='text-3xl w-60 text-right'
        type="number" 
        placeholder="0" 
        />
    </div>
  )
}
