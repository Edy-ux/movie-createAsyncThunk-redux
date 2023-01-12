import { Dispatch, SetStateAction, FC } from "react";

interface SearchBoxProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBox: FC<SearchBoxProps> = (props) => {
  const { setSearchTerm } = props;

  return (
    <div className=" flex w-full m-auto justify-center md:justify-start">
      <input
        onChange={(e) => setSearchTerm(e.target.value.trim().toLocaleLowerCase())}
        type="search"
        className="block w-full p-3 max-w-sm text-left focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;