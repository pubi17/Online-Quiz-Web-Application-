import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt,
  } from "firebase/database";
  import { useEffect, useState } from "react";
  
  export default function useTutorialList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tutorials, setTutorials] = useState([]);
    const [hasMore, setHasMore] = useState(true);
  
    useEffect(() => {
      async function fetchTutorials() {
        // database related works
        const db = getDatabase();
        const tutorialsRef = ref(db, "tutorials");
        const tutorialQuery = query(
          tutorialsRef,
          orderByKey(),
          startAt("" + page),
          limitToFirst(8)
        );
  
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(tutorialQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setTutorials((prevTutorials) => {
              return [...prevTutorials, ...Object.values(snapshot.val())];
            });
          } else {
            setHasMore(false);
          }
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }
  
      fetchTutorials();
    }, [page]);
  
    return {
      loading,
      error,
      tutorials,
      hasMore,
    };
  }