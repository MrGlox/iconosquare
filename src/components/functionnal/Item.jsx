const Item = ({}) => (
  <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
    <div className="flex items-center border-b border-gray-200 pb-6">
      <img
        src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png"
        alt
        className="w-12 h-12 rounded-full"
      />
      <div className="flex items-start justify-between w-full">
        <div className="pl-3 w-full">
          <p className="text-xl font-medium leading-5 text-gray-800">
            Leanne Graham
          </p>
          <p className="text-sm leading-normal pt-2 text-gray-500">Bret</p>
        </div>
        <svg
          width={28}
          height={28}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
            stroke="#2C3E50"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Item;
