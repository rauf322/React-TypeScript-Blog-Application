import { SortingList } from '../Interfaces';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({ posts, setFilter, filter}: SortingList) => {
    const post_desc = posts.length > 0 ? Object.keys(posts[0]) : [];
    const new_post = post_desc.slice(1, 4);
    console.log(new_post);
    return (
    <div>      
      <MySelect
        DefaultValue='Group_by' 
        options={new_post}
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