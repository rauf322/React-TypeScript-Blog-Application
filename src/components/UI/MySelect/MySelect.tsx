import classes from './MySelect.module.css';
interface Post {
    posts: { id: number; title: string; description: string }[]; 
    DefaultValue: string;
    options: string[];
    setPost: (posts: { id: number; title: string; description: string }[]) => void;
}

const MySelect = ({ posts, DefaultValue, options,setPost}: Post) => {
    const sortPosts = (sort: string) => {
        if (sort === "id") {
          // Sorting by numerical ID
          setPost([...posts].sort((a, b) => a.id - b.id));
        } else {
          setPost(
            [...posts].sort((a, b) => {
              const fieldA = a[sort as keyof typeof a];
              const fieldB = b[sort as keyof typeof b];
      
              // Ensure both fields are treated as strings before calling `localeCompare`
              if (typeof fieldA === "string" && typeof fieldB === "string") {
                return fieldA.localeCompare(fieldB);
              }
      
              // Fallback to no change if fields are not strings
              return 0;
            })
          );
        }
      };
    return (
            <select className={classes.mySelect} onChange={event => { sortPosts(event.target.value) }}>
                <option value="" disabled>{DefaultValue}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>)
                )}
            </select>
    );
};

export default MySelect;