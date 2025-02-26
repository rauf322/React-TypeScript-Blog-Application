import { SortingList } from '../Interfaces';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({ posts, setFilter, filter}: SortingList) => {
    const dropdown_menu = (posts.length > 0 ? Object.keys(posts[0]) : []).slice(1,4)
    return (
    <div>
      <MySelect
        DefaultValue='Group_by'
        options={dropdown_menu.map(option => ({
          value: option,
          name: option
        }))}
        onChange={(e: string) => setFilter({...filter, sort: e})}
      />
      <MyInput 
        value={filter.query} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
        placeholder={"Search"}
      />
    </div>
    );
};

export default PostFilter;