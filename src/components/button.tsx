type ButtonProps = {
    text: string;
    onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
        className='bg-[#00ff99] text-primary p-5 rounded-lg text-gray-800 text-4xl font-bold cursor-pointer hover:bg-[#00cc88] transition-all duration-300'
        onClick={onClick}
    >
        {text}
    </button>
  )
}