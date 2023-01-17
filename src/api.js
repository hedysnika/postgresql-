export const createPosts = async ( description, title ) => {
    const response = await fetch("URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        description,
        title,
        }),
      });
    
      return await response.json();
    };


    export const getPosts = async () => {
    const response = await fetch("URL");
    return await response.json();
    };







    async function createPost() {
        await supabase.from("posts").insert([{ title, content }]).single();
        setPosts({ title: "", content: "" });
        fetchPosts();
      }

      
      useEffect(() => {
        fetchPosts();
      }, []);
      async function fetchPosts() {
        const { data } = await supabase.from("posts").select();
        console.log(data);
        setPosts(data);
      }
    