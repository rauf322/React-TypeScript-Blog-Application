
import { useMemo } from "react";
import {Post} from "../Interfaces";

export const usePosts = (posts: Post[], filter: { query: string; sort: string }) => {
  return useMemo(() => {
    const filtered = posts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));

    switch (filter.sort) {
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "body":
        return filtered.sort((a, b) => a.body.localeCompare(b.body));
      case "id":
        return filtered.sort((a, b) => a.id - b.id);
      default:
        return filtered;
    }
  }, [posts, filter]);
};