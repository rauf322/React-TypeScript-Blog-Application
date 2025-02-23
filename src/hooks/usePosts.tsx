
import { useMemo } from "react";
import {Post} from "../Interfaces";

export const usePosts = (posts: Post[], filter: { query: string; sort: string }) => {
  return useMemo(() => {
    const filtered = posts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));

    switch (filter.sort) {
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "description":
        return filtered.sort((a, b) => a.description.localeCompare(b.description));
      case "id":
        return filtered.sort((a, b) => a.id - b.id);
      default:
        return filtered;
    }
  }, [posts, filter]);
};