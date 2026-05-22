import { SearchField } from "@heroui/react";
import Categories from "./Categories";


const IdeaFilters = () => {
    return (
        <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
            <Categories />

            <SearchField name="search">
                <SearchField.Group className="bg-[#ffffff0f] border border-[#ffffff1a] text-[#e8eaf0]">
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default IdeaFilters;