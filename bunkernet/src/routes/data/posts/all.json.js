export async function get() {
    return {
        body : {
            posts: [
                {
                    id: "test_01",
                    title: "Test post",
                    summary: "This post is simply a test",
                    tags: ["one", "two", "three"]
                },
                {
                    id: "test_02",
                    title: "Another test post...",
                    summary: "Just like the other one, we're simply testing the system",
                    tags: ["four", "five", "six"]
                }
            ]
        }
    };
}
